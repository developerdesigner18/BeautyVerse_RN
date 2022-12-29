//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../../theme/colors';
import {AuthStyles} from '../SplashScreen/AuthScreens/AuthStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

// create a component
const HomeSplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
          navigation.replace('BottomTabs')
        }, 3000);
      }, []);

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={[AuthStyles.LogoSize, {position: 'absolute', top: hp(45)}]}
        source={require('../../assets/HomeScreen/SecondLogo.png')}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

//make this component available to the app
export default HomeSplashScreen;
