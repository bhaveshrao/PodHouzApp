import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView ,KeyboardAvoidingView} from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";
import SearchBar from "react-native-dynamic-search-bar";
import LeftToBeHeardComponent from './Component/Home/LeftToBeHeardComponent';
function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <View style = {styles.topContainerView}>
                <Image style={styles.greetingImage} source={require('../assets/Home/greeting.png')}/>
                <Text style={styles.welcomeText}>Welcome Back,</Text>
            </View>
            <Text style={styles.nameText}>Nestor Jerez</Text>
            <Image style={styles.userImage} source={require('../assets/Home/userImage.png')}/>
            <Image style={styles.statusImage} source={require('../assets/Home/onlineIcon.png')}/>
        <View style={styles.rect}> 
        <ScrollView scrollEventThrottle={16} style={styles.scrollViewContainer} automaticallyAdjustContentInsets = {true}>
            <View style={ {height : 1000, width:'100%'}}>
              <SearchBar
                source = {require('../assets/Home/Rectangle.png')}
                style={styles.searchBarStyle}
                fontColor="#c6c6c6"
                placeholder="Search here"
                placeholderTextColor="#7F7F87"
                searchIconImageSource={require('../assets/Home/Search.png')}
                onChangeText={(text) => this.filterList(text)}
                onSearchPress={() => console.log("Search Icon is pressed")}
                // onClearPress={() => this.filterList("")}
                onPress={() => alert("onPress")}
                />
                <View style={styles.headContainerView}>
                    <View style={styles.userCounterContainer}>
                         <View style={styles.viewUserImageCounter}>
                            <Image style={styles.counterImage} source={require('../assets/Home/user1.png')}></Image>
                            <Image style={styles.counterImage} source={require('../assets/Home/user2.png')}></Image>
                            <Image style={styles.counterImage} source={require('../assets/Home/user3.png')}></Image>
                            <Image style={styles.counterImage} source={require('../assets/Home/user4.png')}></Image>
                            <Text style={styles.CounterText}>10</Text>
                            <Text numberOfLines={1} style={styles.CounterTextName}>Austin Counter Clock</Text>
                        </View>
                    </View>
                    <ImageBackground 
                    style={styles.soundBackgroundimage} 
                    source={require('../assets/Home/micImage.png')}
                    imageStyle={{ borderRadius: 15}}>
                        <View style={styles.liveButtonContainer}>
                            <TouchableWithoutFeedback >
                                <Image
                                    style={styles.liveButoon}
                                    source={require('../assets/Home/live.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <Image
                                   style={styles.liveButoon}
                                   source={require('../assets/Home/debate.png')}
                                   resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </ImageBackground>
                    <View opacity={0.8} style={styles.bottomContainerView}>
                        <View style={styles.likeContainer}>
                            <TouchableWithoutFeedback >
                                <Image
                                    style={styles.likeButon}
                                    source={require('../assets/Home/heart.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                            <Text> 2000 </Text>
                        </View>
                        <View style={styles.audioChatContainer}>
                            <TouchableWithoutFeedback >
                                <Image
                                    style={styles.chatButon}
                                    source={require('../assets/Home/audioChat.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                            <Text style={styles.commentText}> 100 </Text>
                        </View>
                        <TouchableWithoutFeedback >
                                <Image
                                    style={styles.shareButon}
                                    source={require('../assets/Home/share.png')}
                                    resizeMode={'contain'}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback >
                                <Image
                                    style={styles.groupButon}
                                    source={require('../assets/Home/group.png')}
                                    resizeMode={'contain'}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback >
                                <Image
                                    style={styles.peopleButon}
                                    source={require('../assets/Home/people.png')}
                                    resizeMode={'contain'}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback >
                                <Image
                                    style={styles.nooneButon}
                                    source={require('../assets/Home/noone.png')}
                                    resizeMode={'contain'}/>
                        </TouchableWithoutFeedback>
                        <View style={styles.audioContainer}>
                            <TouchableWithoutFeedback >
                                <Image
                                    style={styles.audioButton}
                                    source={require('../assets/Home/audio.png')}
                                    resizeMode={'contain'}/>
                            </TouchableWithoutFeedback>
                            <Text style={styles.audioText}> 5 </Text>
                        </View>
                    </View>
                </View>
                <Text numberOfLines={1} style={styles.leftTobeHeardText}>Left to be Heard</Text>
                <View style={{height:230,width:'100%',top:440}}>
                    <ScrollView style={styles.viewHoriScrollContainer}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                            <LeftToBeHeardComponent
                                imageUri={require('../assets/Home/scrollImage1.png')}
                                 name="The Holi Festival of Barsana India"
                                 playIcon={require('../assets/Home/play.png')}/>
                            <LeftToBeHeardComponent
                                imageUri={require('../assets/Home/scrollImage2.png')}
                                name="Save Animals in Our Forest"
                                playIcon={require('../assets/Home/play.png')}/>
                    </ScrollView>
                </View>
                    <View style={{height:50,width:'90%',top:440,flexDirection:'row',alignItems:'center',left:30}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Small Talks</Text>
                        <TouchableWithoutFeedback >
                               <Text style={{fontSize:15,marginLeft:'50%'}}>Listen All</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
         </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(44,39,29,1)"
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
        maxHeight  :  1000
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
        top : 5,
        width : 30,
        height: 30,        
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
        marginTop : 10
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
   }    
  });
export default HomeScreen;