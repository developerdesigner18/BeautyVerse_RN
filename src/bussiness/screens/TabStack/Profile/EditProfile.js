import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getBusinessPhotosThunk,
  postBusinessPhotosThunk,
  removeBusinessPhotoThunk,
} from '../../../../store/actions/profile-actions';
import {getUserThunk} from '../../../../store/actions/profile-actions';
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
  const dispatch = useDispatch();
  const {profile, businessPhotosRes, businessPhotos} = useSelector(
    state => state,
  );
  const [profileUri, setProfileUri] = useState('');
  const [photos, setPhotos] = useState([]);
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [token, setToken] = useState('');

  useEffect(() => {
    getUserProfile();
    // getPhotos();
  }, []);

  const getUserProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    setToken(token);
    dispatch(getUserThunk(token));
    if (profile.isSuccess) {
      const data = profile.profile.data;
      function hasWhiteSpace(s) {
        return /\s/.test(s);
      }
      if (hasWhiteSpace(data.fullname)) {
        const name = data.fullname.split(' ');
        setFName(name[0]);
        setLName(name[1]);
      }
      setFName(data.fullname);
      setEmail(data.emailID);
      setPhone(data.mobile);
    }
  };

  const profilePicker = () => {
    ImagePicker.openPicker({}).then(image => {
      console.log(image.path);
      setProfileUri(image.path);
    });
  };

  const BusinessPhotoPicker = () => {
    ImagePicker.openPicker({}).then(image => {
      console.log(image.path);
      postPhotos(image.path);
    });
  };

  const postPhotos = image => {
    const formData = new FormData();
    let cleanUri = Platform.OS === 'ios' ? image.replace('file:/', '') : image;
    formData.append('img', {
      uri: cleanUri,
      type: 'image/jpeg',
      name: 'imagename.jpg',
    });

    dispatch(postBusinessPhotosThunk(formData, token));
    if (businessPhotos.isSuccess) {
      setPhotos(prev => [...prev, image]);
    }
  };

  const getPhotos = () => {
    dispatch(getBusinessPhotosThunk(token));
    if (businessPhotosRes.isSuccess) {
      const data = businessPhotosRes.photos.data.data;
      data.length > 0 && setPhotos(data);
    }
  };

  const removePhoto = () => {
    dispatch(removeBusinessPhotoThunk(token));
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
            <TouchableOpacity
              style={styles.addImg}
              onPress={() => BusinessPhotoPicker()}>
              <Icon source={Images.addImage} size={hp(3)} />
            </TouchableOpacity>
            {photos.map((item, index) => (
              <View>
                {businessPhotos.loading ? (
                  <View style={styles.blankBg}>
                    <ActivityIndicator size="small" color={Colors.primary} />
                  </View>
                ) : (
                  <ImageBackground
                    key={index}
                    source={{uri: item}}
                    style={styles.imageBg}
                    imageStyle={{borderRadius: 10}}>
                    <TouchableOpacity style={styles.closeBtn}>
                      <Icon source={Images.cancel} size={hp(1.5)} />
                    </TouchableOpacity>
                  </ImageBackground>
                )}
              </View>
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
