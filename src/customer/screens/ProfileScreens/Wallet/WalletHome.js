//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import HeaderTop from '../../../components/HomeComponent/headerTop';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import Textnormal from '../../../components/Textnormal';
import PriceAmt from '../../../components/BusinessPage/PriceAmt';
import {Shadow} from '../../../theme/shadow';
import {ProfileStyles} from '../ProfileStyles';
import ItemCard from '../../../../bussiness/components/ItemCard';
import {Images} from '../../../theme/Images';
import SemiBold from '../../../components/HomeComponent/SemiBold';
import {BusinessPageStyles} from '../../BusinessPage/BusinessPageStyles';
import {SafeAreaView} from 'react-native';

// create a component
const WalletHome = ({navigation}) => {
  const methodsArray = [
    {
      img: Images.Apple,
      number: '1234567890',
    },
    {
      img: Images.Debit,
      number: '1234567890',
    },
    {
      img: Images.PayPal,
      number: '1234567890',
    },
  ];

  const RenderPaymentMethods = ({item}) => {
    return (
      <View style={[Shadow.shadowNormal, ProfileStyles.PaymentMethodCard]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={ProfileStyles.initialImageBanner} source={item.img} />
          <SemiBold FontSize={hp(2.3)} EnterText={item.number} />
        </View>

        <TouchableOpacity hitSlop={{right: 30, left: 30}}>
          <Image
            style={{height: hp(3.5), width: hp(3.5)}}
            source={Images.deletebin}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop 
      onPress={()=>{
        navigation.goBack();
      }}
      HeaderText={Strings.wallet} />
      <View>
        <View style={[Shadow.shadowNormal, ProfileStyles.walletMainCard]}>
          <Textnormal
            Allstyle={{color: Colors.white}}
            entertext={Strings.beautycredits}
          />
          <PriceAmt
            FontSize={hp(5)}
            Allstyle={{color: Colors.white}}
            Amount={'$2000.00'}
          />
        </View>
        <SemiBold
          AllStyle={{marginLeft: wp(5), fontFamily: 'Inter-Bold'}}
          FontSize={hp(3.2)}
          EnterText={Strings.otherpayment}
        />

        <FlatList data={methodsArray} renderItem={RenderPaymentMethods} />

        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate('AddMethod',{screen:'AddMethod'})
        }}
        style={[BusinessPageStyles.mapbottomClick]}>
          <Image
            resizeMode="contain"
            style={{height: hp(3.3), width: hp(3.3)}}
            source={Images.filledplus}
          />
          <SemiBold
            FontSize={hp(2.5)}
            AllStyle={{color: Colors.primary, paddingLeft: 8}}
            EnterText={Strings.paymethod}
          />
        </TouchableOpacity>
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
export default WalletHome;
