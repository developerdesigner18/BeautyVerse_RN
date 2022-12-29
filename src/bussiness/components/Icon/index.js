import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Icon = ({
  source,
  size,
  color,
  radius,
  alignSelf,
  bgColor,
  vertical,
  horizontal,
  left
}) => {
  return (
    <View>
      <Image
        source={source}
        style={{
          height: size,
          width: size,
          tintColor: color,
          borderRadius: radius,
          alignSelf: alignSelf,
          backgroundColor: bgColor,
          paddingVertical: vertical,
          paddingHorizontal: horizontal,
          marginLeft: left
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Icon;
