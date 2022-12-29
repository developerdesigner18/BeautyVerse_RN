import {StyleSheet} from 'react-native';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Colors} from '../../theme/colors';

export const Searchstyles = StyleSheet.create({
  // Search Bar

  MainView: {
    paddingLeft:wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  SearchBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: wp(75),
    paddingVertical: Platform.OS === 'ios' ? 15 : 0,
    borderRadius: 30,
    borderColor: Colors.lightgrey,
  },
  SearchIcon: {
    height: hp(2.5),
    width: hp(2.5),
  },
  mapIcon: {
    height: hp(3.5),
    width: hp(3.5),
    marginLeft: wp(5),
  },

  //Recomendded business main list view style

  mainListMaker: {
    flexDirection: 'row',
    marginRight: wp(5),
  },
  ProfileImageCon: {
    height: hp(15),
    width: hp(15),
    borderRadius: 20,
  },
  Businessnamecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp(1),
  },
  StartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp(2),
  },
  BorderBottomStyle: {
    borderBottomWidth: 1,
    paddingTop: hp(3),
    width: wp(90),
    borderColor: Colors.grey,
  },

  //sort and filter butons style

  MainViewSF: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp(3),
    alignSelf: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 2, height: 5},
    shadowRadius: 15,
    elevation: 3,
    backgroundColor: 'white',
  },

  SFText: {
    padding: 5,
    paddingHorizontal: 10,
    color: Colors.primaryDark,
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
  },

  sortButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  filterButtonStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
});
