//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {
  forgotPassThunk,
  verifyOTPThunk,
} from '../../../../store/actions/auth-actions';
import BackButton from '../../../components/AuthComponents/BackButton';
import {AuthStyles} from './AuthStyles';
import AuthInput from '../../../components/AuthComponents/AuthInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import HeaderText from '../../../components/AuthComponents/HeaderText';
import {Strings} from '../../../theme/strings';
import Button from '../../../components/AuthComponents/FilledButton';
import {Colors} from '../../../theme/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import OTPSheet from '../../../components/AuthComponents/OTPSheet';
import Spinner from '../../../../bussiness/components/Spinner';

const ForgotPass = ({navigation}) => {
  const dispatch = useDispatch();
  const {forgotPass, otp} = useSelector(state => state);
  const [email, setEmail] = useState('');
  const [OTP, setOTP] = useState('');
  const [verifyModal, setVerifyModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const forgotPassword = () => {
    setLoading(true);
    const data = {
      emailID: email,
      appID: '98cec7e6-3b06-11ed-a261-0242ac120002',
    };
    dispatch(forgotPassThunk(data));
    if (forgotPass.isSuccess) {
      setLoading(false);
      setVerifyModal(true);
    }
    setLoading(false);
  };

  const verifyOTP = () => {
    const data = {
      emailID: email,
      OTP: OTP,
    };
    dispatch(verifyOTPThunk(data));
    if (otp.isSuccess && otp.verifyOTP.data.status == 1) {
      setVerifyModal(false);
      navigation.navigate('ResetPass', {
        userId: otp.verifyOTP.data.userid,
        token: otp.verifyOTP.data.access_token,
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={AuthStyles.container}>
          <View style={{height: hp(65)}}>
            <Image
              resizeMode="contain"
              style={[AuthStyles.LogoSize, {position: 'absolute', top: hp(28)}]}
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
          <View style={AuthStyles.BottomSlideForgot}>
            <HeaderText FontSize={hp(3.2)} TopText={Strings.forgot} />
            <Text
              style={{
                textAlign: 'center',
                marginBottom: hp(2),
                width: '85%',
                color: Colors.black,
              }}>
              {Strings.ForgotInst}
            </Text>
            <AuthInput
              placeholder={'Email Address'}
              value={email}
              onChangeText={text => setEmail(text)}
            />

            <Button
              onPress={() => forgotPassword()}
              btnStyle={{width: wp(90)}}
              title={Strings.Submit}
              bgColor={Colors.primary}
              titleColor={Colors.white}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal isVisible={verifyModal}>
        <OTPSheet
          mobile={''}
          handleTextChange={e => setOTP(e)}
          onVerify={() => verifyOTP()}
        />
      </Modal>
      <Modal isVisible={isLoading}>
        <Spinner />
      </Modal>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default ForgotPass;
