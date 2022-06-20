import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import {  createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';


import HomeScreen from '../../HomeScreen';
import OTPScreen from '../../OTPScreen';
import LoginScreen from '../../LoginScreen';

const TabNavigator = createAppContainer(createBottomTabNavigator({
   
  
  

  },
  ));
  
  export default TabNavigator;