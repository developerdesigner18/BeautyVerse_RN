//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderTop from '../../components/HomeComponent/headerTop';
import SemiBold from '../../components/HomeComponent/SemiBold';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Strings} from '../../theme/strings';
import {Colors} from '../../theme/colors';
import PriceAmt from '../../components/BusinessPage/PriceAmt';
import {Images} from '../../theme/Images';
import {TouchableOpacity} from 'react-native';
import { BusinessPageStyles } from './BusinessPageStyles';
import Button from '../../components/AuthComponents/FilledButton';
import BottomTabs from '../HomeScreens/BottomTabs';

// create a component
const ConfirmBooking = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={Strings.confbooking}
      />
      <View style={{width: wp(90), alignSelf: 'center'}}>
        <View
          style={BusinessPageStyles.confirmbookingCard}>
          <View>
            <View
              style={BusinessPageStyles.StraightHairViewbooking}>
              <SemiBold FontSize={hp(2.7)} EnterText={'Straight Hair'} />
              <PriceAmt
                Allstyle={{marginRight: wp(2.5)}}
                FontSize={hp(2.2)}
                Amount={'$60.00'}
              />
            </View>
            <View style={{flexDirection:'row',marginVertical:hp(0.8)}}>
            <Text style={[BusinessPageStyles.datetimetext,{color:Colors.primaryDark}]}>Add Ons:</Text>
            <Text style={[BusinessPageStyles.datetimetext,{color:Colors.primaryDark,fontFamily:'Inter-Bold'}]}>Add On 1</Text>
            </View>
            <Text style={BusinessPageStyles.datetimetext}>
              Date and Time: 22 June, 2022
            </Text>
            <View style={BusinessPageStyles.editdeleteview}>
              <TouchableOpacity
                onPress={()=>{
                  navigation.navigate('BookService')
                }}
                style={BusinessPageStyles.EditButton}>
                <Image
                  resizeMode="contain"
                  style={BusinessPageStyles.editImage}
                  source={Images.edit}
                />
                <SemiBold
                  FontSize={hp(2.4)}
                  AllStyle={{color: Colors.primary}}
                  EnterText={'Edit'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={BusinessPageStyles.deleteButton}>
                <Image
                  resizeMode="contain"
                  style={BusinessPageStyles.deleteImage}
                  source={Images.outbin}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Button
      onPress={()=>{
        navigation.navigate('Checkout')
      }}
      bgColor={Colors.primary}
      title={'Checkout'}
      titleColor={Colors.white}
      btnStyle={{width:wp(90),position:'absolute',bottom:hp(1),alignSelf:'center'}}
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
export default ConfirmBooking;
