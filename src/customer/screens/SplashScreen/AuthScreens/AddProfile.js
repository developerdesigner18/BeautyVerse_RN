//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {profilePicThunk} from '../../../../store/actions/profile-actions';
import {Strings} from '../../../theme/strings';
import Button from '../../../components/AuthComponents/FilledButton';
import {Colors} from '../../../theme/colors';
import {AuthStyles} from '../../../screens/SplashScreen/AuthScreens/AuthStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import ImagePicker from 'react-native-image-crop-picker';
import Spinner from '../../../../bussiness/components/Spinner';

// create a component
const AddProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const [path, Setpath] = useState('');

  const loading = useSelector(state => state.profilePic.loading);
  const profilePic = useSelector(state => state.profilePic.isSuccess);

  useEffect(() => {
    if (profilePic) {
      showMessage({
        message: 'Profile pitcure updated successfully',
        floating: true,
        type: 'success',
      });
    }
    return () => {
      dispatch(profilePicThunk(''));
    };
  }, [profilePic]);

  const profilePicker = () => {
    ImagePicker.openPicker({}).then(image => {
      console.log(image.path);
      Setpath(image.path);
      uplaodProfile(image.path);
    });
  };

  const uplaodProfile = async profileUri => {
    const token = await AsyncStorage.getItem('token');
    const formData = new FormData();
    let cleanUri =
      Platform.OS === 'ios' ? profileUri.replace('file:/', '') : profileUri;
    formData.append('img', {
      uri: cleanUri,
      type: 'image/jpeg',
      name: 'imagename.jpg',
    });
    dispatch(profilePicThunk(formData, token));
  };

  return (
    <SafeAreaView style={AuthStyles.profileView}>
      <Text style={AuthStyles.titleTxt}>{Strings.AddProfile}</Text>

      <ImageBackground
        imageStyle={{borderRadius: path === '' ? 0 : 100}}
        source={
          path === ''
            ? require('../../../assets/AuthScreen/ImagePicker.png')
            : {uri: path}
        }
        style={AuthStyles.pictureView}>
        <TouchableOpacity style={{height: hp(0)}}>
          {/* <Image source={require('../../../assets/AuthScreen/gallery.png')} style={AuthStyles.addImage} /> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            profilePicker();
          }}
          style={AuthStyles.cameraView}>
          <Image
            source={require('../../../assets/AuthScreen/camera.png')}
            style={AuthStyles.cameraImage}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={AuthStyles.optionView}>
        <Button
          onPress={() => {
            navigation.navigate('AddMethod', {screen: 'AddProfile'});
          }}
          title={Strings.next}
          bgColor={Colors.primary}
          titleColor={Colors.white}
          btnStyle={{marginBottom: 5}}
        />
        <Button title={'skip'} titleColor={Colors.primary} />
      </View>
      <Spinner visible={loading} />
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default AddProfile;
