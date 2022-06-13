import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
function LeftToBeHeardComponent(props) {
    return (
        <View style={styles.headComponentView}>
                            <View style={{width:'100%',height:160}}>
                                <Image
                                    style={{height:null,width:null,resizeMode:'cover',flex:1,top:-2}}
                                    source={props.imageUri}
                                    />
                            </View>
                            <View style={{height:35,width:'98%',left:2,flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontSize:13}}>{props.name}</Text>
                                <Image
                                    style={{height:17,width:17,resizeMode:'cover',right:-20}}
                                    source={props.playIcon}
                                    />
                              </View>
         </View>
    );
}
const styles = StyleSheet.create({
    headComponentView:{
        width : 248,
        height : 200,
        backgroundColor : '#EFEFFF',
        borderRadius : 15,
        overflow : 'hidden',
        margin:20,
    }
  });
export default LeftToBeHeardComponent;