import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geolocation from 'react-native-geolocation-service';
import {styles} from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import SearchField from '../../../components/SearchField';
import {Images} from '../../../theme/images';
import {Config} from '../../../../../config';
import Icon from '../../../components/Icon';
import Label from '../../../components/Label';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const AddLocation = ({navigation, route}) => {
  const {params} = route;
  const [isSearchModal, setSerachModal] = useState(false);
  const [latitude, setLatitude] = useState(-37.8136);
  const [longitude, setLongitude] = useState(144.9631);
  const [place, setPlace] = useState('');
  const [bottom, setBottom] = useState(1);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('position =>', position);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        console.log('error =>', error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const locationPermission = async () => {
    if (Platform.OS == 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'GeoLocation permission.',
            message:
              'Beaubee needs access to your geoLocation ' +
              'so you can be protected safely.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('granted');
          getCurrentLocation();
        } else {
          console.log('denied');
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      const status = await Geolocation.requestAuthorization('whenInUse');
      console.log('Status', status);
      if (status === 'granted') {
        getCurrentLocation();
      } else {
      }
    }
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      {params.from == 'auth' && (
        <Header
          onPressBack={() => navigation.goBack()}
          headerTitle={Strings.businessAddress}
        />
      )}

      <MapView
        provider={PROVIDER_GOOGLE}
        style={{...styles.mapView, paddingTop: bottom}}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onMapReady={() => setBottom(5)}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}>
          <Image source={Images.marker} style={styles.marker} />
        </Marker>
      </MapView>
      <View style={styles.backView}>
        {params.from == 'profile' && (
          <TouchableOpacity onPress={() => navigation.navigate('Address')}>
            <Icon source={Images.roundback} size={hp(5.5)} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.markerBtn}
          onPress={() => locationPermission()}>
          <Icon source={Images.locationMarker} size={hp(5.5)} />
        </TouchableOpacity>
        <SearchField onTouchStart={() => setSerachModal(true)} value={place} />
        <Button
          onPress={() =>
            navigation.navigate('Addressdetails', {
              latitude: latitude,
              longitude: longitude,
              place: place ? place : 'Melbourne, VIC, Australia',
            })
          }
          title={Strings.selectLocation}
          bgColor={Colors.primary}
          titleColor={Colors.white}
          btnStyle={styles.mapBtn}
        />
      </View>

      <Modal
        visible={isSearchModal}
        animationType="slide"
        onRequestClose={() => setSerachModal(false)}>
        <SafeAreaView style={styles.serachModal}>
          <View style={styles.serachWrapper}>
            <GooglePlacesAutocomplete
              GooglePlacesDetailsQuery={{fields: 'geometry'}}
              fetchDetails={true}
              textInputProps={{
                placeholder: Strings.searchLocation,
                placeholderTextColor: Colors.primary_dark,
              }}
              onPress={(data, details = null) => {
                const geometry = details?.geometry?.location;
                setLongitude(geometry.lng);
                setLatitude(geometry.lat);
                setPlace(data.description);
                setSerachModal(false);
              }}
              styles={{
                listView: {
                  width: wp(100),
                  marginRight: wp(8),
                  marginTop: hp(2),
                },
                container: {
                  paddingLeft: wp(10),
                  width: wp(100),
                  overflow: 'hidden',
                  backgroundColor: Colors.white,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flex: 1,
                },
                textInputContainer: {
                  backgroundColor: Colors.lightGray,
                  borderRadius: 100,
                },
                textInput: {
                  backgroundColor: 'transparent',
                  color: Colors.primary_dark,
                  width: wp(100),
                },
              }}
              query={{
                key: Config.GOOGLE_API_KEY,
                language: 'en',
              }}
              renderRow={result => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: Colors.lightGray,
                      height: hp(5),
                      width: hp(5),
                      borderRadius: 100,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon source={Images.location} size={hp(3)} />
                  </View>

                  <View style={{marginLeft: wp(3)}}>
                    <Label
                      label={result.description}
                      left
                      bold
                      size={hp(2)}
                      color={Colors.primary_dark1}
                    />
                    <Label
                      label={Strings.detailedLocation}
                      left
                      size={hp(1.9)}
                      color={Colors.gray}
                    />
                  </View>
                </View>
              )}
              renderLeftButton={() => (
                <View
                  style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => setSerachModal(false)}
                    style={{position: 'absolute', left: wp(-8)}}>
                    <Image source={Images.back} style={styles.backBtn} />
                  </TouchableOpacity>
                  <Icon source={Images.search} size={hp(3)} left={wp(5)} />
                </View>
              )}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default AddLocation;
