//import liraries
import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../../theme/layout';


// create a component
const AuthInput = ({placeholder, value,Inputstyle, onChangeText,keyboardType,maxLength ,secureTextEntry}) => {
  return (
    <TextInput
    secureTextEntry={secureTextEntry}
    maxLength={maxLength}
    keyboardType={keyboardType}
    placeholderTextColor={"#979797"}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[{  paddingLeft:20,
        color:"black",
        height:hp(7),
        borderWidth: 1,
        width: '90%',
        paddingVertical: 6,
        borderRadius: 12,
        marginBottom:hp(2),
        alignSelf:'center',
        borderColor:"#EEE6F1"},Inputstyle]}
    />
  );
};

// define your styles


//make this component available to the app
export default AuthInput;
