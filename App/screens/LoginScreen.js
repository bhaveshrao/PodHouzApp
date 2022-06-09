import React from 'react';
import { ImageBackground, StyleSheet,View,Text,Button, TouchableOpacity ,Image, TouchableWithoutFeedback,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';


function LoginScreen({ navigation }) {

    return (
  <HideKeyboard>
     <View style={styles.container}>
         <ImageBackground
                resizeMode="cover"
                style={styles.background}
                source={require('../assets/backgroundLogin.png')}>
          <View style={styles.viewContainer}>
              <Text style={styles.textTitle}>Mobile Number/Email Id</Text>
              <Text style={styles.textSubTitle}>Type your mobile number to generate OTP</Text>
         </View>
          <View style={styles.viewInputContainer}>
             <TextInput 
              style={styles.input}
              placeholder="Enter Your Number or Email"
              keyboardType="numeric">
             </TextInput>
          </View>
        <View style={styles.viewButtonContainer}>
             <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() =>  navigation.navigate('OTPScreen')}>
                <Text style={styles.loginText}>Sign In</Text>
             </TouchableOpacity>
         </View>
         <Image source={require('../assets/orImage.png')}
            style={styles.imageStyel}/>
          <Text style={styles.loginWithText}>LOGIN WITH</Text>
          <View style={styles.socialContainer}>
          <Image source={require('../assets/facebook.png')}
            style={styles.SocialImageStyelFacebook}/>
          <Image source={require('../assets/google.png')}
            style={styles.SocialImageStyel}/>
          <Image source={require('../assets/apple.png')}
            style={styles.SocialImageStyelApple}/> 
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}> By Signing up you agree to the terms and</Text>
            <View style={{flexDirection:'row',left:'200%'}}>
            <Text style={styles.bottomText}> conditions? </Text>
            <TouchableWithoutFeedback>
               <Text style={{ fontSize: 13, color:'#D9B10E' }}>Click Here</Text>
            </TouchableWithoutFeedback>
          </View>
          </View>
       </ImageBackground>
     </View>
  </HideKeyboard> 
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
        backgroundColor:'red',
        justifyContent: "center"
    },
    viewContainer: {
        paddingTop: 170,
        width: '100%',
        justifyContent: "center",
        top: 50
    },
    viewInputContainer: {
        paddingTop: 10,
        width: '100%',
        justifyContent: "center",
        top: 20
    },
    viewButtonContainer: {
        paddingTop: 10,
        width: '100%',
        justifyContent: "center",
        padding : 20,
        top : 20
    },
    textTitle: {
        color: "white",
        fontSize: 18,
        lineHeight: 20,
        textAlign: "left",
        padding : 20,
        paddingTop : -20,
        paddingBottom : 10
      },
      textSubTitle: {
        color: "white",
        fontSize: 13,
        lineHeight: 15,
        textAlign: "left",
        padding : 20,
        paddingTop : -10
      }, 
      input: {
        height: 50,
        margin: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'#FFFAE6',
        borderRadius : 10
      },
      loginScreenButton:{
        height:40,
        backgroundColor:'#D9B10E',
        borderRadius:10,
        borderWidth: 1,
        justifyContent : 'center'
      },
      loginText:{
          color:'#fff',
          textAlign:'center',
          fontWeight:'bold'
      },
      imageStyel :{
          width: 279,
          height:20,
          top:20
      },
      loginWithText:{
          top:20,
          padding:20,
          color:'#fff',
          textAlign:'center',
          fontWeight:'bold',
          fontSize: 16,
      },
      socialContainer: {
        width: '100%',
        justifyContent: "center",
        padding : 20,
        top : 20,
        height : 70,
        alignItems: 'center',
        flexDirection:'row'
    },
      SocialImageStyel :{
          width: 67,
          height:48,
          justifyContent:'center',
      },
      SocialImageStyelFacebook :{
        width: 67,
        height:48,
        right:50,
    },
    SocialImageStyelApple :{
      width: 67,
      height:48,
      left : 50,
    },
    bottomContainer:{
      top : 100
    },
    bottomText : {
      color: 'white',
      fontSize:13
    },
    buttonBottomText : {
      fontSize:13
    }
})

export default LoginScreen;