import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
import {changePasswordThunk} from '../../../../store/actions/profile-actions';
import HeaderTop from '../../../components/HomeComponent/headerTop';
import {Strings} from '../../../theme/strings';
import TwoSideInput from '../../../components/AuthComponents/TwoSideInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import Button from '../../../components/AuthComponents/FilledButton';
import {Colors} from '../../../theme/colors';
import Spinner from '../../../../bussiness/components/Spinner';
const ChangePass = ({navigation}) => {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reNewPassword, setReNewPassword] = useState('');
  const loading = useSelector(state => state.changePassword.loading);
  const data = useSelector(
    state =>
      state.changePassword.isSuccess &&
      state.changePassword.changePassword.data,
  );

  useEffect(() => {
    if (data) {
      showMessage({
        message: data.message,
        floating: true,
        type: 'success',
      });
      navigation.goBack();
    }
    return () => {
      dispatch(changePasswordThunk(''));
    };
  }, [data]);

  const changePasswordFunction = async () => {
    const token = await AsyncStorage.getItem('token');
    if (newPassword == reNewPassword) {
      const data = {
        oldPassword: oldPassword,
        newPassword: newPassword,
      };
      dispatch(changePasswordThunk(data, token));
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
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={Strings.changepsw}
      />
      <TwoSideInput
        value={oldPassword}
        onChangeText={text => setOldPassword(text)}
        animated
        label={Strings.currentpass}
        containerstyle={{marginTop: hp(4)}}
        placeholder={Strings.currentpass}
      />
      <TwoSideInput
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
        animated
        label={Strings.newpass}
        containerstyle={{marginTop: hp(2)}}
        placeholder={Strings.newpass}
      />
      <TwoSideInput
        value={reNewPassword}
        onChangeText={text => setReNewPassword(text)}
        animated
        label={Strings.reenterpass}
        containerstyle={{marginTop: hp(2)}}
        placeholder={Strings.reenterpass}
      />
      <View style={{position: 'absolute', bottom: hp(2), alignSelf: 'center'}}>
        <Button
          onPress={() => changePasswordFunction()}
          bgColor={Colors.primary}
          title={Strings.savenewpass}
          titleColor={Colors.white}
          btnStyle={{width: wp(90)}}
        />
      </View>
      <Spinner visible={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ChangePass;
