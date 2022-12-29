import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

export const AuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  BackButton: {
    height: hp(6),
    width: hp(4),
    backgroundColor: 'transparent',
    position: 'absolute',
    top: hp(2),
    left: hp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomSlideRegistration: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: hp(72),
  },
  BottomSlideLogin: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: hp(65),
  },
  BottomSlideForgot: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: hp(35),
  },
  BottomSlideReset: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: hp(45),
  },
  HeaderTextStyle: {
    fontSize: hp(3.5),
    paddingTop:hp(1.3),
    paddingBottom:hp(1.3),
    color: '#301E39',
    fontFamily:'Inter-Bold',
    // fontWeight: '700',
  },

  //Add Image

  profileView: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: hp(4),
  },
  pictureView: {
    height: hp(25),
    width: hp(25),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    top: hp(25),
  },
  addImage: {
    height: hp(2),
    width: hp(2),
  },
  titleTxt: {
    fontWeight: '600',
    fontSize: hp(3),
    color: Colors.primaryDark,
  },
  cameraImage: {
    height: hp(3.5),
    width: hp(3.5),
  },
  cameraView: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    top: hp(8),
    backgroundColor: Colors.white,
    padding: hp(1.4),
    borderRadius: 100,
  },
  optionView: {
    bottom: 3,
    position: 'absolute',
  },
  addImage: {
    height: hp(5),
    width: hp(5),
  },

  //Logo Style
  LogoSize: {
    alignSelf: 'center',
    height: hp(5.5),
    width: wp(70),
  },
});
