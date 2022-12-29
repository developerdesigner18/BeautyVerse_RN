import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../AuthComponents/styles';

const Button = ({title, onPress, btnStyle, bgColor, titleColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.conatiner,
        btnStyle,
        {backgroundColor: bgColor},
      ]}>
      <Text style={[styles.btnTxt, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
