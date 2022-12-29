import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../../components/Header';
import MapView, {Marker} from 'react-native-maps';
import {Strings} from '../../../theme/strings';
import {styles} from './styles';
import {Images} from '../../../theme/images';
import Icon from '../../../components/Icon';
import Label from '../../../components/Label';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {Colors} from '../../../theme/colors';

const Addressdetails = ({navigation, route}) => {
  const {params} = route;
  const [latitude, setLatitude] = useState(params.latitude);
  const [longitude, setLongitude] = useState(params.longitude);
  const [flatNo, setFlatNo] = useState(Strings.flatNo);
  const [villa, setVilla] = useState(Strings.building);
  const [street, setStreet] = useState(Strings.street);
  const [area, setArea] = useState(Strings.area);
  const [direction, setDirection] = useState(Strings.directions);

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
              <Label label={params.place} medium color={Colors.lightGray3}/>
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
      </KeyboardAwareScrollView>
      <Button
        onPress={() => navigation.navigate('BusinessTiming')}
        title={Strings.next}
        bgColor={Colors.primary}
        titleColor={Colors.white}
        btnStyle={styles.nextBtn}
      />
    </SafeAreaView>
  );
};

export default Addressdetails;
