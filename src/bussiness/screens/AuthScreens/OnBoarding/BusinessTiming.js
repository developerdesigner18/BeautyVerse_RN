import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Switch} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Header from '../../../components/Header';
import {Strings} from '../../../theme/strings';
import {styles} from './styles';
import {Images} from '../../../theme/images';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import {Colors} from '../../../theme/colors';
import Label from '../../../components/Label';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {FONTS} from '../../../theme/fonts';

const BusinessTiming = ({navigation}) => {
  const [switchIndex, setSwitchIndex] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const [value, setValue] = useState('');
  const [timings, setTimings] = useState([
    {
      id: 1,
      day: 'Monday',
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      opne: true,
    },
    {
      id: 2,
      day: 'Tuesday',
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      opne: true,
    },
    {
      id: 3,
      day: 'Wednesday',
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      opne: true,
    },
    {
      id: 4,
      day: 'Thursday',
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      opne: true,
    },
    {
      id: 5,
      day: 'Friday',
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      opne: true,
    },
    {
      id: 6,
      day: 'Saturday',
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      opne: false,
    },
    {
      id: 7,
      day: 'Sunday',
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      opne: false,
    },
  ]);

  const switchSelection = index => {
    if (switchIndex.length == 0) {
      setSwitchIndex([index]);
    } else {
      if (switchIndex.includes(index)) {
        const filter = switchIndex.filter(item => item != index);
        setSwitchIndex(filter);
      } else {
        setSwitchIndex(prevState => [...prevState, index]);
      }
    }
  };

  const updateTime = time => {
    const newState = timings.map(obj =>
      obj.id === selectedTime.id
        ? value == 'from'
          ? {...obj, fromTime: moment(time).format('HH:mm A')}
          : {...obj, toTime: moment(time).format('HH:mm A')}
        : obj,
    );
    setTimings(newState);
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <Header
        onPressBack={() => navigation.goBack()}
        headerTitle={Strings.businessTimings}
      />
      <View style={{height: hp(75), backgroundColor: Colors.white}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {timings.map((item, index) => (
            <View key={index}>
              <View style={styles.inputWrapper}>
                <Label
                  label={item.day}
                  fontFamily={FONTS.InterBold}
                  size={hp(2)}
                  color={Colors.primary_dark}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: wp(25),
                  }}>
                  <Label
                    label={switchIndex.includes(index) ? 'Open' : 'Closed'}
                    fontFamily={FONTS.InterRegular}
                    color={Colors.primary_dark}
                  />
                  <Switch
                    value={switchIndex.includes(index) && true}
                    onValueChange={() => switchSelection(index)}
                    color={Colors.primary}
                  />
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <View style={styles.dropdown}>
                  <Label
                    label={item.fromTime}
                    fontFamily={FONTS.InterRegular}
                    color={Colors.lightGray3}
                  />
                  <TouchableOpacity
                    disabled={!switchIndex.includes(index)}
                    onPress={() => {
                      setOpen(true);
                      setSelectedTime(item);
                      setValue('from');
                    }}>
                    <Icon
                      source={
                        switchIndex.includes(index)
                          ? Images.menushow
                          : Images.menuhide
                      }
                      size={wp(3)}
                    />
                  </TouchableOpacity>
                </View>
                <Label
                  label={Strings.to}
                  fontFamily={FONTS.InterRegular}
                  color={Colors.lightGray3}
                />
                <View style={styles.dropdown}>
                  <Label
                    label={item.toTime}
                    fontFamily={FONTS.InterRegular}
                    color={Colors.lightGray3}
                  />
                  <TouchableOpacity
                    disabled={!switchIndex.includes(index)}
                    onPress={() => {
                      setOpen(true);
                      setSelectedTime(item);
                      setValue('to');
                    }}>
                    <Icon
                      source={
                        switchIndex.includes(index)
                          ? Images.menushow
                          : Images.menuhide
                      }
                      size={wp(3)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <Button
        onPress={() => navigation.navigate('SelectServices')}
        title={Strings.saveLocationTime}
        bgColor={Colors.primary}
        titleColor={Colors.white}
        btnStyle={styles.nextBtn}
      />
      <DatePicker
        modal
        mode="time"
        open={open}
        date={new Date()}
        onConfirm={time => {
          setOpen(false);
          updateTime(time);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </SafeAreaView>
  );
};

export default BusinessTiming;
