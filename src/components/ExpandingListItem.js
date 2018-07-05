import React, { Component } from 'react';
import { Text, TouchableOpacity, View, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions';

//for android we added NativeModules and added these three lines
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ExpandingListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.configureNext({
      duration: 100,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: { type: LayoutAnimation.Types.easeInEaseOut },
    });
  }

  renderDescription() {
    const { expanded, item } = this.props;
    if (expanded) {
      return (
        <View style={styles.descriptionStyle}>
          <Text style={styles.descriptionTextStyle}>{item.id}</Text>
        </View>
      );
    }
  }

  renderExpanding() {
    if (this.props.expanded) {
      return this.props.deselect(this.props.item.id);
    }
    return this.props.select(this.props.item.id);
  }

  render() {
    const { titleStyle } = styles;
    const { name } = this.props.item;

    return (
      <TouchableOpacity onPress={() => this.renderExpanding()}>
        <View>
          <CardItem>
            <Text style={titleStyle}>{name}</Text>
          </CardItem>
          {this.renderDescription()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 16,
    paddingLeft: 15
  },
  descriptionStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  descriptionTextStyle: {
    fontSize: 14,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const isId = state.selectedId.id === ownProps.item.id;
  if (isId) {
    return { expanded: state.selectedId.expand };
  }
  return { expanded: false };
};

export default connect(mapStateToProps, actions)(ExpandingListItem);
