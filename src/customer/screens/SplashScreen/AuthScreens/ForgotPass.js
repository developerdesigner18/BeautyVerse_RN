//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {showMessage} from 'react-native-flash-message';
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

const ForgotPass = ({navigation, route}) => {
  const {params} = route;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [OTP, setOTP] = useState('');
  const [verifyModal, setVerifyModal] = useState(false);
  const loading = useSelector(
    state => state.forgotPass.loading | state.otp.loading,
  );
  const forgotPass = useSelector(state => state.forgotPass.isSuccess);
  const otp = useSelector(
    state => state.otp.isSuccess && state.otp.verifyOTP.data,
  );

  useEffect(() => {
    forgotPass &&
      setTimeout(() => {
        setVerifyModal(true);
      }, 1000);
  }, [forgotPass]);

  useEffect(() => {
    if (otp) {
      setVerifyModal(false);
      showMessage({
        message: otp.message,
        floating: true,
        type: 'success',
      });
      navigation.navigate('ResetPass', {
        userId: otp.userid,
        token: otp.access_token,
        role: params.role,
      });
    }

    return () => {
      dispatch(verifyOTPThunk(''));
    };
  }, [otp]);

  const forgotPassword = () => {
    const data = {
      emailID: email,
      appID: '98cec7e6-3b06-11ed-a261-0242ac120002',
    };
    dispatch(forgotPassThunk(data));
  };

  const verifyOTP = () => {
    const data = {
      emailID: email,
      OTP: OTP,
    };
    dispatch(verifyOTPThunk(data));
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
      <Spinner visible={loading} />
    </SafeAreaView>
  );
};

export default ForgotPass;
