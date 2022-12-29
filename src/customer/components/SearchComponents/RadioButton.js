//import liraries
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import { Colors } from '../../theme/colors';
import { Strings } from '../../theme/strings';

// create a component
const RadioButton = ({onPress, status, checked,SortText,Textstyle}) => {
  return (
    <View
      style={{
        marginVertical:-5
      }}>
          <CheckBox
           status={status}
           checked={checked}
           onPress={onPress}
            containerStyle={{backgroundColor: 'white',borderWidth:0}}
            title={
              <Text
                style={{
                  Textstyle,
                  paddingLeft:wp(2),
                  color: Colors.primaryDark,
                  fontSize: hp(1.8),
                  fontFamily: 'InterV',
                }}>
                {SortText}
              </Text>
            }
            //  status={status}
            //  checked={checked}
            uncheckedIcon={
              <Image
                resizeMode="contain"
                source={require('../../assets/SearchScreen/roundEmpty.png')}
                style={{height: 20, width: 20, marginLeft: wp(-5)}}
              />
            }
            checkedIcon={
              <Image
                resizeMode="contain"
                source={require('../../assets/SearchScreen/roundFill.png')}
                style={{height: 20, width: 20, marginLeft: wp(-5)}}
              />
            }
            //  onPress={onPress}
          />
      {/* <CheckBox
       
        status={status}
        checked={checked}
        uncheckedIcon={
          <Image
            resizeMode="contain"
            source={require('../../assets/SearchScreen/roundEmpty.png')}
            style={{height: 20, width: 20, marginHorizontal: wp(-4.5)}}
          />
        }
        checkedIcon={
          <Image
            resizeMode="contain"
            source={require('../../assets/SearchScreen/roundFill.png')}
            style={{height: 20, width: 20, marginHorizontal: wp(-4.5)}}
          />
        }
        onPress={onPress}
      />
      <Text
      style={{marginLeft:-10,color:Colors.primaryDark,fontSize:16,fontFamily:'InterV'}}
      >{SortText}</Text> */}
    </View>
  );
};

// define your styles

//make this component available to the app
export default RadioButton;
