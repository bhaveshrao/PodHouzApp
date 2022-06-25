import React from 'react';
import { View,Text,TouchableWithoutFeedback,Image,TouchableOpacity,FlatList,ImageBackground} from 'react-native';

function LeftCommentComponent(props) {
    return (
        <View style={{width:'100%',height:100,overflow:'hidden', color:'white',margin:2}}>
        <ImageBackground
            style={{width:'95%',height:'100%',left:'7%',borderRadius:10}}
            source={props.commentBackground}
         >
          <View style={{height:80,width:'90%',borderRadius:20,margin:7,flexDirection:'row',alignItems:'center',overflow:'hidden',shadowColor:'black'}}>
            <Image
           style={{width:70,height:'70%',position:'absolute',flex:1}}
           source={props.imageUserA}
           resizeMode={'contain'}/>
           <View style={{height:65,width:'73%',left:80,flexDirection:'row',alignItems:'center'}}>
               <View style={{height:65,flexDirection:'column'}}>
                  <Text style={{fontSize:17,top:10,color:'#828282'}}>{props.titleA}</Text>
                  <Text style={{fontSize:17,top:13}}>{props.message}</Text>
              </View>
              <Text style={{fontSize:8,top:'20%',color:'#827F93',position:'absolute',left:'60%'}}>{props.time}</Text>
           </View>
        </View>
           <View style={{
               width:80,
               height:27,
               backgroundColor : '#D9B10E',
               borderRadius:15,
               justifyContent:'center',
               alignItems:'center',
               left:'70%',
               top:'-20%'
           }
           }>
            <Text style={{color:'white'}}>
                Reply
            </Text>
           </View>
           </ImageBackground>
        </View>
    );
}

export default LeftCommentComponent;
