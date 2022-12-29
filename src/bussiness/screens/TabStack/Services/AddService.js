import React from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {hairServices} from '../../../theme/arrays';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import {Images} from '../../../theme/images';
import {FONTS} from '../../../theme/fonts';
import Row from '../../../components/Row';
import Header from '../../../components/Header';
import AddButton from '../../../components/AddButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import Label from '../../../components/Label';

const AddService = ({navigation, route}) => {
  const {params} = route;
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={params.label}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.serviceView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {hairServices.map((item, index) => (
            <TouchableOpacity style={styles.serviceWrapper} key={index}>
              <Row
                title={item.add}
                icon={Images.edit}
                onPressIcon={() => {}}
                iconSize={hp(3)}
                bold
              />
              <Row
                title={'Duration: ' + item.Duration}
                titleColor={Colors.primary_dark}
              />
              <Row title={item.price} titleColor={Colors.primary} bold />
              {index == 0 && (
                <View style={{...styles.row, paddingTop: hp(0.6)}}>
                  <Label
                    label={Strings.addOns + ': '}
                    left
                    color={Colors.primary_dark}
                  />
                  <Label
                    label={'Add On 1, Add On 2'}
                    left
                    bold
                    color={Colors.primary_dark}
                  />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
        <AddButton
          style={styles.addButton}
          onPress={() => navigation.navigate('NewService')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddService;
