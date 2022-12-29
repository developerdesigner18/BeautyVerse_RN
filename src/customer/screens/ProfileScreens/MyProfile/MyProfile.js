//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import HeaderTop from '../../../components/HomeComponent/headerTop';
import SemiBold from '../../../components/HomeComponent/SemiBold';
import Textnormal from '../../../components/Textnormal';
import {Images} from '../../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {BusinessPageStyles} from '../../BusinessPage/BusinessPageStyles';
import {Colors} from '../../../theme/colors';
import {ProfileStyles} from '../ProfileStyles';
import ProfileCard from '../../../components/ProfileComponents/ProfileCard';
import { Strings } from '../../../theme/strings';
import { SafeAreaView } from 'react-native';

// create a component
const MyProfile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={'My Profile'}
      />
      <View style={ProfileStyles.profileAvtarview}>
        <Avatar size={120} rounded source={Images.img1} />
        <SemiBold FontSize={hp(3.2)} EnterText={'Kynthia Johnson'} />
        <Textnormal entertext={'kynthiajohnson@email.com'} />
        <Textnormal
          Allstyle={{marginVertical: hp(0.5)}}
          entertext={'+123 456 7890'}
        />

        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('EditProfile')
          }}
          style={[
            BusinessPageStyles.EditButton,
            {width: 'auto', paddingHorizontal: 25, marginVertical: hp(2.5)},
          ]}>
          <Image
            resizeMode="contain"
            style={BusinessPageStyles.editImage}
            source={Images.edit}
          />
          <SemiBold
            FontSize={hp(2.4)}
            AllStyle={{color: Colors.primary}}
            EnterText={Strings.editprfl}
          />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <ProfileCard
          onPress={()=>{
            navigation.navigate('UserAddresses')
          }}
          avtar={Images.locround}
          mainText={'Addresses'}
          text={'Manage addresses'}
        />
         <ProfileCard
          onPress={()=>{
            navigation.navigate('ChangePass')
          }}
          avtar={Images.lockround}
          mainText={'Password'}
          text={'Change password'}
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
export default MyProfile;
