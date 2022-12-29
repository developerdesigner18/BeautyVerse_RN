import React, {Fragment} from 'react';
import {View, Text, Image, Platform, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../theme/colors';
import {Images} from '../../theme/images';
import {styles} from './styles';
import {Strings} from '../../theme/strings';
import Home from './Home';
import Professionals from './Staff/Professionals';
import Services from './Services/Services';
import Profile from './Profile/Profile';

const BottomTabs = ({focused}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: Colors.white}} />
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: Colors.primary,
              height: Platform.OS === 'ios' ? 70 : 70,
              paddingHorizontal: 5,
              paddingVertical: 30,
              paddingBottom: Platform.OS === 'ios' ? 15 : 20,
            },
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({color, focused}) =>
                focused ? (
                  <View style={styles.tabView}>
                    <Image style={styles.notpressed} source={Images.HomeFill} />
                    <Text style={styles.tabTitle}>{Strings.home}</Text>
                  </View>
                ) : (
                  <Image style={styles.pressed} source={Images.HomeEmpty} />
                ),
              tabBarLabel: '',
            }}
            name="Home"
            component={Home}></Tab.Screen>
          <Tab.Screen
            options={{
              tabBarIcon: ({color, focused}) =>
                focused ? (
                  <View style={styles.tabView}>
                    <Image style={styles.notpressed} source={Images.userFill} />
                    <Text style={styles.tabTitle}>{Strings.staff}</Text>
                  </View>
                ) : (
                  <Image style={styles.pressed} source={Images.userEmpty} />
                ),
              tabBarLabel: '',
            }}
            name="Staff"
            component={Professionals}></Tab.Screen>
          <Tab.Screen
            options={{
              tabBarIcon: ({color, focused}) =>
                focused ? (
                  <View style={styles.tabView}>
                    <Image style={styles.notpressed} source={Images.DocFill} />
                    <Text style={styles.tabTitle}>{Strings.services}</Text>
                  </View>
                ) : (
                  <Image style={styles.pressed} source={Images.DocEmpty} />
                ),
              tabBarLabel: '',
            }}
            name="Services"
            component={Services}></Tab.Screen>
          <Tab.Screen
            options={{
              tabBarIcon: ({color, focused}) =>
                focused ? (
                  <View style={styles.tabView}>
                    <Image
                      style={styles.notpressed}
                      source={Images.ProfileFill}
                    />
                    <Text style={styles.tabTitle}>{Strings.profile}</Text>
                  </View>
                ) : (
                  <Image style={styles.pressed} source={Images.ProfileEmpty} />
                ),
              tabBarLabel: '',
            }}
            name="Profile"
            component={Profile}></Tab.Screen>
        </Tab.Navigator>
      </SafeAreaView>
    </Fragment>
  );
};

export default BottomTabs;
