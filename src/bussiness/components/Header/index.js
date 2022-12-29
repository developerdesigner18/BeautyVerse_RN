import React from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {Colors} from '../../theme/colors';
import {Images} from '../../theme/images';
import {FONTS} from '../../theme/fonts';
import Icon from '../Icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import Label from '../Label';

const Index = ({onPressBack, headerTitle, noBack, hide, rightLabel}) => {
  return (
    <View
      style={hide ? styles.container : [styles.container, styles.separator]}>
      {noBack ? (
        <View style={styles.backBtn}></View>
      ) : rightLabel ? (
        <Label
          label={rightLabel}
          left
          color={Colors.primary_dark}
          fontFamily={FONTS.InterBold}
          size={hp(2.5)}
        />
      ) : (
        <TouchableOpacity onPress={onPressBack}>
          <Icon source={Images.back} size={hp(2.5)} />
        </TouchableOpacity>
      )}
      <Label
        label={headerTitle}
        color={Colors.primary_dark}
        fontFamily={FONTS.InterBold}
        size={hp(2.5)}
      />
      <View style={styles.backBtn}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(100),
    height: Platform.OS == 'android' ? hp(9) : hp(7),
    paddingHorizontal: wp(5),
  },
  separator: {
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.lightGray2,
  },
  backBtn: {
    height: hp(3),
    width: hp(3),
    tintColor: Colors.primary_dark,
  },
  txt: {
    fontSize: hp(3),
    fontWeight: '600',
    color: Colors.primary_dark,
    fontFamily: FONTS.Inte,
  },
});

export default Index;
