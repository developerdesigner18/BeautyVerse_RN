import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

export const styles = StyleSheet.create({
  //Splash screen
  splashView: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  optionView: {
    bottom: hp(3),
    position: 'absolute',
  },
  logo: {
    marginTop:hp(45)
  }, 
  loginBtn: {
    marginBottom:hp(1)
  },

  //Add profile picture
  profileView: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: hp(4),
  },
  pictureView: {
    height: hp(20),
    width: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
    top: hp(30),
  },
  addImage: {
    height: hp(5),
    width: hp(5),
  },
  titleTxt: {
    fontWeight: '600',
    fontSize: hp(3),
    color: Colors.primary_dark,
  },
  cameraImage: {
    height: hp(4),
    width: hp(4),
  },
  cameraView: {
    alignSelf: 'flex-end',
    top: hp(8),
    backgroundColor: Colors.white,
    padding:hp(1),
    borderRadius: 100
  },
});
