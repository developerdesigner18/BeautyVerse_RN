import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {Images} from '../../theme/Images';
import {Colors} from '../../theme/colors';
import {Strings} from '../../theme/strings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import { color } from 'react-native-elements/dist/helpers';

const MapSearch = ({onChangeText, value, style, inputStyle, onTouchStart}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        resizeMode="contain"
        source={Images.smallsearch}
        style={styles.searchImg}
      />
      <TextInput
        onTouchStart={onTouchStart}
        placeholderTextColor={Colors.darkpink}
        placeholder={Strings.searchLocation}
        onChangeText={onChangeText}
        value={value}
        style={[styles.input, inputStyle,{color:Colors.primaryDark}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.white,
    width: wp(70),
    marginLeft: wp(2),
    paddingVertical: hp(2),
  },
  searchImg: {width: hp(2.8), height: hp(2.8)},
  container: {
    backgroundColor: Colors.white,
    width: wp(90),
    height: hp(7),
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    elevation: 2,
  },
});

export default MapSearch;
