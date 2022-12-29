import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customerView: {
    backgroundColor: Colors.white,
    paddingHorizontal: wp(2),
    paddingVertical: hp(3),
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  detailView: {
    marginTop: hp(4),
    paddingTop: hp(2),
  },
  headerMapView: {
    width: wp(90),
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  map: {width: wp(90), height: wp(40)},
  editView: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  bottomBtns: {width: wp(90), marginVertical: hp(1)},
  bottomView: {alignSelf: 'center', marginVertical: hp(3)},
});
