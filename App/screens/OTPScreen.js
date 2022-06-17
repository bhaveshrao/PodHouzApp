import React from 'react';
import { ImageBackground, StyleSheet,View,Text,Button, TouchableOpacity ,Image, TouchableWithoutFeedback,KeyboardAvoidingView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import RootNavigator from './Navigation/TabNavigator/RootNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

import HomeScreen from './HomeScreen';


function OTPScreen({ navigation }) {
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior = "height"
       >
        <HideKeyboard>
        <View style={styles.container}>
         <ImageBackground
                resizeMode="cover"
                style={styles.background}
                 source={require('../assets/OTP/OTPBackground.png')}>
            <View style={styles.navigationContainer}>
                < TouchableWithoutFeedback style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/back.png')}>
                     </Image>
                </TouchableWithoutFeedback > 
            </View>
            <Text style={styles.otpWithText}>OTP</Text>
            <View style={styles.viewContainer}>
              <Text style={styles.textTitle}>Enter the OTP (One Time Password)</Text>
              <Text style={styles.textTitle}>sent on +91-8888888888</Text>
            </View>
            <View style={styles.viewInputContainer}>
             <TextInput 
                style={styles.input}
                placeholder="1"
                keyboardType="numeric">
             </TextInput>
             <TextInput 
                style={styles.input}
                placeholder="1"
                keyboardType="numeric">
             </TextInput>
             <TextInput 
                style={styles.input}
                placeholder="1"
                keyboardType="numeric">
             </TextInput>
             <TextInput 
                style={styles.input}
                placeholder="1"
                keyboardType="numeric">
             </TextInput>
             <TextInput 
                style={styles.input}
                placeholder="1"
                keyboardType="numeric">
             </TextInput>
             <TextInput 
                style={styles.input}
                placeholder="1"
                keyboardType="numeric">
             </TextInput>
            </View>
            <View style={styles.viewBottomContainer}>
                <Text style={styles.bottomText}> Don’t receive the OTP? </Text>
                <TouchableWithoutFeedback>
                     <Text style={{ fontSize: 15, color:'#D9B10E' }}>Resend OTP</Text>
                 </TouchableWithoutFeedback>
            </View>
            <View style={styles.viewButtonContainer}>
                <TouchableOpacity
                    style={styles.loginScreenButton}
                    onPress={() => navigation.navigate('RootNavigator')}>
                    <Text style={styles.loginText}>Verify & Proceed</Text>
             </TouchableOpacity>
         </View>
       </ImageBackground>
     </View>
     </HideKeyboard>
     </KeyboardAvoidingView>

    );
}

const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
      {children}
    </TouchableWithoutFeedback>
  );

const styles = StyleSheet.create({
    background : {
        width : '100%',
        height : '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        
    },
    navigationContainer:{
        position : 'absolute',
        top : 30,
        left : 30,
        width:'100%',
        height: 60,
        flexDirection:'row',
        alignItems: 'center',
        childrens:{     
            width: 100,       
            color:'#fff',
            paddingRight : 100
        }
    },
    backButton:{
        right : 30,
        position: 'absolute'
    },
    otpWithText:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 18,
        justifyContent : 'center',
        top : '6%',
        position: 'absolute'
        

    },
       viewContainer: {
        top : '60%',
        width: '100%',
        justifyContent: "center",
        alignItems : 'center',
        position: 'absolute',
        paddingBottom : 30
    },
    textTitle: {
        color: "white",
        fontSize: 18,
        lineHeight: 30,
    

    },
    viewInputContainer: {
        width: '100%',
        justifyContent: "center",
        top: '70%',
        alignItems : 'center',
        flexDirection:'row',
        position : 'absolute',
        marginBottom : 10
        
    }, 
    input: {
      height: 47,
      width : 47,
      margin: 7,
      borderWidth: 1,
      padding: 10,
      backgroundColor:'#FFFAE6',
      borderRadius : 10,
      textAlign : 'center',
      fontSize : 19,
      fontWeight : 'bold'
    },
    bottomText : {
        color: 'white',
        fontSize:15
    }, 
    viewBottomContainer : {
        flexDirection:'row',
        top : '80%',
        position : 'absolute',
        marginVertical : 20
    },
     viewButtonContainer: {
        paddingTop: 10,
        width: '100%',
        justifyContent: "center",
        padding : 20,
        top : '85%',
        position : 'absolute',
        marginVertical : 20

    },
    loginScreenButton:{
        height:50,
        backgroundColor:'#D9B10E',
        borderRadius:10,
        borderWidth: 1,
        justifyContent : 'center'
      },
      loginText:{
          color:'#fff',
          textAlign:'center',
          fontWeight:'bold',
          fontSize :  18
          
      }
    

})

export default OTPScreen;