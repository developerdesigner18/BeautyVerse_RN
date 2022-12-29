import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Strings} from '../../../theme/strings';
import {styles} from './styles';
import {Colors} from '../../../theme/colors';
import {FONTS} from '../../../theme/fonts';
import {Images} from '../../../theme/images';
import Header from '../../../components/Header';
import Label from '../../../components/Label';
import IconButton from '../../../components/IconButton';
import ItemCard from '../../../components/ItemCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const Wallet = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.wallet}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.mainView}>
        <Label
          label={Strings.otherPaymentMethods}
          color={Colors.primary_dark}
          size={hp(2.5)}
          left
          fontFamily={FONTS.InterBold}
          marginBottom={hp(3)}
        />
        <ItemCard
          userIcon={Images.applepay}
          size={hp(5)}
          label="1234567890"
          leftIcon={Images.bin}
          leftIconColor={Colors.primary_dark}
        />
        <ItemCard
          userIcon={Images.card}
          size={hp(5)}
          label="1234567890"
          leftIcon={Images.bin}
          leftIconColor={Colors.primary_dark}
        />
        <ItemCard
          userIcon={Images.paypal}
          size={hp(5)}
          label="1234567890"
          leftIcon={Images.bin}
          leftIconColor={Colors.primary_dark}
        />
        
        <IconButton
          label={Strings.addMethod}
          icon={Images.addFill}
          iconColor={Colors.primary}
          labelColor={Colors.primary}
          iconSize={hp(2.5)}
          fontSize={hp(2)}
          bgColor={Colors.white}
          width={wp(90)}
          left
        />
      </View>
    </SafeAreaView>
  );
};

export default Wallet;
