//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../src/customer/theme/layout';
import { Images } from './customer/theme/Images';
import { Colors } from './customer/theme/colors';
import SemiBold from './customer/components/HomeComponent/SemiBold';
import { Strings } from './customer/theme/strings';
import Button from './customer/components/AuthComponents/FilledButton';
// create a component
const ErrorMsg = () => {
    return (
        <View style={styles.container}>
            <View style={{height:hp(100),width:wp(100),alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0, 0, 0, 0.4);'}}>
            <View
            style={{height:hp(40),width:wp(90),borderRadius:20,alignItems:'center',backgroundColor:Colors.white}}
            >
               <Image
               resizeMode='contain'
               style={{height:hp(9),width:hp(9),marginVertical:hp(3.2)}}
               source={Images.erroralert}
               />
               <SemiBold
               AllStyle={{textAlign:'center'}}
               FontSize={hp(2.5)}
               EnterText={Strings.errmsg}
               />
                <Button
                titleColor={Colors.white}
                bgColor={Colors.primary}
                title={Strings.retry}
                />
                 <Button
                titleColor={Colors.primaryDark}
                title={Strings.trylater}
                />
            </View>
            </View>
        </View>
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
export default ErrorMsg;
