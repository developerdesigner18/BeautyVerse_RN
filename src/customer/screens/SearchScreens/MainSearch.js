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
import {Images} from '../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Colors} from '../../theme/colors';
import SearchInput from '../../components/SearchComponents/SearchInput';
import HeaderText from '../../components/AuthComponents/HeaderText';
import {Strings} from '../../theme/strings';
import {Searchstyles} from './SearchStyles';
import {HomeStyles} from '../HomeScreens/HomeStyles';
import {AuthStyles} from '../SplashScreen/AuthScreens/AuthStyles';
import RBSheet from 'react-native-raw-bottom-sheet';
import RadioButton from '../../components/SearchComponents/RadioButton';
import MapView from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const MainSearch = ({navigation}) => {
  const [Index, setIndex] = useState([]);
  const [map, Setmap] = useState(false);
  const [Like, SetLike] = useState(false);
  const [HtoL, setHtoL] = useState(false);
  const [LtoH, setLtoH] = useState(false);
  const [Rated, setRated] = useState(false);
  const [popular, setpopular] = useState(false);
  const [distance, setdistance] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  const UserDataCopy = [
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
  ];

  const refRBSheet = useRef();


  const SelectFavourite = index => {
    setIndex(prevFilters => {
      if (prevFilters.includes(index)) {
        return prevFilters.filter(Index => index !== Index);
      } else {
        return [...prevFilters, ...[index]];
      }
    });
  };

  const renderUserList = ({item, index}) => {
    return (
      <TouchableOpacity
      disabled={true}
        onPress={() => {
          navigation.navigate('BusinessPage');
        }}>
        <View style={{paddingTop: hp(3)}}>
          <View style={Searchstyles.mainListMaker}>
            <TouchableOpacity
               onPress={() => {
                navigation.navigate('BusinessPage');
              }}
            >
            <Image style={Searchstyles.ProfileImageCon} source={item.img} />

            </TouchableOpacity>
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
                hitSlop={{right:20,left:20,top:20,bottom:20}}
                  onPress={() => {
                  SelectFavourite(index);
                  }}>
                  {Index.includes(index) ? (
                    <Image
                      style={Searchstyles.SearchIcon}
                      source={Images.heartFill}
                    />
                  ) : Index !== index ? (
                    <Image
                      style={Searchstyles.SearchIcon}
                      source={Images.heartEmpty}
                    />
                  ) : (
                    <Image
                      style={Searchstyles.SearchIcon}
                      source={Images.heartFill}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <Categories />
              <View style={Searchstyles.StartContainer}>
                <Image
                  resizeMode="contain"
                  style={{height: hp(2.2), width: hp(2.2)}}
                  source={Images.Star}
                />
                <Text
                  style={{
                    paddingLeft: 10,
                    fontWeight: '600',
                    color: Colors.primaryDark,
                  }}>
                  {item.star}
                </Text>
                <Text style={{paddingLeft: 4}}>{'(214 Ratings)'}</Text>
              </View>
            </View>
          </View>
          <View style={Searchstyles.BorderBottomStyle}></View>
        </View>
      </TouchableOpacity>
    );
  };

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

  const SetScreens = () => {
    map == false ? Setmap(true) : Setmap(false);
  };

  const setData = () => {
    SetUserData(UserDataCopy);
  };

  const searchText = value => {
    let text = value.toLowerCase();
    let trucks = UserData;
    let filteredName = trucks.filter(item => {
      return !item.name || item.name === ''
        ? null
        : item.name.toLowerCase().match(text);
    });
    if (!text || text === '' || text === null) {
      setData();
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      console.log('=====no data=====');
    } else if (Array.isArray(filteredName)) {
      SetUserData(filteredName);
    } else if (Array.isArray(!filteredName)) {
      console.log('=====no data=====');
    }
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <SearchInput
          placeholder={'Search Here'}
          // onKeyPress={value => {
          //   searchText(value);
          //   setSearchQuery(value);
          // }}
          onChangeText={value => {
            searchText(value);
            setSearchQuery(value);
          }}
          value={searchQuery}
          onPress={() => {
            SetScreens();
          }}
          source={map === true ? Images.list : Images.map}
        />
        <View
          style={{
            flex: 1,
            // paddingBottom: !map ? hp(4) : 0,
            paddingLeft: !map ? wp(5) : 0,
          }}>
          {!map ? (
            <View style={{flex: 1}}>
              <Text
                style={[
                  AuthStyles.HeaderTextStyle,
                  {
                    fontSize: hp(3),
                    fontFamily: 'Inter-Bold',
                    paddingVertical: 0,
                  },
                ]}>
                {Strings.recommended}
              </Text>

              <FlatList data={UserData} renderItem={renderUserList} />
            </View>
          ) : (
            <View style={{flex: 1}}>
              <MapView
                style={{width: '100%', height: '100%'}}
                initialRegion={{
                  latitude: -37.8136,
                  longitude: 144.9631,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />
            </View>
          )}

          <View style={Searchstyles.MainViewSF}>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.open();
              }}
              style={Searchstyles.sortButtonStyle}>
              <Image
                resizeMode="contain"
                style={Searchstyles.SearchIcon}
                source={Images.sort}
              />
              <Text style={Searchstyles.SFText}>Sort</Text>
            </TouchableOpacity>
            <View
              style={{
                height: '100%',
                borderRightWidth: 1,
                paddingVertical: -20,
                borderColor: Colors.grey,
              }}></View>
            <TouchableOpacity style={Searchstyles.filterButtonStyles}>
              <Image
                resizeMode="contain"
                style={Searchstyles.SearchIcon}
                source={Images.filter}
              />
              <Text style={[Searchstyles.SFText]}>Filters</Text>
            </TouchableOpacity>
          </View>
          <RBSheet
            dragFromTopOnly={true}
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              draggableIcon: {
                backgroundColor: Colors.Brown,
                width: '15%',
                // marginVertical:30,
                marginBottom: hp(2.3),
              },
              container: {
                height: hp(45),
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
              },
            }}>
            <View style={{flex: 1, width: wp(90), alignSelf: 'center'}}>
              <HeaderText FontSize={hp(3)} TopText={Strings.sortby} />
              <ScrollView style={{flex: 1, width: wp(90)}}>
                <RadioButton
                  SortText={Strings.priceHtoL}
                  status={HtoL === true ? 'checked' : 'unchecked'}
                  checked={HtoL}
                  onPress={() => {
                    // onSelectFilterHandler(filterItem);
                    HtoL === false ? setHtoL(true) : setHtoL(false);
                  }}
                />
                <RadioButton
                  SortText={Strings.priceLtoH}
                  status={LtoH === true ? 'checked' : 'unchecked'}
                  checked={LtoH}
                  onPress={() => {
                    // onSelectFilterHandler(filterItem);
                    LtoH === false ? setLtoH(true) : setLtoH(false);
                  }}
                />
                <RadioButton
                  SortText={Strings.bestrated}
                  status={Rated === true ? 'checked' : 'unchecked'}
                  checked={Rated}
                  onPress={() => {
                    // onSelectFilterHandler(filterItem);
                    Rated === false ? setRated(true) : setRated(false);
                  }}
                />
                <RadioButton
                  SortText={Strings.mostPopular}
                  status={popular === true ? 'checked' : 'unchecked'}
                  checked={popular}
                  onPress={() => {
                    // onSelectFilterHandler(filterItem);
                    popular === false ? setpopular(true) : setpopular(false);
                  }}
                />
                <RadioButton
                  SortText={Strings.distance}
                  status={distance === true ? 'checked' : 'unchecked'}
                  checked={distance}
                  onPress={() => {
                    // onSelectFilterHandler(filterItem);
                    distance === false ? setdistance(true) : setdistance(false);
                  }}
                />
              </ScrollView>
            </View>
          </RBSheet>
        </View>
      </SafeAreaView>
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Platform.OS === 'ios' ? hp(-5) : 0,
    backgroundColor: Colors.white,
  },
});

//make this component available to the app
export default MainSearch;
