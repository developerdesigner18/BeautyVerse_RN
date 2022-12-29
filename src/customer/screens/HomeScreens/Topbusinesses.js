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
import HeaderTop from '../../components/HomeComponent/headerTop';
import {HomeStyles} from './HomeStyles';
import {Colors} from '../../theme/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
// create a component
const TopBusinesses = ({navigation}) => {
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

  const UserRender = ({item}) => {
    return (
      <View style={{marginLeft: wp(5)}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{marginRight: wp(2)}}>
          {UserData.map(item => (
            <Image
              resizeMode="stretch"
              imageStyle={{
                borderRadius: 20,
              }}
              style={{
                height: hp(25),
                width: wp(85),
                alignItems: 'flex-start',
                marginRight: 10,
                marginTop: 20,
              }}
              source={item.img}
            />
          ))}
        </ScrollView>

        <View style={{width: wp(90)}}>
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
              marginVertical: hp(1),
              marginTop: hp(3),
            }}></View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderTop
          onPress={() => {
            navigation.goBack();
          }}
          HeaderText={Strings.topprof}
        />
        <View style={{flex: 1}}>
          <FlatList data={UserData} renderItem={UserRender} />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default TopBusinesses;
