import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Switch} from 'react-native-paper';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import SemiBold from '../HomeComponent/SemiBold';

const SwitchCard = ({FontSize,EnterText, isSwitchOn, onToggleSwitch,Allstyle}) => {
  return (
    <View style={styles.container}>
        <SemiBold
        FontSize={FontSize}
        EnterText={EnterText}
        AllStyle={Allstyle}
        />
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(3),
  },
});

export default SwitchCard;