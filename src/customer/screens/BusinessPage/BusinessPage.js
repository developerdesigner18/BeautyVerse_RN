//import liraries
import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import HeaderTop from '../../components/HomeComponent/headerTop';
import {Images} from '../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Strings} from '../../theme/strings';
import Carousel from 'react-native-snap-carousel';
import {BusinessPageStyles} from './BusinessPageStyles';
import {Colors} from '../../theme/colors';
import HeaderText from '../../components/AuthComponents/HeaderText';
import {Searchstyles} from '../SearchScreens/SearchStyles';
import StarRating from '../../components/BusinessPage/StarRating';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeStyles} from '../HomeScreens/HomeStyles';
import HairsScreen from './Categories/HairsScreen';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Platform} from 'react-native';
import {useState} from 'react';

// create a component
const BusinessPage = ({navigation}) => {
  const [IsFav, SetIsFav] = useState(false);
  const [SelectedTime,SetSelectedTime] = useState([])

  const Timings = [
    {
      day: 'Monday',
      time: '10:00AM - 09:00PM',
    },
    {
      day: 'Tuesday',
      time: '10:00AM - 09:00PM',
    },
    {
      day: 'Wednesday',
      time: '10:00AM - 09:00PM',
    },
    {
      day: 'Thursday',
      time: '10:00AM - 09:00PM',
    },
    {
      day: 'Friday',
      time: '10:00AM - 09:00PM',
    },
    {
      day: 'Saturday',
      time: '10:00AM - 09:00PM',
    },
    {
      day: 'Sunday',
      time: '10:00AM - 09:00PM',
    },
  ];

  const refRBSheet = useRef();

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

  const Tab = createMaterialTopTabNavigator();

  function HomeScreen() {
    <View style={{flex: 1}}>
      <Text>MyHomeScreen</Text>
    </View>;
  }

  function FavScreen() {
    <View style={{flex: 1}}>
      <Text>MyFavScreen</Text>
    </View>;
  }

  function FeedScreen() {
    <View style={{flex: 1}}>
      <Text>MyFeedScreen</Text>
    </View>;
  }

  function ProfileScreen() {
    <View style={{flex: 1}}>
      <Text>MyProfileScreen</Text>
    </View>;
  }
  function Testing() {
    <View style={{flex: 1}}>
      <Text>MyProfileScreen</Text>
    </View>;
  }
  function TestingTwo() {
    return (
      <View style={{flex: 1}}>
        <Text>MyProfileScreen</Text>
      </View>
    );
  }

  const renderCorosel = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SeePhotos');
        }}>
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
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <HeaderTop
          onPress={() => {
            navigation.goBack();
          }}
          onPressimg={() => {
            SetIsFav(!IsFav);
          }}
          imgstyle={{height: hp(3), width: hp(3), marginRight: 20}}
          HeaderText={Strings.businessprfl}
          source={IsFav ? Images.heartFill : Images.heartEmpty}
        />
        <View style={{flex: 1, height: '100%'}}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              height: Platform.OS === 'ios' ? hp(137) : 'auto',
            }}>
            <View
              style={{
                alignItems: 'center',
                marginTop: hp(3),
                marginLeft: wp(5),
              }}>
              <Carousel
                horizontal={true}
                onScrollAnimationEnd={true}
                inactiveSlideOpacity={0.5}
                enableMomentum={true}
                decelerationRate={10000}
                lockScrollWhileSnapping={false}
                removeClippedSubviews={true}
                inactiveSlideScale={1}
                data={UserData}
                renderItem={renderCorosel}
                sliderWidth={wp(100)}
                itemWidth={wp(95)}
              />
              <View
                style={{
                  alignItems: 'flex-start',
                  width: wp(95),
                  marginVertical: hp(2),
                }}>
                <View style={BusinessPageStyles.homeService}>
                  <Image
                    style={BusinessPageStyles.Iconstyle}
                    source={Images.home}
                  />
                  <Text style={BusinessPageStyles.homeServiceText}>
                    {' '}
                    {Strings.homeservice}
                  </Text>
                </View>
                <HeaderText
                  FontSize={hp(2.8)}
                  TopText={'Kynthias Hair Saloon'}
                />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Reviews');
                  }}>
                  <StarRating
                    NumColor={Colors.Brown}
                    Rating={'5.0'}
                    Numbers={'(214 ratings)'}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    refRBSheet.current.open();
                  }}
                  style={BusinessPageStyles.TimeSetContainer}>
                  <Text style={BusinessPageStyles.OpenCloseText}>{'Open'}</Text>
                  <Text style={{fontFamily: 'InterV', color: Colors.darkpink}}>
                   {SelectedTime.length === 0 ?
                  '     Select Time':
                   `${'   '}${SelectedTime.time}`
                  }
                    
                  </Text>
                  <Image
                    resizeMode="contain"
                    style={BusinessPageStyles.PlusImage}
                    source={Images.plus}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    BusinessPageStyles.TimeSetContainer,
                    {backgroundColor: Colors.lightgrey},
                  ]}>
                  <Image
                    resizeMode="contain"
                    style={[BusinessPageStyles.Iconstyle, {marginRight: wp(5)}]}
                    source={Images.location}
                  />
                  <Text
                    style={{
                      fontFamily: 'InterV',
                      flexWrap: 'wrap',
                      width: '70%',
                      color: Colors.primaryDark,
                    }}>
                    {'1/22 O’Connell Street North, Adelaide SA 5006'}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Inter-Bold',
                      flexWrap: 'wrap',
                      color: Colors.primaryDark,
                    }}>
                    {'3.5mi'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexGrow: 1}}>
              <Tab.Navigator
                swipeEnabled={false}
                tabBarOptions={{
                  pressColor: 'transparent',
                }}
                screenOptions={{
                  tabBarStyle: {
                    elevation: 0, // for Android
                    shadowOffset: {
                      width: 0,
                      height: 0, // for iOS
                    },
                    marginLeft: wp(2.5),
                  },
                  tabBarItemStyle: {
                    width: 'auto',
                    marginHorizontal: -10,
                    //   paddingHorizontal: 20,
                  },
                  tabBarIndicatorStyle: {
                    backgroundColor: Colors.primary,
                    elevation: 0,
                    height: 5,
                  },
                }}>
                <Tab.Screen
                  name="Selling"
                  component={HairsScreen}
                  options={{
                    tabBarLabel: ({focused}) => (
                      <View style={[BusinessPageStyles.TabbarView]}>
                        <Text
                          focused={focused}
                          style={[BusinessPageStyles.TabBarText]}>
                          Hair
                        </Text>
                      </View>
                    ),
                  }}
                />
                <Tab.Screen
                  name="Buying"
                  component={FavScreen}
                  options={{
                    tabBarLabel: ({focused}) => (
                      <View style={[BusinessPageStyles.TabbarView]}>
                        <Text
                          focused={focused}
                          style={[BusinessPageStyles.TabBarText]}>
                          Makeup
                        </Text>
                      </View>
                    ),
                  }}
                />
                <Tab.Screen
                  name="Girl"
                  component={ProfileScreen}
                  options={{
                    tabBarLabel: ({focused}) => (
                      <View style={[BusinessPageStyles.TabbarView]}>
                        <Text
                          focused={focused}
                          style={[BusinessPageStyles.TabBarText]}>
                          Skincare
                        </Text>
                      </View>
                    ),
                  }}
                />
                <Tab.Screen
                  name="Nails"
                  component={Testing}
                  options={{
                    tabBarLabel: ({focused}) => (
                      <View style={[BusinessPageStyles.TabbarView]}>
                        <Text
                          focused={focused}
                          style={[BusinessPageStyles.TabBarText]}>
                          Nails
                        </Text>
                      </View>
                    ),
                  }}
                />
              </Tab.Navigator>
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
                <HeaderText FontSize={hp(2.5)} TopText={'Timings'} />
                <ScrollView style={{flex: 1, width: wp(90)}}>
                  {Timings.map(item => (
                    <TouchableOpacity

                    onPress={()=>{
                      refRBSheet.current.close();
                      SetSelectedTime(item)
                      console.log(item,'===pressed item===');
                    }}
                      style={{
                        paddingVertical: 7,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={BusinessPageStyles.daytext}>{item.day}</Text>
                      <Text style={BusinessPageStyles.daytext}>
                        {item.time}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </RBSheet>
          </ScrollView>
        </View>
      </SafeAreaView>
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
export default BusinessPage;
