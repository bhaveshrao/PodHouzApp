import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, ImageBackground  } from 'react-native';
import LoginScreen from './App/screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootNavigator from './App/screens/Navigation/TabNavigator/RootNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OTPScreen from './App/screens/OTPScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name= "LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name= "OTPScreen" component={OTPScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RootNavigator" component={RootNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
