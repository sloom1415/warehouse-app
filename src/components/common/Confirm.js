import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { Spinner } from './'

const Confirm = ({ disabled1 ,loading, visible, children, onPress1, onPress2, title1, title2, buttonColor2 = '#f44242' }) => {
  
  const { modalStyle, containerStyle, buttonStyle, textStyle, buttonContainerStyle, disabledButtonStyle} = styles;
  
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={() => {}}
    >
     <View style={modalStyle}>
        <View style={containerStyle}>
          {loading ? (
            <Spinner />
          ) : (
           <View style={{ flex:1 }}>
              <Text style={textStyle}>{children}</Text>
             <View style={{ flex: 2, flexDirection: 'column' }}>
                <Button 
                  containerStyle={buttonContainerStyle} 
                  buttonStyle={buttonStyle} 
                  title={title1} onPress={onPress1} 
                  disabled={disabled1}
                  disabledStyle={disabledButtonStyle}
                  />
                <Button 
                  containerStyle={buttonContainerStyle} 
                  buttonStyle={[buttonStyle, {backgroundColor: buttonColor2 }]} 
                  title={title2} 
                  onPress={onPress2} 
                />
              </View>
            </View>
          )}
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textStyle: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 25,
    marginTop: 10,
  },
  buttonContainerStyle: {
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50
  },
  disabledButtonStyle: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50
  }
};
export { Confirm };
