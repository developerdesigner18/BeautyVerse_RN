//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {Images} from './customer/theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../src/customer/theme/layout';
import SemiBold from './customer/components/HomeComponent/SemiBold';
import {Strings} from './customer/theme/strings';

// create a component
const MaintainanceError = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        style={{
          height: hp(4),
          width: wp(60),
          position: 'relative',
          left: wp(20),
          top: 10,
        }}
        source={Images.Logo}
      />
      <View style={{alignItems: 'center', justifyContent: 'center',marginTop:hp(25)}}>
        <Image
          resizeMode="contain"
          style={{height: hp(13), width: hp(13), marginVertical: hp(3.2)}}
          source={Images.warningsign}
        />
        <SemiBold
          AllStyle={{textAlign: 'center'}}
          FontSize={hp(2.5)}
          EnterText={Strings.undermaintainancemsg}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:hp(100)
  },
});

//make this component available to the app
export default MaintainanceError;
