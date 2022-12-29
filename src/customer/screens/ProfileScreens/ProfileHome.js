//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import SemiBold from '../../components/HomeComponent/SemiBold';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Strings} from '../../../bussiness/theme/strings';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar} from 'react-native-elements';
import {Images} from '../../theme/Images';
import {Colors} from '../../theme/colors';
import {TouchableOpacity} from 'react-native';
import ProfileCard from '../../components/ProfileComponents/ProfileCard';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

// create a componeStringsnt
const ProfileHome = ({navigation}) => {
  const ProfileDetails = [
    {
      img: Images.profround,
      maintxt: 'My Profile',
      text: 'Manage addresses and other info',
    },
    {
      img: Images.heartround,
      maintxt: 'Wishlist',
      text: '5 Items in wishlist',
    },
    {
      img: Images.walletround,
      maintxt: 'Wallet',
      text: 'Manage payment options',
    },
    {
      img: Images.settinground,
      maintxt: 'Settings',
      text: 'Notifications and Security',
    },
    {
      img: Images.faqround,
      maintxt: 'FAQs',
      text: 'Frequently asked questions',
    },
    {
      img: Images.helpround,
      maintxt: 'Help',
      text: 'Terms and Conditions',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignSelf: 'center', marginTop: hp(1)}}>
        <SemiBold
          AllStyle={{fontFamily: 'Inter-Bold'}}
          FontSize={hp(3.2)}
          EnterText={Strings.profile}
        />
        <ScrollView>
          {ProfileDetails.map(item => (
            <ProfileCard
            onPress={()=>{
              item.maintxt ==='My Profile' ? 
              navigation.navigate('MyProfile') : 
              item.maintxt ==='Wishlist' ?
              navigation.navigate('WishlistItems') :
              item.maintxt ==='Wallet' ?
              navigation.navigate('WalletHome') :
              item.maintxt ==='Settings' ?
              navigation.navigate('SettingsHome') :
              item.maintxt ==='FAQs' ?
              navigation.navigate('FAQScreen') :
              null
            }}
              avtar={item.img}
              mainText={item.maintxt}
              text={item.text}
            />
          ))}
        </ScrollView>
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
export default ProfileHome;
