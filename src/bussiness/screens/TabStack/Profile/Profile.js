import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Strings} from '../../../theme/strings';
import {Images} from '../../../theme/images';
import {profile} from '../../../theme/arrays';
import {styles} from './styles';
import Header from '../../../components/Header';
import ItemCard from '../../../components/ItemCard';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header rightLabel={Strings.profile} hide />
      <View style={styles.mainView}>
        {profile.map((item, index) => (
          <ItemCard
            onPress={() => {
              index == 0 && navigation.navigate('MyProfile');
              index == 1 && navigation.navigate('Wallet');
              index == 2 && navigation.navigate('Notification');
            }}
            userIcon={item.icon}
            title={item.label}
            desc={item.desc}
            leftIcon={Images.rightarrow}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
