import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Switch} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  daysAndTimingThunk,
  getdaysAndTimingThunk,
} from '../../../../store/actions/profile-actions';
import moment from 'moment';
import Header from '../../../components/Header';
import {Strings} from '../../../theme/strings';
import {styles} from './styles';
import {Images} from '../../../theme/images';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import {Colors} from '../../../theme/colors';
import Label from '../../../components/Label';
import Spinner from '../../../components/Spinner';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {FONTS} from '../../../theme/fonts';

const BusinessTiming = ({navigation}) => {
  const dispatch = useDispatch();
  const {timingsRes, daysAndTiming} = useSelector(state => state);
  const [switchIndex, setSwitchIndex] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const [value, setValue] = useState('');
  const [token, setToken] = useState(false);
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const [timings, setTimings] = useState([
    {
      id: 0,
      day: 0,
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      status: true,
    },
    {
      id: 1,
      day: 1,
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      status: true,
    },
    {
      id: 2,
      day: 2,
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      status: true,
    },
    {
      id: 3,
      day: 3,
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      status: true,
    },
    {
      id: 4,
      day: 4,
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      status: true,
    },
    {
      id: 5,
      day: 5,
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      status: false,
    },
    {
      id: 6,
      day: 6,
      fromTime: '12:00 PM',
      toTime: '12:00 AM',
      status: false,
    },
  ]);

  useEffect(() => {
    function postSuccess() {
      if (daysAndTiming.isSuccess) {
        showMessage({
          message: 'Inserted successfully',
          floating: true,
          type: 'success',
        });
        navigation.navigate('SelectServices');
      }
    }
    postSuccess();
    function getSuccess() {
      if (timingsRes.isSuccess) {
        const data = timingsRes.timingsRes.data.data;
        data.length > 1 && setTimings(data);
      }
    }
    getSuccess();
  }, [daysAndTiming, timingsRes]);

  useEffect(() => {
    getDaysAndTiming();
  }, []);

  const addDaysandTiming = () => {
    // navigation.navigate('SelectServices');
    const data = {
      addressID: '3a9fa7a2-827f-4dde-9e25-74dad91da4bb',
      daysAndTimings: timings,
    };
    dispatch(daysAndTimingThunk(data, token));
  };

  const getDaysAndTiming = async () => {
    const token = await AsyncStorage.getItem('token');
    setToken(token);
    dispatch(
      getdaysAndTimingThunk('3a9fa7a2-827f-4dde-9e25-74dad91da4bb', token),
    );
  };

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
          ? {...obj, fromTime: moment(time).format('HH:mm:ss')}
          : {...obj, toTime: moment(time).format('HH:mm:ss')}
        : obj,
    );
    setTimings(newState);
  };

  const chageStatus = id => {
    const newState = timings.map(obj =>
      obj.id == id ? {...obj, status: !obj.status} : obj,
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
                  label={days[index]}
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
                    // label={switchIndex.includes(index) ? 'Open' : 'Closed'}
                    label={item.status ? 'Open' : 'Closed'}
                    fontFamily={FONTS.InterRegular}
                    color={Colors.primary_dark}
                  />
                  <Switch
                    value={item.status && true}
                    onValueChange={() => chageStatus(item.id)}
                    color={Colors.primary}
                  />
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <View style={styles.dropdown}>
                  <Label
                    label={moment(item.fromTime, 'HH:mm:ss').format('HH:mm A')}
                    fontFamily={FONTS.InterRegular}
                    color={Colors.lightGray3}
                  />
                  <TouchableOpacity
                    disabled={!item.status}
                    onPress={() => {
                      setOpen(true);
                      setSelectedTime(item);
                      setValue('from');
                    }}>
                    <Icon
                      source={item.status ? Images.menushow : Images.menuhide}
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
                    label={moment(item.toTime, 'HH:mm:ss').format('HH:mm A')}
                    fontFamily={FONTS.InterRegular}
                    color={Colors.lightGray3}
                  />
                  <TouchableOpacity
                    disabled={!item.status}
                    onPress={() => {
                      setOpen(true);
                      setSelectedTime(item);
                      setValue('to');
                    }}>
                    <Icon
                      source={item.status ? Images.menushow : Images.menuhide}
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
        onPress={() => addDaysandTiming()}
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
      <Spinner visible={timingsRes.loading | daysAndTiming.loading} />
    </SafeAreaView>
  );
};

export default BusinessTiming;
