import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  serviceView: {
    flex: 1,
    paddingHorizontal: wp(4),
    backgroundColor: Colors.white,
    paddingVertical: hp(3),
  },
  addButton: {
    alignSelf: 'flex-end',
    bottom: hp(2),
    position: 'absolute',
    right: wp(3),
  },
  addBtn: {
    width: wp(90),
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
  },
  modal: {
    backgroundColor: Colors.white,
    height: hp(50),
    width: wp(100),
    alignSelf: 'center',
    bottom: hp(-5),
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: wp(5),
    paddingBottom: hp(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceWrapper: {
    width: wp(90),
    marginHorizontal: wp(2),
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    paddingVertical: hp(2),
  },
  inputWrapper: {
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    marginVertical: hp(2),
    alignItems: 'center',
  },
  radioView: {
    marginVertical: hp(2),
    width: wp(30),
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  addOnsView: {
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    marginTop: hp(2),
    paddingTop: hp(2),
  },
  checkBox: {
    backgroundColor: Colors.white,
    borderWidth: 0,
    paddingHorizontal: 0,
  },
  moreBtn: {
    backgroundColor: Colors.lightGray2,
    height: hp(15),
    width: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20
  },
});
