//import liraries
import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Modal,
  Platform,
} from 'react-native';
import HeaderTop from '../../components/HomeComponent/headerTop';
import {Strings} from '../../theme/strings';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

import {CheckBox} from 'react-native-elements';
import {BusinessPageStyles} from './BusinessPageStyles';
import SemiBold from '../../components/HomeComponent/SemiBold';
import PriceAmt from '../../components/BusinessPage/PriceAmt';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../theme/Images';
import RadioButton from '../../components/SearchComponents/RadioButton';
import {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import Button from '../../components/AuthComponents/FilledButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Avatar} from 'react-native-elements';
import StarRating from '../../components/BusinessPage/StarRating';
import HeaderText from '../../components/AuthComponents/HeaderText';
import MapView from 'react-native-maps';
import {addOns} from '../../../bussiness/theme/arrays';

// create a component

const BookService = ({navigation}) => {
  const refRBSheet = useRef();

  const [BLoc, SetBloc] = useState(false);
  const [MyLoc, SetMyloc] = useState(false);
  const [Bell, SetBell] = useState(false);
  const [TimerAlertModel, SetTimerAlertModel] = useState(false);
  const [selectProf, setselectProf] = useState(false);

  const [Index, setIndex] = useState([]);
  const [AddOnIndex, SetAddOnIndex] = useState([]);
  const [selecteddate, SetselectedDate] = useState('');
  const [SelectedAddOn, SetSelectedAddOn] = useState([]);
  const [addOns, setAddOns] = useState([
    {
      id: 1,
      addon: 'AddOn1',
      duration: '10 minutes',
      amt: '$10.00',
    },
    {
      id: 2,

      addon: 'AddOn2',
      duration: '50 minutes',
      amt: '$20.00',
    },
    {
      id: 3,

      addon: 'AddOn3',
      duration: '25 minutes',
      amt: '$19.00',
    },
    {
      id: 4,

      addon: 'AddOn4',
      duration: '15 minutes',
      amt: '$25.00',
    },
    {
      id: 5,

      addon: 'AddOn5',
      duration: '60 minutes',
      amt: '$55.00',
    },
  ]);
  const [selectedProf, SetselectedProf] = useState(['']);

  const CorouselData = [
    {
      img: Images.Img1,
      name: `Jonathan Morrison`,
      discount: 'Upto 50% off',
    },
    {
      img: Images.Img2,
      name: `Maria Kevin`,
      discount: 'Upto 40% off',
    },
    {
      img: Images.Img3,
      name: `Lings Jhonson`,
      discount: 'Upto 20% off',
    },
    {
      img: Images.Img4,
      name: `Kevin Frank`,
      discount: 'Upto 10% off',
    },
    {
      img: Images.Img5,
      name: `Dwayne Jackson`,
      discount: 'Upto 10% off',
    },
    {
      img: Images.Img6,
      name: `Tom Cameron`,
      discount: 'Upto 10% off',
    },
    {
      img: Images.Img6,
      name: `Conor Charlie`,
      discount: 'Upto 10% off',
    },
  ];

  const AddOn = [
    {
      id: 1,
      addon: 'AddOn1',
      duration: '10 minutes',
      amt: '$10.00',
    },
    {
      id: 2,

      addon: 'AddOn2',
      duration: '50 minutes',
      amt: '$20.00',
    },
    {
      id: 3,

      addon: 'AddOn3',
      duration: '25 minutes',
      amt: '$19.00',
    },
    {
      id: 4,

      addon: 'AddOn4',
      duration: '15 minutes',
      amt: '$25.00',
    },
    {
      id: 5,

      addon: 'AddOn5',
      duration: '60 minutes',
      amt: '$55.00',
    },
  ];

  const SetTime = [
    {
      time: '1:00 - 2:00',
    },
    {
      time: '11:00 - 12:00',
    },
    {
      time: '5:00 - 9:00',
    },
    {
      time: '2:00 - 5:00',
    },
    {
      time: '1:00 - 2:00',
    },
    {
      time: '1:00 - 2:00',
    },
    {
      time: '1:00 - 2:00',
    },
    {
      time: '1:00 - 2:00',
    },
    {
      time: '1:00 - 2:00',
    },
    {
      time: '1:00 - 2:00',
    },
    {
      time: '1:00 - 2:00',
    },
    {
      time: '1:00 - 2:00',
    },
  ];

  const SelectIndexTime = index => {
    setIndex(prevFilters => {
      if (prevFilters.includes(index)) {
        return prevFilters.filter(Index => index !== Index);
      } else {
        return [...prevFilters, ...[index]];
      }
    });
  };

  const SelectIndexAddOn = (index, item) => {
    if (SelectedAddOn.length > 0) {
      if (SelectedAddOn.includes(item.id)) {
        const remove = SelectedAddOn.filter(i => i.id != item.id);
        SetSelectedAddOn(remove)
      }
      SetSelectedAddOn(prev => [...prev, item]);
    } else {
      SetSelectedAddOn([item]);
    }

    console.log(SelectedAddOn, '==select===');
    // console.log(item);
    // SetSelectedAddOn(prevAddon => {
    //   if(prevAddon.includes(addon)){
    //     return prevAddon.filter(Item => addon !== Item.addon);
    //   } else {
    //     return [...prevAddon,[item]]
    //   }
    // })

    SetAddOnIndex(prevFilters => {
      if (prevFilters.includes(index)) {
        return prevFilters.filter(Index => index !== Index);
      } else {
        return [...prevFilters, ...[index]];
      }
    });
  };

  const RenderAddOn = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          SelectIndexAddOn(index, item);
        }}
        style={[
          BusinessPageStyles.AddOnCard,
          {
            borderWidth: AddOnIndex.includes(index) ? 1.3 : 0,
            borderColor: AddOnIndex.includes(index)
              ? Colors.primary
              : 'transparent',
          },
        ]}>
        <View style={BusinessPageStyles.AddOnView}>
          <SemiBold FontSize={hp(2.2)} EnterText={item.addon} />
          <View>
            {AddOnIndex.includes(index) ? (
              <Image
                resizeMode="contain"
                style={{
                  height: hp(4),
                  width: hp(4),
                }}
                source={Images.bin}
              />
            ) : (
              <Image
                resizeMode="contain"
                style={{
                  height: hp(4),
                  width: hp(4),
                }}
                source={Images.plus}
              />
            )}
          </View>
        </View>
        <Text style={BusinessPageStyles.DurationText}>
          Duration: {item.duration}
        </Text>
        <PriceAmt Amount={item.amt} />
      </TouchableOpacity>
    );
  };

  const RenderTimes = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          SelectIndexTime(index);
        }}
        style={{
          marginRight: hp(0.7),
          marginBottom: hp(0.7),
          backgroundColor: Index.includes(index)
            ? Colors.shadygray
            : Colors.lightgrey,
          padding: 10,
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: 30,
          alignSelf: 'flex-start',
          paddingHorizontal: 12,
          // width:wp(30)
        }}>
        <Text
          style={{
            fontFamily: 'InterV',
            color: Index.includes(index) ? Colors.darkpink : Colors.primaryDark,
          }}>
          {item.time}
        </Text>
        {Index.includes(index) ? (
          <TouchableOpacity
            onPress={() => {
              SetTimerAlertModel(true);
            }}
            hitSlop={{top: 25, bottom: 25, left: 20, right: 20}}>
            <Image
              resizeMode="contain"
              style={{
                marginVertical: -10,
                height: hp(3),
                width: hp(3),
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.2,
                elevation: 4,
                marginLeft: 7,
              }}
              source={Images.bell}
            />
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>
    );
  };

  const renderProf = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          refRBSheet.current.close();
          setselectProf(true);
          SetselectedProf(item);
          console.log(selectedProf, '==prof==');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: wp(3.5),
          borderBottomWidth: 1,
          width: wp(90),
          alignSelf: 'center',
          borderColor: Colors.grey,
        }}>
        <Avatar size={70} rounded source={item.img} />
        <View style={{paddingLeft: 18}}>
          <SemiBold FontSize={hp(2.5)} EnterText={item.name} />
          <StarRating Rating={Strings.stars} Numbers={Strings.rating} />
        </View>
      </TouchableOpacity>
    );
  };

  // const RenderSelectProf = () => {
  //   return (
  //     <View
  //       style={{
  //         width: wp(90),
  //         alignSelf: 'center',
  //       }}>
  //       <View
  //         style={{
  //           backgroundColor: Colors.white,
  //           borderRadius: 15,
  //           paddingLeft: 10,
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           paddingVertical: wp(3.5),
  //           borderBottomWidth: 1,
  //           width: wp(90),
  //           alignSelf: 'center',
  //           justifyContent: 'space-between',
  //           borderColor: Colors.grey,
  //           shadowOffset: {width: 2, height: 5},
  //           shadowOpacity: 0.2,
  //           elevation: 2,
  //         }}>
  //         <Avatar
  //           containerStyle={{marginLeft: 10}}
  //           size={55}
  //           rounded
  //           source={Images.Apple}
  //         />
  //         <View style={{marginLeft: -30}}>
  //           <SemiBold FontSize={hp(2.3)} EnterText={Strings.AddProfile} />
  //           <StarRating Rating={Strings.stars} Numbers={Strings.rating} />
  //         </View>
  //         <TouchableOpacity>
  //           <Image
  //             resizeMode="contain"
  //             style={{height: hp(3.3), width: hp(3.3), marginRight: 15}}
  //             source={Images.edit}
  //           />
  //         </TouchableOpacity>
  //       </View>

  //       <TouchableOpacity
  //         style={{
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           marginVertical: hp(0.9),
  //         }}>
  //         <Image
  //           resizeMode="contain"
  //           style={{height: hp(2.7), width: hp(2.7), marginRight: 10}}
  //           source={Images.crosspink}
  //         />
  //         <SemiBold
  //           FontSize={hp(2.3)}
  //           AllStyle={{color: Colors.darkpeach}}
  //           EnterText={'Remove Selction'}
  //         />
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={Strings.bookser}
      />

      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: hp(10)}}>
        <TouchableOpacity style={BusinessPageStyles.StraightHairCard}>
          <View style={BusinessPageStyles.StraightHairView}>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <View>
                <SemiBold FontSize={hp(2.8)} EnterText={'Straight Hair'} />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '90%',
                    justifyContent: 'space-between',
                  }}>
                  <PriceAmt FontSize={hp(2)} Amount={'$60.00'} />
                  <Text
                    style={{
                      fontFamily: 'InterV',
                      color: '#9E98AC',
                      paddingRight: wp(5),
                    }}>
                    Duration: 45 minutes
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{paddingLeft: wp(5)}}>
          <SemiBold FontSize={hp(2)} EnterText={'Add ons'} />
          <FlatList
            style={{paddingLeft: 2}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={AddOn}
            renderItem={RenderAddOn}
          />
          <View style={BusinessPageStyles.ServiceLocationView}>
            <SemiBold
              FontSize={hp(2)}
              EnterText={'Where do you want this service'}
            />
            <RadioButton
              status={BLoc === true ? 'checked' : 'unchecked'}
              checked={BLoc}
              onPress={() => {
                MyLoc === true ? SetMyloc(false) : SetMyloc(false);
                BLoc === false ? SetBloc(true) : SetBloc(false);
              }}
              SortText={'At Business Location'}
            />
            <RadioButton
              status={MyLoc === true ? 'checked' : 'unchecked'}
              checked={MyLoc}
              onPress={() => {
                BLoc === true ? SetBloc(false) : SetBloc(false);
                MyLoc === false ? SetMyloc(true) : SetMyloc(false);
              }}
              SortText={'At My Location'}
            />
            {MyLoc === true || BLoc === true ? (
              <View style={BusinessPageStyles.mapCard}>
                <TouchableOpacity
                  // onPress={()=>{
                  //   navigation.navigate('AddAddress')
                  // }}
                  style={{margin: -30}}>
                  <MapView
                    style={{width: '100%', height: '80%'}}
                    initialRegion={{
                      latitude: -37.8136,
                      longitude: 144.9631,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddAddress', {screen: 'BookService'});
                  }}
                  style={BusinessPageStyles.mapbottomClick}>
                  <Image
                    resizeMode="contain"
                    style={{height: hp(3.3), width: hp(3.3)}}
                    source={Images.filledplus}
                  />
                  <SemiBold
                    FontSize={hp(2.5)}
                    AllStyle={{color: Colors.primary, paddingLeft: 8}}
                    EnterText={'Add Address'}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <SemiBold
            FontSize={hp(2)}
            AllStyle={{marginVertical: hp(2)}}
            EnterText={'Select Date'}
          />
        </View>
        <View
          style={{
            paddingBottom: hp(2.5),
            borderBottomWidth: 1,
            marginHorizontal: wp(5),
            borderColor: Colors.grey,
          }}>
          <Calendar
            markedDates={selecteddate}
            onDayPress={day => {
              let mydate = {
                [day.dateString]: {
                  selected: true,
                  selectedColor: Colors.primary,
                },
              };
              SetselectedDate(mydate);
              console.log(mydate, '===date===');
            }}
            // markedDates={newDate}
            // current={'2022-11-01'}
            hideExtraDays
            disableAllTouchEventsForDisabledDays
            firstDay={1}
            // markingType={"custom"}
            // dayShape="square"
            // date="hide"

            // monthFormat={"MMM"}
            // hideDayNames={true}
            style={{
              // width: wp * 0.3,
              // height: height * 0.35,
              // backgroundColor: 'red',
              // borderWidth: 1,
              borderRadius: 20,
              width: wp(90),
              alignSelf: 'center',

              backgroundColor: 'white',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.2,
              elevation: 4,
              // marginHorizontal: wp(5),
              // marginHorizontal: wp * 0.01,
            }}
            theme={{
              todayTextColor: Colors.primaryDark,
              'stylesheet.calendar.header': {
                monthText: {
                  paddingVertical: hp(1),
                  fontFamily: 'InterV',
                  fontSize: 16,
                  fontWeight: 'bold', // default is 300
                  color: Colors.primaryDark, // default,
                  // textTransform: "uppercase",
                },
              },

              // textMonthFontFamily:Font.FontFamily.Mulish,
              // textMonthFontSize: 15,
              // textMonthFontWeight: 'bold',
              // textDayFontSize: 50,
              // "stylesheet.day.basic": {
              //   base: {
              //     // height: 5,
              //     paddingHorizontal:wp(5)
              //   },
              // },
              calendarBackground: 'transparent',
              monthTextColor: Colors.primary,

              textDayStyle: {
                color: Colors.primaryDark,
                // borderRadius: 2,
                // borderWidth: 2,
                // borderColor: "#163861",
                alignSelf: 'center',
              },
              dayTextColor: Colors.primaryDark,
            }}
            hideArrows={true}
          />
        </View>

        <View
          style={{
            paddingLeft: wp(5),
            marginVertical: hp(1),
            paddingRight: wp(2.5),
          }}>
          <SemiBold
            AllStyle={{marginVertical: hp(2)}}
            FontSize={hp(2)}
            EnterText={'Select Time'}
          />
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <FlatList
              scrollEnabled={false}
              data={SetTime}
              renderItem={RenderTimes}
              numColumns={3}
            />
          </ScrollView>
        </View>

        <View style={BusinessPageStyles.SelectProfView}>
          <SemiBold
            AllStyle={{fontFamily: 'Inter-Bold'}}
            FontSize={hp(2)}
            EnterText={Strings.selectProfop}
          />
          {selectProf == false ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  refRBSheet.current.open();
                }}
                style={BusinessPageStyles.SelectProfCard}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    style={{height: hp(6), width: hp(6), marginRight: 15}}
                    source={Images.profile}
                  />
                  <SemiBold EnterText={Strings.selectProf} />
                </View>
                <Image
                  resizeMode="contain"
                  style={{height: hp(2), width: hp(2), marginRight: 4}}
                  source={Images.RightArrow}
                />
              </TouchableOpacity>
              <Text style={{color: Colors.Brown, flexWrap: 'wrap'}}>
                {Strings.selectProfDes}
              </Text>
            </View>
          ) : (
            <View
              style={{
                width: wp(90),
                alignSelf: 'center',
                marginVertical: 5,
              }}>
              <View
                style={{
                  backgroundColor: Colors.white,
                  borderRadius: 15,
                  paddingLeft: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: wp(3.5),
                  borderBottomWidth: 1,
                  width: wp(90),
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  borderColor: Colors.grey,
                  shadowOffset: {width: 2, height: 5},
                  shadowOpacity: 0.2,
                  elevation: 2,
                }}>
                <Avatar
                  containerStyle={{marginLeft: 10}}
                  size={57}
                  rounded
                  source={selectedProf.img}
                />
                <View style={{marginLeft: -60}}>
                  <SemiBold FontSize={hp(2.3)} EnterText={selectedProf.name} />
                  <StarRating Rating={Strings.stars} Numbers={Strings.rating} />
                </View>
                <TouchableOpacity onPress={() => [refRBSheet.current.open()]}>
                  <Image
                    resizeMode="contain"
                    style={{height: hp(3.3), width: hp(3.3), marginRight: 20}}
                    source={Images.edit}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => {
                  setselectProf(false);
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: hp(0.9),
                }}>
                <Image
                  resizeMode="contain"
                  style={{height: hp(2.7), width: hp(2.7), marginRight: 10}}
                  source={Images.crosspink}
                />
                <SemiBold
                  FontSize={hp(2.3)}
                  AllStyle={{color: Colors.darkpeach}}
                  EnterText={'Remove Selction'}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* {selectProf === true ? (
          <View
            style={{
              width: wp(90),
              alignSelf: 'center',
              marginVertical: 5,
            }}>
            <View
              style={{
                backgroundColor: Colors.white,
                borderRadius: 15,
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: wp(3.5),
                borderBottomWidth: 1,
                width: wp(90),
                alignSelf: 'center',
                justifyContent: 'space-between',
                borderColor: Colors.grey,
                shadowOffset: {width: 2, height: 5},
                shadowOpacity: 0.2,
                elevation: 2,
              }}>
              <Avatar
                containerStyle={{marginLeft: 10}}
                size={57}
                rounded
                source={selectedProf.img}
              />
              <View style={{marginLeft: -60}}>
                <SemiBold FontSize={hp(2.3)} EnterText={selectedProf.name} />
                <StarRating Rating={Strings.stars} Numbers={Strings.rating} />
              </View>
              <TouchableOpacity onPress={() => [refRBSheet.current.open()]}>
                <Image
                  resizeMode="contain"
                  style={{height: hp(3.3), width: hp(3.3), marginRight: 20}}
                  source={Images.edit}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                setselectProf(false);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: hp(0.9),
              }}>
              <Image
                resizeMode="contain"
                style={{height: hp(2.7), width: hp(2.7), marginRight: 10}}
                source={Images.crosspink}
              />
              <SemiBold
                FontSize={hp(2.3)}
                AllStyle={{color: Colors.darkpeach}}
                EnterText={'Remove Selction'}
              />
            </TouchableOpacity>
          </View>
        ) : null} */}
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={TimerAlertModel}
        onRequestClose={() => {
          SetTimerAlertModel(false);
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:
              Platform.OS === 'ios' ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.25)',
          }}>
          <View style={BusinessPageStyles.AlertModalView}>
            <Text style={{textAlign: 'center'}}></Text>
            <SemiBold
              FontSize={hp(2.2)}
              AllStyle={BusinessPageStyles.AlertText}
              EnterText={`You’ll be notified if this${'\n'} time-slot becomes available`}
            />
            <Button
              btnStyle={{marginBottom: -5}}
              titleColor={Colors.white}
              bgColor={Colors.primary}
              title={'Notify Me'}
            />
            <Button
              bgColor={Colors.TP}
              titleColor={Colors.primaryDark}
              onPress={() => {
                SetTimerAlertModel(false);
              }}
              title={'Discard'}
            />
          </View>
        </View>
      </Modal>
      <Button
        onPress={() => {
          navigation.navigate('ConfirmBooking');
        }}
        btnStyle={{
          width: wp(90),
          alignSelf: 'center',
          position: 'absolute',
          bottom: hp(2),
        }}
        title={Strings.next}
        bgColor={Colors.shadygray}
        titleColor={Colors.white}
      />

      <RBSheet
        // dragFromTopOnly={true}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          draggableIcon: {
            backgroundColor: Colors.Brown,
            width: '15%',
            // marginVertical:30,
            marginBottom: hp(2.3),
          },
          container: {
            height: hp(70),
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
        }}>
        <View style={{flex: 1, width: wp(90), alignSelf: 'center'}}>
          <HeaderText FontSize={hp(2.4)} TopText={Strings.selectProf} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={CorouselData}
            renderItem={renderProf}
          />
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default BookService;
