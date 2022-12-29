import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({close}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={close}></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    height: wp(2),
    width: wp(20),
    alignSelf: 'center',
    borderRadius: 100,
    marginVertical: hp(1.5),
  },
});

export default Index;
