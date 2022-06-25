import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView ,KeyboardAvoidingView,ActivityIndicator,SafeAreaView,Alert,FlatList} from 'react-native';

import LeftCommentComponent from './Component/Comment/LeftCommentComponent';

const DATA = [
    {
      id: "1",
      titleA: "Jhon Deo",
      message:'Hello Hwru?',
      imageUserA: require('../Assets/Home/smartTalkUser2.png'),
      time:'Tue,15-05-2022 23:17PM'
    }
]


const renderItem = ({ item }) => (

    <View style={{width:'100%',height:150,overflow:'hidden', color:'white',margin:2}}>
    <ImageBackground
        style={{width:'98%',height:'80%',left:'1%',borderRadius:10}}
        source={require('../Assets/Comment/commentBackground.png')}
     >
      <View style={{height:80,width:'90%',borderRadius:20,margin:7,flexDirection:'row',alignItems:'center',overflow:'hidden',shadowColor:'black'}}>
        <Image
       style={{width:70,height:'70%',position:'absolute',flex:1}}
       source={item.imageUserA}
       resizeMode={'contain'}/>
       <View style={{height:65,width:'73%',left:80,flexDirection:'row',alignItems:'center'}}>
           <View style={{height:65,width:'50%',flexDirection:'column',margin:-4}}>
              <Text style={{fontSize:17,top:10,color:'black',fontWeight:'bold'}}>{item.titleA}</Text>
              <Text style={{fontSize:8,top:40,color:'#827F93',position:'absolute'}}>{item.time}</Text>
          </View>

          <View style={{width:'50%',height:30,top:'18%',left:'-5%',flexDirection:'row',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
                <TouchableOpacity>
                        <Image
                        style={{width:30,height:30,margin:-10}}
                        source={require('../Assets/Comment/commentBackward.png')}/>
                    </TouchableOpacity>
                    <Image
                        style={{width:70,height:30}}
                        source={require('../Assets/PodCast/bigWave.png')}/>
                    <TouchableOpacity>
                        <Image
                        style={{width:30,height:30,margin:-10}}
                        source={require('../Assets/Comment/commentForward.png')}/>
                    </TouchableOpacity>
             </View>
             <TouchableOpacity>
                        <Image
                        style={{width:30,height:30,margin:-10,top:'18%'}}
                        source={require('../Assets/Home/bigPlay.png')}/>
                    </TouchableOpacity>
       </View>
    </View>
       <View style={{
           width:80,
           height:27,
           backgroundColor : '#D9B10E',
           borderRadius:15,
           justifyContent:'center',
           alignItems:'center',
           left:'75%',
       }
       }>
        <Text style={{color:'white'}}>
        Replay
        </Text>
       </View>
       </ImageBackground>
    </View>
  );

function CreateCommentScreen({navigation}) {
    return (

        <View style={{flex:1}}>
        <View style={{width:'100%',height:100,backgroundColor:'#2C271D',position:'absolute',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'white',top:10}}>Comment</Text>
        <TouchableWithoutFeedback
        onPress={() =>  navigation.goBack(null)}>
                <Image
                    style={{width:20,height:20,left:'8%',top:'50%',position:'absolute'}}
                    source={require('../Assets/cross.png')}/>
                </TouchableWithoutFeedback>
         </View>
         <FlatList style={{height:'50%',width:'100%',flex:1,position:'absolute',top:'13%'}} 
                                      contentContainerStyle={{ paddingVertical: 11 }}
                                      data={DATA}
                                      numColumns={1}
                                      renderItem={renderItem}
                                        keyExtractor={item => item.id}
                                      >
        </FlatList>
         <View style={{width:'100%',height:'100%',backgroundColor:'#D6D6D6',top:'60%',borderRadius:30,overflow:'hidden',position:'absolute'}}>
         <TouchableWithoutFeedback 
                 onPress={() =>  navigation.goBack(null)}>
                <Image
                    style={{width:20,height:20,left:'88%',top:'5%',position:'absolute'}}
                    source={require('../Assets/redCross.png')}/>
                </TouchableWithoutFeedback>
                <Text style={{fontSize:25,fontWeight:'bold',top:'10%',left:'42%',position:'absolute',color:'white'}}>0:00</Text>
                <View style={{width:'100%',height:50,top:'33%',flexDirection:'row',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
                    <TouchableOpacity>
                        <Image
                        style={{width:50,height:50,margin:-10}}
                        source={require('../Assets/Comment/commentBackward.png')}/>
                    </TouchableOpacity>
                    <Image
                        style={{width:180,height:30}}
                        source={require('../Assets/PodCast/bigWave.png')}/>
                    <TouchableOpacity>
                        <Image
                        style={{width:50,height:50,margin:-10}}
                        source={require('../Assets/Comment/commentForward.png')}/>
                    </TouchableOpacity>
             </View>
             <TouchableOpacity>
                        <Image
                        style={{width:50,height:50,left:'43%',top:'280%'}}
                        source={require('../Assets/Comment/recordVoice.png')}/>
                    </TouchableOpacity>

           <View style={{width:'100%',height:60,top:'19%',alignItems:'center',justifyContent:'center'}}>

           <TouchableOpacity style={{width:175,height:50,backgroundColor:'#D9B10E',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                       <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Comment</Text>
                    </TouchableOpacity>
           </View>
         </View>
         </View>
    );
}

export default CreateCommentScreen;