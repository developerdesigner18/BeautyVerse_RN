import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Strings} from '../../../theme/strings';
import {Images} from '../../../theme/images';
import {styles} from './styles';
import {Colors} from '../../../theme/colors';
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

const Password = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.changePassword}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.mainView}>
        <TextInput
          secureTextEntry
          placeholder={Strings.currentPassword}
          mode="outlined"
          outlineColor={Colors.lightGray2}
          activeOutlineColor={Colors.primary}
          style={{backgroundColor: Colors.white, color: Colors.lightGray3}}
          right={<TextInput.Icon icon="eye" color={Colors.lightGray4}/>}
        />
        <TextInput
          secureTextEntry
          placeholder={Strings.newPassword}
          mode="outlined"
          outlineColor={Colors.lightGray2}
          activeOutlineColor={Colors.primary}
          style={{backgroundColor: Colors.white, color: Colors.lightGray3}}
          right={<TextInput.Icon icon="eye" color={Colors.lightGray4}/>}
        />
        <TextInput
          secureTextEntry
          placeholder={Strings.reEnterNewPassword}
          mode="outlined"
          outlineColor={Colors.lightGray2}
          activeOutlineColor={Colors.primary}
          style={{backgroundColor: Colors.white, color: Colors.lightGray3}}
          right={<TextInput.Icon icon="eye" color={Colors.lightGray4}/>}
        />
        <Button
          title={Strings.saveNewPassword}
          titleColor={Colors.white}
          bgColor={Colors.primary}
          btnStyle={styles.addBtn}
        />
      </View>
    </SafeAreaView>
  );
};

export default Password;
