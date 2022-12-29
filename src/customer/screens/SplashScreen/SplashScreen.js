import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {Strings} from '../../theme/strings';
import {Colors} from '../../theme/colors';
import Button from '../../components/AuthComponents/FilledButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {AuthStyles} from './AuthScreens/AuthStyles';

const SplashScreen = ({navigation}) => {
  const [isOption, setOption] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOption(true);
    }, 3500);
  }, []);

  return (
    <View style={styles.conatiner}>
      <Image
        resizeMode="contain"
        style={[AuthStyles.LogoSize, {position: 'absolute', top: hp(45)}]}
        source={require('../../assets/AuthScreen/Logo.png')}
      />
      {isOption ? (
        <View style={styles.optionContainer}>
          <Button
            onPress={() => {
              navigation.navigate('LoginScreen', {role: 'Customer'});
            }}
            title={Strings.loginAsUser}
            bgColor={Colors.white}
            titleColor={Colors.primary}
          />
          <Button
            onPress={() => {
              navigation.navigate('LoginScreen', {role: 'Business'});
            }}
            btnStyle={{marginBottom: hp(5)}}
            title={Strings.loginAsBusiness}
            bgColor={Colors.transparent}
            titleColor={Colors.white}
          />
        </View>
      ) : null}
    </View>
  );
};

export default SplashScreen;
