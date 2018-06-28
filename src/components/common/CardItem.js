import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
  const { cardItemStyle } = styles;
  return (
    <View style={cardItemStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  cardItemStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardItem };
