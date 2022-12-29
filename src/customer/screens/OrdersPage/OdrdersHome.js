//import liraries
//import liraries
import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Modal,
  Platform,
} from 'react-native';
import HeaderTop from '../../components/HomeComponent/headerTop';
import {Strings} from '../../theme/strings';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import SemiBold from '../../components/HomeComponent/SemiBold';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderText from '../../components/AuthComponents/HeaderText';
import UpcomingOrder from './UpcomingOrder';
import PreviousOrder from './PreviouseOrder';
import {OrderStyles} from './OderStyles';
import { SafeAreaView } from 'react-native';

// create a component
const OrdersHome = () => {
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

  return (
    <SafeAreaView style={styles.container}>
      <HeaderText
        Style={{ marginLeft: wp(5)}}
        FontSize={hp(3.2)}
        TopText={'Orders'}
      />
      <Tab.Navigator
        tabBarOptions={{
          pressColor: 'transparent',
        }}
        screenOptions={{
          tabBarStyle: {
            marginBottom:hp(2.5),
            backgroundColor: Colors.lightgrey,
            borderRadius: 20,
            alignSelf: 'center',
            width: wp(90),
            elevation: 0, // for Android
            shadowOffset: {
              width: 0,
              height: 0, // for iOS
            },
          },
          tabBarItemStyle: {
            margin: -5,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
          },
        }}>
        <Tab.Screen
          name="Selling"
          component={UpcomingOrder}
          options={{
            tabBarLabel: ({focused}) => (
              <View
                style={[
                  OrderStyles.TabView,
                  {
                    backgroundColor: focused ? Colors.white : Colors.lightgrey,
                    shadowOffset: focused
                      ? {width: 2, height: 5}
                      : {width: 0, height: 0},
                    shadowOpacity: focused ? 0.4 : 0,
                    elevation: focused ? 0 : 0,
                  },
                ]}>
                <SemiBold FontSize={hp(2.1)} EnterText={'Upcoming'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Buying"
          component={PreviousOrder}
          options={{
            tabBarLabel: ({focused}) => (
              <View
                style={[
                  OrderStyles.TabView,
                  {
                    backgroundColor: focused ? Colors.white : Colors.lightgrey,
                    shadowOffset: focused
                      ? {width: 2, height: 5}
                      : {width: 0, height: 0},
                    shadowOpacity: focused ? 0.4 : 0,
                    elevation: focused ? 0 : 0,
                  },
                ]}>
                <SemiBold FontSize={hp(2.1)} EnterText={'Previous'} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
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
export default OrdersHome;
