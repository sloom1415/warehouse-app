import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import List from '../components/List';
import { OUTGOING_ORDER, OUTGOING_PKGS } from  '../actions/names';
import { OUTGOING_PKGS_API, setCurrentApi } from '../actions/urls';
import { fetchOrders } from '../actions';

class OutgoingScreen extends React.Component {
  static navigationOptions = {
    title: 'Outgoing orders',
  };

  componentDidMount() {
    setCurrentApi(OUTGOING_PKGS_API)
    this.props.dispatch(fetchOrders(OUTGOING_PKGS));
  }

  render() {
    return (
        <List 
          listType={OUTGOING_ORDER}
          data={this.props.orders}
          loading={this.props.loading}
          error={this.props.error}
          {...this.props}
         />
    );
  }
}

const mapStateToProps = state => {
  return { orders: state.outgoing.orders, loading: state.outgoing.loading, error: state.outgoing.error };
};

export default connect(mapStateToProps)(OutgoingScreen);
