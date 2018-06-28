import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import ReduxThunk from 'redux-thunk';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import MainTabNavigator from './MainTabNavigator';
import NavigationService from './NavigationService';

export default class AppNavigator extends React.Component {
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppNav ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);}} />
        </View>
      </Provider>
    );
  }
}

const AppNav = createSwitchNavigator({
  Main: MainTabNavigator,
});
