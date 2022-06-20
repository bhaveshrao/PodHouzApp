import React, {useState} from 'react';

import PropTypes from 'prop-types';
import {
  View,ActivityIndicator,StyleSheet
} from 'react-native';

function AppLoaderIndicator(props) {
    const { children, hide, style } = props;
    const [loading, setLoading] = useState(false);



  const startLoading = () => {
    setLoading(true);
  };
  const stopLoading = () => {
    setLoading(false);
  };

    if (hide) {
      return null;
    }
    return (
        <View style={{width:'100%',height:'100%',backgroundColor:'blur',opacity:0.5}}>
        <View style={styles.spinnerContainer} >
          {loading ? (
            <ActivityIndicator
           //visibility of Overlay Loading Spinner
             size='large'
             color="black"
             visible={loading}
           //Text with the Spinner
             textContent={'Loading...'}
           //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
         />
         ) : (
         <>
         </>
       )}
     </View>
   </View>
    );
}

const styles = StyleSheet.create({

    spinnerContainer: {
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      spinnerTextStyle: {
        color: 'white',
      }

});
// AppLoaderIndicator.propTypes = {
//     children: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.element,
//       PropTypes.number,
//       PropTypes.arrayOf(PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//         PropTypes.element,
//       ])),
//     ]).isRequired,
//     style: ViewPropTypes.style,
//     hide: PropTypes.bool,
//   };

export default AppLoaderIndicator;
