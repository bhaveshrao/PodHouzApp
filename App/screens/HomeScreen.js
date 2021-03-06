import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView ,FlatList,SafeAreaView} from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";
import SearchBar from "react-native-dynamic-search-bar";
import LeftToBeHeardComponent from './Component/Home/LeftToBeHeardComponent';
import SmartTalkComponent from './Component/Home/SmartTalkComponent';
import PotentialAlliessComponent from './Component/Home/PotentialAlliessComponent';


const DATA = [
    {
      id: "1",
      titleA: "Counter Clock",
      imageUserA: require('../Assets/Home/smartTalkUser1.png')
    },
    {
      id: "2",
      titleA: "Dateline NBC",
      imageUserA:require('../Assets/Home/smartTalkUser2.png')

    },
    {
      id: "3",
      titleA: "A True Podcast",
      imageUserA:require('../Assets/Home/smartTalkUser3.png')


    },
    {
      id: "4",
      titleA: "Crime Junkie",
      imageUserA:require('../Assets/Home/smartTalkUser4.png')

    }
]
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
      id: "3",
      title: "Time Lapse",
      subTitle:"Alan Walker",
      imageUserA:require('../Assets/Home/potentialImage3.png')
    }
]
function HomeScreen(navigation) {

    const renderItem = ({ item }) => (

        
        <SmartTalkComponent
            imageUserSmartTalk = {item.imageUserA}
            name = {item.titleA}
            playWhiteIcon = {require('../Assets/Home/playWhite.png')}
            waveIcon = {require('../Assets/Home/wave.png')}
        ></SmartTalkComponent>
      );

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
        <View style={styles.container}>
            <View style = {styles.topContainerView}>
                <Image style={styles.greetingImage} source={require('../Assets/Home/greeting.png')}/>
                <Text style={styles.welcomeText}>Welcome Back,</Text>
            </View>
            <Text style={styles.nameText}>Nestor Jerez</Text>
            <Image style={styles.userImage} source={require('../Assets/Home/userImage.png')}/>
            <Image style={styles.statusImage} source={require('../Assets/Home/onlineIcon.png')}/>
            <View style={styles.rect}> 
        <ScrollView scrollEventThrottle={16} style={styles.scrollViewContainer} automaticallyAdjustContentInsets = {true}>
            <View style={ {height : 1870, width:'100%'}}>
              <SearchBar
                source = {require('../Assets/Home/Rectangle.png')}
                style={styles.searchBarStyle}
                fontColor="#c6c6c6"
                placeholder="Search here"
                placeholderTextColor="#7F7F87"
                searchIconImageSource={require('../Assets/Home/Search.png')}
                onChangeText={(text) => this.filterList(text)}
                onSearchPress={() => console.log("Search Icon is pressed")}
                // onClearPress={() => this.filterList("")}
                onPress={() => alert("onPress")}
                />
                <View style={styles.headContainerView}>
                    <View style={styles.userCounterContainer}>
                         <View style={styles.viewUserImageCounter}>
                            <Image style={styles.counterImage} source={require('../Assets/Home/user1.png')}></Image>
                            <Image style={styles.counterImage} source={require('../Assets/Home/user2.png')}></Image>
                            <Image style={styles.counterImage} source={require('../Assets/Home/user3.png')}></Image>
                            <Image style={styles.counterImage} source={require('../Assets/Home/user4.png')}></Image>
                            <Text style={styles.CounterText}>10</Text>
                            <Text numberOfLines={1} style={styles.CounterTextName}>Austin Counter Clock</Text>
                        </View>
                    </View>
                    <ImageBackground 
                    style={styles.soundBackgroundimage} 
                    source={require('../Assets/Home/micImage.png')}
                    imageStyle={{ borderRadius: 15}}>
                        <View style={styles.liveButtonContainer}>
                            <TouchableWithoutFeedback >
                                <Image
                                    style={styles.liveButoon}
                                    source={require('../Assets/Home/live.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <Image
                                   style={{
                                    left : 80,
                                    marginLeft : 10,
                                    width:80,
                                    height:27
                                   }}
                                   source={require('../Assets/Home/debate.png')}
                                   resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </ImageBackground>
                    <View opacity={0.8} style={styles.bottomContainerView}>
                        <View style={styles.likeContainer}>
                            <TouchableWithoutFeedback >
                                <Image
                                    style={styles.likeButon}
                                    source={require('../Assets/Home/heart.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                            <Text> 2000 </Text>
                        </View>
                        <View style={styles.audioChatContainer}>
                            <TouchableWithoutFeedback >
                                <Image
                                    style={styles.chatButon}
                                    source={require('../Assets/Home/audioChat.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                            <Text style={styles.commentText}> 100 </Text>
                        </View>
                        <TouchableWithoutFeedback >
                                <Image
                                    style={styles.shareButon}
                                    source={require('../Assets/Home/share.png')}
                                    resizeMode={'contain'}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback >
                                <Image
                                    style={styles.groupButon}
                                    source={require('../Assets/Home/noOneToOne.png')}
                                    resizeMode={'contain'}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Image 
                                style={{
                                    width : 30,
                                    height : 40,
                                    left : 210,
                                    position : 'absolute'
                                }}
                                source={require('../Assets/Home/Vector.png')}
                                resizeMode={'contain'}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback >
                                <Image
                                    style={styles.nooneButon}
                                    source={require('../Assets/Home/noone.png')}
                                    resizeMode={'contain'}/>
                        </TouchableWithoutFeedback>
                        <View style={styles.audioContainer}>
                            <TouchableWithoutFeedback >
                                <Image
                                    style={styles.audioButton}
                                    source={require('../Assets/Home/audio.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                            <Text style={styles.audioText}> 5 </Text>
                        </View>
                    </View>
                </View>
                <Text numberOfLines={1} style={styles.leftTobeHeardText}>Left to be Heard</Text>
                <View style={{height:230,width:'100%',top:440}}>
                <SafeAreaView style={{flex: 1}}>

                    <ScrollView style={styles.viewHoriScrollContainer}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                            <LeftToBeHeardComponent
                                imageUri={require('../Assets/Home/scrollImage1.png')}
                                 name="The Holi Festival of Barsana India"
                                 playIcon={require('../Assets/Home/play.png')}/>
                            <LeftToBeHeardComponent
                                imageUri={require('../Assets/Home/scrollImage2.png')}
                                name="Save Animals in Our Forest"
                                playIcon={require('../Assets/Home/play.png')}/>
                    </ScrollView>
                    </SafeAreaView>

                </View>
                    <View style={{height:50,width:'95%',top:440,flexDirection:'row',alignItems:'center',left:20}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Small Talks</Text>
                        <TouchableWithoutFeedback >
                               <Text style={{fontSize:15,marginLeft:'50%'}}>Listen All</Text>
                        </TouchableWithoutFeedback>
                     <SafeAreaView style={{flex: 1,width:'100%',height:220,position:'absolute',top:'100%',left:-10}}>
                        <FlatList style={{height:220,width:'100%',flex:1,position:'absolute'}} 
                                      contentContainerStyle={{ paddingVertical: 11 }}
                                      data={DATA}
                                      numColumns={2}
                                      renderItem={renderItem}
                                        keyExtractor={item => item.id}
                                      >
                        </FlatList>
                    </SafeAreaView>
                    </View>
                    <View style={{height:50,width:'95%',top:635,flexDirection:'row',alignItems:'center',left:20}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Potential Alliess</Text>
                        <TouchableWithoutFeedback >
                               <Text style={{fontSize:15,marginLeft:'35%'}}>Listen All</Text>
                        </TouchableWithoutFeedback>
                    <SafeAreaView style={{flex: 1,width:'100%',height:410,position:'absolute',top:'82%',left:-10}}>
                     <FlatList style={{height:410,width:'100%',flex:1,position:'absolute'}} 
                                      data={PotentialData}
                                      numColumns={1}
                                      renderItem={renderItemAlliess}
                                    keyExtractor={item => item.id}
                                      >
                    </FlatList>
                    </SafeAreaView>

                    </View>
                </View>

                <View style={styles.footerContainerView}>
                    <View style={styles.userCounterContainer}>
                         <View style={styles.viewUserImageCounter}>
                             <Image
                                    style={{width:46,height:46}}
                                    source={require('../Assets/Home/Austin.png')}
                                    resizeMode={'contain'}/>
                            <View style={{height:50,width:'80%',left:10,justifyContent:'center'}}>
                                 <Text numberOfLines={1} style={{fontSize : 17, fontWeight : 'bold',left : 10,  width : 190}}>Austin</Text>
                                <Text numberOfLines={1} style={{fontSize : 13,left : 10,  width : 190,color:'#827F93'}}>Tue,15-05-2022 23:17PM</Text>
                            </View>
                        </View>
                    </View>
                    <ImageBackground 
                    style={styles.soundBackgroundimage} 
                    source={require('../Assets/Home/micImage.png')}
                    imageStyle={{ borderRadius: 15}}>
                    </ImageBackground>
                    <View opacity={0.8} style={styles.bottomContainerView}>
                        <View style={{

                               height : 50,
                               width : 50,
                               left : 10,
                               top:12,
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
                        <View style={styles.audioChatContainer}>
                            <TouchableWithoutFeedback >
                                <Image
                                    style={{ top : 1,
                                        width : 30,
                                        height: 30}}
                                    source={require('../Assets/Home/headset.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                            <Text style={{marginTop : -1}}> 100 </Text>
                        </View>
                        <TouchableWithoutFeedback >
                                <Image
                                    style={{ position : 'absolute',
                                    width : 140,
                                    height: 40, 
                                    left : 115   }}
                                    source={require('../Assets/Home/largeWave.png')}
                                    resizeMode={'contain'}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback >
                                <Image
                                    style={{
                                        position : 'absolute',
                                        width : 45,
                                        height: 45, 
                                        left : 265  
                                    }}
                                    source={require('../Assets/Home/bigPlay.png')}
                                    resizeMode={'contain'}/>
                        </TouchableWithoutFeedback>
                        <View style={styles.audioContainer}>
                            <TouchableWithoutFeedback >
                                <Image
                                    style={{
                                        top: 10,
                                        width :40,
                                        height: 40,  
                                    }}
                                    source={require('../Assets/Home/moreV.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>

            </ScrollView>
            </View>
        <View style={{height:100,width:'100%',position:'absolute',top:'88%',alignItems:'center',justifyContent:'center'}}>
                    <TouchableWithoutFeedback >
                                <Image
                                    style={{width:65,height:65}}
                                    source={require('../Assets/Home/bigPlus.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(44,39,29,1)",
    },
    rect: {
      width: '100%',
      height: '100%',
      backgroundColor: "#E6E6E6",
      marginTop: 120,

    },
    topContainerView :{
        top :70,
        flexDirection : 'row',
        height : 30,
        left : 30,
        width : '60%',
        position : 'absolute'
    },
    greetingImage :{
        width : 14.9,
        height : 14.9
    },
    welcomeText : {
        fontWeight : 'bold',
        fontSize : 14,
        color : 'white',
        marginLeft : 20,
        position : 'absolute'

    },
    nameText : {
        top : '10%',
        fontWeight : 'bold',
        fontSize : 28,
        color : 'white',
        marginLeft : 30,
        marginVertical : 10
    },
    userImage : {
        top : '8%',
        width : 55,
        height : 55,
        left : '80%',
        position : 'absolute'
    },
    statusImage: {
        width : 12,
        height : 12,
        left : '79%',
        top : '7.5%',
        position : 'absolute'
    },
    searchBarStyle :{
        left : 20,
        width : '90%',
        flex : 1,
        height : 48,
        position : 'absolute',
        borderRadius : 20,
        marginTop: 20,
        backgroundColor : '#EFEFFF'

    },
    scollViewParent:{
        overflow : 'hidden'
    },
    scrollViewContainer: {
        width : '100%',
        position : 'absolute',
        height : '100%',
        flex : 1,
        marginTop: 10,
        flexGrow:1 ,
    },
    headContainerView:{
        width : '90%',
        height : 311,
        backgroundColor : '#EFEFFF',
        borderRadius : 15,
        left : 20,
        position : 'absolute',
        overflow : 'hidden',
        marginTop: 90,

    },
    soundBackgroundimage :{
        width : '100%',
        flex : 1,
        marginTop : 60,
        height : '100%',
        position : 'absolute',
        borderRadius : 10
    },
    liveButtonContainer : {
        top : 8,
        height : 30,
        width : '100%',
        position : 'absolute',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',

    },
    liveButoon : {
        left : 80,
        marginLeft : 10
    },
    userCounterContainer : {
        top:'3%',
        height : 50,
        position : 'absolute',
        width : '100%'
    },
    viewUserImageCounter: {
        left : 20,
        width : 150,
        height : 45,
        flexDirection : 'row',
        alignItems : 'center'
    },
    counterImage: {
        width : 32,
        height: 32,
        borderRadius : 16,
        left : 10,
        marginLeft :-13
    },
    CounterText : {
        width : 32,
        height: 32,
        marginLeft :-7,
        borderRadius : 16,
        backgroundColor : '#2C271D',
        textShadowRadius:16,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 16,
        overflow : 'hidden',
        color : 'white',
        textAlign : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        textAlignVertical : 'center',
        lineHeight: 30, // for ios
    },CounterTextName: {
        fontSize : 15,
        fontWeight : 'bold',
        left : 10,
        width : 190,
    },
    bottomContainerView :{
        height  : 62,
        width : '100%',
        backgroundColor : 'white',
        top : '81%',
        overflow : 'hidden',
        alignItems : 'center',
        justifyContent : 'center'
    }, 
    likeContainer :{
        height : 50,
        width : 50,
        left : 10,
        position : 'absolute',
        alignItems : 'center',
    }, likeButon:{
        width : 25,
        height: 25,     
        margin :3   
    },
    audioChatContainer :{
        height : 50,
        width : 50,
        left : 60,
        position : 'absolute',
        alignItems : 'center',
    }, chatButon:{
        top : 4,
        width : 21,
        height: 19,        
    }, commentText: {
        marginTop : 11
    } , 
    shareButon:{
        position : 'absolute',
        width : 30,
        height: 30, 
        left : 115       
    }, 
    groupButon:{
        position : 'absolute',
        width : 30,
        height: 30, 
        left : 165       
    } , 
    peopleButon:{
        position : 'absolute',
        width : 30,
        height: 30, 
        left : 210      
    }, 
    nooneButon:{
        position : 'absolute',
        width : 30,
        height: 30, 
        left : 250       
    },
    audioButton:{
        width :35,
        height: 35,        
    }, 
    audioContainer :{
        height : 50,
        width : 50,
        left : 300,
        position : 'absolute',
        alignItems : 'center',
    }, audioText: {
        marginTop : 1
    }
    ,leftTobeHeardText: {
        fontSize : 18,
        fontWeight : 'bold',
        left : 27,
        width : 190,
        top: 430
    }, viewHoriScrollContainer :{
        height :'100%',
        width : '100%',
        flex :1
   },
   footerContainerView:{
       width : '90%',
       height : 311,
       backgroundColor : '#EFEFFF',
       borderRadius : 15,
       left : 20,
       position : 'absolute',
       overflow : 'hidden',
        top: 1320
   }    


  });
export default HomeScreen;