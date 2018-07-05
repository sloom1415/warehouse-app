import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import List from '../components/List';
import { OUTGOING_ORDER } from  '../actions/names';

class OutgoingScreen extends React.Component {
  static navigationOptions = {
    title: 'Outgoing orders',
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <List 
          listType={OUTGOING_ORDER}
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
  return { orders: state.outgoing.items, loading: state.outgoing.loading, error: state.outgoing.error };
};

export default connect(mapStateToProps)(OutgoingScreen);
