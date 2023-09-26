import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

const Drawer = createDrawerNavigator();

const DrawerDemo = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Sign Up" component={SignUpScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerDemo;
