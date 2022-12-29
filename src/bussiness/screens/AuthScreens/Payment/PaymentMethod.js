import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Strings} from '../../../theme/strings';
import {Images} from '../../../theme/images';
import {Colors} from '../../../theme/colors';
import {FONTS} from '../../../theme/fonts';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import Label from '../../../components/Label';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const PaymentMethod = ({navigation}) => {
  const Row = ({icon, label, onNext}) => (
    <TouchableOpacity
      onPress={onNext}
      style={[styles.rowWrapper, styles.cardView]}>
      <View style={[styles.rowWrapper]}>
        <Icon source={icon} size={hp(6)} />
        <Label
          label={label}
          fontFamily={FONTS.InterSemiBold}
          size={hp(2)}
          color={Colors.primary_dark}
          marginLeft={wp(4)}
        />
      </View>
      <Icon source={Images.rightarrow} size={hp(2.5)} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.conatiner}>
      <Header noBack hide headerTitle={Strings.addpaymentMethod} />
      <Row icon={Images.card} label={Strings.debitCreditCard} onNext={()=>navigation.navigate('AddCard')}/>
      <Row icon={Images.gift} label={Strings.giftCard} />
      <Row icon={Images.credit} label={Strings.credit} />
      <Row icon={Images.paypal} label={Strings.payPal} />
      <Row icon={Images.applepay} label={Strings.applePay} />
      <Button
        onPress={() => navigation.navigate('BottomTabs')}
        title={Strings.addLater}
        bgColor={Colors.white}
        titleColor={Colors.primary}
        btnStyle={styles.nextBtn}
      />
    </SafeAreaView>
  );
};

export default PaymentMethod;
