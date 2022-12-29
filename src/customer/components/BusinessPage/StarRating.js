//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Images} from '../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Strings} from '../../theme/strings';
import { Colors } from '../../theme/colors';
import {Searchstyles} from '../../screens/SearchScreens/SearchStyles';

// create a component
const StarRating = ({Rating, Numbers,NumColor,paddingtop,Style}) => {
  return (
   
      <View style={[Searchstyles.StartContainer,Style,{paddingTop:paddingtop}]}>
        <Image
          resizeMode="contain"
          style={{height: hp(2.2), width: hp(2.2)}}
          source={Images.Star}
        />
        <Text
          style={{
            paddingLeft: 5,
            fontWeight: '600',
            color: Colors.primaryDark,
          }}>
          {Rating}
        </Text>
        <Text style={{paddingLeft: 4,color:NumColor,color:Colors.Brown}}>{Numbers}</Text>
      </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default StarRating;
