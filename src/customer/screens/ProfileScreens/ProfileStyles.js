//import liraries
import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

// create a component
export const ProfileStyles = StyleSheet.create({
  //Profile Home Screen

  profileCard: {
    width: wp(90),
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    elevation: 2,
    marginVertical: hp(1.5),
    marginHorizontal: wp(0.5),
  },

  // My Profile

  profileAvtarview: {
    alignItems: 'center',
    borderBottomWidth: 1,
    width: wp(90),
    alignSelf: 'center',
    marginVertical: hp(2.5),
    borderColor: Colors.grey,
  },

  //Profile Image Picker

  profilepicview: {
    height: hp(15),
    width: hp(15),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camerapickershadow: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    top: hp(5),
    backgroundColor: Colors.white,
    padding: hp(1.4),
    borderRadius: 100,
  },

  //Wallet Home

  walletMainCard: {
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 20,
    marginVertical: hp(2.5),
  },
  PaymentMethodCard: {
    marginVertical: hp(1.7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 20,
    width: wp(90),
    alignSelf: 'center',
  },
  initialImageBanner: {
    height: hp(6.5),
    width: hp(6.5),
    marginRight: wp(2.5),
  },

  // Faq's Screen

  FAQcard: {
    width: wp(90),
    alignSelf: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    marginTop: hp(2),
  },
  TextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ProfileStyles;
