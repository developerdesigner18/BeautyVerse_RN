import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Images} from '../../theme/images';
import Icon from '../Icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon source={Images.add} size={hp(6)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Index;
