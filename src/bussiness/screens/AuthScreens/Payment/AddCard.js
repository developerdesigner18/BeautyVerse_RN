import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const AddCard = ({navigation}) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  return (
    <SafeAreaView style={styles.conatiner}>
      <Header
        onPressBack={() => navigation.goBack()}
        headerTitle={Strings.addDebitCreditCard}
      />
      <TextInput
        placeholder={Strings.nameOnCard}
        width={wp(90)}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder={Strings.cardNumber}
        width={wp(90)}
        value={cardNumber}
        onChangeText={text => setCardNumber(text)}
      />
      <View style={{...styles.rowWrapper, width: wp(90)}}>
        <TextInput
          placeholder={Strings.cardExpiry}
          width={wp(42)}
          value={expiry}
          onChangeText={text => setExpiry(text)}
        />
        <TextInput
          placeholder={Strings.CVV}
          width={wp(42)}
          value={cvv}
          onChangeText={text => setCvv(text)}
        />
      </View>
      <Button
        onPress={() => navigation.navigate('BottomTabs')}
        title={Strings.saveCard}
        bgColor={Colors.primary}
        titleColor={Colors.white}
        btnStyle={styles.nextBtn}
      />
    </SafeAreaView>
  );
};

export default AddCard;
