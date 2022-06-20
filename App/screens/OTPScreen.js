import React,{useRef,useState} from 'react';
import { ImageBackground, StyleSheet,View,Text,Button, TouchableOpacity ,Image, TouchableWithoutFeedback,KeyboardAvoidingView,Alert,ActivityIndicator} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import RootNavigator from './Navigation/TabNavigator/RootNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { baseURL,verifyOTPApi,resendOTPApi } from '../Utility/AppConstant.js'; 

const Tab = createBottomTabNavigator();

import HomeScreen from './HomeScreen';
import { createRef } from 'react/cjs/react.production.min';


function OTPScreen({ navigation}) {


    const OTP = [];
    const ref_input = [];
    ref_input[0] = useRef();
    ref_input[1] = useRef();
    ref_input[2] = useRef();
    ref_input[3] = useRef();
    ref_input[4] = useRef();
    ref_input[5] = useRef();
    var otpString = ""
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('Verify & Proceed');
  

    const route = useRoute();
    console.log(route.params)

    Alert.alert(  
        'Alert!',  
        'Your OTP is ' + route.params.otp,  
        [  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]   
    ); 

    const letHide = event => {
        // event.preventDefault();
    

        if (otpString.trim().length == 0) {
    
         Alert.alert(  
            'Error!',  
            'Please Enter OTP',  
            [  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]   
        );        
        } else if (otpString.trim().length !== 6) {
          Alert.alert(  
            'Error!',  
            'Please Enter Correct OTP',  
            [  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]   
        );   
        } else {
          // loginWith('abc')
        //   navigation.navigate('RootNavigator',{'otp':'123456'})
    
            verifyOTPApi(otpString)
          if (visible === false) {
            console.log('called')
            setVisible(true);
            setText('')
           }
        }
      }


  const verifyOTP = () => {

        console.log('calledThisTime')
        console.log(baseURL + verifyOTPApi )
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
      
          var raw = JSON.stringify({
           "otp": otpString,
           "mobile_no" : route.params.mobile_no
          });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
       fetch(baseURL + verifyOTPApi, requestOptions)
        .then(response => response.json())
        .then((result) => {
          setVisible(false)
          setText('Verify & Proceed')
          console.log(result.data)
          console.log(result.status)
          // console.log(result.user_otp)
          // navigation.navigate('OTPScreen',{'otp':result.user_otp})
          console.log(textString)
        })
        .catch(error => console.log('error', error)); 
    };


  const resendOTP = () => {

    console.log('calledResendOTP')
    console.log(baseURL + resendOTPApi )
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
       "mobile_no" : route.params.mobile_no
      });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
   fetch(baseURL + resendOTPApi, requestOptions)
    .then(response => response.json())
    .then((result) => {
      setVisible(false)
      setText('Sign In')
      console.log(result.data)
      console.log(result.status)
      if (result.status == "success"){
        Alert.alert(  
            'Alert!',  
            'OTP has been sent to your mobile number', 
            [  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]   
        ); 
      }
      console.log(textString)
    })
    .catch(error => console.log('error', error)); 
};



    const focusNext = (text, index) => {
        if (index < ref_input.length - 1 && text) {
            ref_input[index + 1].current.focus();
        }
        if (index == ref_input.length - 1) {
            ref_input[index].current.blur();
        }
        OTP[index] = text;
        console.log(OTP)
        otpString = OTP.join("")
        console.log(otpString)

    }
    const focusPrev = (key, index) => {
        if (key === "Backspace" && index !== 0) {
            ref_input[index - 1].current.focus();
        }
    }

  
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
              <Text style={styles.textTitle}>sent on +91-{route.params.mobile_no}</Text>
            </View>
            <View style={styles.viewInputContainer}>
             <TextInput 
                style={styles.input}
                placeholder="1"
                keyboardType="numeric"
                maxLength={1}
                autoFocus={true}
                returnKeyType="next"
                ref={ref_input[0]}
                onChangeText={text => focusNext(text, 0)}
                onKeyPress={e => focusPrev(e.nativeEvent.key, 0)}
             >
             </TextInput>
             <TextInput 
                style={styles.input}
                placeholder="2"
                keyboardType="numeric"
                maxLength={1}
                returnKeyType="next"
                ref={ref_input[1]}
                onChangeText={text => focusNext(text, 1)}
                onKeyPress={e => focusPrev(e.nativeEvent.key, 1)}
                >
             </TextInput>
             <TextInput 
                style={styles.input}
                placeholder="3"
                keyboardType="numeric"
                maxLength={1}
                returnKeyType="next"
                ref={ref_input[2]}
                onChangeText={text => focusNext(text, 2)}
                onKeyPress={e => focusPrev(e.nativeEvent.key, 2)}
                >
             </TextInput>
             <TextInput 
                style={styles.input}
                placeholder="4"
                keyboardType="numeric"
                maxLength={1}
                returnKeyType="next"
                ref={ref_input[3]}
                onChangeText={text => focusNext(text, 3)}
                onKeyPress={e => focusPrev(e.nativeEvent.key, 3)}
                >
             </TextInput>
             <TextInput 
                style={styles.input}
                placeholder="5"
                keyboardType="numeric"
                returnKeyType="next"
                maxLength={1}
                ref={ref_input[4]}
                onChangeText={text => focusNext(text, 4)}
                onKeyPress={e => focusPrev(e.nativeEvent.key, 4)}

                >
             </TextInput>
             <TextInput 
                style={styles.input}
                placeholder="6"
                returnKeyType="next"
                keyboardType="numeric"
                maxLength={1}
                ref={ref_input[5]}
                onChangeText={text => focusNext(text, 5)}
                onKeyPress={e => focusPrev(e.nativeEvent.key, 5)}
                >
             </TextInput>
            </View>
            <View style={styles.viewBottomContainer}>
                <Text style={styles.bottomText}> Don’t receive the OTP? </Text>
                <TouchableWithoutFeedback
                onPress={resendOTP}
                >
                     <Text style={{ fontSize: 15, color:'#D9B10E' }}>Resend OTP</Text>
                 </TouchableWithoutFeedback>
            </View>
            <View style={styles.viewButtonContainer}>
            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={letHide}>
              <Text style={styles.loginText}>{text}</Text>
              <ActivityIndicator
                 size="small"
                 color="white"
                 animating={visible}
                 style={{justifyContent:'center',alignItems:'center',top:-8}}
                 />
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
          fontSize :  18,
          top:9
          
      }
    

})

export default OTPScreen;