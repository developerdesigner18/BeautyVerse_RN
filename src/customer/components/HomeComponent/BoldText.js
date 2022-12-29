//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../../theme/layout';
  import {Colors} from '../../theme/colors';


// create a component
const BoldText = ({EnterText,FontSize,AllStyle}) => {
  return (
    <Text
      style={[styles.SemiBoldText,AllStyle,{fontSize:FontSize}]}>
      {EnterText}
    </Text>
  );
};

const styles = StyleSheet.create({

    SemiBoldText: {
        paddingVertical: hp(0.8),
        color: Colors.primaryDark,
        fontFamily: 'Inter-Bold',
    },
  });

export default BoldText;
