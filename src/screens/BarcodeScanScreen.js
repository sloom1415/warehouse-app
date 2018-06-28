import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Expo, { BarCodeScanner, Permissions } from 'expo';
import { Confirm, Spinner } from '../components/common';
import InputField from '../components/InputField';

export default class BarcodeScanScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    visible: false,
    data: '',
    readSuccess: false,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }
    onPressCheckIn() {
      this.setState({ visible: false, readSuccess: false });
    }
    onPressCancel() {
      this.setState({ visible: false, readSuccess: false });
    }
    renderConfirm() {
      return (
        <Confirm
          visible={this.state.visible}
          title1='Check in'
          onPress1={this.onPressCheckIn.bind(this)}
          title2='Cancel'
          onPress2={this.onPressCancel.bind(this)}
        >
          Check in this package?{'\n'}
          {this.state.data}
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
          <InputField placeholder='Enter code manually' />
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
        // Your sound is playing!
      } catch (error) {
        // An error occurred!
      }
    this.setState({ visible: true, data: data, readSuccess: true});
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }
}


