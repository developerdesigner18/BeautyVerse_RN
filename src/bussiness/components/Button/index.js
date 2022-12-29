import React from 'react';
import {TouchableOpacity} from 'react-native';
import Label from '../Label';
import {styles} from './styles';
import {FONTS} from '../../theme/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Button = ({title, onPress, btnStyle, bgColor, titleColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.conatiner, btnStyle, {backgroundColor: bgColor}]}>
      <Label
        label={title}
        fontFamily={FONTS.InterSemiBold}
        color={titleColor}
        size={hp(1.8)}
      />
    </TouchableOpacity>
  );
};

export default Button;
