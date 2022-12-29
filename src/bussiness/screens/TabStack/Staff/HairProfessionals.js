import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import {Images} from '../../../theme/images';
import {FONTS} from '../../../theme/fonts';
import Label from '../../../components/Label';
import Header from '../../../components/Header';
import IconButton from '../../../components/IconButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const HairProfessionals = ({navigation, route}) => {
  const {params} = route;
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={params.label}
        onPressBack={() => navigation.goBack()}
      />
      <View style={{...styles.professionaView, justifyContent: 'center'}}>
        <Label
          label={Strings.addA + params.label}
          fontFamily={FONTS.InterBold}
          marginBottom={hp(3)}
          color={Colors.primary_dark}
          size={hp(2.5)}
        />
        <IconButton
          onPress={() =>
            navigation.navigate('AddHairProfessionals', {label: params.label})
          }
          icon={Images.addWhite}
          label={Strings.addProfessional}
          iconSize={hp(3)}
          bgColor={Colors.primary}
          labelColor={Colors.white}
          width={wp(50)}
        />
      </View>
    </SafeAreaView>
  );
};

export default HairProfessionals;
