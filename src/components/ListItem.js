import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions';
import NavigationService from '../navigation/NavigationService.js';

class ListItem extends Component {

  renderDetails() {
    this.props.selectPkg(this.props.item.lname);
    return NavigationService.navigate('OrderDet');
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


export default connect(null, actions)(ListItem);
