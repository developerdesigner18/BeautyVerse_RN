//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {HomeStyles} from './HomeStyles';
import {Images} from '../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Strings} from '../../theme/strings';
import {Colors} from '../../theme/colors';
import BackButton from '../../components/AuthComponents/BackButton';
import HeaderText from '../../components/AuthComponents/HeaderText';
import HeaderTop from '../../components/HomeComponent/headerTop';
import { SafeAreaView } from 'react-native-safe-area-context';
// create a component
const ActivePromotions = ({navigation}) => {
    
  const CorouselData = [
    {
      img: Images.CoroselBg,
      name: `at Kynthia's Nail Salon`,
      discount: 'Upto 50% off',
    },
    {
      img: Images.img2,
      name: `at Dev's Nail Salon`,
      discount: 'Upto 40% off',
    },
    {
      img: Images.img3,
      name: `at kathi's Nail Salon`,
      discount: 'Upto 20% off',
    },
    {
      img: Images.img4,
      name: `at kevin's Nail Salon`,
      discount: 'Upto 10% off',
    },
  ];

  const renderCorousel = ({item}) => {
    return (
      <View style={{alignItems: 'center', width: wp(95)}}>
        <TouchableOpacity>
          <ImageBackground
            resizeMode="stretch"
            imageStyle={{
              borderRadius: 20,
            }}
            style={{
              height: hp(25),
              width: wp(90),
              alignItems: 'flex-start',
              marginVertical: hp(1.5),
            }}
            source={item.img}>
            <View style={{position: 'absolute', bottom: 20, left: 20}}>
              <Text
                style={{fontSize: 20, color: Colors.white, fontWeight: '600'}}>
                {item.discount}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.white,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                {item.name}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex:1}}>
   <View style={[HomeStyles.container, {alignItems: 'center'}]}>
      <HeaderTop
      onPress={()=>{
        navigation.goBack();
      }}
      HeaderText={Strings.promotions}
      />
      <FlatList data={CorouselData} renderItem={renderCorousel} />
    </View>
    </SafeAreaView>
 
  );
};

// define your styles

//make this component available to the app
export default ActivePromotions;
