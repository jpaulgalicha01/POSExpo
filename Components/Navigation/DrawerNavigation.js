import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen from '../Screen';
import Tools from '../Tools';
import { Image } from 'react-native';
import CustomDrawer from '../Screen/includes/CustomDrawer';
import StackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator 
    screenOptions={{
        headerShown:false,
        drawerPosition: 'right',
        drawerActiveTintColor: Tools.Colors.Green,
        drawerContentStyle: {borderRadius:20},
        drawerLabelStyle: {marginLeft: -20,fontSize:15,marginVertical:5}
    }}
     drawerContent={prop => <CustomDrawer {...prop}/>}
    >
        
        <Drawer.Screen name={Tools.Routes.HOME} component={Screen.Home} 
        options={{
            
            drawerIcon: ({size}) => (
                <Image
                source={Tools.Icons.Home}
                style={{ 
                height: size, 
                width: size,
                }}
                />
            )
        }} />
        <Drawer.Screen name={Tools.Routes.SETTINGS} component={Screen.Settings} 
        options={{
            
            drawerIcon: ({size}) => (
                <Image
                source={Tools.Icons.Setting}
                style={{ 
                height: size, 
                width: size,
                }}
                />
            )
        }} />
        <Drawer.Screen name="Logout" component={StackNavigation} 
        options={{
            
            drawerIcon: ({size}) => (
                <Image
                source={Tools.Icons.Exit}
                style={{ 
                height: size, 
                width: size,
                }}
                />
            )
        }} />
    </Drawer.Navigator>

  );
}
