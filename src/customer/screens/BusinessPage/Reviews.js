//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import HeaderTop from '../../components/HomeComponent/headerTop';
import {Images} from '../../theme/Images';
import {Strings} from '../../theme/strings';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Avatar} from 'react-native-elements';
import SemiBold from '../../components/HomeComponent/SemiBold';
import StarRating from '../../components/BusinessPage/StarRating';
import {BusinessPageStyles} from './BusinessPageStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

// create a component

const Reviews = ({navigation}) => {
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

  const RenderReviews = ({item}) => {
    return (
      <Card containerStyle={{borderRadius: 20, padding: 0}}>
        <View>
          <View style={BusinessPageStyles.MainCard}>
            <View style={{flexDirection: 'row'}}>
              <Avatar size={40} rounded source={item.img} />

              <SemiBold AllStyle={{paddingLeft: 10}} EnterText={item.name} />
            </View>

            <StarRating paddingtop={hp(2.5)} Rating={Strings.stars} />
          </View>
          <Text
            style={{
              flexWrap: 'wrap',
              paddingBottom: 10,
              textAlign: 'left',
              paddingHorizontal: 15,
              color:Colors.Brown,
              fontFamily:'InterV'
            }}>
            Quisque rutrum aenean imperdiet etiam ultricies nisi vel augue
            curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus
            maecenas.
          </Text>
        </View>
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={'Reviews'}
      />
      <View style={{ flex: 1}}>
        <FlatList data={CorouselData} renderItem={RenderReviews} />
      </View>
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
export default Reviews;
