import React from 'react';
import {View, StyleSheet} from 'react-native';
import LoaderKit from 'react-native-loader-kit';
import Modal from 'react-native-modal';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({visible}) => {
  return (
    <Modal isVisible={visible}>
      <View style={styles.container}>
        <LoaderKit
          style={{width: 50, height: 50}}
          name={'BallSpinFadeLoader'}
          size={60}
          color={Colors.white}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(10),
    width: hp(10),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Index;
