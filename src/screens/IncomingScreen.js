import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import List from '../components/List';
import { INCOMING_ORDER, INCOMING_PKGS } from  '../actions/names';
import { INCOMING_PKGS_API, setCurrentApi } from '../actions/urls';
import { fetchOrders } from '../actions';

class IncomingScreen extends React.Component {
  static navigationOptions = {
    title: 'Incoming orders',
  };
  
  componentDidlMount() {
    setCurrentApi(INCOMING_PKGS_API)
    this.props.dispatch(fetchOrders(INCOMING_PKGS));
  }
  
  render () {
    return (
      <View style={{ flex: 1 }}>
        <List 
          listType={INCOMING_ORDER} 
          data={this.props.orders}
          loading={this.props.loading}
          error={this.props.error}
          {...this.props}
       />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { orders: state.incoming.orders, loading: state.incoming.loading, error: state.incoming.error };
};

export default connect(mapStateToProps)(IncomingScreen);
