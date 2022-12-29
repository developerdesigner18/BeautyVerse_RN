import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Strings} from '../../../theme/strings';
import {Images} from '../../../theme/images';
import {styles} from './styles';
import {Colors} from '../../../theme/colors';
import {address, menu} from '../../../theme/arrays';
import Header from '../../../components/Header';
import ItemCard from '../../../components/ItemCard';
import IconButton from '../../../components/IconButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const Address = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.addressesandTimings}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.mainView}>
        {address.map(item => (
          <ItemCard
            userIcon={Images.address}
            title={item.label}
            desc={item.desc}
            leftIcon={Images.option}
            menu={menu}
          />
        ))}
        <IconButton
          onPress={() => navigation.navigate('AddLocation', {from: 'profile'})}
          label={Strings.addNewAddress}
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

export default Address;
