import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

export const styles = StyleSheet.create({
  //Add Location
  conatiner: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  nextBtn: {
    width: wp(90),
    bottom: hp(3),
    position: 'absolute',
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  cardView: {
    width: wp(90),
    paddingVertical: hp(2),
  },
});
