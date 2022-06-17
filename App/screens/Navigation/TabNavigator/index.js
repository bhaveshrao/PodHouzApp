import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import {  createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';


import HomeScreen from '../../HomeScreen';
import OTPScreen from '../../OTPScreen';
import LoginScreen from '../../LoginScreen';

const TabNavigator = createAppContainer(createBottomTabNavigator({
    
    Login: {
        screen : LoginScreen,
        tabBarOptions :{
            visualViewport : false
        }
    },
    OTP:{
        screen : OTPScreen,
        tabBarOptions: {
            visible: false
        }
    },
    Main:{
        screen: createAppContainer(createBottomTabNavigator({
          Home: HomeScreen,
        })),
        tabBarOptions: {
            visible: false
        }
    },
  

  },
  ));
  
  export default TabNavigator;