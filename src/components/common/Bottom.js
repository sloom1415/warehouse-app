import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const Bottom = ({ navigation }) => {
  const { nestedViewStyle, viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <View style={nestedViewStyle}>
          <Text style={textStyle}>Incoming</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('BarcodeSacanScreen')}>
        <View style={nestedViewStyle}>
          <Text style={textStyle}>Scan</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <View style={nestedViewStyle}>
          <Text style={textStyle}>Outgoing</Text>
        </View>
      </TouchableOpacity>
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
  nestedViewStyle: {
    flex: 1,
  },
  textStyle: {
    paddingTop: 10,
    paddingRight: 30,
    paddingLeft: 30,
    fontSize: 14,
    flex: 1
  }
};

export { Bottom };
