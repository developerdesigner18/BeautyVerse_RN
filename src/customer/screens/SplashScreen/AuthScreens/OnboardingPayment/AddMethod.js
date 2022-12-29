//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HeaderText from '../../../../components/AuthComponents/HeaderText';
import {Strings} from '../../../../theme/strings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../theme/layout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../../../theme/Images';
import {Colors} from '../../../../theme/colors';
import Arrowheader from '../../../../components/AuthComponents/paymentAuth/Arrowheader';
import Button from '../../../../components/AuthComponents/FilledButton';
import HeaderTop from '../../../../components/HomeComponent/headerTop';
import { useEffect } from 'react';
import { useState } from 'react';

// create a component
const AddMethod = ({navigation, route}) => {


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {route.params.screen === 'AddMethod' ? (
          <HeaderTop
            onPress={() => {
              navigation.goBack();
            }}
            HeaderText={Strings.selectmethod}
          />
        ) : (
          <HeaderText
            onPress={() => {
              navigation.goBack();
            }}
            FontSize={hp(3.2)}
            TopText={Strings.paymethod}
          />
        )}
        <View>
          <Arrowheader
            onPress={() => {
              navigation.navigate('AddDebit');
            }}
            text={Strings.Debit}
            source={Images.Debit}
          />
          <Arrowheader text={Strings.Gift} source={Images.Gift} />
          <Arrowheader text={Strings.Credit} source={Images.Credit} />
          <Arrowheader text={Strings.Paypal} source={Images.PayPal} />
          <Arrowheader text={Strings.Applepay} source={Images.Apple} />
        </View>

        {route.params.screen === 'AddMethod' ? null : (
          <View style={{position: 'absolute', bottom: hp(1)}}>
            <Button
              onPress={() => {
                navigation.navigate('HomeSplashScreen');
              }}
              title={Strings.addlater}
              titleColor={Colors.primary}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default AddMethod;
