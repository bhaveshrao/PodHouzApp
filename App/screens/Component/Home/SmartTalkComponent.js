import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView ,FlatList} from 'react-native';

function SmartTalkComponent(props) {
    return (
    <View style={{height:65,backgroundColor:'#2C271D',flex:1,margin: 10,overflow:'hidden',borderRadius:25,flexDirection:'row'
    }}>
    <View style={{width:'100%',height:'100%',flex:1,position:'absolute',alignItems:'center'}}>
        <Text style={{fontSize:12,fontWeight:'bold',color:'white',left:30,top:12}}>
        {props.name}
        </Text>
        <View style={{width:'70%',height:40,flexDirection:'row',top:12,overflow:'hidden',alignItems:'center',left:27}}>
        <Image
            style={{left:15,width:65}}
            source={props.waveIcon}
            resizeMode={'contain'}/>
        <Image
            style={{margin:20,width:20}}
            source={props.playWhiteIcon}
            resizeMode={'contain'}/>
        </View>
    </View>
    <Image
        style={{width:80,height:'100%',left:-10}}
        source={props.imageUserSmartTalk}
        resizeMode={'contain'}/>
</View> 
    );
}

export default SmartTalkComponent;