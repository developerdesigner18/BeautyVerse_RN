import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Keyboard,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {resetPassThunk} from '../../../../store/actions/auth-actions';
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
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const ResetPass = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {params} = route;
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const loading = useSelector(state => state.resetPass.loading);
  const resetPass = useSelector(state => state.resetPass.isSuccess);

  useEffect(() => {
    if (resetPass) {
      showMessage({
        message: 'Password updated successfully',
        floating: true,
        type: 'success',
      });
      navigation.replace('LoginScreen', {role: params.role});
    }

    return () => {
      dispatch(resetPassThunk(''));
    };
  }, [resetPass]);

  const resetPassword = () => {
    if (newPass != confirmPass) {
      showMessage({
        message: 'Pasword does not match.',
        floating: true,
        type: 'danger',
      });
    } else {
      const data = {
        userID: params.userId,
        password: confirmPass,
      };
      dispatch(resetPassThunk(data, params.token));
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={AuthStyles.container}>
          <View style={{height: hp(55)}}>
            <Image
              resizeMode="contain"
              style={[AuthStyles.LogoSize, {position: 'absolute', top: hp(22)}]}
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
          <View style={AuthStyles.BottomSlideReset}>
            <HeaderText FontSize={hp(3.2)} TopText={Strings.Reset} />
            <Text
              style={{
                textAlign: 'center',
                marginBottom: hp(2),
                width: '85%',
                color: Colors.primaryDark,
              }}>
              {Strings.ForgotInst}
            </Text>
            <AuthInput
              placeholder={'Enter New Password'}
              value={newPass}
              onChangeText={text => setNewPass(text)}
            />
            <AuthInput
              placeholder={'Confirm New Password'}
              value={confirmPass}
              onChangeText={text => setConfirmPass(text)}
            />

            <Button
              onPress={() => resetPassword()}
              btnStyle={{width: wp(90)}}
              title={Strings.Reset}
              bgColor={Colors.primary}
              titleColor={Colors.white}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Spinner visible={loading} />
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default ResetPass;
