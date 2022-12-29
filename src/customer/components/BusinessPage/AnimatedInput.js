import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const AnimatedInput = ({placeholder, onChangeText, value, label, width,allstyle}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      defaultValue={label}
      outlineColor={Colors.peach}
      activeOutlineColor={Colors.primary}
      placeholder={placeholder}
      style={[allstyle,{width: width,backgroundColor:Colors.white}]}
    />
  );
};

const styles = StyleSheet.create({});

export default AnimatedInput;




