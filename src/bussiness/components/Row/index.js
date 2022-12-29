import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Label from '../Label';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import Icon from '../Icon';
import {FONTS} from '../../theme/fonts';

const Index = ({
  title,
  subTitle,
  bold,
  titleColor,
  color,
  top,
  icon,
  iconSize,
  mediumSub,
  boldSub,
  onPressIcon,
  ref,
}) => {
  return (
    <View style={{...styles.container, marginVertical: top}}>
      <Label
        label={title}
        color={titleColor ? titleColor : Colors.primary_dark1}
        size={hp(1.8)}
        fontFamily={bold ? FONTS.InterBold : FONTS.InterRegular}
      />
      {icon ? (
        <TouchableOpacity onPress={() => onPressIcon()} ref={ref}>
          <Icon source={icon} size={iconSize} />
        </TouchableOpacity>
      ) : (
        <Label
          label={subTitle}
          medium={mediumSub}
          fontFamily={boldSub ? FONTS.InterBold : FONTS.InterRegular}
          size={hp(1.8)}
          paddingVertical={0}
          color={color ? color : Colors.primary_dark}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    width: '100%',
    paddingVertical: hp(0.6),
  },
});

export default Index;
