//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HeaderTop from '../../components/HomeComponent/headerTop';
import {Strings} from '../../theme/strings';
import {SafeAreaView} from 'react-native';
import {widthPercentageToDP} from '../../theme/layout';
import {Colors} from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import SemiBold from '../../components/HomeComponent/SemiBold';
import {Images} from '../../theme/Images';
import Textnormal from '../../components/Textnormal';
import {ProfileStyles} from './ProfileStyles';
import {Shadow} from '../../theme/shadow';
import FAQCard from '../../components/ProfileComponents/FAQCard';

// create a component
const FAQScreen = ({navigation}) => {
  const FaqsArray = [
    {
      maintxt: 'Aenean vulputate eleifend tellus aenea?',
      hint: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.',
    },
    {
      maintxt: 'Lorem vulputate eleifend tellus ipsum?',
      hint: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.',
    },
    {
      maintxt: 'Quisque rutrum aenean imperdiet?',
      hint: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.',
    },
    {
      maintxt: 'Nullam dictum felis eu pede?',
      hint: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.',
    },
    {
      maintxt: 'Donec quam felis, ultricies nec pell?',
      hint: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.',
    },
    {
      maintxt: 'Aenean vulputate eleifend tellus aenea?',
      hint: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.',
    },
    {
      maintxt: 'Nullam dictum felis eu pede?',
      hint: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.',
    },
    {
      maintxt: 'Quisque rutrum aenean imperdiet?',
      hint: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.',
    },
    {
      maintxt: 'Donec quam felis, ultricies nec pell?',
      hint: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop 
      onPress={()=>{
        navigation.goBack()
      }}
      HeaderText={Strings.FAQ} 
      />
      <ScrollView>
        {FaqsArray.map(item => (
          <FAQCard HeaderText={item.maintxt} HintText={item.hint} />
        ))}
      </ScrollView>
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
export default FAQScreen;
