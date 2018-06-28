import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem } from './common';

class OrderDetails extends Component {

  renderDetails() {
    return (
      <Card>
        <CardItem>
          <Text>{this.props.order.id}</Text>
        </CardItem>
      </Card>
    );
  }
  render() {
    return (
      <View>
        {this.renderDetails()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return ({ order: state.selectedPkgId, orders: state.incoming.orders });
};

export default connect(mapStateToProps)(OrderDetails);
