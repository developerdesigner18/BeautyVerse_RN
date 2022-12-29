//import liraries
import React, {  } from 'react';
import {  Text ,TouchableOpacity,Image } from 'react-native';
import { AuthStyles } from '../../screens/SplashScreen/AuthScreens/AuthStyles';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../../theme/layout';
  import { Colors } from '../../theme/colors';

// create a component
const BackButton = ({onPress}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
           style={AuthStyles.BackButton}
           >
            <Image
            resizeMode='contain'
            style={{height:hp(2.8),width:hp(2.8),tintColor:Colors.white}}
            source={require('../../assets/AuthScreen/Back.png')}
            />
           </TouchableOpacity>
    );
};

// define your styles

//make this component available to the app
export default BackButton;
