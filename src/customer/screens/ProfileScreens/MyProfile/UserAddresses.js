//import liraries
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import SemiBold from '../../../components/HomeComponent/SemiBold';
import Textnormal from '../../../components/Textnormal';
import {Images} from '../../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {BusinessPageStyles} from '../../BusinessPage/BusinessPageStyles';
import {Colors} from '../../../theme/colors';
import {ProfileStyles} from '../ProfileStyles';
import ProfileCard from '../../../components/ProfileComponents/ProfileCard';
import HeaderTop from '../../../components/HomeComponent/headerTop';
import {SafeAreaView} from 'react-native';
import {Strings} from '../../../theme/strings';
import Popover, {PopoverPlacement} from 'react-native-popover-view';
import { useState } from 'react';
import IconButton from '../../../../bussiness/components/IconButton/index';
import Icon from '../../../../bussiness/components/Icon/index';




// create a component
const UserAddresses = ({navigation}) => {
  
  const AddArray = [
    {
      avtar: Images.homeround,
      maintext: 'Home',
      text: 'user address',
    },
    {
      avtar: Images.locround,
      maintext: 'Matti’s Office',
      text: 'user address',
    },
    {
      avtar: Images.workround,
      maintext: 'Work',
      text: 'user address',
    },
  ];

  const [optionModal,setoptionModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={'Addresses'}
      />
      <View style={{width: wp(90), alignSelf: 'center'}}>
        {AddArray.map(item => (
          <ProfileCard
            MenuOnpress={() => {
              setoptionModal(true)
              console.log('MenuPressed');
            }}
            disabled={true}
            showmenu
            avtar={item.avtar}
            mainText={item.maintext}
            text={item.text}
          />
        ))}

        <Popover
          isVisible={optionModal}
          popoverStyle={{ backgroundColor: Colors.white,
            borderRadius: 10,
            paddingHorizontal: wp(2),}}
          placement={PopoverPlacement.BOTTOM}
          onRequestClose={() => setoptionModal(false)}
          // from={
          //   <TouchableOpacity onPress={() => setoptionModal(true)}>
          //     <Icon source={leftIcon} size={hp(2)} color={leftIconColor} />
          //   </TouchableOpacity>
          // }
          >
          <View>
            <IconButton
              onPress={() => setoptionModal(false)}
              icon={Images.bin}
              iconSize={hp(2)}
              iconColor={Colors.grey}
              label={'option 1'}
              labelColor={Colors.primaryDark}
              width={wp(50)}
              left
            />
            <IconButton
              onPress={() => setoptionModal(false)}
              icon={Images.bin}
              iconSize={hp(2)}
              iconColor={Colors.grey}
              label={'option 2'}
              labelColor={Colors.primaryDark}
              width={wp(50)}
              left
            />
          </View>
        </Popover>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddAddress', {screen: 'UserAddress'});
          }}
          style={[
            BusinessPageStyles.mapbottomClick,
            {paddingLeft: 0, marginTop: hp(1)},
          ]}>
          <Image
            resizeMode="contain"
            style={{height: hp(3.3), width: hp(3.3)}}
            source={Images.filledplus}
          />
          <SemiBold
            FontSize={hp(2.5)}
            AllStyle={{color: Colors.primary, paddingLeft: 8}}
            EnterText={Strings.addnewadd}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// define your style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default UserAddresses;
