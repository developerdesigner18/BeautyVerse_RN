//import liraries
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
} from 'react-native';
import {Images} from '../../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {Colors} from '../../../theme/colors';
import {Searchstyles} from '../../../../customer/screens/SearchScreens/SearchStyles';
import HeaderTop from '../../../components/HomeComponent/headerTop';
import {Strings} from '../../../theme/strings';
import {HomeStyles} from '../../HomeScreens/HomeStyles';
import StarRating from '../../../components/BusinessPage/StarRating';
import {SafeAreaView} from 'react-native';

// create a component
const WishlistItems = ({navigation}) => {
  const [Index, setIndex] = useState([]);

  const [UserData, SetUserData] = useState([
    {
      name: 'Adams hair saloon',
      star: '5.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img1,
    },
    {
      name: 'Andrews spa',
      star: '3.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img2,
    },
    {
      name: 'Peoples favourite',
      star: '2.5',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img3,
    },
    {
      name: 'Tate club',
      star: '4.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img4,
    },
    {
      name: 'Mike Hair creators',
      star: '4.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img1,
    },
    {
      name: 'Crazy styles',
      star: '4.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img2,
    },
    {
      name: 'Adam stylers',
      star: '4.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img3,
    },
    {
      name: 'Make A look',
      star: '4.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img4,
    },
  ]);

  const Categories = () => {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View
          style={{
            marginTop: -10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <View style={[HomeStyles.BussinessCatView]}>
            <Image
              resizeMode="contain"
              style={[HomeStyles.BussinessCatIcon, {}]}
              source={Images.Girl}
            />
            <Text style={[HomeStyles.BussinessCatText]}>Hair</Text>
          </View>
          <View style={[HomeStyles.BussinessCatView]}>
            <Image
              resizeMode="contain"
              style={[HomeStyles.BussinessCatIcon]}
              source={Images.Makeup}
            />
            <Text style={[HomeStyles.BussinessCatText]}>Makeup</Text>
          </View>
          <View style={[HomeStyles.BussinessCatView]}>
            <Image
              resizeMode="contain"
              style={[HomeStyles.BussinessCatIcon]}
              source={Images.Face}
            />
            <Text style={[HomeStyles.BussinessCatText]}>Skincare</Text>
          </View>
          <View style={[HomeStyles.BussinessCatView]}>
            <Image
              resizeMode="contain"
              style={[HomeStyles.BussinessCatIcon]}
              source={Images.Nail}
            />
            <Text style={[HomeStyles.BussinessCatText]}>Nails</Text>
          </View>
        </View>
      </ScrollView>
    );
  };

  const renderUserList = ({item, index}) => {
    return (
      <TouchableOpacity>
        <View style={{paddingTop: hp(3)}}>
          <View style={Searchstyles.mainListMaker}>
            <Image style={Searchstyles.ProfileImageCon} source={item.img} />
            <View
              style={{
                width: '67%',
                paddingLeft: wp(5),
              }}>
              <View style={Searchstyles.Businessnamecontainer}>
                <Text
                  style={{
                    fontSize: hp(2.3),
                    marginVertical: hp(0.8),
                    color: '#301E39',
                  }}>
                  {item.name}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setIndex(prevFilters => {
                      if (prevFilters.includes(index)) {
                        return prevFilters.filter(i => i !== index);
                      }
                      return [...prevFilters, ...[index]];
                    });
                  }}>
                  {Index.includes(index) ? (
                    <Image
                      style={Searchstyles.SearchIcon}
                      source={Images.heartEmpty}
                    />
                  ) : Index !== index ? (
                    <Image
                      style={Searchstyles.SearchIcon}
                      source={Images.heartFill}
                    />
                  ) : (
                    <Image
                      style={Searchstyles.SearchIcon}
                      source={Images.heartEmpty}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <Categories />
              <StarRating
                Rating={Strings.stars}
                Numbers={Strings.rating}
                NumColor={Colors.Brown}
              />
            </View>
          </View>
          <View style={Searchstyles.BorderBottomStyle}></View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={Strings.wishlist}
      />
      <View style={{paddingLeft: wp(5), flex: 1}}>
        <FlatList data={UserData} renderItem={renderUserList} />
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
export default WishlistItems;
