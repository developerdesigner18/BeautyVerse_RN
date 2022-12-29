//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BusinessPageStyles} from '../../screens/BusinessPage/BusinessPageStyles';
import SemiBold from '../HomeComponent/SemiBold';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import PriceAmt from './PriceAmt';

// create a component
const ServiceDetails = ({maintext, detailstext,showprice,Amounttext,AmountStyle,StyleView,fontFamily}) => {
  return (
    <View style={[BusinessPageStyles.servicedetailstextview,StyleView]}>
      <Text style={[BusinessPageStyles.headertext,{fontFamily:fontFamily}]}>{maintext}</Text>
      {showprice === 'show' ? (
        <PriceAmt 
        Allstyle={AmountStyle}
        FontSize={hp(2.2)}
        Amount={Amounttext} 
        />
      ) : (
        <SemiBold
          FontSize={hp(2.0)}
          AllStyle={BusinessPageStyles.boldtext}
          EnterText={detailstext}
        />
      )}
    </View>
  );
};

// define your styles

//make this component available to the app
export default ServiceDetails;
