import React, {useEffect, useState} from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Strings} from '../../theme/strings';
import {Colors} from '../../theme/colors';
import Button from '../../components/Button';
import {Images} from '../../theme/images';

const SplashScreen = ({navigation}) => {
  const [isOption, setOption] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOption(true);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.splashView}>
      <Image source={Images.logo} style={styles.logo} />
      {isOption ? (
        <View style={styles.optionView}>
          <Button
            onPress={() => navigation.navigate('ProfileScreen')}
            title={Strings.loginAsUser}
            bgColor={Colors.white}
            titleColor={Colors.primary}
            btnStyle={styles.loginBtn}
          />
          <Button
            title={Strings.loginAsBusiness}
            bgColor={Colors.transparent}
            titleColor={Colors.white}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default SplashScreen;
