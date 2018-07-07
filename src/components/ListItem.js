import React, { Component } from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { CardItem } from './common';
import NavigationService from '../navigation/NavigationService.js';

export default class ListItem extends Component {


  renderDetails() {
    return NavigationService.navigate('OrderDet', this.props.item.Packages);
  }

  render() {
    const { titleStyle } = styles;
    const { id } = this.props.item;

    return (
      <TouchableOpacity onPress={() => this.renderDetails()}>
        <View>
          <CardItem>
            <Text style={titleStyle}>{id}</Text>
          </CardItem>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 16,
    paddingLeft: 15
  }
};
