//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Images} from '../../theme/Images';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AuthStyles} from '../SplashScreen/AuthScreens/AuthStyles';
import {HomeStyles} from '../HomeScreens/HomeStyles';
import {Colors} from '../../theme/colors';
import AllCategories from './AllCategories';

// create a component
const HomeScreen = () => {
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

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(1),
          }}>
          <Image
            resizeMode="contain"
            style={{
              height: hp(4),
              width: wp(60),
              position: 'relative',
              left: wp(20),
            }}
            source={Images.Logo}
          />
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={{height: hp(4), width: hp(4), marginRight: wp(3)}}
              source={Images.Notifybell}
            />
          </TouchableOpacity>
        </View>
        <Tab.Navigator
          swipeEnabled={false}
          tabBarOptions={{
            pressColor: 'transparent',
          }}
          screenOptions={{
            tabBarStyle: {
              marginTop: 10,
              elevation: 0, // for Android
              shadowOffset: {
                width: 0,
                height: 0, // for iOS
              },
              paddingHorizontal: wp(5),
            },
            tabBarItemStyle: {
              paddingTop: 20,
              width: 'auto',
              alignItems: 'flex-start',
            },
            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
            },
          }}>
          <Tab.Screen
            name="All"
            component={AllCategories}
            options={{
              tabBarLabel: ({focused}) => (
                <View
                  style={[
                    HomeStyles.TabbarView,
                    {
                      borderWidth: focused ? 0 : 1,
                      backgroundColor: focused ? Colors.primary : Colors.white,
                    },
                  ]}>
                  <Image
                    resizeMode="contain"
                    style={[
                      HomeStyles.TabiconSize,
                      {
                        tintColor: focused ? Colors.white : Colors.primary,
                      },
                    ]}
                    source={Images.checklist}
                  />
                  <Text
                    focused={focused}
                    style={[
                      {color: focused ? Colors.white : Colors.primary},
                      HomeStyles.TabBarText,
                    ]}>
                    All
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Selling"
            component={HomeScreen}
            options={{
              tabBarLabel: ({focused}) => (
                <View
                  style={[
                    HomeStyles.TabbarView,
                    {
                      borderWidth: focused ? 0 : 1,
                      backgroundColor: focused ? Colors.primary : Colors.white,
                    },
                  ]}>
                  <Image
                    resizeMode="contain"
                    style={[
                      HomeStyles.TabiconSize,
                      {
                        tintColor: focused ? Colors.white : Colors.primary,
                      },
                    ]}
                    source={Images.Girl}
                  />
                  <Text
                    focused={focused}
                    style={[
                      {color: focused ? Colors.white : Colors.primary},
                      HomeStyles.TabBarText,
                    ]}>
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
                <View
                  style={[
                    HomeStyles.TabbarView,
                    {
                      borderWidth: focused ? 0 : 1,
                      backgroundColor: focused ? Colors.primary : Colors.white,
                    },
                  ]}>
                  <Image
                    resizeMode="contain"
                    style={[
                      HomeStyles.TabiconSize,
                      {
                        tintColor: focused ? Colors.white : Colors.primary,
                      },
                    ]}
                    source={Images.Makeup}
                  />
                  <Text
                    focused={focused}
                    style={[
                      {color: focused ? Colors.white : Colors.primary},
                      HomeStyles.TabBarText,
                    ]}>
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
                <View
                  style={[
                    HomeStyles.TabbarView,
                    {
                      borderWidth: focused ? 0 : 1,
                      backgroundColor: focused ? Colors.primary : Colors.white,
                    },
                  ]}>
                  <Image
                    resizeMode="contain"
                    style={[
                      HomeStyles.TabiconSize,
                      {
                        tintColor: focused ? Colors.white : Colors.primary,
                      },
                    ]}
                    source={Images.Face}
                  />
                  <Text
                    focused={focused}
                    style={[
                      {color: focused ? Colors.white : Colors.primary},
                      HomeStyles.TabBarText,
                    ]}>
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
                <View
                  style={[
                    HomeStyles.TabbarView,
                    {
                      borderWidth: focused ? 0 : 1,
                      backgroundColor: focused ? Colors.primary : Colors.white,
                    },
                  ]}>
                  <Image
                    resizeMode="contain"
                    style={[
                      HomeStyles.TabiconSize,
                      {
                        tintColor: focused ? Colors.white : Colors.primary,
                      },
                    ]}
                    source={Images.Nail}
                  />
                  <Text
                    focused={focused}
                    style={[
                      {color: focused ? Colors.white : Colors.primary},
                      HomeStyles.TabBarText,
                    ]}>
                    Nails
                  </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:hp(-5)
  },
});

//make this component available to the app
export default HomeScreen;
