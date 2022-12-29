//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../src/customer/theme/layout';

// create a component
const Textnormal = ({entertext,Allstyle}) => {
  return (
    <Text style={[{color: Colors.darkpink, fontFamily:'InterV',fontSize:hp(2.2),},Allstyle]}>{entertext}</Text>
  );
};

// define your styles

//make this component available to the app
export default Textnormal;
