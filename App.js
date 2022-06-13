import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, ImageBackground  } from 'react-native';
import LoginScreen from './App/screens/LoginScreen';
import OTPScreen from './App/screens/OTPScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './App/screens/HomeScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
