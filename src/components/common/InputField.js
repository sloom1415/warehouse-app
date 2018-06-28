import React from 'react';
import { Text, View, TextInput } from 'react-native';

const InputField = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { viewStyle, labelStyle, inputStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 30,
    flex: 2
  }
};

export { InputField };
