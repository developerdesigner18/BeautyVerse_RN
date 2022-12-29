import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Strings} from '../../../theme/strings';
import {Images} from '../../../theme/images';
import {styles} from './styles';
import {Colors} from '../../../theme/colors';
import {businessImage} from '../../../theme/arrays';
import {FONTS} from '../../../theme/fonts';
import Header from '../../../components/Header';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Label from '../../../components/Label';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const EditProfile = ({navigation}) => {
  const [profileUri, setProfileUri] = useState('');
  const [fName, setFName] = useState('Business');
  const [lName, setLName] = useState('Name');
  const [email, setEmail] = useState('business@email.com');
  const [phone, setPhone] = useState('+123 456 7890');

  const profilePicker = () => {
    ImagePicker.openPicker({}).then(image => {
      console.log(image.path);
      setProfileUri(image.path);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.editProfile}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.mainView}>
        <ImageBackground
          imageStyle={{borderRadius: profileUri === '' ? 0 : 100}}
          source={profileUri ? {uri: profileUri} : Images.customer}
          style={styles.iconView}>
          <TouchableOpacity
            style={styles.cameraBtn}
            onPress={() => profilePicker()}>
            <Icon source={Images.cameraround} size={hp(3)} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.inputWrapper}>
          <Input
            value={fName}
            onChangeText={text => setFName(text)}
            label={Strings.firstName}
            placeholder={Strings.firstName}
            width={wp(43)}
            size={hp(1.9)}
          />
          <Input
            value={lName}
            onChangeText={text => setLName(text)}
            label={Strings.lastName}
            placeholder={Strings.lastName}
            width={wp(43)}
            size={hp(1.9)}
          />
        </View>
        <Input
          value={email}
          onChangeText={text => setEmail(text)}
          label={Strings.email}
          placeholder={Strings.email}
          width={wp(90)}
          size={hp(1.9)}
          top={hp(3)}
        />
        <Input
          value={phone}
          onChangeText={text => setPhone(text)}
          label={Strings.phone}
          placeholder={Strings.phone}
          width={wp(90)}
          size={hp(1.9)}
          top={hp(3)}
        />
        <View style={styles.bottomView}>
          <Label
            label={Strings.businessPhotos}
            left
            size={hp(2.5)}
            fontFamily={FONTS.InterBold}
            color={Colors.primary_dark}
            marginBottom={hp(2)}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.addImg}>
              <Icon source={Images.addImage} size={hp(3)} />
            </TouchableOpacity>
            {businessImage.map((item, index) => (
              <ImageBackground
                key={index}
                source={item}
                style={styles.imageBg}
                imageStyle={{borderRadius: 10}}>
                <TouchableOpacity style={styles.closeBtn}>
                  <Icon source={Images.cancel} size={hp(1.5)} />
                </TouchableOpacity>
              </ImageBackground>
            ))}
          </ScrollView>
        </View>
        <Button
          title={Strings.saveChanges}
          titleColor={Colors.white}
          bgColor={Colors.primary}
          btnStyle={styles.addBtn}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
