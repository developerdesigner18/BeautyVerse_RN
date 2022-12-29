
import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';


export  const OrderStyles = StyleSheet.create({

paymentmethodcard:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: wp(90),
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: Colors.white,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.2,
    elevation: 2,
},
selectprofcard:{
    backgroundColor: Colors.white,
    borderRadius: 15,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(3.5),
    borderBottomWidth: 1,
    width: wp(90),
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.grey,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.2,
    elevation: 2,
},

//Top Tab Style
TabView:{
  width: wp(42),
  marginLeft: wp(1),
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center',
  alignSelf: 'center',
  paddingVertical: 5,
  borderRadius: 15,
}

})