import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import { Searchstyles } from '../../screens/SearchScreens/SearchStyles';

// create a component
const SearchInput = ({onPress,source,value,onChangeText,placeholder}) => {
  return (
    <View
      style={Searchstyles.MainView}>
      <View
        style={Searchstyles.SearchBarView}>
        <Image
          resizeMode="contain"
          style={[Searchstyles.SearchIcon,{marginLeft:wp(5)}]}
          source={Images.Search}
        />
        <TextInput
        placeholderTextColor={'#554F67'}
          onChangeText={onChangeText}
          value={value}
          style={{paddingLeft: 15, width: '70%'}}
          placeholder={placeholder}
        />
      </View>
      <TouchableOpacity
      onPress={onPress}
      >
        <Image
          resizeMode="contain"
          style={Searchstyles.mapIcon}
          source={source}
        />
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default SearchInput;
