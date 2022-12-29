//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import HeaderTop from '../../../components/HomeComponent/headerTop';
import {Strings} from '../../../theme/strings';
import TwoSideInput from '../../../components/AuthComponents/TwoSideInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import Button from '../../../components/AuthComponents/FilledButton';
import {Colors} from '../../../theme/colors';

// create a component
const ChangePass = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={Strings.changepsw}
      />
      <TwoSideInput
        animated
        label={Strings.currentpass}
        containerstyle={{marginTop: hp(4)}}
        placeholder={Strings.currentpass}
      />
      <TwoSideInput
        animated
        label={Strings.newpass}
        containerstyle={{marginTop: hp(2)}}
        placeholder={Strings.newpass}
      />
      <TwoSideInput
        animated
        label={Strings.reenterpass}
        containerstyle={{marginTop: hp(2)}}
        placeholder={Strings.reenterpass}
      />
      <View style={{position: 'absolute', bottom: hp(2), alignSelf: 'center'}}>
        <Button
          bgColor={Colors.primary}
          title={Strings.savenewpass}
          titleColor={Colors.white}
          btnStyle={{width: wp(90)}}
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
  },
});

//make this component available to the app
export default ChangePass;
