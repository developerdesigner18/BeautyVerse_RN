import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

export const BusinessPageStyles = StyleSheet.create({
  //MainPageStyle

  Iconstyle: {
    marginHorizontal: 5,
    height: hp(2.5),
    width: hp(2.5),
  },
  homeService: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    padding: 5,
    borderRadius: 8,
  },
  homeServiceText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 13,
    color: Colors.white,
  },
  TimeSetContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
    alignItems: 'center',
    width: wp(90),
    padding: hp(2),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightgrey,
  },
  OpenCloseText: {
    backgroundColor: Colors.lightgreen,
    padding: 4,
    borderRadius: 6,
    color: Colors.white,
    paddingHorizontal: 8,
  },
  PlusImage: {
    height: hp(3.5),
    width: hp(3.5),
    position: 'absolute',
    right: 20,
  },

  //Top Tab Bar Styles

  TabBarText: {
    fontSize: 17,
    color: Colors.primaryDark,
    fontFamily: 'InterV',
    marginHorizontal: 10,
  },
  TabbarView: {
    alignItems: 'center',
  },

  //Hairscreen

  HairscreenMainCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp(5),
  },
  BorderBottomWidth: {
    borderColor: Colors.grey,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginHorizontal: wp(5),
  },

  //hair Professionals
  HeadertextStyle: {
    width: wp(30),
    textAlign: 'center',
    fontFamily: 'InterV',
    flexWrap: 'wrap',
    color: Colors.primaryDark,
  },

  //hair services
  hairsercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
    paddingBottom: hp(2.5),
  },

  //timings bottom sheet

  daytext: {
    fontFamily: 'InterV',
    fontSize: 15,
    color:Colors.darkpink
  },

  //Reviews

  MainCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: wp(90),
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.grey,
  },

  //Book Service

  StraightHairCard: {
    borderRadius: 20,
    marginVertical: hp(2),
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    elevation: 4,
    marginHorizontal: wp(5),
  },
  StraightHairView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: wp(90),
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.grey,
  },
  ServiceLocationView: {
    marginTop: 5,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: wp(5),
    borderColor: Colors.grey,
  },
  AddOnCard: {
    borderRadius: 20,
    marginVertical: hp(2),
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    marginRight: wp(5),
    width: wp(60),
    padding: 18,
    elevation: 4,
  },
  AddOnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DurationText: {
    marginVertical: 5,
    marginBottom: 10,
    fontFamily: 'InterV',
    color: '#9E98AC',
    paddingRight: 10,
  },
  AlertModalView: {
    backgroundColor: Colors.white,
    width: wp(90),
    alignItems: 'center',
    borderRadius: 15,
  },
  AlertText: {
    textAlign: 'center',
    width: '80%',
    fontFamily: 'Inter-Bold',
  },
  SelectProfCard: {
    backgroundColor: 'white',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  SelectProfView: {
    borderTopWidth: 1,
    width: wp(90),
    borderColor: Colors.grey,
    alignSelf: 'center',
    marginTop: hp(1),
    paddingTop: hp(1.5),
  },
  mapCard: {
    height: hp(30),
    width: wp(90),
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: hp(1.5),
    backgroundColor: 'white',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
  },
  mapbottomClick: {
    marginTop: -5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 15,
  },
  maplocbutton:{
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    elevation: 2,
    borderRadius: 100,
    alignSelf: 'flex-end',
    marginBottom: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Map search Modal

  conatiner: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  mapView: {height: '100%', width: '100%'},
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
    alignSelf: 'flex-end',
    // backgroundColor: Colors.transparent1,
    backgroundColor: Colors.lightgrey,
    width: wp(80),
    borderRadius: 100,
    fontSize: hp(2),
  },
  serachWrapper: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: wp(4),
    // marginLeft:wp(1.2),
    // justifyContent:'space-between',
    width: wp(100),
    height: hp(10),
  },
  serachModal: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  marker: {
    height: wp(15),
    width: wp(15),
  },

  // Save Address

  headerMapView: {
    marginVertical: hp(2),
    width: wp(90),
    borderRadius: 20,
    overflow: 'hidden',
    color: Colors.lightGray,
    paddingBottom: hp(1),
    marginBottom: hp(2),
    alignSelf: 'center',
    backgroundColor: Colors.white,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  map: {
    width: wp(100),
    height: wp(40),
  },
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
  },
  nextBtn: {
    width: wp(90),
    bottom: hp(5),
    position: 'absolute',
  },

  //Confirm Booking

  confirmbookingCard: {
    backgroundColor: Colors.white,
    marginVertical: hp(2.5),
    padding: 5,
    borderRadius: 15,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  StraightHairViewbooking: {
    marginLeft: wp(2.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(0.3),
    marginTop: hp(1),
  },
  datetimetext: {
    color: Colors.darkpink,
    marginLeft: wp(2.5),
    fontSize: hp(2),
  },
  editdeleteview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1.5),

  },
  EditButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: wp(2),
    flexDirection: 'row',
    backgroundColor: Colors.peach,
    height: hp(7),
    width: wp(65),
    paddingVertical: wp(1),
    alignItems: 'center',
    borderRadius: 10,
  },
  editImage: {
    height: hp(6),
    tintColor: Colors.primary,
    width: wp(6),
    marginRight: wp(1.5),
  },
  deleteButton: {
    backgroundColor: Colors.lightorange,
    borderRadius: 10,
    height: hp(7),
    width: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteImage: {
    height: hp(4.8),
    width: wp(4.8),
  },


  //Service Details
  detailsmainview:{
    borderTopWidth: 1,
    width: wp(90),
    borderBottomWidth: 1,
    borderColor: Colors.lightgrey,
    paddingVertical: hp(3),
    alignSelf: 'center',
    marginVertical:hp(4),
  },
  servicedetailscard:{
    width: wp(90),
    padding:15,
    alignSelf:'center',
    borderRadius:15,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: Colors.white,
  },
  servicedetailstextview: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(2),
  },
  headertext: {
    fontFamily: 'InterV',
    flexWrap: 'wrap',
    color: Colors.primaryDark,
    fontSize:hp(2)
  },
  boldtext: {
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    paddingLeft: wp(5),
  },
  borderwidthcost:{
    borderBottomWidth: 1,
    borderColor: Colors.lightgrey,
    width: '95%',
    alignSelf: 'center',
    marginVertical: hp(1),
    marginBottom: hp(2),
  },
  costCard:{
    width: wp(90),
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginTop: -10,
    paddingBottom:hp(3),
    borderColor:Colors.lightgrey

  }
});
