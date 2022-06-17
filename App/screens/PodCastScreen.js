import React from 'react';
import { View,Text,TouchableWithoutFeedback,Image,ImageBackground,FlatList} from 'react-native';

const DATA = [
    {
      id: "1",
      titleA: "Jhon Deo",
      imageUserA: require('../assets/Home/user1.png')
    },
    {
      id: "2",
      titleA: "Benjamin",
      imageUserA:require('../assets/Home/user2.png')

    },
    {
      id: "3",
      titleA: "Benjamin",
      imageUserA:require('../assets/Home/user3.png')


    },
    {
      id: "4",
      titleA: "Jhon Deo",
      imageUserA:require('../assets/Home/user4.png')

    },
    {
        id: "5",
        titleA: "Benjamin",
        imageUserA: require('../assets/Home/user1.png')
      },
      {
        id: "6",
        titleA: "Benjamin",
        imageUserA:require('../assets/Home/user2.png')
  
      },
      {
        id: "7",
        titleA: "Benjamin",
        imageUserA:require('../assets/Home/user3.png')
  
  
      },
      {
        id: "8",
        titleA: "Jhon Deo",
        imageUserA:require('../assets/Home/user4.png')
  
      }  ,
      {
        id: "9",
        titleA: "Jhon Deo",
        imageUserA:require('../assets/Home/user1.png')
  
      },
      {
        id: "10",
        titleA: "Jhon Deo",
        imageUserA:require('../assets/Home/user2.png')
  
      }
]
function PodCastScreen(props) {

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
                                    source={require('../assets/notification.png')}
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
                 source={require('../assets/PodCast/podCastBanner.png')}>
                     <ImageBackground style={{
                         width: 100,
                         height:100,
                         top :-35,
                         alignItems:'center',
                         justifyContent : 'center'
                     }}
                     source={require('../assets/PodCast/blurrUser.png')}>
                           <Image
                                    style={{width:80,height:80,position:'absolute'}}
                                    source={require('../assets/PodCast/podCastUser.png')}
                                    />
                     </ImageBackground>
                     <Text style={{fontSize:20,fontWeight:'bold',color:'white',position:'absolute',top:'57%'}}>Shizuka</Text>
                     <Text style={{fontSize:15,fontWeight:'Medium',color:'white',position:'absolute',top:'67%'}}>Writer</Text>
                     <Text style={{fontSize:20,fontWeight:'bold',color:'white',position:'absolute',top:'77%'}}>The Holi Festival of Barsana India</Text>

            </ImageBackground>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#263238',top:'51%',left:'7%',position:'absolute'}}>Speakers</Text>
            
            <FlatList style={{height:300, top:'54%',width:'100%',flex:1,position:'absolute'}} 
                                      contentContainerStyle={{ paddingVertical: 11 }}
                                      data={DATA}
                                      numColumns={5}
                                      renderItem={renderItem}
                                        keyExtractor={item => item.id}
                                      >
            </FlatList>

        </View>
        
    );
}

export default PodCastScreen;