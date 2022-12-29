//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Strings} from '../../../theme/strings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {Images} from '../../../theme/Images';
import {Colors} from '../../../theme/colors';
import RadioButton from '../../SearchComponents/RadioButton';

// create a component
const Arrowheader = ({text, source, onPress,ShowCheckBox,status,checked,onPressRadio,SortText}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: wp(90),
          marginVertical: hp(2),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{height: hp(5), width: hp(5)}}
            source={source}
          />
          <Text
            style={{
              marginLeft: wp(5),
              fontSize: hp(2.2),
              fontFamily: 'Inter-SemiBold',
              color: Colors.primaryDark,
            }}>
            {text}
          </Text>
        </View>
        {
          ShowCheckBox === 'show' ?
          <View style={{marginRight:wp(5)}}>
              <RadioButton
          
          status={status}
          checked={checked}
          onPress={onPressRadio}
          SortText={SortText}
        /> 
            </View>
        :
          <Image
            resizeMode="contain"
            style={{height: hp(2.8), width: hp(2.8)}}
            source={Images.RightArrow}
          />
        }
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Arrowheader;
