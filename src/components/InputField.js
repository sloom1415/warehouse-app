import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Input, Button } from 'react-native-elements';



export default class InputField extends Component {
    state = {
        inputValue: '',
        inputErrorMessage: null,
        manuallyButtonLoading: false,
        buttonDisabled: true,
        iconColor: '#dfdfdf'
    }
    onChangeInput(inputValue) {
        if(inputValue) 
          return (this.setState({buttonDisabled: false, inputValue, iconColor: '#2196F3', inputErrorMessage: null}));
        return (this.setState({buttonDisabled: true, inputValue, iconColor: '#dfdfdf', inputErrorMessage: null}));
      }
      onPressButton() {
        this.setState({ inputErrorMessage: 'Sorry wrong code' })
      }
    render () {
        const { codeInputContainerStyle, inputViewStyle, inputFieldStyle, buttonContainerStyle } = styles;
        return(
            <KeyboardAvoidingView style={codeInputContainerStyle} behavior="padding" enabled>
                <Input 
                    placeholder={this.props.placeholder}
                    containerStyle={inputViewStyle}
                    inputContainerStyle={inputFieldStyle}
                    autoCorrect={false}
                    value={this.state.inputValue}
                    onChangeText={this.onChangeInput.bind(this)}
                    errorMessage={this.state.inputErrorMessage}
                    keyboardType='numeric'
                />
                <Button 
                    title=''
                    icon={{name: 'md-checkmark-circle', type:'ionicon', color: this.state.iconColor, size: 40}}
                    containerStyle={buttonContainerStyle} 
                    disabled={this.state.buttonDisabled}
                    loading={this.state.manuallyButtonLoading}
                    clear
                    onPress={this.onPressButton.bind(this)}
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
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 10,
    },
    buttonContainerStyle: {
      flex: 1,
      marginBottom: 5
    }
  }