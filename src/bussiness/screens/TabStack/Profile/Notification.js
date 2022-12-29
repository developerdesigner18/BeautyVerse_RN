import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Strings} from '../../../theme/strings';
import {styles} from './styles';
import {NotiSettings} from '../../../theme/arrays';
import {Colors} from '../../../theme/colors';
import Header from '../../../components/Header';
import NotificationRow from '../../../components/NotificationRow';
import Label from '../../../components/Label';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {FONTS} from '../../../theme/fonts';

const Notification = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [optionOn, setOptionOn] = useState([]);

  const switchSelection = index => {
    if (optionOn.length == 0) {
      setOptionOn([index]);
    } else {
      if (optionOn.includes(index)) {
        const filter = optionOn.filter(item => item != index);
        setOptionOn(filter);
      } else {
        setOptionOn(prevState => [...prevState, index]);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.settings}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.mainView}>
        <Label
          label={Strings.notifications}
          color={Colors.primary_dark}
          size={hp(2.5)}
          left
          fontFamily={FONTS.InterExtraBold}
          marginBottom={hp(3)}
        />
        {NotiSettings.map((item, index) => (
          <NotificationRow
            label={item}
            isSwitchOn={optionOn.includes(index) && true}
            onToggleSwitch={() => switchSelection(index)}
          />
        ))}
        <View style={styles.securityView}>
          <Label
            label={Strings.security}
            color={Colors.primary_dark}
            size={hp(2.5)}
            left
            fontFamily={FONTS.InterExtraBold}
            marginBottom={hp(3)}
          />
          <NotificationRow
            label={Strings.factorAuthentication}
            isSwitchOn={isSwitchOn}
            onToggleSwitch={() => setIsSwitchOn(!isSwitchOn)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
