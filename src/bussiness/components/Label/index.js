import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Label = ({
  label,
  bold,
  medium,
  size,
  right,
  left,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  paddingVertical,
  color,
  fontFamily,
  top,
  lineHeight,
}) => {
  return (
    <Text
      style={[
        bold ? styles.bold : medium ? styles.mudium : styles.mudium,
        {
          fontSize: size,
          textAlign: right ? 'right' : left ? 'left' : 'center',
          marginRight: marginRight,
          marginLeft: marginLeft,
          marginBottom: marginBottom,
          marginTop: marginTop,
          paddingVertical: paddingVertical,
          paddingTop: top,
          color: color,
          fontFamily: fontFamily,
          lineHeight: lineHeight,
        },
      ]}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    paddingVertical: hp(1),
  },
  mudium: {
    fontSize: hp(2),
    fontWeight: '300',
  },
});

export default Label;
