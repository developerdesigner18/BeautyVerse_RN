//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { Colors } from '../../theme/colors';

// create a component
const BottomTitle = ({MainText,ButtonText,onPress}) => {

    return (
        <View style={{marginTop: 20, flexDirection: 'row'}}>
        <Text style={{color: 'black', fontSize: 14}}>
          {MainText}
        </Text>
        <TouchableOpacity
        onPress={onPress}
        >
          <Text style={{fontSize: 14,color:Colors.primary}}> {ButtonText}</Text>
        </TouchableOpacity>
      </View>
    );
};

// define your styles


//make this component available to the app
export default BottomTitle;
