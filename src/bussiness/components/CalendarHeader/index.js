import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Platform} from 'react-native';
import {Colors} from '../../theme/colors';
import {Images} from '../../theme/images';
import {FONTS} from '../../theme/fonts';
import Icon from '../Icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({
  onPressBack,
  headerTitle,
  hide,
  onPressGrid,
  onPressCol,
  onPressMenu,
  colTint,
  gridTint,
}) => {
  return (
    <View
      style={hide ? styles.container : [styles.container, styles.separator]}>
      <TouchableOpacity onPress={onPressBack}>
        <Icon source={Images.back} size={hp(2.5)} />
      </TouchableOpacity>

      <View style={styles.row}>
        <Text style={styles.txt}>{headerTitle}</Text>
        <TouchableOpacity onPress={onPressMenu}>
          <Icon source={Images.menushow} size={hp(2)} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          ...styles.row,
          width: wp(18),
        }}>
        <TouchableOpacity onPress={onPressGrid}>
          <Icon source={Images.grid} size={hp(3)} color={gridTint} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressCol}>
          <Icon source={Images.col} size={hp(3)} color={colTint} />
        </TouchableOpacity>
      </View>
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
    height: hp(2),
    width: hp(2),
    tintColor: Colors.primary_dark,
  },
  txt: {
    fontSize: hp(2),
    fontWeight: '600',
    color: Colors.primary_dark,
    fontFamily: FONTS.Inte,
    marginRight: wp(2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Index;
