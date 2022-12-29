import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Label from '../Label';
import Icon from '../Icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Colors} from '../../theme/colors';
import { FONTS } from '../../theme/fonts';

const Section = ({source, label, onPress, color, bgColor, style}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: bgColor}, style]}
      onPress={onPress}>
      <Icon source={source} size={hp(3)} color={color} />
      <Label label={label} fontFamily={FONTS.InterBold} marginLeft={wp(2)} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.lightGray2,
    borderRadius: 10,
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: wp(30),
    width: wp(43),
    marginVertical: wp(2.5),
  },
});

export default Section;
