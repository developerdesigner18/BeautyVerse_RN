//import liraries
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform
} from 'react-native';
import {Images} from '../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Colors} from '../../theme/colors';
import SearchInput from '../../components/SearchComponents/SearchInput';
import HeaderText from '../../components/AuthComponents/HeaderText';
import {Strings} from '../../theme/strings';
import {Searchstyles} from '../../screens/SearchScreens/SearchStyles';
import {HomeStyles} from '../HomeScreens/HomeStyles';
import {AuthStyles} from '../SplashScreen/AuthScreens/AuthStyles';
import RBSheet from 'react-native-raw-bottom-sheet';
import RadioButton from '../../components/SearchComponents/RadioButton';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import SemiBold from '../../components/HomeComponent/SemiBold';



// create a component
const UpcomingOrder = ({navigation}) => {

    const Categories = () => {
        return (
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View
              style={{
                marginTop: -10,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <View style={[HomeStyles.BussinessCatView]}>
                <Image
                  resizeMode="contain"
                  style={[HomeStyles.BussinessCatIcon, {}]}
                  source={Images.Girl}
                />
                <Text style={[HomeStyles.BussinessCatText]}>Hair</Text>
              </View>
           
            </View>
          </ScrollView>
        );
      };

    const [UserData, SetUserData] = useState([
        {
          name: 'Adams hair saloon',
          star: '5.0',
          hair: 'Hair',
          makeup: 'Makeup',
          skincare: 'Skincare',
          nails: 'Nails',
          img: Images.img1,
        },
        {
          name: 'Andrews spa',
          star: '3.0',
          hair: 'Hair',
          makeup: 'Makeup',
          skincare: 'Skincare',
          nails: 'Nails',
          img: Images.img2,
        },
        {
          name: 'Peoples favourite',
          star: '2.5',
          hair: 'Hair',
          makeup: 'Makeup',
          skincare: 'Skincare',
          nails: 'Nails',
          img: Images.img3,
        },
        {
          name: 'Tate club',
          star: '4.0',
          hair: 'Hair',
          makeup: 'Makeup',
          skincare: 'Skincare',
          nails: 'Nails',
          img: Images.img4,
        },
        {
          name: 'Mike Hair creators',
          star: '4.0',
          hair: 'Hair',
          makeup: 'Makeup',
          skincare: 'Skincare',
          nails: 'Nails',
          img: Images.img1,
        },
        {
          name: 'Crazy styles',
          star: '4.0',
          hair: 'Hair',
          makeup: 'Makeup',
          skincare: 'Skincare',
          nails: 'Nails',
          img: Images.img2,
        },
        {
          name: 'Adam stylers',
          star: '4.0',
          hair: 'Hair',
          makeup: 'Makeup',
          skincare: 'Skincare',
          nails: 'Nails',
          img: Images.img3,
        },
        {
          name: 'Make A look',
          star: '4.0',
          hair: 'Hair',
          makeup: 'Makeup',
          skincare: 'Skincare',
          nails: 'Nails',
          img: Images.img4,
        },
      ]);


      const RenderOrders = ({item}) =>{
        return(
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate('OrderDetails')
            }}
            >
              <View style={{paddingTop: hp(3)}}>
                <View style={Searchstyles.mainListMaker}>
                  <Image style={Searchstyles.ProfileImageCon} source={Images.img1} />
                  <View
                    style={{
                      width: '67%',
                      paddingLeft: wp(5),
                    }}>
                  <SemiBold
                  AllStyle={{marginVertical:-5}}
                  FontSize={hp(2.5)}
                  EnterText={'Straight Hair'}
                  />
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(0.5)}}>
                    <Image
                    resizeMode='contain'
                    style={{height:hp(2),width:hp(2),tintColor:Colors.Brown}}
                    source={Images.Girl}
                    />
                     <Text style={[HomeStyles.BussinessCatText]}>Hair</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(0.5)}}>
                    <Image
                    resizeMode='contain'
                    style={{height:hp(2),width:hp(2),tintColor:Colors.Brown}}
                    source={Images.dategrey}
                    />
                     <Text style={[HomeStyles.BussinessCatText,{marginVertical:hp(0.5)}]}>23 March, 2022 (from 1:00-2:00)</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(0.5)}}>
                    <Image
                    resizeMode='contain'
                    style={{height:hp(2),width:hp(2),tintColor:Colors.Brown}}
                    source={Images.locgrey}
                    />
                     <Text style={[HomeStyles.BussinessCatText,{marginVertical:hp(0.5)}]}>Home</Text>
                  </View>
                  </View>
                </View>
                <View style={Searchstyles.BorderBottomStyle}></View>
              </View>
            </TouchableOpacity>
        )
      }


    return (
        <View style={styles.container}>
         <RenderOrders/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft:wp(5)
    },
});

//make this component available to the app
export default UpcomingOrder;
