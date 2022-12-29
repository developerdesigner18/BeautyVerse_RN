import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modal';
import moment from 'moment';
import _ from 'lodash';
import {Strings} from '../../../theme/strings';
import {Images} from '../../../theme/images';
import {Colors} from '../../../theme/colors';
import {addOns, timeSlot, selectService} from '../../../theme/arrays';
import {FONTS} from '../../../theme/fonts';
import {styles} from './styles';
import Header from '../../../components/Header';
import Label from '../../../components/Label';
import Icon from '../../../components/Icon';
import Row from '../../../components/Row';
import Button from '../../../components/Button';
import CloseModal from '../../../components/CloseModal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const BookService = ({navigation}) => {
  const [isVisible, setVisible] = useState(false);
  const [bells, setBells] = useState([]);
  const [slotIds, setSlotIds] = useState([]);
  const [lastDate, setLastDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    getCurrentDateMinus();
  }, []);

  const getCurrentDateMinus = () => {
    let today = new Date();
    today.setDate(today.getDate() + 8);
    let date = new Date(today);
    setLastDate(moment(date).format('YYYY-MM-DD'));
  };

  const selectSlot = item => {
    if (slotIds.length > 0) {
      if (slotIds.includes(item.id)) {
        const filterSlot = slotIds.filter(id => id != item.id);
        setSlotIds(filterSlot);
      } else {
        setSlotIds(prevState => [...prevState, item.id]);
      }
    } else {
      setSlotIds([item.id]);
    }
  };

  const confirmSlot = item => {
    const bell = slotIds.filter(id => id == item.id);
    if (bell.length > 0) {
      if (bell.includes(item.id)) {
        const filter = bells.filter(id => id != item.id);
        setBells(filter);
      }
      setBells(prevState => [...prevState, bell[0]]);
    } else {
      setBells(bell);
    }
    const slot = slotIds.filter(id => id != item.id);
    setSlotIds(slot);
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => selectSlot(item)}
      style={{
        ...styles.slot,
        backgroundColor: slotIds.includes(item.id)
          ? Colors.disabledGray
          : bells.includes(item.id)
          ? Colors.primary
          : Colors.lightGray,
      }}>
      <Label
        label={item.time}
        fontFamily={FONTS.InterRegular}
        color={
          slotIds.includes(item.id)
            ? Colors.primary_dark
            : bells.includes(item.id)
            ? Colors.white
            : Colors.primary_dark
        }
        marginRight={wp(2)}
      />
      {slotIds.includes(item.id) && (
        <TouchableOpacity onPress={() => confirmSlot(item)}>
          <Icon source={Images.bell} size={hp(3)} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.bookService}
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.view}>
          <Row
            title={Strings.straightHair}
            bold
            icon={Images.edit}
            iconSize={hp(3)}
          />
          <Row
            title="$60.00"
            subTitle="Duration: 45 minutes"
            iconSize={hp(3)}
            titleColor={Colors.primary}
            bold
            mediumSub
          />
        </View>
        <Label
          label={Strings.addons}
          left
          fontFamily={FONTS.InterBold}
          size={hp(2)}
          color={Colors.primary_dark}
          paddingVertical={hp(3)}
          marginLeft={wp(3)}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {addOns.map((item, index) => (
            <View
              style={{
                ...styles.view,
                width: wp(60),
                marginHorizontal: wp(2),
                marginVertical: hp(1),
              }}
              key={index}>
              <Row
                title={item.add}
                icon={Images.plus}
                onPressIcon={() => {}}
                iconSize={hp(3)}
                bold
              />
              <Row
                title={'Duration: ' + item.Duration}
                titleColor={Colors.primary_dark}
              />
              <Row title={item.price} titleColor={Colors.primary} bold />
            </View>
          ))}
        </ScrollView>
        <View style={[styles.line, styles.detailView]}>
          <Label
            label={Strings.selectDate}
            left
            fontFamily={FONTS.InterBold}
            size={hp(2)}
            color={Colors.primary_dark}
            paddingVertical={hp(3)}
            marginLeft={wp(3)}
          />
          <Calendar
            markedDates={selectedDate}
            minDate={new Date()}
            maxDate={lastDate}
            onDayPress={day => {
              navigation.navigate('Calender', {date: day.dateString});
              let mydate = {
                [day.dateString]: {
                  selected: true,
                  selectedColor: Colors.primary,
                },
              };
              setSelectedDate(mydate);
            }}
            markingType={'interactive'}
            style={styles.calender}
            disableAllTouchEventsForDisabledDays
            theme={{
              textDisabledColor: Colors.gray,
              monthTextColor: Colors.primary_dark,
              textMonthFontFamily: FONTS.InterBold,
              calendarBackground: 'transparent',
              selectedDayBackgroundColor: Colors.primary,
              textDayFontFamily: FONTS.InterSemiBold,

              // textDecorationLine:'line-through',
            }}
            hideArrows={true}
          />
        </View>
        <View style={[styles.line, styles.detailView]}>
          <Label
            label={Strings.selectTime}
            left
            fontFamily={FONTS.InterBold}
            size={hp(2)}
            color={Colors.primary_dark}
            paddingVertical={hp(3)}
            marginLeft={wp(3)}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
              data={timeSlot}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={3}
              contentContainerStyle={{margin: wp(2)}}
            />
          </ScrollView>
        </View>
        <View style={[styles.line, styles.detailView]}>
          <Label
            label={Strings.selectProfessional + Strings.optional}
            left
            fontFamily={FONTS.InterBold}
            size={hp(2)}
            color={Colors.primary_dark}
            paddingVertical={hp(3)}
            marginLeft={wp(3)}
          />
          <View style={{...styles.view}}>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={{
                ...styles.row,
                justifyContent: 'space-between',
                paddingHorizontal: wp(4),
              }}>
              <View style={styles.row}>
                <Icon source={Images.user} size={hp(5)} />
                <Label
                  left
                  marginLeft={wp(5)}
                  label={Strings.selectProfessional}
                  color={Colors.primary_dark}
                  fontFamily={FONTS.InterBold}
                />
              </View>

              <Icon
                source={Images.rightarrow}
                size={hp(3)}
                alignSelf="flex-end"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Label
          label={Strings.optionalSelection}
          fontFamily={FONTS.InterRegular}
          left
          size={hp(2.3)}
          color={Colors.gray}
          paddingVertical={hp(3)}
          marginLeft={wp(3)}
          lineHeight={hp(4)}
        />
        <Button
          title={Strings.addService}
          bgColor={Colors.primary}
          titleColor={Colors.white}
          btnStyle={styles.bottomBtns}
        />
      </ScrollView>

      <Modal isVisible={isVisible} onBackdropPress={() => setVisible(false)}>
        <View style={styles.modal}>
          <CloseModal close={() => setVisible(false)} />
          <Label
            label={Strings.selectService}
            left
            fontFamily={FONTS.InterBold}
            size={hp(2)}
            color={Colors.primary_dark}
            paddingVertical={hp(2)}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            {selectService.map((item, index) => (
              <View
                style={{
                  ...styles.row,
                  ...styles.serviceWrapper,
                }}>
                <View>
                  <Label
                    label={item.service}
                    color={Colors.primary_dark}
                    lineHeight={hp(4)}
                    fontFamily={FONTS.InterBold}
                    left
                  />
                  <Label
                    label={'Duration: ' + item.service}
                    color={Colors.gray}
                    left
                    fontFamily={FONTS.InterRegular}
                  />
                </View>
                <View style={styles.row}>
                  <Label
                    label={item.price}
                    color={Colors.primary}
                    fontFamily={FONTS.InterBold}
                    left
                    marginRight={wp(3)}
                  />
                  <Icon source={Images.rightarrow} size={hp(3)} />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default BookService;
