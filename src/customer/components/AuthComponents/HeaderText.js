//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthStyles } from '../../screens/SplashScreen/AuthScreens/AuthStyles';

// create a component
const HeaderText = ({TopText,FontSize,Style}) => {

    return (
        <Text style={[AuthStyles.HeaderTextStyle,Style,{fontSize:FontSize}]}>{TopText}</Text>
    );
}

//make this component available to the app
export default HeaderText;
