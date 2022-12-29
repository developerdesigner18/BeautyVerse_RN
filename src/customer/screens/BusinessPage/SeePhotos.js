//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Platform,
} from 'react-native';
import HeaderTop from '../../components/HomeComponent/headerTop';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Strings} from '../../theme/strings';
import {Images} from '../../theme/Images';
import {FlatGrid} from 'react-native-super-grid';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageZoom from 'react-native-image-pan-zoom';

// create a component
const SeePhotos = ({navigation, item, index}) => {
  const [Visible, SetVisible] = useState(false);
  const [selectedImg, SetselectedImg] = useState('');
  const [Index, SetIndex] = useState(0);
  const [activeIndex, SetactiveIndex] = useState(0);

  const setImage = (index, item) => {
    Index === index ? selectedImg(item.img) : null;
    Index === index
      ? console.log(Index, index, 'okok')
      : console.log(Index, index, 'not okay');
  };

  const UserData = [
    {
      name: Strings.bussinessnm,
      star: '5.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img1,
    },
    {
      name: Strings.bussinessnm,
      star: '3.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img2,
    },
    {
      name: Strings.bussinessnm,
      star: '2.5',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img3,
    },
    {
      name: Strings.bussinessnm,
      star: '4.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img4,
    },
    {
      name: Strings.bussinessnm,
      star: '5.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img1,
    },
    {
      name: Strings.bussinessnm,
      star: '3.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img2,
    },
    {
      name: Strings.bussinessnm,
      star: '2.5',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img3,
    },
    {
      name: Strings.bussinessnm,
      star: '4.0',
      hair: 'Hair',
      makeup: 'Makeup',
      skincare: 'Skincare',
      nails: 'Nails',
      img: Images.img4,
    },
  ];

  const images = [
    {
      // Simplest usage.
      url: selectedImg,

      width: wp(100),
      height: hp(40),
      // Optional, if you know the image size, you can set the optimization performance

      // You can pass props to <Image />.
    },
    {
      url: '',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={Strings.photos}
      />
      <FlatGrid
        itemDimension={130}
        data={UserData}
        style={{marginTop: 10}}
        spacing={13}
        renderItem={({item, index}) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                console.log(item);
                console.log(selectedImg, '===Index====');
                SetIndex(index);
                SetactiveIndex(index);
                SetVisible(true);
                index === Index
                  ? SetselectedImg(item.img)
                  : SetselectedImg(item.img);
              }}>
              <View
                style={{
                  backgroundColor: 'lightgrey',
                  justifyContent: 'flex-end',
                  borderRadius: 15,
                  height: 170,
                  overflow: 'hidden',
                }}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  source={item.img}
                />
              </View>
            </TouchableOpacity>

            <Modal
              animationType="fade"
              transparent={true}
              visible={Visible}
              onRequestClose={() => {
                SetVisible(false);
              }}>
              <SafeAreaView
                style={{
                  flex: 1,
                  backgroundColor:
                    Platform.OS === 'ios'
                      ? 'rgba(0,0,0,0.7)'
                      : 'rgba(0,0,0,0.25)',
                  height: hp(100),
                  width: wp(100),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    SetVisible(false);
                  }}
                  style={{position: 'absolute', top: hp(5), right: wp(5)}}>
                  <Image
                    resizeMode="contain"
                    style={{width: hp(3), height: hp(3)}}
                    source={Images.cross}
                  />
                </TouchableOpacity>
                <ImageZoom
                
                enableSwipeDown={true}
                onSwipeDown={()=>{
                  SetVisible(false);
                }}
                  cropWidth={wp(100)}
                  cropHeight={hp(100)}
                  imageWidth={wp(100)}
                  imageHeight={hp(40)}>
                  <Image
                    resizeMode="cover"
                    style={{
                      width: wp(100),
                      height:hp(40)
                    }}
                    source={selectedImg}
                  />
                </ImageZoom>
              </SafeAreaView>
            </Modal>
          </View>
        )}
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
export default SeePhotos;
