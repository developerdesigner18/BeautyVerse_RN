import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {FONTS} from '../../theme/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({value, onChangeText, placeholder, width}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.lightGray3}
      style={{...styles.container, width: width}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.lightGray2,
    paddingHorizontal: wp(2),
    marginVertical: hp(2),
    fontFamily: FONTS.InterRegular,
    fontSize: hp(2),
    height: hp(7),
    backgroundColor: Colors.white,
  },
});

export default Index;
