//import liraries
import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// create a component
const RegistrationScreen = ({navigation, route}) => {
  const Notchecked = '../../../assets/AuthScreen/emptybox.png';
  const checked = '../../../assets/AuthScreen/Filledbox.png';
  const {params} = route;
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={AuthStyles.container}>
          <View style={{height: hp(28)}}>
            <Image
              resizeMode="contain"
              style={[AuthStyles.LogoSize, {position: 'absolute', top: hp(8)}]}
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
          <View style={AuthStyles.BottomSlideRegistration}>
            <HeaderText
              FontSize={hp(3.2)}
              TopText={
                params.role == 'Customer'
                  ? Strings.signupText
                  : Strings.signupAsBusiness
              }
            />

            {params.role == 'Customer' ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                }}>
                <AuthInput
                  Inputstyle={{width: '47%'}}
                  placeholder={'First Name'}
                />
                <AuthInput
                  Inputstyle={{width: '47%'}}
                  placeholder={'Last Name'}
                />
              </View>
            ) : (
              <AuthInput placeholder={'Business Name'} />
            )}
            <AuthInput placeholder={'Email Address'} />
            <TwoSideInput placeholder={'Password'} />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: hp(1.5),
              }}>
              <TouchableOpacity>
                <Image
                  style={{
                    height: 17,
                    width: 17,
                    marginRight: 10,
                    tintColor: '#9E98AC',
                  }}
                  source={require(checked)}
                />
              </TouchableOpacity>

              <Text
                style={{
                  color: Colors.black,
                }}>
                {Strings.Agree}{' '}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: Colors.primary,
                    fontWeight: '600',
                  }}>
                  {Strings.Terms}
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
              btnStyle={{width: wp(90)}}
              title={Strings.signupText}
              bgColor={Colors.primary}
              titleColor={Colors.white}
            />
            <Text style={{marginVertical: hp(1)}}>Or</Text>
            <TwoSideButton
              titleColor={'#0D0E11'}
              title={'Sign up with Google'}
              btnStyle={{borderWidth: 1, borderColor: '#EEE6F1', width: wp(90)}}
            />
            <BottomTitle
              onPress={() => {
                navigation.navigate('LoginScreen', {role: params.role});
              }}
              ButtonText={Strings.logintext}
              MainText={Strings.HaveAccount}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default RegistrationScreen;
