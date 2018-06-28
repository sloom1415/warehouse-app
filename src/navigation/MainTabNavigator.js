import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { INCOMING_ORDERS_API, OUTGOING_ORDERS_API, ITEMS_API, setCurrentApi } from '../actions/urls';

import TabBarIcon from '../components/TabBarIcon';
import IncomingScreen from '../screens/IncomingScreen';
import BarcodeScanScreen from '../screens/BarcodeScanScreen';
import OutgoingScreen from '../screens/OutgoingScreen';
import ItemsScreen from '../screens/ItemsScreen';
import OrderDetails from '../components/OrderDetails';

const defaultNavigationOptions = {
    headerTintColor: '#515151',
    headerTitleStyle: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 20,
    flex: 1
  },
};

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 200,
      useNativeDriver: true,
    }
  }
}

const IncomingStack = createStackNavigator({
  Incoming: {
    screen: IncomingScreen,
  },
  OrderDet: {
    screen: OrderDetails
  }

},
{
  navigationOptions: defaultNavigationOptions,
  transitionConfig
}
);

IncomingStack.navigationOptions = {
  tabBarLabel: 'Incoming',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type='material-community'
      focused={focused}
      name='package-down'
    />
  ),
};

const BarcodeScanStack = createStackNavigator({
  BarcodeScan: BarcodeScanScreen,
},
{
  navigationOptions: {
    header: null
  }
});

BarcodeScanStack.navigationOptions = {
  tabBarLabel: 'Barcode Scanner',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      type='ionicon'
      name={Platform.OS === 'ios' ? `ios-barcode${focused ? '' : '-outline'}` : 'md-barcode'}
    />
  ),
};

const OutgoingStack = createStackNavigator({
  Outgoing: {
    screen: OutgoingScreen,
  }
},
{
  navigationOptions: defaultNavigationOptions
}
);

OutgoingStack.navigationOptions = {
  tabBarLabel: 'Outgoing',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type = 'material-community'
      focused={focused}
      name='package-up'
    />
  ),
};

const ItemsStack = createStackNavigator({
  Items: {
    screen: ItemsScreen,
  },
  OrderDet: {
    screen: OrderDetails
  }

},
{
  navigationOptions: defaultNavigationOptions,
  transitionConfig
}
);

ItemsStack.navigationOptions = {
  tabBarLabel: 'Items',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type='ionicon'
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-list${focused ? '' : '-outline'}` : 'md-list'}
    />
  ),
};

export default createBottomTabNavigator({
  Incoming: {
    screen: IncomingStack,
    navigationOptions: {
      tabBarOnPress: ({navigation, defaultHandler}) => {
        setCurrentApi(INCOMING_ORDERS_API)
        defaultHandler(navigation.index);
      }
    }
  },
  BarcodeScanStack,
  Outgoing:  {
    screen: OutgoingStack,
    navigationOptions: {
      tabBarOnPress: ({navigation, defaultHandler}) => {
        setCurrentApi(OUTGOING_ORDERS_API);
        defaultHandler(navigation.index);
      }
    }
  },
  Items:  {
    screen: ItemsStack,
    navigationOptions: {
      tabBarOnPress: ({navigation, defaultHandler}) => {
        setCurrentApi(ITEMS_API);
        defaultHandler(navigation.index);
      }
    }
  }
});
