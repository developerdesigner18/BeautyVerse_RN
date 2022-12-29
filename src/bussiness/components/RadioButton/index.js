import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Images} from '../../theme/images';
import {Colors} from '../../theme/colors';
import Icon from '../Icon';
import Label from '../Label';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({checked, label, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {checked ? (
          <Icon source={Images.radioFill} size={hp(3)} />
        ) : (
          <Icon source={Images.radio} size={hp(3)} />
        )}
      </TouchableOpacity>
      <Label label={label} color={Colors.primary_dark} marginLeft={wp(2)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Index;
