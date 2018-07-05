import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import List from '../components/List';
import { INCOMING_ORDER } from  '../actions/names';

class IncomingScreen extends React.Component {
  static navigationOptions = {
    title: 'Incoming orders',
  };
  
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
  return { orders: state.incoming.items, loading: state.incoming.loading, error: state.incoming.error };
};

export default connect(mapStateToProps)(IncomingScreen);
