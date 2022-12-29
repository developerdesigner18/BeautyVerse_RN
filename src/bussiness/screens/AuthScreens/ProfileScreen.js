import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../components/Button';
import Label from '../../components/Label/index';
import {Colors} from '../../theme/colors';
import {Images} from '../../theme/images';
import {Strings} from '../../theme/strings';
import {styles} from './styles';
import {FONTS} from '../../theme/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const ProfileScreen = ({navigation}) => {
  const [profileUri, setProfileUri] = useState('');

  const profilePicker = () => {
    ImagePicker.openPicker({}).then(image => {
      console.log(image.path);
      setProfileUri(image.path);
    });
  };

  return (
    <SafeAreaView style={styles.profileView}>
      <Label
        label={Strings.addProfile}
        fontFamily={FONTS.InterSemiBold}
        color={Colors.primary_dark}
        size={hp(3)}
      />
      <ImageBackground
        imageStyle={{borderRadius: profileUri === '' ? 0 : 100}}
        source={profileUri ? {uri: profileUri} : Images.round}
        style={styles.pictureView}>
        {!profileUri ? (
          <TouchableOpacity onPress={() => profilePicker()}>
            <Image source={Images.add_image} style={styles.addImage} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.cameraView}
            onPress={() => profilePicker()}>
            <Image source={Images.camera} style={styles.cameraImage} />
          </TouchableOpacity>
        )}
      </ImageBackground>
      <View style={styles.optionView}>
        <Button
          onPress={() => navigation.navigate('AddLocation', {from: 'auth'})}
          title={Strings.next}
          bgColor={Colors.primary}
          titleColor={Colors.white}
          btnStyle={{marginBottom: 5}}
        />
        <Button title={Strings.skip} titleColor={Colors.primary} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
