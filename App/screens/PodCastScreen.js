import React from 'react';
import { View,Text,TouchableWithoutFeedback,Image,ImageBackground,FlatList,TouchableOpacity} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const DATA = [
    {
      id: "1",
      titleA: "Jhon Deo",
      imageUserA: require('../Assets/Home/user1.png')
    },
    {
      id: "2",
      titleA: "Benjamin",
      imageUserA:require('../Assets/Home/user2.png')

    },
    {
      id: "3",
      titleA: "Benjamin",
      imageUserA:require('../Assets/Home/user3.png')


    },
    {
      id: "4",
      titleA: "Jhon Deo",
      imageUserA:require('../Assets/Home/user4.png')

    },
    {
        id: "5",
        titleA: "Benjamin",
        imageUserA: require('../Assets/Home/user1.png')
      },
      {
        id: "6",
        titleA: "Benjamin",
        imageUserA:require('../Assets/Home/user2.png')
  
      },
      {
        id: "7",
        titleA: "Benjamin",
        imageUserA:require('../Assets/Home/user3.png')
  
  
      },
      {
        id: "8",
        titleA: "Jhon Deo",
        imageUserA:require('../Assets/Home/user4.png')
  
      }  ,
      {
        id: "9",
        titleA: "Jhon Deo",
        imageUserA:require('../Assets/Home/user1.png')
  
      },
      {
        id: "10",
        titleA: "Jhon Deo",
        imageUserA:require('../Assets/Home/user2.png')
  
      }
]
function PodCastScreen(navigation) {

    const renderItem = ({ item }) => (
            <View
            style={{width:"15%",height:70,margin:10,alignItems:'center'}}>
                 <Image
                     style={{width:50,height:50,position:'absolute'}}
                     source={item.imageUserA}
                     />
                <Text style={{fontSize:9,color:'#263238',fontWeight:'SemiBold',top:'80%'}}>{item.titleA}</Text>
            </View>
      );

    return (
        <View style={{width:'100%',height:'100%',flex:1}}>
            <View style={{width:'100%',height:100,backgroundColor:'#2C271D',position:'absolute',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white',top:10}}>Podcast</Text>
                    <TouchableWithoutFeedback >
                                <Image
                                    style={{width:15,height:15,left:'88%',top:'50%',position:'absolute'}}
                                    source={require('../Assets/notification.png')}
                                    />
                    </TouchableWithoutFeedback>
            </View>
            <ImageBackground
                resizeMode="cover"
                style={{
                    width : '101%',
                    top:100,
                    height : 271,
                    flex:1,
                    position : 'absolute',
                    justifyContent : 'center',
                    alignItems:'center',
                    overflow : 'hidden'
                }}
                 source={require('../Assets/PodCast/podCastBanner.png')}>
                     <ImageBackground style={{
                         width: 100,
                         height:100,
                         top :-35,
                         alignItems:'center',
                         justifyContent : 'center'
                     }}
                     source={require('../Assets/PodCast/blurrUser.png')}>
                           <Image
                                    style={{width:80,height:80,position:'absolute'}}
                                    source={require('../Assets/PodCast/podCastUser.png')}
                                    />
                     </ImageBackground>
                     <Text style={{fontSize:20,fontWeight:'bold',color:'white',position:'absolute',top:'57%'}}>Shizuka</Text>
                     <Text style={{fontSize:15,fontWeight:'Medium',color:'white',position:'absolute',top:'67%'}}>Writer</Text>
                     <Text style={{fontSize:20,fontWeight:'bold',color:'white',position:'absolute',top:'77%'}}>The Holi Festival of Barsana India</Text>

            </ImageBackground>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#263238',top:'51%',left:'7%',position:'absolute'}}>Speakers</Text>
            
            <FlatList style={{height:220, top:'54%',width:'100%',flex:1,position:'absolute'}} 
                                      contentContainerStyle={{ paddingVertical: 11 }}
                                      data={DATA}
                                      numColumns={5}
                                      renderItem={renderItem}
                                        keyExtractor={item => item.id}
                                      >
            </FlatList>
            <Text style={{fontSize:25,fontWeight:'bold',top:'82%',left:'42%',position:'absolute'}}>0:00</Text>
            <Image
                                    style={{width:'80%',height:33,left:'10%',top:'87%',position:'absolute'}}
                                    source={require('../Assets/PodCast/bigWave.png')}
                                    />
             <View style={{width:'100%',height:60,top:'91%',flexDirection:'row',alignItems:'center',justifyContent:'center',overflow:'hidden',position:'absolute'}}>

             <TouchableOpacity style = {{left:-20}}
                 onPress={() => navigation.navigate('OTPScreen')}>
                   <Image style={{width:20,height:20}}
                     source = {require('../Assets/PodCast/forward.png')}
                    />
              </TouchableOpacity>
            <TouchableOpacity style = {{}}
                 onPress={() => navigation.navigate('OTPScreen')}>
                   <Image style={{width:60,height:60}}
                     source = {require('../Assets/PodCast/paushButton.png')}
                    />
              </TouchableOpacity>
             
              <TouchableOpacity style = {{left:20}}
                 onPress={() => navigation.navigate('OTPScreen')}>
                   <Image style={{width:20,height:20}}
                     source = {require('../Assets/PodCast/backward.png')}
                    />
              </TouchableOpacity>

             </View>
        </View>
        
    );
}

export default PodCastScreen;