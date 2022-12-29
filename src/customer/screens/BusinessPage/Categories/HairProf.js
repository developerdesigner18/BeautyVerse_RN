//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import SemiBold from '../../../components/HomeComponent/SemiBold';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {Images} from '../../../theme/Images';
import {Colors} from '../../../theme/colors';
import {Avatar} from 'react-native-elements';
import StarRating from '../../../components/BusinessPage/StarRating';
import HeaderTop from '../../../components/HomeComponent/headerTop';
import {Strings} from '../../../theme/strings';
import { SafeAreaView } from 'react-native-safe-area-context';

// create a component
const HairProf = ({navigation}) => {
  const CorouselData = [
    {
      img: Images.Img1,
      name: `Jonathan Morrison`,
      discount: 'Upto 50% off',
    },
    {
      img: Images.Img2,
      name: `Maria Kevin`,
      discount: 'Upto 40% off',
    },
    {
      img: Images.Img3,
      name: `Lings Jhonson`,
      discount: 'Upto 20% off',
    },
    {
      img: Images.Img4,
      name: `Kevin Frank`,
      discount: 'Upto 10% off',
    },
    {
      img: Images.Img5,
      name: `Dwayne Jackson`,
      discount: 'Upto 10% off',
    },
    {
      img: Images.Img6,
      name: `Tom Cameron`,
      discount: 'Upto 10% off',
    },
    {
      img: Images.Img6,
      name: `Conor Charlie`,
      discount: 'Upto 10% off',
    },
  ];

  const renderProf = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: wp(3.5),
          borderBottomWidth: 1,
          width: wp(90),
          alignSelf: 'center',
          borderColor: Colors.grey,
        }}>
        <Avatar size={70} rounded source={item.img} />
        <View style={{paddingLeft: 18}}>
          <SemiBold FontSize={hp(2.5)} EnterText={item.name} />
          <StarRating Rating={Strings.stars} Numbers={Strings.rating} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
      onPress={()=>{
        navigation.goBack();
      }}
      HeaderText={Strings.hairprof} />
      <FlatList data={CorouselData} renderItem={renderProf} />
    </SafeAreaView>
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
export default HairProf;
