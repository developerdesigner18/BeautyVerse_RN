//import liraries
import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Keyboard,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
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
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const LoginScreen = ({navigation, route}) => {
  const {params} = route;
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
            <AuthInput placeholder={'Email Address'} />
            <TwoSideInput placeholder={'Password'} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPass');
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
              onPress={() => {
                navigation.navigate(
                  params.role == 'Customer' ? 'customer' : 'business',
                );
              }}
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
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default LoginScreen;
