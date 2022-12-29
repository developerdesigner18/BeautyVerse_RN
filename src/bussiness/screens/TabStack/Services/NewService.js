import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Popover, {PopoverPlacement} from 'react-native-popover-view';
import {Menu, MenuItem} from 'react-native-material-menu';
import Modal from 'react-native-modal';
import {styles} from './styles';
import {Strings} from '../../../theme/strings';
import {option} from '../../../theme/arrays';
import {Colors} from '../../../theme/colors';
import {Images} from '../../../theme/images';
import {FONTS} from '../../../theme/fonts';
import Input from '../../../components/Input';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Label from '../../../components/Label';
import RadioButton from '../../../components/RadioButton';
import Icon from '../../../components/Icon';
import Row from '../../../components/Row';
import Alert from '../../../components/Alert';
import IconButton from '../../../components/IconButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const NewService = ({navigation, route}) => {
  const {params} = route;
  const touchable = useRef();
  const [serviceName, setServiceName] = useState('');
  const [serviceCharge, setServiceCharge] = useState('');
  const [duration, serDuration] = useState('');
  const [addOnName, setAddOnName] = useState('');
  const [sCharge, setSCharge] = useState('');
  const [timeDuration, setTimeDuration] = useState('');
  const [checkYes, setCheckYes] = useState(false);
  const [checkNo, setCheckNo] = useState(false);
  const [isAddMore, setAddMore] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [isAdd, setAdd] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [isAlert, setAlert] = useState(false);
  const [addOns, setAddOns] = useState([]);
  const [addOnObj, setAddOnObj] = useState({});

  useEffect(() => {
    addOns.length == 0 && setAddMore(true);
  }, []);

  const saveAddons = () => {
    if (addOnName == '' && sCharge == '' && timeDuration == '') {
      alert('Enter Add ons details!');
    } else {
      const data = {
        id: addOns.length + 1,
        name: addOnName,
        charge: sCharge,
        duration: timeDuration,
      };
      if (addOns.length > 0) {
        setAddOns(prevState => [...prevState, data]);
      } else {
        setAddOns([data]);
      }
      setAddMore(false);
      setAddOnName('');
      setSCharge('');
      setTimeDuration('');
    }
  };

  const removeAddons = () => {
    const filter = addOns.filter(item => item.id != addOnObj.id);
    setAddOns(filter);
    setAlert(false);
    filter.length == 0 && setAddMore(true);
  };

  const editAddons = () => {
    const data = addOns.map(item => {
      if (item.id == addOnObj.id) {
        return {
          id: addOnObj.id,
          name: addOnName,
          charge: sCharge,
          duration: timeDuration,
        };
      }
      return item;
    });
    setAddOns(data);
    setAddMore(false);
    setEdit(false);
  };

  const discard = () => {
    setAddOnName('');
    setSCharge('');
    setTimeDuration('');
    setAddMore(false);
    setEdit(false);
    setAdd(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.addService}
        onPressBack={() => navigation.goBack()}
      />

      <View style={styles.serviceView}>
        <View
          style={{
            height: hp(75),
            backgroundColor: Colors.white,
            margingBottom: hp(5),
          }}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <Input
              value={serviceName}
              onChangeText={text => setServiceName(text)}
              label={Strings.serviceName}
              placeholder={Strings.serviceName}
              width={wp(90)}
              size={hp(1.9)}
            />
            <View style={styles.inputWrapper}>
              <Input
                value={serviceCharge}
                onChangeText={text => setServiceCharge(text)}
                label={Strings.serviceCharges}
                placeholder={Strings.serviceCharges}
                width={wp(43)}
                size={hp(1.9)}
              />
              <Input
                value={duration}
                onChangeText={text => serDuration(text)}
                label={Strings.timeDuration}
                placeholder={Strings.timeDuration}
                width={wp(43)}
                size={hp(1.9)}
              />
            </View>
            <Label
              label={Strings.serviceAvailableAt}
              left
              fontFamily={FONTS.InterBold}
              size={hp(2)}
              lineHeight={hp(3)}
            />
            <View
              style={{
                ...styles.row,
                ...styles.radioView,
              }}>
              <RadioButton
                label={Strings.yes}
                checked={checkYes}
                onPress={() => {
                  setCheckYes(true);
                  setCheckNo(false);
                }}
              />
              <RadioButton
                label={Strings.no}
                checked={checkNo}
                onPress={() => {
                  setCheckNo(true);
                  setCheckYes(false);
                }}
              />
            </View>

            <View style={styles.addOnsView1}>
              <Label
                label={Strings.addOnsOptional}
                color={Colors.primary_dark}
                size={hp(2)}
                bold
                left
                marginBottom={hp(2)}
              />
              {isAddMore ? (
                <View>
                  <Input
                    value={addOnName}
                    onChangeText={text => setAddOnName(text)}
                    label={Strings.addOnName}
                    placeholder={Strings.addOnName}
                    width={wp(90)}
                    size={hp(1.9)}
                  />
                  <View style={styles.inputWrapper}>
                    <Input
                      value={sCharge}
                      onChangeText={text => setSCharge(text)}
                      label={Strings.serviceCharges}
                      placeholder={Strings.serviceCharges}
                      keyboardType="number-pad"
                      width={wp(43)}
                      size={hp(1.9)}
                    />
                    <Input
                      value={timeDuration}
                      onChangeText={text => setTimeDuration(text)}
                      label={Strings.timeDuration}
                      placeholder={Strings.timeDuration}
                      keyboardType="number-pad"
                      width={wp(43)}
                      size={hp(1.9)}
                    />
                  </View>

                  {isEdit ? (
                    <View>
                      <Button
                        onPress={() => editAddons()}
                        title={Strings.saveChanges}
                        bgColor={Colors.lightGray2}
                        titleColor={Colors.primary}
                        btnStyle={{width: wp(90), marginVertical: 0}}
                      />
                      <Button
                        onPress={() => discard()}
                        title={Strings.discard}
                        bgColor={Colors.white}
                        titleColor={Colors.primary}
                        btnStyle={{width: wp(90), marginVertical: 0}}
                      />
                    </View>
                  ) : (
                    isAdd && (
                      <View>
                        <Button
                          onPress={() => saveAddons()}
                          title={Strings.add}
                          bgColor={Colors.lightGray2}
                          titleColor={Colors.primary}
                          btnStyle={{width: wp(90), marginVertical: 0}}
                        />
                        <Button
                          onPress={() => discard()}
                          title={Strings.discard}
                          bgColor={Colors.white}
                          titleColor={Colors.primary}
                          btnStyle={{width: wp(90), marginVertical: 0}}
                        />
                      </View>
                    )
                  )}
                  {isAddMore && !isAdd && !isEdit && (
                    <Button
                      onPress={() => saveAddons()}
                      title={Strings.add}
                      bgColor={Colors.lightGray2}
                      titleColor={Colors.primary}
                      btnStyle={{width: wp(90), marginVertical: 0}}
                    />
                  )}
                </View>
              ) : (
                addOns.length > 0 && (
                  <View style={styles.addOnsView}>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}>
                      <TouchableOpacity
                        style={styles.moreBtn}
                        onPress={() => {
                          setShowPopover(false);
                          setAddMore(true);
                          setAdd(true);
                        }}>
                        <Icon source={Images.plus} size={hp(5)} />
                        <Label
                          label={Strings.addMore}
                          color={Colors.primary}
                          size={hp(2)}
                          fontFamily={FONTS.InterSemiBold}
                        />
                      </TouchableOpacity>
                      {addOns.map((item, index) => (
                        <View style={styles.addonsView} key={index}>
                          <View
                            style={{
                              ...styles.row,
                              justifyContent: 'space-between',
                            }}>
                            <Label
                              label={item.name}
                              bold
                              color={Colors.primary_dark}
                              size={hp(2)}
                            />
                            {/* <Menu
                              style={{
                                ...styles.shadow,
                                paddingLeft: wp(5),
                                paddingVertical: hp(2),
                                paddingBottom: 0,
                                borderRadius: 20,
                                backgroundColor: Colors.white,
                              }}
                              visible={showPopover}
                              anchor={
                                <TouchableOpacity
                                  onPress={() => setShowPopover(true)}>
                                  <Icon
                                    source={Images.option}
                                    size={hp(2)}
                                    color={Colors.black}
                                  />
                                </TouchableOpacity>
                              }
                              onRequestClose={() => setShowPopover(false)}>
                              {option.map((item, index) => (
                                <MenuItem key={index}>
                                  <IconButton
                                    onPress={() => {
                                      if (item.label == 'Edit') {
                                        setAddOnName(addOnObj.name);
                                        setSCharge(addOnObj.charge);
                                        setTimeDuration(addOnObj.duration);
                                        setShowPopover(false);
                                        setAddMore(true);
                                        setEdit(true);
                                        setAdd(false);
                                      } else {
                                        setShowPopover(false);
                                        setAlert(true);
                                      }
                                    }}
                                    icon={item.icon}
                                    iconSize={hp(2)}
                                    iconColor={Colors.gray}
                                    label={item.label}
                                    labelColor={Colors.primary_dark}
                                    width={wp(40)}
                                    left
                                  />
                                </MenuItem>
                              ))}
                            </Menu> */}
                            <TouchableOpacity
                              ref={touchable}
                              onPress={() => {
                                setAddOnObj(item);
                                setShowPopover(true);
                              }}>
                              <Icon source={Images.option} size={hp(2)} />
                            </TouchableOpacity>
                          </View>
                          <Row
                            title={'Duration: ' + item.duration + ' minutes'}
                            titleColor={Colors.primary_dark}
                          />
                          <Row
                            title={'$' + item.charge}
                            titleColor={Colors.primary}
                            bold
                          />
                        </View>
                      ))}
                    </ScrollView>
                  </View>
                )
              )}
            </View>
          </KeyboardAwareScrollView>
        </View>

        <Button
          title={Strings.saveService}
          bgColor={Colors.primary}
          titleColor={Colors.white}
          btnStyle={styles.addBtn}
        />
      </View>
            
      <Popover
        from={touchable}
        isVisible={showPopover}
        popoverStyle={styles.popoverStyle}
        placement={PopoverPlacement.BOTTOM}
        onRequestClose={() => setShowPopover(false)}>
        <View>
          <IconButton
            onPress={() => {
              setAddOnName(addOnObj.name);
              setSCharge(addOnObj.charge);
              setTimeDuration(addOnObj.duration);
              setShowPopover(false);
              setAddMore(true);
              setEdit(true);
              setAdd(false);
            }}
            icon={Images.edit}
            iconSize={hp(2)}
            iconColor={Colors.gray}
            label={Strings.edit}
            labelColor={Colors.primary_dark}
            width={wp(50)}
            left
          />
          <IconButton
            onPress={() => {
              setShowPopover(false);
              setTimeout(() => {
                setAlert(true);
              }, 1000);
            }}
            icon={Images.bin}
            iconSize={hp(2)}
            iconColor={Colors.gray}
            label={Strings.remove}
            labelColor={Colors.primary_dark}
            width={wp(50)}
            left
          />
        </View>
      </Popover>

      <Modal isVisible={isAlert}>
        <Alert
          title={Strings.removeAddon}
          msg={addOnObj.name + ' ?'}
          fontFamily={FONTS.InterRegular}
          leftBtn={Strings.no}
          rightBtn={Strings.remove}
          leftBtnColor={Colors.primary}
          rightBtnColor={Colors.red}
          onLeftPress={() => setAlert(false)}
          onRightPress={() => removeAddons()}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default NewService;
