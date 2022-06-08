import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, ImageBackground  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import LoginScreen from './App/screens/LoginScreen';



export default function App() {
  return (
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1D1E',
  },
}); 

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="OTP" component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};