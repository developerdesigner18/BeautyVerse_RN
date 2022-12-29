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
  KeyboardAvoidingView,
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
const ForgotPass = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={AuthStyles.container}>
          <View style={{height:hp(65)}}>
    <Image
    resizeMode='contain'
        style={[AuthStyles.LogoSize,{position:"absolute",top:hp(28)}]}
        source={require('../../../assets/AuthScreen/Logo.png')}
      />
      <BackButton
      onPress={()=>{
        navigation.goBack()
    }}
      />
      <Image
       style={{position: 'absolute', alignSelf: 'center',bottom:0}}
       source={require('../../../assets/AuthScreen/Fade.png')}
      />
    </View>
            <View style={AuthStyles.BottomSlideForgot}>
              <HeaderText 
              FontSize={hp(3.2)}
              TopText={Strings.forgot} />
              <Text
                style={{
                  textAlign: 'center',
                  marginBottom: hp(2),
                  width: '85%',
                  color: Colors.black,
                }}>
                {Strings.ForgotInst}
              </Text>
              <AuthInput placeholder={'Email Address'} />

              <Button
                onPress={()=>{
                    navigation.navigate('ResetPass')
                }}
                btnStyle={{width: wp(90)}}
                title={Strings.Submit}
                bgColor={Colors.primary}
                titleColor={Colors.white}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default ForgotPass;
