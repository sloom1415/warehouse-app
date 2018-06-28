import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerTitle }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerTitle}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
