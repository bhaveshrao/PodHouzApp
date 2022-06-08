import React from 'react';

function OTPScreen(props) {
    return (
        <View style={styles.container}>
         <ImageBackground
                resizeMode="cover"
                style={styles.background}
                 source={require('../assets/OTP/OTPBackground.png')}>

       </ImageBackground>
     </View>
    );
}

const styles = StyleSheet.create({
    background : {
        width : '100%',
        height : '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor:'red',
        justifyContent: "center"
    },
})

export default OTPScreen;