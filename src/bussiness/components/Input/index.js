import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../theme/colors';
import {FONTS} from '../../theme/fonts';

const Index = ({
  placeholder,
  onChangeText,
  value,
  label,
  width,
  onTouchStart,
  size,
  bgColor,
  keyboardType,
  vertical,
  top,
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onTouchStart={onTouchStart}
      onChangeText={onChangeText}
      mode="outlined"
      defaultValue={label}
      outlineColor={Colors.lightGray2}
      activeOutlineColor={Colors.primary}
      placeholder={placeholder}
      keyboardType={keyboardType ? keyboardType : 'default'}
      style={{
        width: width,
        fontSize: size,
        backgroundColor: bgColor ? bgColor : Colors.white,
        color: Colors.primary_dark,
        fontFamily: FONTS.InterRegular,
        marginVertical: vertical,
        marginTop: top,
      }}
    />
  );
};

export default Index;
