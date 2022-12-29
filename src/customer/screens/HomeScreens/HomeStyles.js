//import liraries
import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

// create a component
export const HomeStyles = StyleSheet.create({


  container:{
    flex:1,
    backgroundColor:Colors.white
  },

  //Bussinesscategories

  BussinessCatView: {
    borderColor: '#EEE6F1',
    borderRadius: 15,
    alignItems:'center',
    // paddingHorizontal:-70,
    flexDirection: 'row',
  },
  BussinessCatIcon:{
    height: hp(2.7),
    width: hp(2.7),
    tintColor: "#9E98AC"
  },
  BussinessCatText:{
    fontWeight: '400',
    fontSize: 12.5,
    marginHorizontal: 8,
    color:Colors.primaryDark
  },

  TabbarView: {
    borderColor: '#EEE6F1',
    borderRadius: 15,
    paddingVertical: 10,
    alignItems:'center',
    paddingHorizontal:12,
    marginHorizontal:-5,
    // paddingHorizontal:-70,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  TabiconSize: {
    height: hp(3.5),
    width: hp(3.5),
  },
  TabBarText:{
    fontWeight: '600',
    fontSize: 17,
    textTransform: 'none',
    marginHorizontal: 8,
  },

  // All Categories

  ArrowHeader:{
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
