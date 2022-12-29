//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Strings} from '../../../theme/strings';
import {styles} from './AuthStyles';
import {Colors} from '../../../theme/colors';
import {AuthStyles} from '../../SplashScreen/AuthScreens/AuthStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import ImagePicker from 'react-native-image-crop-picker';
import HeaderTop from '../../../components/HomeComponent/headerTop';
import {ProfileStyles} from '../ProfileStyles';
import {BusinessPageStyles} from '../../BusinessPage/BusinessPageStyles';
import AnimatedInput from '../../../components/BusinessPage/AnimatedInput';
import Button from '../../../components/AuthComponents/FilledButton';

// create a component
const EditProfile = ({navigation}) => {
  const [path, Setpath] = useState('');

  const profilePicker = () => {
    ImagePicker.openPicker({}).then(image => {
      console.log(image.path);
      Setpath(image.path);
    });
  };

  return (
    <SafeAreaView style={styless.container}>
      <HeaderTop 
      onPress={()=>{
        navigation.goBack()
      }}
      HeaderText={Strings.editprfl} />
      <View style={{alignItems: 'center', marginTop: hp(5)}}>
        <ImageBackground
          imageStyle={{borderRadius: path === '' ? 0 : 100}}
          source={
            path === ''
              ? require('../../../../customer/assets/AuthScreen/ImagePicker.png')
              : {uri: path}
          }
          style={ProfileStyles.profilepicview}>
          <TouchableOpacity
            hitSlop={{right: 20, left: 20, top: 20, bottom: 20}}
            onPress={() => {
              profilePicker();
            }}
            style={ProfileStyles.camerapickershadow}>
            <Image
              source={require('../../../../customer/assets/AuthScreen/camera.png')}
              style={{height: hp(2.4), width: hp(2.4)}}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={[BusinessPageStyles.inputWrapper, {marginVertical: hp(5)}]}>
          <AnimatedInput
            value={''}
            label={Strings.firstnm}
            placeholder={Strings.firstnm}
            width={wp(43)}
          />
          <AnimatedInput
            value={''}
            label={Strings.lastnm}
            placeholder={Strings.lastnm}
            width={wp(43)}
          />
        </View>
        <AnimatedInput
          allstyle={{marginBottom: hp(2.5)}}
          value={''}
          label={Strings.eml}
          placeholder={Strings.eml}
          width={wp(90)}
        />
        <AnimatedInput
          value={''}
          label={Strings.phone}
          placeholder={Strings.phone}
          width={wp(90)}
        />
      </View>
      <View style={{alignSelf: 'center', position: 'absolute', bottom: hp(2)}}>
        <Button
          bgColor={Colors.primary}
          title={Strings.savechng}
          titleColor={Colors.white}
          btnStyle={{width: wp(90)}}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default EditProfile;
