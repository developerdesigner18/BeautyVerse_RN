import {StyleSheet, Dimensions, Platform} from 'react-native';
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
  mapView: {
    height: '100%',
    width: '100%',
  },
  bottomView: {
    bottom: hp(4),
    position: 'absolute',
  },
  mapBtn: {
    width: wp(90),
  },
  backBtn: {
    height: wp(5),
    width: wp(5),
  },
  searchView: {
    backgroundColor: Colors.lightGray,
    width: wp(80),
    marginLeft: wp(10),
    borderRadius: 20,
    fontSize: hp(2),
    overflow: 'hidden',
  },
  serachWrapper: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    width: wp(100),
    paddingVertical: hp(3),
    backgroundColor: Colors.white,
  },
  serachModal: {flex: 1, backgroundColor: Colors.white},
  marker: {
    height: wp(15),
    width: wp(15),
  },

  //Address details
  headerMapView: {
    width: wp(90),
    borderRadius: 10,
    overflow: 'hidden',
    color: Colors.lightGray,
    paddingBottom: hp(1),
    marginBottom: hp(2),
    marginTop: hp(3),
  },
  map: {width: wp(100), height: wp(40)},
  editView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  inputWrapper: {
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    marginBottom: hp(2),
    alignItems: 'center',
  },
  nextBtn: {
    width: wp(90),
    bottom: hp(5),
    position: 'absolute',
  },

  //Business Timing
  dropdown: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.lightGray2,
    paddingHorizontal: wp(4),
    width: wp(40),
    paddingVertical: hp(2),
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  services: {
    width: wp(100),
    paddingHorizontal: wp(4),
    paddingTop: hp(1),
    backgroundColor: Colors.white,
  },
  roundBack: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  backView: {
    position: 'absolute',
    // alignSelf: 'flex-start',
    left: wp(4),
    top: Platform.OS == 'android' ? hp(2) : hp(7),
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  markerBtn: {
    alignSelf: 'flex-end',
    bottom: hp(2),
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 3,
  },
});
