import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {Images} from '../../theme/images';
import {Colors} from '../../theme/colors';
import {Strings} from '../../theme/strings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({onChangeText, value, style, inputStyle, onTouchStart}) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={Images.search} style={styles.searchImg} />
      <TextInput
        onTouchStart={onTouchStart}
        placeholder={Strings.searchLocation}
        placeholderTextColor={Colors.lightGray3}
        onChangeText={onChangeText}
        value={value}
        style={[styles.input, inputStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.white,
    width: wp(70),
    marginLeft: wp(2),
    color:Colors.primary_dark,
    paddingVertical: hp(2),
  },
  searchImg: {width: wp(6), height: wp(6)},
  container: {
    backgroundColor: Colors.white,
    width: wp(90),
    height: hp(7),
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(4),
  },
});

export default Index;
