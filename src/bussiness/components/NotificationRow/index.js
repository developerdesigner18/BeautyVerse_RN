import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Switch} from 'react-native-paper';
import {Colors} from '../../theme/colors';
import {FONTS} from '../../theme/fonts';
import Label from '../Label';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({label, isSwitchOn, onToggleSwitch}) => {
  return (
    <View style={styles.container}>
      <Label
        label={label}
        color={Colors.primary_dark}
        size={hp(2)}
        fontFamily={FONTS.InterSemiBold}
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

export default Index;
