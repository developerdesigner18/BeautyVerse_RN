//import liraries
import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Strings} from '../../theme/strings';
import {Images} from '../../theme/Images';
import HeaderText from '../../components/AuthComponents/HeaderText';
import {HomeStyles} from './HomeStyles';
import {Colors} from '../../theme/colors';
import Carousel from 'react-native-snap-carousel';

// create a component

export const SLIDER_WIDTH = wp(100);
export const SLIDER_HEIGHT = hp(30);
export const ITEM_WIDTH = wp(90);

const AllCategories = ({navigation}) => {
  const isCarousel = useRef(null);

  const UserData = [
    {
      name: Strings.bussinessnm,
      star: '5.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img1,
    },
    {
      name: Strings.bussinessnm,
      star: '3.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img2,
    },
    {
      name: Strings.bussinessnm,
      star: '2.5',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img3,
    },
    {
      name: Strings.bussinessnm,
      star: '4.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img4,
    },
  ];

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

  const UserImage = [
    {
      img: Images.img1,
    },
    {
      img: Images.img2,
    },
    {
      img: Images.img3,
    },
    {
      img: Images.img3,
    },
  ];

  const renderCorousel = ({item, index}) => {
    return (
      <View style={{alignItems: 'flex-start', marginRight: 10}}>
        <TouchableOpacity>
          <ImageBackground
            resizeMode="stretch"
            imageStyle={{
              borderRadius: 20,
            }}
            style={{height: hp(23), width: wp(78), alignItems: 'flex-start'}}
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

  const UserRender = ({item}) => {
    return (
      <View style={{width: wp(95)}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{flex: 1, marginRight: wp(2)}}>
          {UserData.map(item => (
            <Image
              resizeMode="stretch"
              imageStyle={{
                borderRadius: 20,
              }}
              style={{
                height: hp(25),
                width: wp(90),
                alignItems: 'flex-start',
                marginRight: 10,
              }}
              source={item.img}
            />
          ))}
        </ScrollView>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: wp(5),
            }}>
            <HeaderText FontSize={hp(2.5)} TopText={item.name} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                style={{height: hp(2.2), width: hp(2.2)}}
                source={Images.Star}
              />
              <Text style={{fontWeight: '600', color: Colors.primaryDark}}>
                {'  '}
                {item.star}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <View
              style={[
                HomeStyles.BussinessCatView,
                {
                  // borderWidth: focused ? 0 : 1,
                  // backgroundColor: focused ? Colors.primary : Colors.white,
                },
              ]}>
              <Image
                resizeMode="contain"
                style={[HomeStyles.BussinessCatIcon, {}]}
                source={Images.Girl}
              />
              <Text
                // focused={focused}
                style={[
                  // {color: focused ? Colors.white : Colors.primary},
                  HomeStyles.BussinessCatText,
                ]}>
                Hair
              </Text>
            </View>
            <View
              style={[
                HomeStyles.BussinessCatView,
                {
                  // borderWidth: focused ? 0 : 1,
                  // backgroundColor: focused ? Colors.primary : Colors.white,
                },
              ]}>
              <Image
                resizeMode="contain"
                style={[
                  HomeStyles.BussinessCatIcon,
                  {
                    // tintColor: focused ? Colors.white : Colors.primary,
                  },
                ]}
                source={Images.Makeup}
              />
              <Text
                // focused={focused}
                style={[
                  // {color: focused ? Colors.white : Colors.primary},
                  HomeStyles.BussinessCatText,
                ]}>
                Makeup
              </Text>
            </View>
            <View
              style={[
                HomeStyles.BussinessCatView,
                {
                  // borderWidth: focused ? 0 : 1,
                  // backgroundColor: focused ? Colors.primary : Colors.white,
                },
              ]}>
              <Image
                resizeMode="contain"
                style={[
                  HomeStyles.BussinessCatIcon,
                  {
                    // tintColor: focused ? Colors.white : Colors.primary,
                  },
                ]}
                source={Images.Face}
              />
              <Text
                // focused={focused}
                style={[
                  // {color: focused ? Colors.white : Colors.primary},
                  HomeStyles.BussinessCatText,
                ]}>
                Skincare
              </Text>
            </View>
            <View
              style={[
                HomeStyles.BussinessCatView,
                {
                  // borderWidth: focused ? 0 : 1,
                  // backgroundColor: focused ? Colors.primary : Colors.white,
                },
              ]}>
              <Image
                resizeMode="contain"
                style={[
                  HomeStyles.BussinessCatIcon,
                  {
                    // tintColor: focused ? Colors.white : Colors.primary,
                  },
                ]}
                source={Images.Nail}
              />
              <Text
                // focused={focused}
                style={[
                  // {color: focused ? Colors.white : Colors.primary},
                  HomeStyles.BussinessCatText,
                ]}>
                Nails
              </Text>
            </View>
          </View>
          <View
            style={{
              width: wp(90),
              borderBottomWidth: 0.8,
              borderColor: Colors.grey,
              marginVertical: hp(3.2),
            }}></View>
        </View>
      </View>
    );
  };
  const Arrowheader = ({TopText,onPress}) => {
    return (
      <View style={HomeStyles.ArrowHeader}>
        <HeaderText FontSize={hp(2.8)} TopText={TopText} />
        <TouchableOpacity
        onPress={onPress}
        >
          <Image
            resizeMode="contain"
            style={{height: hp(2.5), width: hp(2.5)}}
            source={Images.RightArrow}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={{width: wp(95), marginLeft: wp(5)}}>
          <Arrowheader 
          onPress={()=>{
            navigation.navigate('ActivePromotions')
          }}
          TopText={Strings.promotions} />

          {/* <FlatList
            showsHorizontalScrollIndicator={false}
            // indicatorStyle={{color:'transparent'}}
            horizontal={true}
            data={CorouselData}
            renderItem={renderCorousel}
          /> */}
          <View style={{marginLeft:-40,alignItems:'flex-start',width:wp(100)}}>
          <Carousel
          layout={'default'}
            horizontal={true}
            onScrollAnimationEnd={true}
            inactiveSlideOpacity={0.5}
            enableMomentum={true}
            decelerationRate={20000}
            lockScrollWhileSnapping={false}
            removeClippedSubviews={true}
            inactiveSlideScale={0.94}
            data={CorouselData}
            renderItem={renderCorousel}
            sliderWidth={wp(100)}
            itemWidth={wp(80)}
          />
          </View>
          <Arrowheader 
          onPress={()=>{navigation.navigate('TopBusinesses')}}
          TopText={Strings.TopBussiness} />
          <FlatList data={UserData} renderItem={UserRender} />
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default AllCategories;
