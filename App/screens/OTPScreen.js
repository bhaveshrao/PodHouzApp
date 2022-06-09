import React from 'react';
import { ImageBackground, StyleSheet,View,Text,Button, TouchableOpacity ,Image, TouchableWithoutFeedback,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function OTPScreen({ navigation }) {
    return (
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
       </ImageBackground>
     </View>
    );
}

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
    navigationContainer:{
        bottom : '87.5%',
        padding : 25,
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
        right : 30
    },
    otpWithText:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 18,
        justifyContent : 'center',
        bottom : '45%'
    },
       viewContainer: {
       
        width: '100%',
        justifyContent: "center",
        bottom :  '-5%',
        alignItems : 'center'
    },
    textTitle: {
        color: "white",
        fontSize: 18,
        lineHeight: 30,
      }

})

export default OTPScreen;