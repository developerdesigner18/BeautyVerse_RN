import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Platform} from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import CalendarStrip from 'react-native-calendar-strip';
import {Colors} from '../../../theme/colors';
import CalendarHeader from '../../../components/CalendarHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {FONTS} from '../../../theme/fonts';
import {styles} from '../styles';
import {Images} from '../../../theme/images';
import AddButton from '../../../components/AddButton';
import ItemCard from '../../../components/ItemCard';
import Label from '../../../components/Label';
import EventCard from '../../../components/EventCard';

const Calender = ({navigation, route}) => {
  const {params} = route;
  const [isGrid, setGrid] = useState(1);
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);
  const events = [
    {
      time: '12AM',
      event: [
        {title: '5:00 pm - 4:40 pm', desc: 'Peter M. Haircut and Beard Trim'},
        {title: '5:00 pm - 4:40 pm', desc: 'Peter M. Haircut and Beard Trim'},
      ],
    },
    {time: '1AM', event: []},
    {time: '2AM', event: []},
    {time: '3AM', event: []},
    {time: '4AM', event: []},
    {time: '5AM', event: []},
    {time: '6AM', event: []},
    {time: '7AM', event: []},
    {time: '8AM', event: []},
    {time: '9AM', event: []},
    {time: '10AM', event: []},
    {time: '11AM', event: []},
    {
      time: '12PM',
      event: [
        {title: '5:00 pm - 4:40 pm', desc: 'Peter M. Haircut and Beard Trim'},
      ],
    },
    {time: '1PM', event: []},
    {time: '2PM', event: []},
    {time: '3PM', event: []},
    {time: '4PM', event: []},
    {time: '5PM', event: []},
    {time: '6PM', event: []},
    {time: '7PM', event: []},
    {time: '8PM', event: []},
    {time: '9PM', event: []},
    {time: '10PM', event: []},
    {time: '11PM', event: []},
  ];

  useEffect(() => {
    momentDate(params.date);
  }, []);

  const momentDate = date => {
    const format = moment(date).format('MMMM DD, YYYY');
    setDate(format);
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <CalendarHeader
        headerTitle={date}
        onPressBack={() => navigation.goBack()}
        onPressMenu={() => setOpen(true)}
        onPressCol={() => setGrid(0)}
        onPressGrid={() => setGrid(1)}
        gridTint={isGrid == 1 ? Colors.primary : Colors.lightGray3}
        colTint={isGrid == 0 ? Colors.primary : Colors.lightGray3}
      />

      <CalendarStrip
        scrollable
        onDateSelected={day => momentDate(day)}
        style={{
          height: hp(10),
          backgroundColor: Colors.white,
          paddingBottom: hp(2),
        }}
        calendarColor={Colors.white}
        calendarHeaderStyle={{color: 'white', event: []}}
        dateNumberStyle={{color: Colors.primary_dark}}
        dateNameStyle={{color: Colors.primary_dark}}
        selectedDate={params.date}
        dateContainerStyle={{backgroundColor: Colors.gray}}
        highlightDateNumberContainerStyle={{
          backgroundColor: Colors.primary,
          borderRadius: 100,
          height: Platform.OS == 'ios' ? hp(3) : hp(4),
          width: Platform.OS == 'ios' ? hp(3) : hp(4),
          alignItems: 'center',
          justifyContent: 'center',
        }}
        dateNumberStyle={{
          height: Platform.OS == 'ios' ? hp(3) : hp(4),
          width: Platform.OS == 'ios' ? hp(3) : hp(4),
          alignItems: 'center',
          justifyContent: 'center',
          color: Colors.primary_dark,
        }}
        highlightDateNumberStyle={{
          color: Colors.white,
        }}
        highlightDateNameStyle={{
          color: Colors.lightGray3,
          fontFamily: FONTS.InterRegular,
          fontSize: hp(1.3),
          lineHeight: hp(2.5),
        }}
        dateNameStyle={{
          color: Colors.lightGray3,
          fontFamily: FONTS.InterRegular,
          fontSize: hp(1.3),
          lineHeight: hp(4),
        }}
        leftSelector={[]}
        rightSelector={[]}
      />

      <DatePicker
        modal
        mode='date'
        open={open}
        date={new Date()}
        onConfirm={date => {
          setOpen(false);
          momentDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderTopWidth: 2,
          borderTopColor: isGrid == 1 ? Colors.white : Colors.border,
        }}>
        {events.map((item, index) => (
          <View key={index} style={styles.calendarView}>
            <View
              style={{
                height: hp(20),
                width: wp(12),
                justifyContent: 'space-between',
                backgroundColor: Colors.white,
                borderRightWidth: 2,
                paddingTop: hp(3),
                borderRightColor: isGrid == 1 ? Colors.white : Colors.border,
              }}>
              <Label
                label={item.time}
                left
                color={Colors.primary_dark}
                fontFamily={FONTS.InterBold}
              />
              <Label label={15} left color={Colors.primary_dark} />
              <Label label={30} left color={Colors.primary_dark} />
              <Label label={45} left color={Colors.primary_dark} />
            </View>
            {/* <View
              style={{
                width: wp(100),
              }}>
              <ScrollView horizontal={isGrid != 1 && true}>
                {item.event.map(event => (
                  <View
                    style={{
                      borderLeftWidth: 2,
                      borderLeftColor: Colors.border,
                    }}>
                    <EventCard
                      lineColor={Colors.primary}
                      bgColor={Colors.primary_light}
                      title={event.title}
                      desc={event.desc}
                      grid={isGrid == 1 ? true : false}
                    />
                  </View>
                ))}
              </ScrollView>
            </View> */}
            {isGrid ? (
              <View>
                {item.event.map(event => (
                  <EventCard
                    lineColor={Colors.primary}
                    bgColor={Colors.primary_light}
                    title={event.title}
                    desc={event.desc}
                    grid
                  />
                ))}
              </View>
            ) : (
              <View style={{width: wp(100)}}>
                <ScrollView horizontal>
                  {item.event.map(event => (
                    <View>
                      <EventCard
                        lineColor={Colors.primary}
                        bgColor={Colors.primary_light}
                        title={event.title}
                        desc={event.desc}
                      />
                    </View>
                  ))}
                </ScrollView>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <AddButton
        style={{...styles.addButton, bottom: isGrid ? hp(10) : hp(3)}}
      />
      {isGrid == 1 && (
        <View style={styles.bottomHeader}>
          <ItemCard
            userIcon={Images.customer}
            size={hp(5)}
            label="Marques Brownlee"
            leftIcon={Images.edit}
            leftIconColor={Colors.primary_dark}
            hideLine
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Calender;
