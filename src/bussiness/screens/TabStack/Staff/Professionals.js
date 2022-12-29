import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import {CheckBox} from 'react-native-elements';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import {professionals, services} from '../../../theme/arrays';
import {FONTS} from '../../../theme/fonts';
import {Images} from '../../../theme/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {styles} from './styles';
import Header from '../../../components/Header';
import Label from '../../../components/Label';
import ItemCard from '../../../components/ItemCard';
import AddButton from '../../../components/AddButton';
import CloseModal from '../../../components/CloseModal';
import Icon from '../../../components/Icon/index';

const Professionals = ({navigation}) => {
  const [addModal, setAddModal] = useState(false);
  const [checkService, setCheckService] = useState([]);

  const selectServices = index => {
    if (checkService.length == 0) {
      setCheckService([index]);
    } else {
      if (checkService.includes(index)) {
        const filter = checkService.filter(item => item != index);
        setCheckService(filter);
      } else {
        setCheckService(prevState => [...prevState, index]);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header rightLabel={Strings.professionals} hide/>
      <View style={styles.professionaView}>
        {professionals.map((item, index) => (
          <ItemCard
            onPress={() =>
              navigation.navigate('HairProfessionals', {
                label: item.label + ' ' + Strings.professionals,
              })
            }
            userIcon={item.icon}
            title={item.label}
            desc={item.desc}
            leftIcon={item.leftIcon}
          />
        ))}
        <AddButton style={styles.addButton} onPress={() => setAddModal(true)} />
      </View>

      <Modal
        isVisible={addModal}
        propagateSwipe={true}
        onBackdropPress={() => setAddModal(false)}>
        <View style={styles.modal}>
          <CloseModal close={() => setAddModal(false)} />
          <Label
            label={Strings.addRemoveServices}
            left
            bold
            size={hp(2)}
            color={Colors.primary_dark}
            paddingVertical={hp(2)}
            fontFamily={FONTS.InterBold}
            marginLeft={wp(2)}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            {services.map((item, index) => (
              <CheckBox
                key={index}
                checkedIcon={
                  <Icon
                    source={Images.check}
                    size={hp(3)}
                    color={Colors.primary}
                  />
                }
                uncheckedIcon={
                  <Icon
                    source={Images.square}
                    size={hp(3)}
                    color={Colors.gray}
                  />
                }
                title={item.label}
                checked={checkService.includes(index) ? true : false}
                onPress={() => selectServices(index)}
                containerStyle={styles.checkBox}
              />
            ))}
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Professionals;
