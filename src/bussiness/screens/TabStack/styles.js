import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  notpressed: {
    height: 20,
    width: 20,
  },
  pressed: {
    height: 20,
    width: 20,
    marginHorizontal: 20,
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: wp(1),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    backgroundColor: Colors.transparent,
  },
  tabTitle: {
    marginLeft: wp(1),
    color: Colors.white,
    fontWeight: '600',
  },
  //Home Screen
  tabBarStyle: {
    backgroundColor: Colors.lightGray,
    borderRadius: 15,
    alignSelf: 'center',
    width: wp(90),
    top: hp(2),
    elevation: 1, // for Android
    shadowOffset: {
      width: 0,
      height: 0, // for iOS
    },
  },
  tabBarIndicatorStyle: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  tabBarItemStyle: {
    margin: -5,
  },
  tabBarLabelActive: {
    backgroundColor: Colors.white,
    width: wp(42),
    marginLeft: wp(1),
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: hp(1),
    borderRadius: 10,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  tabBarLabel: {
    backgroundColor: Colors.lightGray,
    width: wp(42),
    marginLeft: wp(1),
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: hp(1),
    borderRadius: 10,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    elevation: 0,
  },

  //New Tab
  newTab: {
    paddingHorizontal: wp(3),
    paddingTop: hp(3),
    backgroundColor: Colors.white,
  },
  bookingView: {
    marginBottom: hp(2),
    borderBottomWidth: 2,
    borderBottomColor: Colors.border,
    paddingBottom: hp(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: hp(2),
  },
  btn: {height: hp(5), width: wp(45), marginVertical: 0},
  //Order detail
  customerView: {
    backgroundColor: Colors.white,
    paddingHorizontal: wp(2),
    paddingVertical: hp(3),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: Colors.lightRed,
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
  addButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: wp(3),
  },
  bottomHeader: {
    backgroundColor: Colors.white,
    height: hp(10),
    width: wp(100),
    bottom: 0,
    position: 'absolute',
  },
  calendarView: {
    backgroundColor: Colors.white,
    paddingHorizontal: wp(4),
    flexDirection:'row'
  },
});
