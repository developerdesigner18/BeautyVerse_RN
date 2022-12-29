//import liraries
import React, {useState,useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import HeaderTop from '../../components/HomeComponent/headerTop';
import {Strings} from '../../theme/strings';
import {BusinessPageStyles} from './BusinessPageStyles';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Images} from '../../theme/Images';
import SemiBold from '../../components/HomeComponent/SemiBold';
import {Colors} from '../../theme/colors';
import AnimatedInput from '../../components/BusinessPage/AnimatedInput';
import Button from '../../components/AuthComponents/FilledButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const InsertAdd = ({navigation, route}) => {


useEffect(()=>{
  GetuserLocation();
},[])


  const GetuserLocation = async () => {
    const Loc = await AsyncStorage.getItem("Location");
    setLocation(Loc)
    console.log(Loc,'===LOC====');
  }

  const {params} = route;

  const [latitude, setLatitude] = useState(params.latitude);
  const [longitude, setLongitude] = useState(params.longitude);
  const [Location, setLocation] = useState([]);


  const [Index, SetIndex] = useState(0);

  console.log(params);

  const Locations = [
    {
      img: Images.homepink,
      name: 'Home',
      imgfill: Images.homebrown,
    },
    {
      img: Images.workpink,
      name: 'Work',
      imgfill: Images.workbrown,
    },
    {
      img: Images.locpink,
      name: 'Other',
      imgfill: Images.locbrown,
    },
  ];

  const RenderLocation = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log('========');
            SetIndex(index);
            console.log(index, '===actual==');
            // SetselectedLoc(item);
            console.log(Index, '===Index===');
          }}
          style={{alignItems: 'center', marginRight: wp(8)}}>
          {Index === index ? (
            <Image
              resizeMode="contain"
              style={{height: hp(7.5), width: hp(7.5)}}
              source={item.imgfill}
            />
          ) : (
            <Image
              resizeMode="contain"
              style={{height: hp(7.5), width: hp(7.5)}}
              source={item.img}
            />
          )}
          <Text style={{fontSize: 15, color: Colors.primaryDark, marginTop: 2}}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={Strings.addaddress}
      />
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={{flexGrow: 1, paddingBottom: hp(15)}}>
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
              <SemiBold FontSize={hp(2.1)} EnterText={'Location Name'} />
              <Text style={{color: Colors.darkpink,width:wp(60), fontSize: hp(1.7)}}>
                {Location}
              </Text>
            </View>
            <TouchableOpacity
            onPress={()=>{

              navigation.navigate('AddAddress')
            }}
            >
              <Image
                resizeMode="contain"
                style={{height: hp(3), width: hp(3)}}
                source={Images.edit}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={BusinessPageStyles.inputWrapper}>
          <AnimatedInput
            label={Strings.flatNo}
            placeholder={Strings.flatVilla}
            width={wp(43)}
          />
          <AnimatedInput
            label={Strings.building}
            placeholder={Strings.buildingName}
            width={wp(43)}
          />
        </View>
        <View style={BusinessPageStyles.inputWrapper}>
          <AnimatedInput
            label={Strings.street}
            placeholder={Strings.streetName}
            width={wp(43)}
          />
          <AnimatedInput
            label={Strings.area}
            placeholder={Strings.areaName}
            width={wp(43)}
          />
        </View>

        <AnimatedInput
          label={Strings.directions}
          placeholder={Strings.directions}
          width={wp(90)}
        />
        <View
          style={{
            alignSelf: 'flex-start',
            marginLeft: wp(5),
            marginVertical: hp(2),
            marginBottom: hp(15),
          }}>
          <FlatList
            horizontal={true}
            data={Locations}
            renderItem={RenderLocation}
          />
        </View>
      </ScrollView>
      <Button
        onPress={() => {
          navigation.navigate('BookService');
        }}
        bgColor={Colors.primary}
        title={Strings.svLoc}
        titleColor={Colors.white}
        btnStyle={{
          width: wp(90),
          position: 'absolute',
          bottom: hp(2),
          alignSelf: 'center',
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
export default InsertAdd;
