//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import BackButton from '../../../components/AuthComponents/BackButton';
import {AuthStyles} from './AuthStyles';
import AuthInput from '../../../components/AuthComponents/AuthInput';
import {
  signupThunk,
  verifyOTPThunk,
} from '../../../../store/actions/auth-actions';
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
import OTPSheet from '../../../components/AuthComponents/OTPSheet';

const RegistrationScreen = ({navigation, route}) => {
  const Notchecked = '../../../assets/AuthScreen/emptybox.png';
  const checked = '../../../assets/AuthScreen/Filledbox.png';
  const {params} = route;
  const dispatch = useDispatch();
  const {singup, otp} = useSelector(state => state);
  const [email, setEmail] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [mobile, setMobile] = useState('+919510765239');
  const [password, setPassword] = useState('');
  const [OTP, setOTP] = useState('');
  const [verifyModal, setVerifyModal] = useState(false);

  const registration = async () => {
    const data = {
      emailID: email,
      fullname: params.role == 'Customer' ? fName + ' ' + lName : businessName,
      password: password,
      mobile: mobile,
      role: params.role == 'Customer' ? 'customer' : 'business',
    };
    dispatch(signupThunk(data));
    if (singup.isSuccess) {
      setVerifyModal(true);
    }
  };

  const OTPVerification = () => {
    const data = {
      emailID: email,
      OTP: OTP,
    };
    dispatch(verifyOTPThunk(data));

    if (otp.isSuccess && otp.verifyOTP.data.status == 1) {
      showMessage({
        message: otp.verifyOTP.data.message,
        floating: true,
        type: 'success',
      });

      setTimeout(() => {
        setVerifyModal(false);
        navigation.navigate('LoginScreen', {role: params.role});
      }, 1000);
    } else {
      showMessage({
        message: otp.verifyOTP.data.message,
        floating: true,
        type: 'warning',
      });
    }
  };

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
                  value={fName}
                  onChangeText={text => setFName(text)}
                />
                <AuthInput
                  Inputstyle={{width: '47%'}}
                  placeholder={'Last Name'}
                  value={lName}
                  onChangeText={text => setLName(text)}
                />
              </View>
            ) : (
              <AuthInput
                placeholder={'Business Name'}
                value={businessName}
                onChangeText={text => setBusinessName(text)}
              />
            )}
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
              onPress={() => registration()}
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
      <Modal isVisible={verifyModal}>
        <OTPSheet
          mobile={mobile}
          onVerify={() => OTPVerification()}
          handleTextChange={e => setOTP(e)}
        />
      </Modal>
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
