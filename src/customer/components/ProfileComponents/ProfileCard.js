import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import SemiBold from '../../components/HomeComponent/SemiBold';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Avatar} from 'react-native-elements';
import {Images} from '../../theme/Images';
import {Colors} from '../../theme/colors';
import {TouchableOpacity} from 'react-native';
import {ProfileStyles} from '../../screens/ProfileScreens/ProfileStyles';

// create a component
const ProfileCard = ({avtar, mainText, text, onPress, showmenu,disabled,MenuOnpress}) => {
  return (
    <TouchableOpacity 
    disabled={disabled}
    onPress={onPress} style={ProfileStyles.profileCard}>
      <Avatar rounded size={50} source={avtar} />
      <View style={{width: wp(55), marginLeft: -5}}>
        <SemiBold
          AllStyle={{marginTop: -12}}
          FontSize={hp(2)}
          EnterText={mainText}
        />
        <Text
          style={{
            fontFamily: 'InterV',
            color: Colors.Brown,
            flexWrap: 'wrap',
          }}>
          {text}
        </Text>
      </View>

      {showmenu ? (
        <TouchableOpacity
        hitSlop={{right:20,left:20,top:20,bottom:20}}
        onPress={MenuOnpress}
        >
          <Image
          resizeMode="contain"
          style={{height: hp(3), width: hp(3)}}
          source={Images.menudots}
        />
          </TouchableOpacity>
      ) : (
        <Image
          resizeMode="contain"
          style={{height: hp(2.4), width: hp(2.4)}}
          source={Images.RightArrow}
        />
      )}
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
export default ProfileCard;
