import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import Button from './FilledButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Colors} from '../../theme/colors';
import {Strings} from '../../theme/strings';

const OTPSheet = ({mobile, onVerify, handleTextChange}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        height: hp(40),
        width: wp(90),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          // fontFamily: 'IntelV',
          fontWeight: '600',
          fontSize: hp(2),
          color: Colors.primaryDark,
          lineHeight: hp(3),
        }}>
        Enter OTP
      </Text>
      <Text
        style={{
          textAlign: 'center',
          // fontFamily: 'IntelV',
          fontWeight: '400',
          fontSize: hp(1.6),
          color: Colors.primaryDark,
          lineHeight: hp(2),
        }}>
        Please enter the code we just sent to {'\n'} {mobile} to proceed.
      </Text>
      <OTPTextView
        handleTextChange={handleTextChange}
        inputCount={6}
        containerStyle={{
          alignSelf: 'center',
          marginVertical: hp(4),
        }}
        textInputStyle={{
          height: hp(5),
          width: hp(5),
          borderBottomColor: Colors.primary,
          borderBottomWidth: 2,
        }}
      />
      <Button
        onPress={onVerify}
        btnStyle={{width: wp(80)}}
        title={Strings.verify}
        bgColor={Colors.primary}
        titleColor={Colors.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default OTPSheet;
