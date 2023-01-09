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
  const [token, setToken] = useState('');

  const loading = useSelector(
    state => state.address.loading | state.removeAddress.loading,
  );
  const addresses = useSelector(
    state => state.address.isSuccess && state.address.address.data.data,
  );
  const removeSucces = useSelector(state => state.removeAddress.isSuccess);
  const removeAddress = useSelector(
    state =>
      state.removeAddress.isSuccess && state.removeAddress.removeAddress.data,
  );

  useEffect(() => {
    getAddress();
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
      <Header
        headerTitle={Strings.addressesandTimings}
        onPressBack={() => navigation.replace('MyProfile')}
      />
      <View style={styles.mainView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {addresses.length > 0 &&
            addresses.map((item, index) => (
              <ItemCard
                userIcon={Images.address}
                title={'Location ' + (Number(index) + 1)}
                desc={item.flatNo + ', ' + item.buildingName}
                leftIcon={Images.option}
                menu={menu}
                onPressItem={label =>
                  label == Strings.remove
                    ? dispatch(removeAddressThunk(item.id, token))
                    : ' '
                }
              />
            ))}
        </ScrollView>
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
      <Spinner visible={loading} />
    </SafeAreaView>
  );
};

export default Address;
