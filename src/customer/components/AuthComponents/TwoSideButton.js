//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image ,TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../../theme/layout';
  import {styles} from '../AuthComponents/styles';

// create a component
const TwoSideButton = ({title,onPress,bgColor,btnStyle,titleColor}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={[
          styles.conatiner,
          btnStyle,
          {backgroundColor: bgColor, flexDirection: 'row'},
        ]}>
            <Image
            resizeMode='contain'
            style={{height:hp(3),width:hp(3),marginRight:20}}
            source={require('../../assets/AuthScreen/Google.png')}
            />
        <Text style={[styles.btnTxt, {color: titleColor,fontSize:hp(2.2)}]}>{title}</Text>
      </TouchableOpacity>
    );
};

//make this component available to the app
export default TwoSideButton;
