import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-dynamic-vector-icons';
import {Image} from 'react-native';
import EventDetailsScreen from '../../EventDetailsScreen';
import PodCastScreen from '../../PodCastScreen';
import CommentScreen from '../../CommentScreen';
import HomeScreen from '../../HomeScreen';
import CreateCommentScreen from '../../CreateCommentScreen';

import CommentNavigator from './CommentNavigator';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const RootNavigator = ({navigation}) => {
  return (
  <NavigationContainer independent={true}>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({tintColor}) =>  screenOptions(route, tintColor),
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
         tabBarShowLabel: false,
        tabBarStyle: {
        height: 78,
        backgroundColor: '#2E291F'
      }
      })}>
       <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}  />
       <Tab.Screen name="EventDetail" component={EventDetailsScreen} options={{ headerShown: false}}  /> 
       <Tab.Screen name="PodCast" component={PodCastScreen} options={{ headerShown: false}}  />
       <Tab.Screen name="Comment" component={CommentNavigator} 
          options={({ route }) => ({
            headerShown: false,
            tabBarVisible: getTabBarVisibility(route)
          })}
       />
    </Tab.Navigator>
  </NavigationContainer>
  );
};

const getTabBarVisibility = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

    console.log(routeName)
  if (routeName === 'CreateCommentScreen') {
    return false;
  }

  return true;
}


const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      return <Image
      source={require('../TabNavigator/home.png')}
      style={{width: 26, height: 26, tintColor: color}}
      />
    case 'EventDetail':
      return <Image
      source={require('../TabNavigator/calendar.png')}
      style={{width: 26, height: 26, tintColor: color}}
      />
    case 'PodCast':
      return <Image
      source={require('../TabNavigator/audio.png')}
      style={{width: 28, height: 26, tintColor: color}}
      />
    case 'Comment':
      return <Image
      source={require('../TabNavigator/audioChat.png')}
      style={{width: 26, height: 26, tintColor: color}}
      />
    default:
      break;
  }

  return <Image
  source={require('../TabNavigator/calendar.png')}
  style={{width: 26, height: 26, tintColor: color}}
  />;
};

export default RootNavigator;
