import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import Label from '../Label';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {FONTS} from '../../theme/fonts';

const Index = ({lineColor, bgColor, title, desc, grid}) => {
  return (
    <View>
      {grid ? (
        <View
          style={{
            ...styles.grid,
            backgroundColor: bgColor,
            borderLeftColor: lineColor,
            borderLeftWidth: 6,
          }}>
          <View>
            <Label
              label={title}
              color={Colors.primary}
              left
              fontFamily={FONTS.InterBold}
              marginBottom={hp(1)}
            />
            <Label
              label={desc}
              color={Colors.primary_dark}
              left
              fontFamily={FONTS.InterRegular}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            ...styles.col,
            backgroundColor: bgColor,
            borderTopColor: lineColor,
            borderTopWidth: 6,
          }}>
          <Label
            label={title}
            color={Colors.primary}
            left
            fontFamily={FONTS.InterBold}
            marginBottom={hp(1)}
          />
          <Label
            label={desc}
            color={Colors.primary_dark}
            left
            fontFamily={FONTS.InterRegular}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    width: wp(80),
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: hp(2),
    flexDirection: 'row',
    marginVertical: hp(1),
    paddingLeft: wp(3),
    marginLeft: wp(2),
  },
  col: {
    width: wp(20),
    borderRadius: 10,
    paddingTop:hp(1),
    paddingBottom:hp(3),
    paddingHorizontal:wp(2),
    // marginBottom:hp(2),
    // marginLeft: wp(2),
  },
});

export default Index;
