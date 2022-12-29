//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Colors} from '../../theme/colors';

// create a component
const HeaderTop = ({HeaderText, onPress,source,imgstyle,onPressimg}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        width: wp(100),
        borderColor: Colors.grey,
        height: hp(10),
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={onPress} style={{paddingLeft: wp(5)}}>
        <Image
          resizeMode="contain"
          style={{height: hp(2.5), width: hp(2.5)}}
          source={require('../../assets/AuthScreen/Back.png')}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'Inter-SemiBold',
          fontSize: hp(2.7),
          textAlign: 'center',
          paddingVertical: hp(2.3),
          color: '#301E39',
          // fontWeight: '700',
        }}>
        {HeaderText}
      </Text>
      <TouchableOpacity 
      onPress={onPressimg}
      style={{height: hp(2.5), width: hp(2.5),marginRight:wp(5)}}>
        <Image
        resizeMode='contain'
        style={imgstyle}
        source={source}
        />
      </TouchableOpacity>
    </View>
  );
};

// define your styles

//make this component available to the app
export default HeaderTop;
