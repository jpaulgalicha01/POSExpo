import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from '../Screen';
import Tools from '../Tools';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false,statusBarColor:Tools.Colors.Button}} initialRouteName={Tools.Routes.LOGIN}>
        <Stack.Screen name={Tools.Routes.LOGIN} component={Screen.Login} />
        <Stack.Screen name={Tools.Routes.HOME_DRAWER_TAB} component={DrawerNavigation} />
        <Stack.Group screenOptions={{headerShown:true}}>
          <Stack.Screen name={Tools.Routes.DeviceList} component={Screen.DeviceList}  />
        </Stack.Group>
        <Stack.Screen name={Tools.Routes.CASHIER} component={Screen.Cashier} />
      </Stack.Navigator>
  );
}
