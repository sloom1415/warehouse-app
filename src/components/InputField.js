import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Input, Button } from 'react-native-elements';



export default class InputField extends Component {
    render () {
        const { codeInputContainerStyle, inputViewStyle, inputFieldStyle, buttonContainerStyle } = styles;
        return(
            <KeyboardAvoidingView style={codeInputContainerStyle} behavior="padding" enabled>
                <Input 
                    placeholder={this.props.placeholder}
                    containerStyle={inputViewStyle}
                    inputContainerStyle={inputFieldStyle}
                    autoCorrect={false}
                    value={this.props.inputValue}
                    onChangeText={this.props.onChangeText}
                    errorMessage={this.props.errorMessage}
                    onEndEditing={this.props.onEndEditing}
                    keyboardType='numeric'
                />
                <Button 
                    title=''
                    icon={{name: 'md-checkmark-circle', type:'ionicon', color: this.props.iconColor, size: 40}}
                    containerStyle={buttonContainerStyle} 
                    disabled={this.props.buttonDisabled}
                    loading={this.props.loading}
                    clear
                    onPress={this.props.onPressSubmit}
                />
            </KeyboardAvoidingView>
        );
    }
}

const styles = {
    codeInputContainerStyle: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      paddingVertical: 0,
  
    },
    inputViewStyle: {
      flex:6,
      marginBottom: 5,
      paddingLeft: 8,
      paddingRight: 0
  
    },
    inputFieldStyle: {
      backgroundColor: '#fff',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#ddd',
      ...Platform.select( {
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        },
        android: {
          elevation: 3
        }
      }),
    },
    buttonContainerStyle: {
      flex: 1,
      marginBottom: 5
    }
  }