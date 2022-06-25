import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView ,KeyboardAvoidingView,ActivityIndicator,SafeAreaView,Alert,FlatList} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';

import CreateCommentScreen from './CreateCommentScreen';

import LeftCommentComponent from './Component/Comment/LeftCommentComponent';
import RightCommentComponent from './Component/Comment/RightCommentComponent';

import CommentNavigator from './Navigation/TabNavigator/CommentNavigator';
const DATA = [
    {
      id: "1",
      titleA: "Counter Clock",
      message:'Hello Hwru?',
      imageUserA: require('../Assets/Home/smartTalkUser2.png'),
      time:'Tue,15-05-2022 23:17PM'
    },
    {
      id: "2",
      titleA: "Dateline NBC",
      message:'I am Fine....',
      imageUserA:require('../Assets/Home/smartTalkUser2.png'),
      time:'Tue,15-05-2022 23:17PM'

    },
    {
      id: "3",
      titleA: "A True Podcast",
      message:'What About Your BD',
      imageUserA:require('../Assets/Home/smartTalkUser3.png'),
      time:'Tue,15-05-2022 23:17PM'

    },
    {
      id: "4",
      titleA: "Crime Junkie",
      message:'It is in Progress ',
      imageUserA:require('../Assets/Home/smartTalkUser4.png'),
      time:'Tue,15-05-2022 23:17PM'

    }
]

function CommentScreen({navigation}) {


    // const renderItem = ({ item }) => (
        
        
    // );

    return (
        <View style={{width:'100%',height:'100%',flex:1}}>
            <View style={{width:'100%',height:100,backgroundColor:'#2C271D',position:'absolute',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white',top:10}}>Comment</Text>
                <TouchableWithoutFeedback >
                                <Image
                                    style={{width:15,height:15,left:'88%',top:'50%',position:'absolute'}}
                                    source={require('../Assets/notification.png')}
                                    />
                </TouchableWithoutFeedback>
            </View>
            <FlatList style={{height:'80%',width:'100%',flex:1,position:'absolute', top:'13%'}} 
                                      contentContainerStyle={{ paddingVertical: 11 }}
                                      data={DATA}
                                      numColumns={1}
                                      renderItem={({ item, index }) => {
                                          console.log(index)

                                          if (index % 2 == 0) {
                                            return (
                                                <LeftCommentComponent
                                                imageUserA = {item.imageUserA}
                                                titleA = {item.titleA}
                                                message = {item.message}
                                                time = {item.time}  
                                                commentBackground = {require('../Assets/Comment/commentBackground.png')}
                                                >
                                                </LeftCommentComponent>
                                             );
                                          }else{
                                            return (
                                                <RightCommentComponent
                                                imageUserA = {item.imageUserA}
                                                titleA = {item.titleA}
                                                message = {item.message}
                                                time = {item.time}  
                                                commentBackground = {require('../Assets/Comment/commentBackground.png')}
                                                >
                                                </RightCommentComponent>
                                             );
                                          }                          
                                      }
                                      }
                                      keyExtractor={item => item.id}
                                     >
            </FlatList>
            <TouchableOpacity 
            style={{width:'100%', height:'100%',backgroundColor:'#2C271D',top:'92%',alignItems:'center'}}
            onPress={() =>  navigation.navigate('CreateCommentScreen') }
            >
                <Text style={{fontSize:20,fontWeight:'bold',color:'white',top:20}}>Make a Comment</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CommentScreen;