import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {styles} from './styles';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import {Images} from '../../../theme/images';
import {FONTS} from '../../../theme/fonts';
import {services} from '../../../theme/arrays';
import Label from '../../../components/Label';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import Section from '../../../components/Section';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const AddProfessional = ({navigation}) => {
  const [fName, setFName] = useState('Peter');
  const [lName, setLName] = useState('Mckinnon');
  const [id, setId] = useState([]);
  const [profileUri, setProfileUri] = useState('');

  const profilePicker = () => {
    ImagePicker.openPicker({}).then(image => {
      console.log(image.path);
      setProfileUri(image.path);
    });
  };

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

  const renderItem = ({item, index}) => (
    <Section
      source={item.icon}
      label={item.label}
      color={id.includes(item.id) ? Colors.white : Colors.primary}
      bgColor={id.includes(item.id) ? Colors.primary : Colors.white}
      style={styles.serviceWrapper}
      onPress={() => selectServices(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.addProf}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.professionaView}>
        <ImageBackground
          imageStyle={{borderRadius: profileUri === '' ? 0 : 100}}
          source={profileUri ? {uri: profileUri} : Images.customer}
          style={styles.profileview}>
          <TouchableOpacity
            style={styles.cameraBtn}
            onPress={() => profilePicker()}>
            <Icon source={Images.cameraround} size={hp(3)} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.inputWrapper}>
          <Input
            value={fName}
            onChangeText={text => setFName(text)}
            label={Strings.firstName}
            placeholder={Strings.firstName}
            width={wp(43)}
            size={hp(1.9)}
          />
          <Input
            value={lName}
            onChangeText={text => setLName(text)}
            label={Strings.lastName}
            placeholder={Strings.lastName}
            width={wp(43)}
            size={hp(1.9)}
          />
        </View>
        <View style={[styles.line, styles.detailView]}>
          <Label
            label={Strings.selectServices}
            left
            bold
            size={hp(3)}
            color={Colors.primary_dark}
            marginBottom={hp(3)}
            fontFamily={FONTS.InterBold}
          />
          <FlatList
            data={services}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={2}
            columnWrapperStyle={styles.colWrapper}
            scrollEnabled={false}
          />
        </View>
        <Button
          title={Strings.add}
          titleColor={Colors.white}
          bgColor={Colors.primary}
          btnStyle={styles.addBtn}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddProfessional;
