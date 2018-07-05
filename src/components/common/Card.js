import React from 'react';
import { View, Platform } from 'react-native';

const Card = (props) => {
  const { cardStyle } = styles;
  return (
    <View style={cardStyle}>{props.children}</View>
  );
};

const styles = {
  cardStyle: {
    borderRadius: 2,
    borderColor: '#000',
    ...Platform.select( {
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5
      }
    }),
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  }
};

export { Card };
