import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

export const styles = StyleSheet.create({
  conatiner: {
    height: hp(6),
    width: wp(80),
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    marginVertical:hp(1),
  },
  btnTxt: {
    color: Colors.primary,
    fontWeight:'600',
    fontSize:hp(2)
  }
});
