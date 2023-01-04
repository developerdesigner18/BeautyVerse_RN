//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderTop from '../../../../components/HomeComponent/headerTop';
import {Strings} from '../../../../theme/strings';
import AuthInput from '../../../../components/AuthComponents/AuthInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../theme/layout';
import Button from '../../../../components/AuthComponents/FilledButton';
import {Colors} from '../../../../theme/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


// create a component
const AddDebit = ({navigation,route}) => {


  const getCardDetails = async () => {
    await AsyncStorage.removeItem('CardData').then(
      await AsyncStorage.setItem('CardData', CardNum),
    );
  }
 

const [CardNum,SetCardNum] = useState(0);


  console.log(route.params.screen);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderTop
        onPress={()=>{
            navigation.goBack();
        }}
        HeaderText={`Add ${Strings.Debit}`} />
        <View style={{alignItems: 'center', marginTop: hp(3)}}>
          <AuthInput placeholder={Strings.nameoncard} />
          <AuthInput 
          maxLength={12}
          value={CardNum}
          onChangeText={text=>{
            SetCardNum(text);
          }}
          
          placeholder={Strings.cardnum} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <AuthInput
              Inputstyle={{width: '47%'}}
              placeholder={Strings.cardexp}
            />
            <AuthInput Inputstyle={{width: '47%'}} placeholder={Strings.CVV} />
          </View>
        </View>
        <Button
          onPress={()=>{
            getCardDetails();
            route.params.screen === 'checkout' ?
            navigation.navigate('Checkout') : null
          }}
          bgColor={Colors.primary}
          titleColor={Colors.white}
          title={Strings.cardSV}
          btnStyle={{
            width: wp(90),
            position: 'absolute',
            bottom: hp(1.5),
            marginLeft: wp(5),
          }}
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
export default AddDebit;
