import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView ,FlatList,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';

function SplashScreen({navigation}) {
    const [isLoad, setIsLoad] = useState(false);

    setTimeout(() => {
        setIsLoad(true);
        navigation.navigate('LoginScreen')
     }, 3010);
    
    

    return (
        <View style={styles.container}>
           <Image style={{width:'70%',height:'30%'}}
           source={require('../assets/logo.gif')} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      justifyContent:'center',
      alignItems:'center',
      flex:1
    }
})

export default SplashScreen;