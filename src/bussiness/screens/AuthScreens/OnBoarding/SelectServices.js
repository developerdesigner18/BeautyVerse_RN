import React, {useState} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {styles} from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Label from '../../../components/Label';
import Section from '../../../components/Section';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import {services} from '../../../theme/arrays';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import { FONTS } from '../../../theme/fonts';

const SelectServices = ({navigation}) => {
  const [id, setId] = useState([]);
  const [selectedService, setSelectedService] = useState([]);

  const selectServices = index => {
    console.log(id.length);
    if (id.length == 0) {
      setId([index]);
    } else {
      if (id.includes(index)) {
        const filter = id.filter(item => item != index);
        setId(filter);
      } else {
        setId(prevState => [...prevState, index]);
      }
    }
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <Header
        onPressBack={() => navigation.goBack()}
        headerTitle={Strings.services}
      />
      <View style={styles.services}>
        <Label
          label={Strings.servicesOffer}
          fontFamily={FONTS.InterBold}
          size={hp(2.5)}
          left
          color={Colors.primary_dark}
          paddingVertical={hp(2)}
        />
        <FlatList
          data={services}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Section
              source={item.icon}
              label={item.label}
              color={id.includes(item.id) ? Colors.white : Colors.primary}
              bgColor={id.includes(item.id) ? Colors.primary : Colors.white}
              onPress={() => selectServices(item.id)}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-between',
          }}
        />
      </View>
      <Button
        onPress={() => navigation.navigate('PaymentMethod')}
        title={Strings.finish}
        bgColor={Colors.primary}
        titleColor={Colors.white}
        btnStyle={styles.nextBtn}
      />
    </SafeAreaView>
  );
};

export default SelectServices;
