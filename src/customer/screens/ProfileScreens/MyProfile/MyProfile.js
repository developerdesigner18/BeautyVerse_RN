import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderTop from '../../../components/HomeComponent/headerTop';
import SemiBold from '../../../components/HomeComponent/SemiBold';
import Textnormal from '../../../components/Textnormal';
import {Images} from '../../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {getUserThunk} from '../../../../store/actions/profile-actions';
import {BusinessPageStyles} from '../../BusinessPage/BusinessPageStyles';
import {Colors} from '../../../theme/colors';
import {ProfileStyles} from '../ProfileStyles';
import ProfileCard from '../../../components/ProfileComponents/ProfileCard';
import {Strings} from '../../../theme/strings';
import Spinner from '../../../../bussiness/components/Spinner';

const MyProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const profile = useSelector(
    state => state.profile.isSuccess && state.profile.profile.data,
  );
  const loading = useSelector(state => state.profile.loading);

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch(getUserThunk(token));
    console.log('user profile', profile);
  };

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
        <SemiBold
          FontSize={hp(3.2)}
          EnterText={profile ? profile.fullname : ''}
        />
        <Textnormal entertext={profile ? profile.emailID : ''} />
        <Textnormal
          Allstyle={{marginVertical: hp(0.5)}}
          entertext={profile ? profile.mobile : ''}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile');
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
          onPress={() => {
            navigation.navigate('UserAddresses');
          }}
          avtar={Images.locround}
          mainText={'Addresses'}
          text={'Manage addresses'}
        />
        <ProfileCard
          onPress={() => {
            navigation.navigate('ChangePass');
          }}
          avtar={Images.lockround}
          mainText={'Password'}
          text={'Change password'}
        />
      </View>
      <Spinner visible={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MyProfile;
