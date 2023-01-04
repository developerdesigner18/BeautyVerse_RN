import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import Header from '../../../components/Header';
import {addressThunk} from '../../../../store/actions/profile-actions';
import {Strings} from '../../../theme/strings';
import {styles} from './styles';
import {Images} from '../../../theme/images';
import Icon from '../../../components/Icon';
import Label from '../../../components/Label';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import RadioButton from '../../../components/RadioButton';
import Spinner from '../../../components/Spinner';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {Colors} from '../../../theme/colors';

const Addressdetails = ({navigation, route}) => {
  const {params} = route;
  const dispatch = useDispatch();
  const {addressRes} = useSelector(state => state);
  const [latitude, setLatitude] = useState(params.latitude);
  const [longitude, setLongitude] = useState(params.longitude);
  const [flatNo, setFlatNo] = useState();
  const [villa, setVilla] = useState();
  const [street, setStreet] = useState();
  const [area, setArea] = useState();
  const [direction, setDirection] = useState();
  const [addType, setAddType] = useState();
  const [locationName, setLocationName] = useState();

  useEffect(() => {
    function postSuccess() {
      if (addressRes.isSuccess) {
        showMessage({
          message: 'Address updated successfully',
          floating: true,
          type: 'success',
        });
        params.path == 'auth'
          ? navigation.navigate('BusinessTiming')
          : navigation.navigate('Address');
      }
    }
    postSuccess();
  }, [addressRes]);
  useEffect(() => {
    const address = params.place.split(',');
    console.log(address);
    setStreet(address[0]);
    setArea(address[1]);
    setLocationName(address[address.length - 1]);
  }, []);

  const addAddress = async () => {
    const token = await AsyncStorage.getItem('token');
    const data = {
      flatNo: flatNo,
      buildingName: villa,
      street: street,
      area: area,
      directions: direction,
      locationName: locationName,
      locationType: addType,
      latitude: latitude,
      longitude: longitude,
    };

    dispatch(addressThunk(data, token));
    // if (addressRes.isSuccess) {
    //   showMessage({
    //     message: 'Address updated successfully',
    //     floating: true,
    //     type: 'success',
    //   });
    //   params.path == 'auth'
    //     ? navigation.navigate('BusinessTiming')
    //     : navigation.navigate('Address');
    // }
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <Header
        onPressBack={() => navigation.goBack()}
        headerTitle={Strings.addressDetails}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerMapView}>
          <MapView
            style={styles.map}
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
              <Image source={Images.marker} style={styles.marker} />
            </Marker>
          </MapView>
          <View style={styles.editView}>
            <View>
              <Label
                label={Strings.locationName}
                bold
                left
                color={Colors.primary_dark1}
              />
              <Label
                label={params.place}
                medium
                left
                color={Colors.lightGray3}
              />
            </View>
            <Icon source={Images.edit} size={wp(6)} />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Input
            value={flatNo}
            onChangeText={text => setFlatNo(text)}
            onTouchStart={() => setFlatNo('')}
            label={Strings.flatNo}
            placeholder={Strings.flatVilla}
            width={wp(43)}
            size={hp(1.9)}
          />
          <Input
            value={villa}
            onChangeText={text => setVilla(text)}
            onTouchStart={() => setVilla('')}
            label={Strings.building}
            placeholder={Strings.buildingName}
            width={wp(43)}
            size={hp(1.9)}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Input
            value={street}
            onChangeText={text => setStreet(text)}
            onTouchStart={() => setStreet('')}
            label={Strings.street}
            placeholder={Strings.streetName}
            width={wp(43)}
            size={hp(1.9)}
          />
          <Input
            value={area}
            onChangeText={text => setArea(text)}
            onTouchStart={() => setArea('')}
            label={Strings.area}
            placeholder={Strings.areaName}
            width={wp(43)}
            size={hp(1.9)}
          />
        </View>
        <Input
          value={direction}
          onChangeText={text => setDirection(text)}
          onTouchStart={() => setDirection('')}
          label={Strings.directions}
          placeholder={Strings.directions}
          width={wp(90)}
          size={hp(1.9)}
        />
        <View style={styles.typeView}>
          <Label label={Strings.typeOfAddress} left />
          <View style={styles.locationtype}>
            <RadioButton
              checked={addType == 'home'}
              label={Strings.home}
              onPress={() => setAddType('home')}
            />
            <RadioButton
              checked={addType == 'office'}
              label={Strings.office}
              onPress={() => setAddType('office')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <Button
        onPress={() => addAddress()}
        title={Strings.next}
        bgColor={Colors.primary}
        titleColor={Colors.white}
        btnStyle={styles.nextBtn}
      />
      <Spinner visible={addressRes.loading} />
    </SafeAreaView>
  );
};

export default Addressdetails;
