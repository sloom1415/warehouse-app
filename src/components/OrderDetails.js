import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, CardItem } from './common';

class OrderDetails extends Component {
  renderItem({item}) {
    const details = showProps (item);
    return (
      <Card>
          <CardItem>
            <Text style={styles.detailsStyle}>{details}</Text>
          </CardItem>
        </Card>
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.navigation.state.params}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.pk.toString()}
        />
      </View>
    );
  }
}

function showProps(obj) {
  var result = '';
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += i + ': ' + obj[i] + '\n';
    }
  }
  return result;
}

const styles = {
  detailsStyle: {
    padding: 5,
    fontSize: 15
  }
}

export default OrderDetails;
