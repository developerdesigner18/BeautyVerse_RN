//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../theme/colors';
import HomeScreen from './HomeScreen';
import {SearchBar} from 'react-native-screens';
import MainSearch from '../SearchScreens/MainSearch';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import OrdersHome from '../OrdersPage/OdrdersHome';
import ProfileHome from '../ProfileScreens/ProfileHome';


// create a component
const BottomTabs = ({focused}) => {
 
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.primary,
          height:Platform.OS === 'ios' ? 70 : 70,
          paddingHorizontal: 5,
          paddingVertical: 30,
          paddingBottom:Platform.OS === 'ios' ? 15 : 20,
          // position: 'relative',
          // bottom: hp(0),
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  borderRadius: 30,
                  marginHorizontal: -10,
                  paddingHorizontal: 17,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                }}>
                <Image
                  style={styles.notpressed}
                  source={require('../../assets/HomeScreen/HomeFill.png')}
                />
                <Text
                  style={{
                    marginLeft: 5,
                    color: Colors.white,
                    fontWeight: '600',
                  }}>
                  Home
                </Text>
              </View>
            ) : (
              <Image
                style={styles.pressed}
                source={require('../../assets/HomeScreen/HomeEmpty.png')}
              />
            ),
          tabBarLabel: '',
        }}
        name="Home"
        component={HomeScreen}></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  borderRadius: 30,
                  marginHorizontal: -10,
                  paddingHorizontal: 17,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                }}>
                <Image
                  style={styles.notpressed}
                  source={require('../../assets/HomeScreen/SearchFill.png')}
                />
                <Text
                  style={{
                    marginLeft: 5,
                    color: Colors.white,
                    fontWeight: '600',
                  }}>
                  Search
                </Text>
              </View>
            ) : (
              <Image
                style={styles.pressed}
                source={require('../../assets/HomeScreen/SearchEmpty.png')}
              />
            ),
          tabBarLabel: '',
        }}
        name="MyCollection"
        component={MainSearch}></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  borderRadius: 30,
                  marginHorizontal: -10,
                  paddingHorizontal: 17,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                }}>
                <Image
                  style={styles.notpressed}
                  source={require('../../assets/HomeScreen/DocFill.png')}
                />
                <Text
                  style={{
                    marginLeft: 5,
                    color: Colors.white,
                    fontWeight: '600',
                  }}>
                  Orders
                </Text>
              </View>
            ) : (
              <Image
                style={styles.pressed}
                source={require('../../assets/HomeScreen/DocEmpty.png')}
              />
            ),
          tabBarLabel: '',
        }}
        name="QRScanner"
        component={OrdersHome}></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <View
                style={{
                  marginRight: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  borderRadius: 30,
                  marginHorizontal: -10,
                  paddingHorizontal: 17,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                }}>
                <Image
                  style={styles.notpressed}
                  source={require('../../assets/HomeScreen/ProfileFill.png')}
                />
                <Text
                  style={{
                    marginLeft: 5,
                    color: Colors.white,
                    fontWeight: '600',
                  }}>
                  Profile
                </Text>
              </View>
            ) : (
              <Image
                style={styles.pressed}
                source={require('../../assets/HomeScreen/ProfileEmpty.png')}
              />
            ),
          tabBarLabel: '',
        }}
        name="MainScreen"
        component={ProfileHome}></Tab.Screen>
    </Tab.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  notpressed: {
    height: 20,
    width: 20,

    // tintColor: 'grey',
  },
  pressed: {
    height: 20,
    width: 20,
    marginHorizontal: 20,
    // tintColor: '#5360EE',
  },
});

//make this component available to the app
export default BottomTabs;
