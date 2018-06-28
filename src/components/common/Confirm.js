import React from 'react';
import { Text, View, Modal, Button } from 'react-native';

const Confirm = ({ visible, children, onPress1, onPress2, title1, title2, buttonColor1, buttonColor2 = '#f44242' }) => {
  const { modalStyle, containerStyle, buttonStyle, textStyle } = styles;
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={() => {}}
    >
     <View style={modalStyle}>
        <View style={containerStyle}>
          <Text style={textStyle}>{children}</Text>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={buttonStyle}>
            <Button title={title1} onPress={onPress1} color={buttonColor1} />
          </View>
          <View style={buttonStyle}>
            <Button title={title2} onPress={onPress2} color={buttonColor2} />
          </View>
      </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.60)'
  },
  containerStyle: {
    backgroundColor: '#FFF',
    height: 200,
    width: '75%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textStyle: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 40
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  }
};
export { Confirm };
