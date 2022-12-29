import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import {hairProfessional} from '../../../theme/arrays';
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
import IconButton from '../../../components/IconButton';

const AddHairProfessionals = ({navigation, route}) => {
  const {params} = route;
  const [addModal, setAddModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={params.label}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.professionaView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {hairProfessional.map((item, index) => (
            <ItemCard
              userIcon={Images.customer}
              title={item.name}
              desc={item.rating}
              review={item.review}
              leftIcon={Images.option}
              rating
              line
              option
            />
          ))}
        </ScrollView>
        <AddButton style={styles.addButton} onPress={() => setAddModal(true)} />
      </View>
      <Modal isVisible={addModal} onBackdropPress={() => setAddModal(false)}>
        <View style={{...styles.modal, height: hp(30)}}>
          <CloseModal close={() => setAddModal(false)} />
          <Label
            label={
              Strings.addProTo +
              params.label.replace(Strings.professionals, Strings.service)
            }
            left
            bold
            size={hp(2)}
            color={Colors.primary_dark}
            paddingVertical={hp(2)}
            fontFamily={FONTS.InterBold}
          />
          <ScrollView
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}>
            <IconButton
              onPress={() => {
                setAddModal(false);
                navigation.navigate('AddProfessional');
              }}
              icon={Images.addFill}
              iconSize={hp(2)}
              iconColor={Colors.gray}
              label={Strings.addNewProfessional}
              labelColor={Colors.primary_dark}
              width={wp(90)}
              left
            />
            <IconButton
              onPress={() => {
                setAddModal(false);
                navigation.navigate('ExistProfessionals');
              }}
              icon={Images.grids}
              iconSize={hp(2)}
              iconColor={Colors.gray}
              label={Strings.addFromexisting}
              labelColor={Colors.primary_dark}
              width={wp(90)}
              left
            />
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default AddHairProfessionals;
