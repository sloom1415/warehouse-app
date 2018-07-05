import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Expo, { BarCodeScanner, Permissions } from 'expo';
import { connect } from 'react-redux';
import { Confirm, Spinner } from '../components/common';
import InputField from '../components/InputField';
import { INCOMING_ORDER, OUTGOING_ORDER } from  '../actions/names';
import {INCOMING_ORDERS_API, OUTGOING_ORDERS_API, setCurrentApi} from '../actions/urls';
import * as actions from '../actions';


class BarcodeScanScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    visible: false,
    data: '',
    readSuccess: false,
    loading: false,
    inputValue: '',
    buttonDisabled: true,
    iconColor: '#dfdfdf',
  }
  
  componentDidUpdate() {
    const { match, inOrders, outOrders, matching } = this.props
    if(match.loading){
      if (inOrders.loading == false && outOrders.loading == false) {
        matching(inOrders.items,outOrders.items, this.state.data);
      }
    }
  }
  
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }
    
    onPressCheck() {
      const { type, data } = this.props.match 
      var checkData = data
      checkData.isChecked = true;
      console.log(checkData);
      this.props.fetchPut(type, data.pk, checkData)
      this.setState({ visible: false, readSuccess: false })
    }
    
    onPressCancel() {
      this.setState({ visible: false, readSuccess: false });
    }
    
    onPressSubmit = () => {
      this.requestData();
      this.props.matchBegin();

      this.setState({ data: this.state.inputValue, visible: true })
    }
    
    onChangeInput(inputValue) {
      if(inputValue) 
        return (this.setState({buttonDisabled: false, inputValue, iconColor: '#2196F3' }));
      return (this.setState({buttonDisabled: true, inputValue, iconColor: '#dfdfdf' }));
    }

    renderConfirm = () => {
      return (
        <Confirm
          loading={this.props.match.loading}
          visible={this.state.visible}
          title1='Check'
          disabled1={this.props.match.error}
          onPress1={this.onPressCheck.bind(this)}
          title2='Cancel'
          onPress2={this.onPressCancel.bind(this)}
        >
          {this.props.match.message}
        </ Confirm>
      );
    }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <Spinner />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1} } behavior="padding" enabled keyboardVerticalOffset={23}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
          {this.renderConfirm()}
          <InputField 
            placeholder='Enter code manually'
            onPressSubmit={this.onPressSubmit.bind(this)} 
            loading={this.props.match.loading}
            buttonDisabled={this.state.buttonDisabled}
            iconColor={this.state.iconColor}
            onChangeText={this.onChangeInput.bind(this)}
            onEndEditing={this.onPressSubmit.bind(this)}
            />
        </View>
      );
    }
  }
 
  _handleBarCodeRead = ({ type, data }) => {
    if(this.state.readSuccess) return;
      try {
        const { sound: soundObject, status } = Expo.Audio.Sound.create(
          require('../assets/sounds/beep-07.wav'),
          { shouldPlay: true }
        );
      } catch (error) {
      }

    this.setState({ visible: true, loading: true, data, readSuccess: true});
    this.requestData();
    this.props.matchBegin();
  }

  requestData(){
    setCurrentApi(INCOMING_ORDERS_API);
    this.props.fetchOrders(INCOMING_ORDER);
    setCurrentApi(OUTGOING_ORDERS_API);
    this.props.fetchOrders(OUTGOING_ORDER);
  }
}


const mapStateToProps = state => {
  return {
    inOrders: state.incoming, 
    outOrders: state.outgoing,
    match: state.match,
    putCheck: state.putCheck
  }
}

export default connect(mapStateToProps,actions)(BarcodeScanScreen)