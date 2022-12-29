import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Strings} from '../../../theme/strings';
import {Images} from '../../../theme/images';
import {Colors} from '../../../theme/colors';
import {styles} from './styles';
import Header from '../../../components/Header';
import Label from '../../../components/Label';
import Icon from '../../../components/Icon';
import Row from '../../../components/Row';
import Button from '../../../components/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import { FONTS } from '../../../theme/fonts';

const BookingDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.orderDetail}
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={{paddingHorizontal: wp(5)}}>
          <Label
            label={Strings.customerInfo}
            left
            fontFamily={FONTS.InterBold}
            size={hp(3)}
            paddingVertical={hp(2)}
            color={Colors.primary_dark}
          />
          <View style={[styles.row, styles.customerView]}>
            <Icon source={Images.customer} size={hp(10)} radius={100} />
            <View
              style={{
                marginLeft: wp(5),
                width: wp(60),
                backgroundColor: Colors.white,
              }}>
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Label
                  label="Kynthia Johnson"
                  left
                  fontFamily={FONTS.InterBold}
                  size={hp(2)}
                  color={Colors.primary_dark}
                  paddingVertical={hp(1)}
                />
                <View style={styles.row}>
                  <Icon source={Images.rating} size={wp(4)} />
                  <Label
                    label="5.0"
                    left
                    fontFamily={FONTS.InterBold}
                    marginLeft={wp(2)}
                    color={Colors.primary_dark}
                  />
                </View>
              </View>
              <Label
                label="kynthiajohnson@email.com"
                fontFamily={FONTS.InterRegular}
                left
                marginBottom={hp(1)}
                color={Colors.lightGray3}
              />
              <Label
                label="+123 456 7890"
                fontFamily={FONTS.InterRegular}
                left
                marginBottom={hp(1)}
                color={Colors.lightGray3}
              />
            </View>
          </View>
          <View style={[styles.line, styles.detailView]}>
            <Label
              label={Strings.detail}
              left
              fontFamily={FONTS.InterBold}
              size={hp(3)}
              color={Colors.primary_dark}
              marginBottom={hp(3)}
            />
            <View style={styles.customerView}>
              <Row title={Strings.service} subTitle="Straight Hair" boldSub/>
              <Row title={Strings.price} subTitle="$60.00" color={Colors.primary} boldSub/>
              <Row title={Strings.duration} subTitle="Straight Hair" boldSub/>
              <Row
                title={Strings.appointmentDate}
                subTitle="29th March, 2022"
                boldSub
              />
              <Row title={Strings.appointmentTime} subTitle="12:00PM-1:00PM" boldSub/>
              <Row title={Strings.professional} subTitle="Linda Johnson" boldSub/>
              <Row title={Strings.serviceLocation} subTitle="Your location" boldSub/>
              <View style={[styles.line, styles.detailView]}>
                <Label
                  label={Strings.noteCustomer}
                  left
                  size={hp(2)}
                  marginBottom={hp(1)}
                  fontWeight="500"
                  color={Colors.primary_dark}
                />
                <Label
                  label={Strings.note}
                  left
                  bold
                  size={hp(2)}
                  color={Colors.primary_dark}
                  lineHeight={hp(3)}
                />
              </View>
            </View>
          </View>
          <View style={[styles.line, styles.detailView]}>
            <Label
              label={Strings.costBreakdown}
              left
              fontFamily={FONTS.InterBold}
              size={hp(3)}
              color={Colors.primary_dark}
              marginBottom={hp(3)}
            />
            <View style={styles.customerView}>
              <Row title={Strings.straightHair} subTitle="$60.00" boldSub/>
              <Row title={Strings.visitingCharges} subTitle="$10.00" boldSub/>
              <View style={{...styles.line, top: hp(1)}} />
              <Row
                title={Strings.total}
                subTitle="$70.00"
                bold
                boldSub
                color={Colors.primary}
                top={hp(2)}
              />
            </View>
          </View>
          <View style={[styles.line, styles.detailView]}>
            <Label
              label={Strings.address}
              left
              fontFamily={FONTS.InterBold}
              size={hp(3)}
              color={Colors.primary_dark}
              marginBottom={hp(3)}
            />
            <View style={{...styles.customerView, paddingVertical: 0}}>
              <View style={styles.headerMapView}>
                <MapView
                  style={styles.map}
                  region={{
                    latitude: -37.8136,
                    longitude: 144.9631,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                  <Marker
                    coordinate={{
                      latitude: -37.8136,
                      longitude: 144.9631,
                    }}>
                    <Icon source={Images.marker} size={hp(10)} />
                  </Marker>
                </MapView>
                <View style={styles.editView}>
                  <Label
                    label={Strings.locationName}
                    fontFamily={FONTS.InterBold}
                    left
                    color={Colors.primary_dark1}
                  />
                  <Label
                    label={Strings.locationgoeshere}
                    fontFamily={FONTS.InterRegular}
                    left
                    color={Colors.lightGray3}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomView}>
            <Button
            onPress={()=>navigation.navigate('BookService')}
              title={Strings.accept}
              bgColor={Colors.primary}
              titleColor={Colors.white}
              btnStyle={styles.bottomBtns}
            />
            <Button
              title={Strings.reschedule}
              bgColor={Colors.lightGray2}
              titleColor={Colors.primary}
              btnStyle={styles.bottomBtns}
            />
            <Button
              title={Strings.amend}
              bgColor={Colors.lightGray2}
              titleColor={Colors.primary}
              btnStyle={styles.bottomBtns}
            />
            <Button
              title={Strings.reject}
              bgColor={Colors.white}
              titleColor={Colors.red}
              btnStyle={styles.bottomBtns}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingDetails;
