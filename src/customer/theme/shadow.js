//import liraries
import {StyleSheet} from 'react-native';
import { Colors } from '../../customer/theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

// create a component
export const Shadow = StyleSheet.create({
  //Profile Home Screen
    shadowLow:{
        backgroundColor:Colors.white,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
    },
    shadowNormal:{
        backgroundColor:Colors.white,
        shadowOffset: {width: 2.5, height: 2.5},
        shadowOpacity: 0.5,
        elevation: 3,
    },
    shadowHigh:{
        backgroundColor:Colors.white,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        elevation: 5,
    }


});

//make this component available to the app
