//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderTop from '../../../components/HomeComponent/headerTop';
import {Strings} from '../../../theme/strings';
import {SafeAreaView} from 'react-native';
import {Colors} from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import SwitchCard from '../../../components/ProfileComponents/SwitchCard';
import SemiBold from '../../../components/HomeComponent/SemiBold';
import BoldText from '../../../components/HomeComponent/BoldText';
import {useState} from 'react';

// create a component
const SettingsHome = ({navigation}) => {
  const [Index, setIndex] = useState([]);
  const [IsSwitchOn, setIsSwitchOn] = useState(false);

  const NotifyArray = [
    {
      txt: 'Notification option 1',
    },
    {
      txt: 'Notification option 2',
    },
    {
      txt: 'Notification option 3',
    },
    {
      txt: 'Notification option 4',
    },
    {
      txt: 'Notification option 5',
    },
  ];

  const SecurityArray = [
    {
      txt: '2 Factor Authentication (2FA)',
    },
  ];

  const switchSelection = index => {
    if (Index.length == 0) {
      setIndex([index]);
    } else {
      if (Index.includes(index)) {
        const filter = Index.filter(item => item != index);
        setIndex(filter);
      } else {
        setIndex(prevState => [...prevState, index]);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={Strings.setting}
      />
      <View
        style={{
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderColor: Colors.grey,
          width: wp(90),
        }}>
        <BoldText
          FontSize={hp(2.5)}
          AllStyle={{marginVertical: hp(2)}}
          EnterText={Strings.notification}
        />
        {NotifyArray.map((item, index) => (
          <SwitchCard
            isSwitchOn={Index.includes(index) && true}
            onToggleSwitch={() => {
              switchSelection(index);
            }}
            FontSize={hp(2)}
            EnterText={item.txt}
          />
        ))}
      </View>
      <View
        style={{
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderColor: Colors.grey,
          width: wp(90),
        }}>
        <BoldText
          FontSize={hp(2.5)}
          AllStyle={{marginVertical: hp(2)}}
          EnterText={Strings.security}
        />
        {SecurityArray.map(item => (
          <SwitchCard
            isSwitchOn={IsSwitchOn}
            onToggleSwitch={() => {
              setIsSwitchOn(!IsSwitchOn);
            }}
            FontSize={hp(2)}
            EnterText={item.txt}
          />
        ))}
      </View>
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
export default SettingsHome;
