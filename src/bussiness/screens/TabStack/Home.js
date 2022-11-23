import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Modal from 'react-native-modal';
import {Strings} from '../../theme/strings.js';
import {Colors} from '../../theme/colors.js';
import {styles} from './styles.js';
import {bookings} from '../../theme/arrays.js';
import Label from '../../components/Label';
import Icon from '../../components/Icon';
import AppHeader from '../../components/AppHeader';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Tab = createMaterialTopTabNavigator();

const Home = ({navigation}) => {
  const ItemWrapper = ({img, label}) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: wp(2),
        marginBottom: hp(1),
      }}>
      <Icon source={img} size={hp(2)} color={Colors.gray} />
      <Label label={label} left marginLeft={wp(2)} />
    </View>
  );

  const New = () => {
    const [isAlert, setAlert] = useState(false);
    return (
      <View style={styles.newTab}>
        <Label label={Strings.newBookings} bold size={hp(2.5)} left paddingVertical={hp(2)}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          {bookings.map((item, index) => (
            <View key={index} style={styles.bookingView}>
              <View style={styles.row}>
                <Icon size={hp(12)} source={item.banner} radius={20}/>
                <View>
                  <Label
                    label={item.label}
                    bold
                    left
                    marginLeft={wp(2)}
                    paddingVertical={hp(1)}
                    size={hp(2)}
                  />
                  <ItemWrapper img={item.s_icon} label={item.service} />
                  <ItemWrapper img={item.t_icon} label={item.time} />
                  <ItemWrapper img={item.l_icon} label={item.location} />
                </View>
              </View>
              <View style={styles.btnWrapper}>
                <Button
                  onPress={() => setAlert(true)}
                  title={Strings.reject}
                  bgColor={Colors.lightRed}
                  titleColor={Colors.red}
                  btnStyle={styles.btn}
                />
                <Button
                  title={Strings.accept}
                  bgColor={Colors.primary}
                  titleColor={Colors.white}
                  btnStyle={styles.btn}
                />
              </View>
            </View>
          ))}
        </ScrollView>
        <Modal isVisible={isAlert}>
          <Alert
            title={Strings.rejectBookingRequest}
            leftBtn={Strings.reject}
            rightBtn={Strings.no}
            onLeftPress={() => setAlert(false)}
            onRightPress={() => setAlert(false)}
          />
        </Modal>
      </View>
    );
  };

  const Upcoming = ({navigation}) => {
    return (
      <View style={styles.newTab}>
        <Label label={Strings.upcomingBookings} bold size={hp(2.5)} left paddingVertical={hp(2)}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          {bookings.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('BookingDetails')}
              key={index}
              style={[styles.bookingView, {paddingBottom: hp(2)}]}>
              <View style={styles.row}>
                <Icon size={hp(12)} source={item.banner} radius={20}/>
                <View>
                  <Label
                    label={item.label}
                    bold
                    left
                    marginLeft={wp(2)}
                    size={hp(2)}
                  />
                  <ItemWrapper img={item.s_icon} label={item.service} />
                  <ItemWrapper img={item.t_icon} label={item.time} />
                  <ItemWrapper img={item.l_icon} label={item.location} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppHeader hide />
      <Tab.Navigator
        tabBarOptions={{
          pressColor: 'transparent',
        }}
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          tabBarItemStyle: styles.tabBarItemStyle,
          tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        }}>
        <Tab.Screen
          name={Strings.new}
          component={New}
          options={{
            tabBarLabel: ({focused}) => (
              <View
                style={focused ? styles.tabBarLabelActive : styles.tabBarLabel}>
                <Label label={Strings.new} bold size={hp(2)} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={Strings.upcoming}
          component={Upcoming}
          options={{
            tabBarLabel: ({focused}) => (
              <View
                style={focused ? styles.tabBarLabelActive : styles.tabBarLabel}>
                <Label label={Strings.upcoming} bold size={hp(2)} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Home;
