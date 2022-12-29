//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import SemiBold from '../../components/HomeComponent/SemiBold';
import {Images} from '../../theme/Images';
import Textnormal from '../../components/Textnormal';
import ProfileStyles from '../../screens/ProfileScreens/ProfileStyles';
import {Shadow} from '../../theme/shadow';
import {useState} from 'react';

// create a component
const FAQCard = ({SwitchIcon, onPress, HeaderText, HintText}) => {
  const [ShowText, SetShowText] = useState(false);

  return (
    <View style={[Shadow.shadowNormal, ProfileStyles.FAQcard]}>
      <View>
        <View style={ProfileStyles.TextView}>
          <SemiBold
            AllStyle={{flexWrap: 'wrap', width: wp(75)}}
            EnterText={HeaderText}
          />
       
            <TouchableOpacity
              onPress={() => {
                SetShowText(!ShowText);
              }}>
              {ShowText ? (
                <Image
                  resizeMode="contain"
                  style={{height: hp(2.7), width: hp(2.7)}}
                  source={Images.minusround}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  style={{height: hp(3), width: hp(3)}}
                  source={Images.plus}
                />
              )}
            </TouchableOpacity>
        </View>
        {ShowText ? (
          <Textnormal Allstyle={{fontSize: hp(1.7)}} entertext={HintText} />
        ) : null}
      </View>
    </View>
  );
};

//make this component available to the app
export default FAQCard;
