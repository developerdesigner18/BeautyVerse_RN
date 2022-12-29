//import liraries
import React, {useEffect, useState} from 'react';
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
import {Strings} from '../../theme/strings';
import HeaderTop from '../../components/HomeComponent/headerTop';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

import {CheckBox} from 'react-native-elements';
import {BusinessPageStyles} from './BusinessPageStyles';
import SemiBold from '../../components/HomeComponent/SemiBold';
import PriceAmt from '../../components/BusinessPage/PriceAmt';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../theme/Images';
import RadioButton from '../../components/SearchComponents/RadioButton';
import {Calendar} from 'react-native-calendars';
import Button from '../../components/AuthComponents/FilledButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Avatar} from 'react-native-elements';
import StarRating from '../../components/BusinessPage/StarRating';
import HeaderText from '../../components/AuthComponents/HeaderText';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Arrowheader from '../../components/AuthComponents/paymentAuth/Arrowheader';
import ServiceDetails from '../../components/BusinessPage/ServiceDetails';
import AuthInput from '../../components/AuthComponents/AuthInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Route } from '../../../routes/index';

// create a component
const Checkout = ({navigation}) => {

  useEffect(()=>{
    GetCardNumber();
    navigation.addListener("focus", () => {
      GetCardNumber();
      console.log("=====Called=======");
    });
  },[])

  const GetCardNumber = async () => {
    const CardNum = await AsyncStorage.getItem('CardData')
    console.log(CardNum,'====num====')
    SetcardNum(CardNum)
  }



  const [BLoc, SetBloc] = useState(false);
  const [MyLoc, SetMyloc] = useState(false);

  const [payment, setpayment] = useState('');

  const [latitude, setLatitude] = useState(-37.8136);
  const [longitude, setLongitude] = useState(144.9631);

  const [cardNum, SetcardNum] = useState(0)

  const [Location, setLocation] = useState([]);

  useEffect(() => {
    GetuserLocation();
  }, []);

  const GetuserLocation = async () => {
    const Loc = await AsyncStorage.getItem('Location');
    setLocation(Loc);
    console.log(Loc, '===LOC====');
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={Strings.confbooking}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: hp(15)}}
        style={{flexGrow: 1}}>
        <View style={{paddingLeft: wp(5)}}>
          <View
            style={[
              BusinessPageStyles.ServiceLocationView,
              {borderTopWidth: 0, borderBottomWidth: 0},
            ]}>
            <SemiBold
              FontSize={hp(2.5)}
              EnterText={'Where do you want this service'}
            />
            <RadioButton
              status={BLoc === true ? 'checked' : 'unchecked'}
              checked={BLoc}
              onPress={() => {
                MyLoc === true ? SetMyloc(false) : SetMyloc(false);
                BLoc === false ? SetBloc(true) : SetBloc(false);
              }}
              SortText={'At Business Location'}
            />
            <RadioButton
              status={MyLoc === true ? 'checked' : 'unchecked'}
              checked={MyLoc}
              onPress={() => {
                BLoc === true ? SetBloc(false) : SetBloc(false);
                MyLoc === false ? SetMyloc(true) : SetMyloc(false);
              }}
              SortText={'At My Location'}
            />
            {MyLoc === true || BLoc === true ? (
              <View style={BusinessPageStyles.headerMapView}>
                <MapView
                  style={BusinessPageStyles.map}
                  region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  showsUserLocation={true}>
                  <Marker
                    coordinate={{
                      latitude: latitude,
                      longitude: longitude,
                    }}>
                    <Image
                      source={Images.mapuser}
                      style={BusinessPageStyles.marker}
                    />
                  </Marker>
                </MapView>
                <View style={BusinessPageStyles.editView}>
                  <View>
                    <SemiBold FontSize={hp(2.3)} EnterText={'Location Name'} />
                    <Text style={{color: Colors.darkpink}}>{Location}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('InsertAdd', {
                        latitude: latitude,
                        longitude: longitude,
                      });
                    }}>
                    <Image
                      resizeMode="contain"
                      style={{height: hp(3), width: hp(3)}}
                      source={Images.edit}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </View>
          <SemiBold
            AllStyle={{marginVertical: hp(1.5)}}
            FontSize={hp(3)}
            EnterText={'Payment Method'}
          />
        </View>

        <View
          style={{
            padding: 20,
            borderRadius: 15,
            marginHorizontal: wp(5),
            shadowOffset: {width: 2, height: 5},
            shadowOpacity: 0.2,
            elevation: 2,
            backgroundColor: Colors.white,
          }}>
          <Arrowheader
            status={payment === 'Debit' ? 'checked' : 'unchecked'}
            checked={payment === 'Debit'}
            ShowCheckBox={'show'}
            onPress={() => {
              payment === '' ||
              payment === 'Gift' ||
              payment === 'Credit' ||
              payment === 'Paypal' ||
              payment === 'Applepay'
                ? setpayment('Debit')
                : setpayment('');
            }}
            onPressRadio={() => {
              payment === '' ||
              payment === 'Gift' ||
              payment === 'Credit' ||
              payment === 'Paypal' ||
              payment === 'Applepay'
                ? setpayment('Debit')
                : setpayment('');
            }}
            text={cardNum === 0 ?  Strings.Debit : cardNum}
            source={Images.Debit}
          />

          {payment === 'Debit' ? (
            <View
              style={[
                BusinessPageStyles.borderwidthcost,
                {marginBottom: hp(0)},
              ]}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AddDebit',{screen:'checkout'});
                }}
                style={[BusinessPageStyles.mapbottomClick, {paddingLeft: 0}]}>
                <Image
                  resizeMode="contain"
                  style={{height: hp(2.8), width: hp(2.8)}}
                  source={Images.filledplus}
                />
                <SemiBold
                  FontSize={hp(2.3)}
                  AllStyle={{color: Colors.primary, paddingLeft: 10}}
                  EnterText={'Add Card'}
                />
              </TouchableOpacity>
            </View>
          ) : null}

          <Arrowheader
            status={payment === 'Gift' ? 'checked' : 'unchecked'}
            checked={payment === 'Gift'}
            ShowCheckBox={'show'}
            onPress={() => {
              payment === '' ||
              payment === 'Debit' ||
              payment === 'Credit' ||
              payment === 'Paypal' ||
              payment === 'Applepay'
                ? setpayment('Gift')
                : setpayment('');
            }}
            onPressRadio={() => {
              payment === '' ||
              payment === 'Debit' ||
              payment === 'Credit' ||
              payment === 'Paypal' ||
              payment === 'Applepay'
                ? setpayment('Gift')
                : setpayment('');
            }}
            text={Strings.Gift}
            source={Images.Gift}
          />
          <Arrowheader
            status={payment === 'Credit' ? 'checked' : 'unchecked'}
            checked={payment === 'Credit'}
            ShowCheckBox={'show'}
            onPress={() => {
              payment === '' ||
              payment === 'Gift' ||
              payment === 'Debit' ||
              payment === 'Paypal' ||
              payment === 'Applepay'
                ? setpayment('Credit')
                : setpayment('');
              //   payment === 'Debit' ? SetDebit(false) : SetDebit(true);
            }}
            onPressRadio={() => {
              payment === '' ||
              payment === 'Gift' ||
              payment === 'Debit' ||
              payment === 'Paypal' ||
              payment === 'Applepay'
                ? setpayment('Credit')
                : setpayment('');
            }}
            text={Strings.Credit}
            source={Images.Credit}
          />
          {payment === 'Credit' ? (
            <View
              style={[
                BusinessPageStyles.borderwidthcost,
                {marginBottom: hp(0)},
              ]}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AddDebit');
                }}
                style={[BusinessPageStyles.mapbottomClick, {paddingLeft: 0}]}>
                <Image
                  resizeMode="contain"
                  style={{height: hp(2.8), width: hp(2.8)}}
                  source={Images.filledplus}
                />
                <SemiBold
                  FontSize={hp(2.3)}
                  AllStyle={{color: Colors.primary, paddingLeft: 10}}
                  EnterText={'Add Card'}
                />
              </TouchableOpacity>
            </View>
          ) : null}
          <Arrowheader
            status={payment === 'Paypal' ? 'checked' : 'unchecked'}
            checked={payment === 'Paypal'}
            ShowCheckBox={'show'}
            onPress={() => {
              payment === '' ||
              payment === 'Gift' ||
              payment === 'Credit' ||
              payment === 'Debit' ||
              payment === 'Applepay'
                ? setpayment('Paypal')
                : setpayment('');
              //   payment === 'Debit' ? SetDebit(false) : SetDebit(true);
            }}
            onPressRadio={() => {
              payment === '' ||
              payment === 'Gift' ||
              payment === 'Credit' ||
              payment === 'Debit' ||
              payment === 'Applepay'
                ? setpayment('Paypal')
                : setpayment('');
            }}
            text={Strings.Paypal}
            source={Images.PayPal}
          />
          <Arrowheader
            status={payment === 'Applepay' ? 'checked' : 'unchecked'}
            checked={payment === 'Applepay'}
            ShowCheckBox={'show'}
            onPress={() => {
              payment === '' ||
              payment === 'Gift' ||
              payment === 'Credit' ||
              payment === 'Paypal' ||
              payment === 'Debit'
                ? setpayment('Applepay')
                : setpayment('');
              //   payment === 'Debit' ? SetDebit(false) : SetDebit(true);
            }}
            onPressRadio={() => {
              payment === '' ||
              payment === 'Gift' ||
              payment === 'Credit' ||
              payment === 'Paypal' ||
              payment === 'Debit'
                ? setpayment('Applepay')
                : setpayment('');
            }}
            text={Strings.Applepay}
            source={Images.Apple}
          />
        </View>
        <View style={BusinessPageStyles.detailsmainview}>
          <SemiBold
            FontSize={hp(3)}
            AllStyle={{marginBottom: hp(1.5)}}
            EnterText={'Details'}
          />
          <View style={BusinessPageStyles.servicedetailscard}>
            <ServiceDetails
              maintext={'Business'}
              detailstext={'Kynthia’s Hair Salon'}
            />
            <ServiceDetails
              maintext={'Service'}
              detailstext={'Straight Hair'}
            />
            <ServiceDetails
              showprice="show"
              maintext={'Price'}
              Amounttext={'$60.00'}
            />
            <ServiceDetails maintext={'Duration'} detailstext={'1:00'} />
            <ServiceDetails
              maintext={'Appointment Date'}
              detailstext={'29th March, 2022'}
            />
            <ServiceDetails
              maintext={'Appointment Time'}
              detailstext={'12:00PM-1:00PM'}
            />
            <ServiceDetails
              maintext={'Professional'}
              detailstext={'Linda Johnson'}
            />
            <ServiceDetails
              maintext={'Service Location'}
              detailstext={'Your location'}
            />
          </View>
        </View>
        <View style={BusinessPageStyles.costCard}>
          <SemiBold
            FontSize={hp(3)}
            AllStyle={{marginBottom: hp(1.5)}}
            EnterText={'Cost Breakdown'}
          />
          <View style={BusinessPageStyles.servicedetailscard}>
            <ServiceDetails
              StyleView={{marginVertical: 8}}
              AmountStyle={{color: Colors.primaryDark}}
              showprice="show"
              maintext={'Price'}
              Amounttext={'$60.00'}
            />
            <ServiceDetails
              StyleView={{marginVertical: 8}}
              maintext={'Visiting Charges'}
              AmountStyle={{color: Colors.primaryDark}}
              showprice="show"
              Amounttext={'$10.00'}
            />
            <View style={BusinessPageStyles.borderwidthcost}></View>
            <ServiceDetails
              fontFamily={'Inter-Bold'}
              showprice="show"
              maintext={'Total'}
              Amounttext={'$60.00'}
            />
          </View>
        </View>
        <View
          style={{
            width: wp(90),
            borderTopWidth: 1,
            alignSelf: 'center',
            borderColor: Colors.lightgrey,
          }}>
          <SemiBold
            FontSize={hp(3)}
            AllStyle={{marginVertical: hp(1.5)}}
            EnterText={'Notes for Barber'}
          />
          <AuthInput
            placeholder={'Enter Notes Here'}
            Inputstyle={{width: wp(90)}}
          />
        </View>
      </ScrollView>
      <Button
        bgColor={Colors.primary}
        title={'Book Now'}
        titleColor={Colors.white}
        btnStyle={{
          width: wp(90),
          alignSelf: 'center',
          position: 'absolute',
          bottom: hp(1),
        }}
      />
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
export default Checkout;
