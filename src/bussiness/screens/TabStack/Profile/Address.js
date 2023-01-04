import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
import {
  getAddressThunk,
  removeAddressThunk,
} from '../../../../store/actions/profile-actions';
import {Strings} from '../../../theme/strings';
import {Images} from '../../../theme/images';
import {styles} from './styles';
import {Colors} from '../../../theme/colors';
import {address, menu} from '../../../theme/arrays';
import Header from '../../../components/Header';
import ItemCard from '../../../components/ItemCard';
import IconButton from '../../../components/IconButton';
import Spinner from '../../../components/Spinner';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const Address = ({navigation}) => {
  const dispatch = useDispatch();
  const {address, removeAddress} = useSelector(state => state);
  const [token, setToken] = useState('');
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    function getSuccess() {
      if (address.isSuccess) {
        const data = address.address.data.data;
        setAddresses(data);
      }
    }
    getSuccess();
  }, [address]);

  useEffect(() => {
    getAddress();
  }, []);

  const getAddress = async () => {
    const token = await AsyncStorage.getItem('token');
    setToken(token);
    dispatch(getAddressThunk(token));
  };

  const deleteAddress = id => {
    dispatch(removeAddressThunk(id, token));
    if (removeAddress.isSuccess) {
      const message = removeAddress.removeAddress.data.message;
      getAddress();
      showMessage({
        message: message,
        floating: true,
        type: 'success',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.addressesandTimings}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.mainView}>
        {addresses.length > 0 &&
          addresses.map((item, index) => (
            <ItemCard
              userIcon={Images.address}
              title={'Location ' + (Number(index) + 1)}
              desc={item.flatNo + ', ' + item.buildingName}
              leftIcon={Images.option}
              menu={menu}
              onPressItem={label =>
                label == Strings.remove ? deleteAddress(item.id) : ' '
              }
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
