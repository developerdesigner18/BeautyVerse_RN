import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {changePasswordThunk} from '../../../../store/actions/profile-actions';
import {Strings} from '../../../theme/strings';
import {styles} from './styles';
import {Colors} from '../../../theme/colors';
import Header from '../../../components/Header';
import Button from '../../../components/Button';

const Password = ({navigation}) => {
  const dispatch = useDispatch();
  const {changePassword} = useSelector(state => state);
  const [isOldPassSecure, setOldPassSecure] = useState(true);
  const [isNewPassSecure, setNewPassSecure] = useState(true);
  const [isReNewPassSecure, setReNewPassSecure] = useState(true);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reNewPassword, setReNewPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    setToken(token);
  };

  const changePasswordFunction = () => {
    if (newPassword == reNewPassword) {
      const data = {
        oldPassword: oldPassword,
        newPassword: newPassword,
      };
      dispatch(changePasswordThunk(data, token));
      if (changePassword.isSuccess) {
        const message = changePassword.changePassword.data.message;
        showMessage({
          message: message,
          floating: true,
          type: 'success',
        });
        setTimeout(() => {
          navigation.goBack();
        }, 2000);
      }
    } else {
      showMessage({
        message: 'Password does not match',
        floating: true,
        type: 'danger',
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.changePassword}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.mainView}>
        <TextInput
          value={oldPassword}
          onChangeText={text => setOldPassword(text)}
          secureTextEntry={isOldPassSecure}
          placeholder={Strings.currentPassword}
          mode="outlined"
          outlineColor={Colors.lightGray2}
          activeOutlineColor={Colors.primary}
          style={{backgroundColor: Colors.white, color: Colors.lightGray3}}
          right={
            <TextInput.Icon
              icon={isOldPassSecure ? 'eye-off' : 'eye'}
              color={Colors.lightGray4}
              onPress={() => setOldPassSecure(!isOldPassSecure)}
            />
          }
        />
        <TextInput
          value={newPassword}
          onChangeText={text => setNewPassword(text)}
          secureTextEntry={isNewPassSecure}
          placeholder={Strings.newPassword}
          mode="outlined"
          outlineColor={Colors.lightGray2}
          activeOutlineColor={Colors.primary}
          style={{backgroundColor: Colors.white, color: Colors.lightGray3}}
          right={
            <TextInput.Icon
              icon={isNewPassSecure ? 'eye-off' : 'eye'}
              color={Colors.lightGray4}
              onPress={() => setNewPassSecure(!isNewPassSecure)}
            />
          }
        />
        <TextInput
          value={reNewPassword}
          onChangeText={text => setReNewPassword(text)}
          secureTextEntry={isReNewPassSecure}
          placeholder={Strings.reEnterNewPassword}
          mode="outlined"
          outlineColor={Colors.lightGray2}
          activeOutlineColor={Colors.primary}
          style={{backgroundColor: Colors.white, color: Colors.lightGray3}}
          right={
            <TextInput.Icon
              icon={isReNewPassSecure ? 'eye-off' : 'eye'}
              color={Colors.lightGray4}
              onPress={() => setReNewPassSecure(!isReNewPassSecure)}
            />
          }
        />
        <Button
          onPress={() => changePasswordFunction()}
          title={Strings.saveNewPassword}
          titleColor={Colors.white}
          bgColor={Colors.primary}
          btnStyle={styles.addBtn}
        />
      </View>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

export default Password;
