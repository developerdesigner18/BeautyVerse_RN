import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FONTS} from '../../theme/fonts';
import Icon from '../Icon';
import Label from '../Label';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({
  icon,
  label,
  labelColor,
  iconSize,
  bgColor,
  width,
  onPress,
  iconColor,
  left,
  ref,
  fontSize
}) => {
  return (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: bgColor,
        width: width,
        justifyContent: left ? 'flex-start' : 'center',
      }}>
      <Icon source={icon} size={iconSize} color={iconColor} />
      <Label
        label={label}
        color={labelColor}
        fontFamily={FONTS.InterBold}
        marginLeft={wp(2)}
        size={fontSize}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: hp(6),
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default Index;
