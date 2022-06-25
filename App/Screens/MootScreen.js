import React from 'react';

function MootScreen(props) {
    return (
        <View style={{width:'100%',height:100,backgroundColor:'#2C271D',position:'absolute',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white',top:10}}>Comment</Text>
                <TouchableWithoutFeedback >
                                <Image
                                    style={{width:15,height:15,left:'88%',top:'50%',position:'absolute'}}
                                    source={require('../assets/notification.png')}
                                    />
                </TouchableWithoutFeedback>
         </View>
    );
}

export default MootScreen;