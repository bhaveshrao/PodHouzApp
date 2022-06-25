import React from 'react';
import { View,Text,TouchableWithoutFeedback,Image,TouchableOpacity,FlatList,ImageBackground} from 'react-native';

function RightCommentComponent(props) {
    return (
        <View style={{width:'100%',height:100,overflow:'hidden', color:'white',margin:2}}>
        <ImageBackground
            style={{width:'95%',height:'100%',borderRadius:10}}
            source={props.commentBackground}
         >
          <View style={{height:80,width:'90%',borderRadius:20,margin:15,flexDirection:'row',alignItems:'center',overflow:'hidden',shadowColor:'black'}}>
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
           </ImageBackground>
        </View>
    );
}

export default RightCommentComponent;
