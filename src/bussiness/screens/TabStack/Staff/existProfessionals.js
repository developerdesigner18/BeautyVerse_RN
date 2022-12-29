import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import {hairProfessional} from '../../../theme/arrays';
import {Images} from '../../../theme/images';
import {styles} from './styles';
import Header from '../../../components/Header';
import ItemCard from '../../../components/ItemCard';
import Button from '../../../components/Button';

const ExistProfessionals = ({navigation}) => {
  const [id, setId] = useState([]);

  const selectProfessional = index => {
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
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.addProf}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.professionaView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {hairProfessional.map((item, index) => (
            <ItemCard
              onPress={() => selectProfessional(index)}
              userIcon={Images.customer}
              title={item.name}
              desc={item.rating}
              review={item.review}
              leftIcon={id.includes(index) ? Images.check : Images.square}
              leftIconColor={id.includes(index) ? Colors.primary : Colors.gray}
              rating
              line
            />
          ))}
        </ScrollView>
        <Button
          title={Strings.add}
          bgColor={Colors.primary}
          titleColor={Colors.white}
          btnStyle={styles.addBtn}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExistProfessionals;
