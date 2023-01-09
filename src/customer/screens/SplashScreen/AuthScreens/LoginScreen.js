import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {loginThunk} from '../../../../store/actions/auth-actions';
import BackButton from '../../../components/AuthComponents/BackButton';
import {AuthStyles} from './AuthStyles';
import AuthInput from '../../../components/AuthComponents/AuthInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import HeaderText from '../../../components/AuthComponents/HeaderText';
import TwoSideInput from '../../../components/AuthComponents/TwoSideInput';
import {Strings} from '../../../theme/strings';
import Button from '../../../components/AuthComponents/FilledButton';
import {Colors} from '../../../theme/colors';
import TwoSideButton from '../../../components/AuthComponents/TwoSideButton';
import BottomTitle from '../../../components/AuthComponents/BottomTitle';
import Spinner from '../../../../bussiness/components/Spinner';

const LoginScreen = ({navigation, route}) => {
  const {params} = route;
  const dispatch = useDispatch();
  const {login} = useSelector(state => state);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    async function loginRes() {
      if (login.isSuccess) {
        if (login.isSuccess) {
          const user = login.login.data;

          user.status == 1 &&
            showMessage({
              message: user.message,
              floating: true,
              type: 'success',
            });
          await AsyncStorage.setItem('token', user.access_token);
          await AsyncStorage.setItem('role', params.role);
          setTimeout(() => {
            navigation.replace(
              params.role == 'Customer' ? 'customer' : 'business',
            );
          }, 1000);
        } else {
          showMessage({
            message: 'Logged in failed.',
            floating: true,
            type: 'danger',
          });
        }
      }
    }
    loginRes();
  }, [login]);

  const loginAPI = async () => {
    if (email && password) {
      const data = {
        emailID: email,
        password: password,
      };

      dispatch(loginThunk(data));
    } else {
      showMessage({
        message: 'All fields must be filled.',
        floating: true,
        type: 'danger',
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={AuthStyles.container}>
          <View style={{height: hp(35)}}>
            <Image
              resizeMode="contain"
              style={[AuthStyles.LogoSize, {position: 'absolute', top: hp(14)}]}
              source={require('../../../assets/AuthScreen/Logo.png')}
            />
            <BackButton
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Image
              style={{position: 'absolute', alignSelf: 'center', bottom: 0}}
              source={require('../../../assets/AuthScreen/Fade.png')}
            />
          </View>
          <View style={AuthStyles.BottomSlideLogin}>
            <HeaderText
              paddingVertical={20}
              FontSize={hp(3.2)}
              TopText={
                params.role == 'Customer'
                  ? Strings.logintext
                  : Strings.loginAsBusiness
              }
            />
            <AuthInput
              placeholder={'Email Address'}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TwoSideInput
              placeholder={'Password'}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPass', {role: params.role});
              }}>
              <Text
                style={{
                  color: '#8D10B5',
                  fontWeight: '600',
                  marginVertical: hp(1.5),
                }}>
                {Strings.forgot}
              </Text>
            </TouchableOpacity>
            <Button
              onPress={() => loginAPI()}
              btnStyle={{width: wp(90)}}
              title={Strings.logintext}
              bgColor={Colors.primary}
              titleColor={Colors.white}
            />
            <Text style={{marginVertical: hp(1)}}>Or</Text>
            <TwoSideButton
              titleColor={'#0D0E11'}
              title={'Login With Google'}
              btnStyle={{borderWidth: 1, borderColor: '#EEE6F1', width: wp(90)}}
            />
            <BottomTitle
              onPress={() => {
                navigation.navigate('RegistrationScreen', {role: params.role});
              }}
              MainText={Strings.NoAccount}
              ButtonText={Strings.signupText}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Spinner visible={login.loading} />
    </SafeAreaView>
  );
};

export default LoginScreen;
