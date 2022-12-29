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
  mainView: {
    flex: 1,
    paddingHorizontal: wp(4),
    backgroundColor: Colors.white,
    paddingVertical: hp(3),
  },
  //My Profile
  profileView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingBottom: hp(3),
    marginBottom: hp(3),
  },
  //Edit Profile
  iconView: {
    backgroundColor: Colors.white,
    width: hp(10),
    height: hp(10),
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: hp(2),
  },
  cameraBtn: {
    alignSelf: 'flex-end',
    bottom: 0,
    position: 'absolute',
  },
  inputWrapper: {
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(4),
  },
  addBtn: {
    width: wp(90),
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
  },
  closeBtn: {
    backgroundColor: Colors.white,
    height: hp(3),
    width: hp(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  imageBg: {
    height: hp(15),
    width: hp(15),
    alignItems: 'flex-end',
    paddingTop: hp(1),
    paddingRight: wp(2),
    marginRight: wp(2),
  },
  addImg: {
    height: hp(15),
    width: hp(15),
    paddingTop: hp(1),
    paddingRight: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGray2,
    borderRadius: 10,
    marginRight: wp(2),
  },
  bottomView: {
    marginTop: hp(3),
    backgroundColor: Colors.white,
  },
  securityView: {
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    paddingTop:hp(3)
  },
});
