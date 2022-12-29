import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../Button';
import Label from '../Label';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import { FONTS } from '../../theme/fonts';

const Index = ({
  title,
  leftBtn,
  rightBtn,
  onLeftPress,
  onRightPress,
  msg,
  bold,
  fontFamily,
  leftBtnColor,
  rightBtnColor,
}) => {
  return (
    <View style={styles.container}>
      <Label
        label={title}
        bold={bold}
        size={hp(2)}
        fontFamily={fontFamily}
        marginBottom={hp(1)}
        color={Colors.primary_dark}
      />
      {msg && (
        <Label
          label={msg}
          size={hp(2)}
          color={Colors.primary_dark}
          fontFamily={FONTS.InterBold}
          marginBottom={hp(2)}
        />
      )}
      <View style={styles.btnWrapper}>
        <Button
          onPress={onLeftPress}
          title={leftBtn}
          btnStyle={styles.btn}
          bgColor={Colors.lightRed}
          titleColor={leftBtnColor ? leftBtnColor : Colors.red}
        />
        <Button
          onPress={onRightPress}
          title={rightBtn}
          btnStyle={styles.btn}
          bgColor={Colors.lightGray2}
          titleColor={rightBtnColor ? rightBtnColor : Colors.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    marginVertical: 0,
    width: wp(40),
  },
  container: {
    width: wp(90),
    backgroundColor: Colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(3),
    borderRadius: 10,
  },
});

export default Index;
