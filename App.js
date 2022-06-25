import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, ImageBackground  } from 'react-native';
import LoginScreen from './App/Screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './App/Screens/Navigation/TabNavigator/RootNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import OTPScreen from './App/Screens/OTPScreen';
import SplashScreen from './App/Screens/SplashScreen';

import CreateCommentScreen from './App/Screens/CreateCommentScreen';
import CommentNavigator from './App/Screens/Navigation/TabNavigator/CommentNavigator';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {/* <Stack.Screen name= "SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name= "LoginScreen" component={LoginScreen} options={{ headerShown: false ,animationEnabled:false}} />
        <Stack.Screen name= "OTPScreen" component={OTPScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="RootNavigator" component={RootNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="CommentNavigator" component={CommentNavigator} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
