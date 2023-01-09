import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
import {
  getAddressThunk,
  removeAddressThunk,
} from '../../../../store/actions/profile-actions';
import SemiBold from '../../../components/HomeComponent/SemiBold';
import {Images} from '../../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {BusinessPageStyles} from '../../BusinessPage/BusinessPageStyles';
import {Colors} from '../../../theme/colors';
import ProfileCard from '../../../components/ProfileComponents/ProfileCard';
import HeaderTop from '../../../components/HomeComponent/headerTop';
import {SafeAreaView} from 'react-native';
import {Strings} from '../../../theme/strings';
import ItemCard from '../../../../bussiness/components/ItemCard';
import Spinner from '../../../../bussiness/components/Spinner';
import {menu} from '../../../../bussiness/theme/arrays';

const UserAddresses = ({navigation}) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const addresses = useSelector(
    state => state.address.isSuccess && state.address.address.data.data,
  );
  const loading = useSelector(
    state => state.address.loading | state.removeAddress.loading,
  );
  const removeSucces = useSelector(state => state.removeAddress.isSuccess);
  const removeAddress = useSelector(
    state =>
      state.removeAddress.isSuccess && state.removeAddress.removeAddress.data,
  );

  useEffect(() => {
    getAddress();
    navigation.addListener('focus', () => {
      getAddress();
    });
  }, []);

  useEffect(() => {
    if (removeSucces) {
      showMessage({
        message: removeAddress.message,
        floating: true,
        type: 'success',
      }),
        getAddress();
    }
  }, [removeSucces]);

  const getAddress = async () => {
    const token = await AsyncStorage.getItem('token');
    setToken(token);
    dispatch(getAddressThunk(token));
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={'Addresses'}
      />
      <View style={{width: wp(90), alignSelf: 'center', paddingTop: hp(2)}}>
        {addresses.length > 0 &&
          addresses.map(item => (
            <ItemCard
              userIcon={
                item.locationType == 'Home'
                  ? Images.homeround
                  : item.locationType == 'Office' || item.locationType == 'Work'
                  ? Images.workround
                  : Images.locround
              }
              title={item.locationType}
              desc={item.flatNo + ', ' + item.buildingName}
              leftIcon={Images.menudots}
              menu={menu}
              onPressItem={label =>
                label == 'Remove'
                  ? dispatch(removeAddressThunk(item.id, token))
                  : ' '
              }
            />
          ))}

        {/* <Popover
          isVisible={optionModal}
          popoverStyle={{
            backgroundColor: Colors.white,
            borderRadius: 10,
            paddingHorizontal: wp(2),
          }}
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
        </Popover> */}
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
      <Spinner visible={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default UserAddresses;
