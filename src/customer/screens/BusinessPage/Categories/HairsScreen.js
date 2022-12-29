//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Platform
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {Images} from '../../../theme/Images';
import {Colors} from '../../../theme/colors';
import {Avatar} from 'react-native-elements';
import {BusinessPageStyles} from '../BusinessPageStyles';
import StarRating from '../../../components/BusinessPage/StarRating';
import HeaderText from '../../../components/AuthComponents/HeaderText';
import {Strings} from '../../../theme/strings';
import SemiBold from '../../../components/HomeComponent/SemiBold';
import PriceAmt from '../../../components/BusinessPage/PriceAmt';

// create a component
const HairsScreen = ({navigation}) => {
  const CorouselData = [
    {
      img: Images.Img1,
      name: `at Kynthia's Nail Salon`,
      discount: 'Upto 50% off',
    },
    {
      img: Images.Img2,
      name: `at Dev's Nail Salon`,
      discount: 'Upto 40% off',
    },
    {
      img: Images.Img3,
      name: `at kathi's Nail Salon`,
      discount: 'Upto 20% off',
    },
    {
      img: Images.Img4,
      name: `at kevin's Nail Salon`,
      discount: 'Upto 10% off',
    },
    {
      img: Images.Img5,
      name: `at kevin's Nail Salon`,
      discount: 'Upto 10% off',
    },
    {
      img: Images.Img6,
      name: `at kevin's Nail Salon`,
      discount: 'Upto 10% off',
    },
    {
      img: Images.Img6,
      name: `at kevin's Nail Salon`,
      discount: 'Upto 10% off',
    },
  ];

  const HairService = [
    {
      service: 'Straight Hair',
      duration: `Duration: 45 minutes`,
      price: '$60.00',
    },
    {
      service: 'Buzz Cut Hair',
      duration: `Duration: 45 minutes`,
      price: '$60.00',
    },
    {
      service: 'Hair Cut 1',
      duration: `Duration: 45 minutes`,
      price: '$60.00',
    },
    {
      service: 'Hair Cut 5',
      duration: `Duration: 45 minutes`,
      price: '$60.00',
    },
    {
      service: 'Hair Cut 2',
      duration: `Duration: 45 minutes`,
      price: '$60.00',
    },
    {
      service: 'Hair Cut 3',
      duration: `Duration: 45 minutes`,
      price: '$60.00',
    },
    {
      service: 'Straight Hair',
      duration: `Duration: 45 minutes`,
      price: '$60.00',
    },
    {
      service: 'Straight Hair',
      duration: `Duration: 45 minutes`,
      price: '$60.00',
    },
   

  ];

  const RenderHairService = ({item}) => {
    return (
      <View style={BusinessPageStyles.hairsercontainer}>
        <View>
          <SemiBold EnterText={item.service} />
          <Text style={{fontFamily:'InterV',color:Colors.Brown}}>Duration: 45 minutes</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <PriceAmt Amount={'$60.00'} />
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate('BookService')
          }}
          >
            <Image
              resizeMode="contain"
              style={{height: hp(3.7), width: hp(3.7), marginLeft: wp(2.5)}}
              source={Images.plus}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const RenderAvtar = ({item}) => {
    return (
      <View
        style={{
          paddingLeft: wp(2.5),
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Avatar size={95} rounded source={item.img} />
        </TouchableOpacity>
        <Text
          style={[
            BusinessPageStyles.HeadertextStyle,
            {fontSize: 17, paddingVertical: 5},
          ]}>
          {item.name}
        </Text>
        <StarRating NumColor={Colors.primaryDark} Numbers={'5.0'} />
      </View>
    );
  };

 
  return (
    <View style={styles.container}>
     
      <ScrollView 
      contentContainerStyle={{flexGrow:1,height:'auto'}}
      >
      <View>
          <View style={BusinessPageStyles.HairscreenMainCon}>
            <SemiBold FontSize={hp(2.5)} EnterText={'Hair Professionals'} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HairProf');
              }}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <SemiBold EnterText={'View All  '} />
              <Image
                resizeMode="contain"
                style={{height: hp(2), width: hp(2)}}
                source={Images.RightArrow}
              />
            </TouchableOpacity>
          </View>
          <View style={{paddingRight:wp(2.5)}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={CorouselData}
            renderItem={RenderAvtar}
          />
          </View>
       
          <View style={BusinessPageStyles.BorderBottomWidth}></View>
        </View>

        <View style={{marginHorizontal: wp(5), paddingBottom: 50}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <HeaderText FontSize={hp(2.5)} TopText={Strings.hairser} />
            <StarRating
              paddingtop={hp(2)}
              Numbers={'(214 ratings)'}
              Rating={'5.0'}
            />
          </View>
            <FlatList 
            scrollEnabled={false}
            scrollsToTop={true}
            data={HairService} renderItem={RenderHairService} />
        </View>
      </ScrollView>
     
     
       
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
export default HairsScreen;
