import React from 'react';
import { View,Text,TouchableWithoutFeedback,Image,FlatList,TouchableOpacity} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const PotentialData = [
    {
      id: "1",
      title: "Faded",
      subTitle:"Alan Walker",
      imageUserA: require('../Assets/Home/potentialImage1.png')
    },
    {
      id: "2",
      title: "Press start",
      subTitle:"MDK",
      imageUserA:require('../Assets/Home/potentialImage2.png')

    },
    {
      id: "4",
      title: "Time Lapse",
      subTitle:"Alan Walker",
      imageUserA:require('../Assets/Home/potentialImage3.png')
    },
    {
        id: "5",
        title: "Faded",
        subTitle:"Alan Walker",
        imageUserA: require('../Assets/Home/potentialImage1.png')
      },
      {
        id: "6",
        title: "Press start",
        subTitle:"MDK",
        imageUserA:require('../Assets/Home/potentialImage2.png')
  
      },
      {
        id: "7",
        title: "Time Lapse",
        subTitle:"Alan Walker",
        imageUserA:require('../Assets/Home/potentialImage3.png')
      }
]

function EventDetailsScreen(navigation) {

    const renderItemAlliess = ({ item }) => (

        <View style={{height:90,width:'90%',backgroundColor:'#EFEFFF',borderRadius:20,left:9,margin:7,flexDirection:'row',alignItems:'center',overflow:'hidden'}}>
        <Image
           style={{width:70,height:'100%',position:'absolute',flex:1}}
           source={item.imageUserA}
           resizeMode={'contain'}/>
           <View style={{height:65,width:'73%',left:80,flexDirection:'row',alignItems:'center'}}>
               <View style={{height:65,flexDirection:'column'}}>
                  <Text style={{fontSize:17,fontWeight:'bold',top:10}}>{item.title}</Text>
                  <Text style={{fontSize:17,top:10}}>{item.subTitle}</Text>
              </View>
              <TouchableOpacity
                  style={{backgroundColor:'#2C271D',width:100,height:30,left:50,alignItems:'center',justifyContent:'center',borderRadius:20}}
                  onPress={() => navigate('HomeScreen')}
                  underlayColor='#fff'>
                  <Text style={{color:'white',fontWeight:'bold'}}>Follow</Text>
              </TouchableOpacity>
           </View>
        </View>
  );

    return (
        <View style={{width:'100%',height:'100%',flex:1}}>
            <View style={{width:'100%',height:100,backgroundColor:'#2C271D',position:'absolute',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white',top:10}}>Event Details</Text>
                    <TouchableWithoutFeedback >
                                 <Image
                                    style={{width:15,height:15,left:'88%',top:'50%',position:'absolute'}}
                                    source={require('../Assets/notification.png')}
                                    />
                    </TouchableWithoutFeedback>
            </View>
            <Image style={{width:'100%',height:250,top:100,position:'absolute'}}
             source={require('../Assets/EventDetails/micBanner.png')}>
            </Image>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#263238',top:'48%',left:'7%',position:'absolute'}}>Debate For War</Text>
            <Text style={{fontSize:12,color:'#263238',top:'52%',left:'7%',position:'absolute'}}>Sun,May2022 07:30PM</Text>
            <View style={{
                               height : 50,
                               width : 50,
                               left : '5%',
                               top: '56%',
                               position : 'absolute',
                               alignItems : 'center',
                        }}>
                            <TouchableWithoutFeedback >
                                <Image
                                    style={{
                                        width : 25,
                                        height: 25,     
                                        margin : -5
                                    }}
                                    source={require('../Assets/Home/heart.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                            <Text style={{marginVertical:10}}> 2000 </Text>
             </View>
             <TouchableWithoutFeedback >
                                <Image
                                    style={{
                                        position : 'absolute',
                                        width : 30,
                                        height: 30, 
                                        top:'56%',
                                        left : '20%' 
                                    }}
                                    source={require('../Assets/Home/share.png')}
                                    resizeMode={'contain'}/>
             </TouchableWithoutFeedback>
             <TouchableWithoutFeedback >
                                <Image
                                    style={{
                                        position : 'absolute',
                                        width : 40,
                                        height: 40, 
                                        left : '33%',
                                        top : '55%'

                                    }}
                                    source={require('../Assets/Home/noOneToOne.png')}
                                    resizeMode={'contain'}/>
             </TouchableWithoutFeedback>
             <TouchableWithoutFeedback>
                                <Image
                                   style={{
                                    left : '75%',
                                    top:'56%',
                                    width:80,
                                    height:27,
                                    position :'absolute'
                                   }}
                                   source={require('../Assets/Home/debate.png')}
                                   resizeMode={'contain'}/>
             </TouchableWithoutFeedback>
             <FlatList style={{height:'80%',width:'100%',flex:1,position:'absolute',marginTop:'125%',left:15,flex:1}} 
                                      data={PotentialData}
                                      numColumns={1}
                                      renderItem={renderItemAlliess}
                                      keyExtractor={item => item.id}
                                      >
             </FlatList>
         </View>
    );
}

export default EventDetailsScreen;