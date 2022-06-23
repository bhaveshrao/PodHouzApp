import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView ,KeyboardAvoidingView,ActivityIndicator,SafeAreaView,Alert} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import { baseURL,loginApi } from '../Utility/AppConstant.js'; 
import AppLoaderIndicator from '../Utility/AppLoaderIndicator.js';


function LoginScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('Sign In');
  const [message, setMessage] = useState('');

  console.log(data);

  const letHide = event => {
    // event.preventDefault();
    console.log(message.trim().length)

    if (message.trim().length == 0) {

     Alert.alert(  
        'Error!',  
        'Please Enter Your Number',  
        [  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]   
    );        
    } else if (message.trim().length !== 10) {
      Alert.alert(  
        'Error!',  
        'Please Enter Correct 10 digit Mobile Number',  
        [  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]   
    );   
    } else {
      loginWith(message)
      // navigation.navigate('OTPScreen',{'otp':'123456','mobile_no':'9713506147'})

      console.log(message)
      if (visible === false) {
        console.log('called')
        setVisible(true);
        setText('')
       }
    }
  }

  const handleChange = event => {
    setMessage(event.target.value);
    console.log(event.target.value)
  };

  const handleClick = event => {

   
  };
  
  
 
 const loginWith = (textString) => {

  console.log(baseURL + loginApi )
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var raw = JSON.stringify({
     "mobile_no": textString
    });

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

 fetch(baseURL + loginApi, requestOptions)
  .then(response => response.json())
  .then((result) => {
    setVisible(false)
    setText('Sign In')
    console.log(result.data)
    console.log(result.status)
    console.log(result.user_otp)
    // navigation.navigate('OTPScreen',{'otp':result.user_otp})
    console.log(textString)
   navigation.navigate('OTPScreen',{'otp':result.user_otp,'mobile_no':textString})
  })
  .catch(error => console.log('error', error)); 
  };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? null : null}
    style={styles.container}
       >
    <HideKeyboard>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={styles.background}
          source={require('../assets/Login/backgroundLogin.png')}>
          <View style={styles.viewContainer}>
            <Text style={styles.textTitle}>Mobile Number/Email Id</Text>
            <Text style={styles.textSubTitle}>Type your mobile number to generate OTP</Text>
          </View>
          <View style={styles.viewInputContainer}>
            <TextInput
              id="message"
              name="message"
              style={styles.input}
              placeholder="Enter Your Number or Email"
              keyboardType="numeric"
              focusColor="blue"
              onChangeText={newText => setMessage(newText)}
              >
            </TextInput>
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
                 style={{justifyContent:'center',alignItems:'center',top: Platform.OS === "ios" ? '25%' : '27%', position:'absolute'}}
                 />
            </TouchableOpacity>
          </View>
          <Image source={require('../assets/Login/orImage.png')}
            style={styles.imageStyel} />
          <Text style={styles.loginWithText}>LOGIN WITH</Text>
          <View style={styles.socialContainer}>
            <Image source={require('../assets/Login/facebook.png')}
              style={styles.SocialImageStyelFacebook} />
            <Image source={require('../assets/Login//google.png')}
              style={styles.SocialImageStyel} />
            <Image source={require('../assets/Login/apple.png')}
              style={styles.SocialImageStyelApple} />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}> By Signing up you agree to the terms and</Text>
            <View style={{ flexDirection: 'row', left: '200%' }}>
              <Text style={styles.bottomText}> conditions? </Text>
              <TouchableWithoutFeedback>
                <Text style={{ fontSize: 13, color: '#D9B10E' }}>Click Here</Text>
              </TouchableWithoutFeedback>
            </View>
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
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
  },
  viewContainer: {
    width: '100%',
    justifyContent: "center",
    top: '45%',
    position: 'absolute'
  },
  viewInputContainer: {
    width: '100%',
    justifyContent: "center",
    top: '50%',
    position : 'absolute'
  },
  viewButtonContainer: {
    width: '100%',
    justifyContent: "center",
    padding: 20,
    top: '63%',
    alignItems : 'center' ,
    position : 'absolute'
  },
  textTitle: {
    color: "white",
    fontSize: 18,
    lineHeight: 20,
    textAlign: "left",
    padding: 20,
    paddingTop: -20,
    paddingBottom: 10
  },
  textSubTitle: {
    color: "white",
    fontSize: 13,
    lineHeight: 15,
    textAlign: "left",
    padding: 20,
    paddingTop: -10
  },
  input: {
    height: 50,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFAE6',
    borderRadius: 10
  },
  loginScreenButton: {
    height: 50,
    backgroundColor: '#D9B10E',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    position: 'absolute',
    width : '100%',
    alignItems : 'center'
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    top : '25%',
    position:'absolute'

  },
  imageStyel: {
    width: 279,
    height: 20,
    top: "72%",
    position : 'absolute'
    
  },
  loginWithText: {
    top: '77%',
    position : 'absolute',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialContainer: {
    width: '100%',
    justifyContent: "center",
    top: '80%',
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    position : 'absolute',
    
  },
  SocialImageStyel: {
    width: 67,
    height: 48,
    justifyContent: 'center',
  },
  SocialImageStyelFacebook: {
    width: 67,
    height: 48,
    right: 50,
  },
  SocialImageStyelApple: {
    width: 67,
    height: 48,
    left: 50,
  },
  bottomContainer: {
    marginTop : 20,
    top: '91%',
    position : 'absolute'

  },
  bottomText: {
    color: 'white',
    fontSize: 13
  },
  buttonBottomText: {
    fontSize: 13
  }
})

export default LoginScreen;