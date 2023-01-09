import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserThunk} from '../../../../store/actions/profile-actions';
import {Strings} from '../../../theme/strings';
import {Images} from '../../../theme/images';
import {styles} from './styles';
import {Colors} from '../../../theme/colors';
import {FONTS} from '../../../theme/fonts';
import {myProfile} from '../../../theme/arrays';
import Header from '../../../components/Header';
import Label from '../../../components/Label';
import Icon from '../../../components/Icon';
import ItemCard from '../../../components/ItemCard';
import IconButton from '../../../components/IconButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import Spinner from '../../../components/Spinner';

const MyProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.profile.loading);
  const profile = useSelector(
    state => state.profile.isSuccess && state.profile.profile.data,
  );

  useEffect(() => {
    getUserProfile();
  }, []);
  const getUserProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch(getUserThunk(token));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.myProfile}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.mainView}>
        <View style={styles.profileView}>
          <Icon source={Images.customer} size={hp(10)} />
          <Label
            label={profile ? profile.fullname : Strings.businessNameHere}
            color={Colors.primary_dark}
            fontFamily={FONTS.InterBold}
            size={hp(2)}
            lineHeight={hp(3)}
            marginTop={hp(2)}
          />
          <Label
            label={profile ? profile.emailID : 'business@email.com'}
            color={Colors.lightGray3}
            size={hp(1.8)}
            lineHeight={hp(3)}
          />
          <Label
            label={profile ? profile.mobile : '+123 456 7890'}
            color={Colors.lightGray3}
            size={hp(1.8)}
            lineHeight={hp(3)}
            marginBottom={hp(2)}
          />
          <IconButton
            onPress={() => navigation.navigate('EditProfile')}
            label={Strings.editProfile}
            icon={Images.edit}
            iconColor={Colors.primary}
            labelColor={Colors.primary}
            iconSize={hp(3)}
            fontSize={hp(2)}
            bgColor={Colors.lightGray2}
            width={wp(45)}
          />
        </View>
        {myProfile.map((item, index) => (
          <ItemCard
            onPress={() => {
              index == 0 && navigation.navigate('Address');
              index == 1 &&
                navigation.navigate('BusinessTiming', {path: 'profile'});
              index == 2 && navigation.navigate('Password');
            }}
            userIcon={item.icon}
            title={item.label}
            desc={item.desc}
            leftIcon={Images.rightarrow}
          />
        ))}
      </View>
      <Spinner visible={loading} />
    </SafeAreaView>
  );
};

export default MyProfile;
