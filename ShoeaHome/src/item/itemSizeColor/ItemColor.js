import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const ItemColor = ({ color, onPress, selected }) => {
  const handlePress = () => {
    onPress(color);
  };

  const containerStyle = {
    ...styles.itemContainer,
    backgroundColor: color,
  };

  const iconStyle = {
    ...styles.checkIcon,
    display: selected === color ? 'flex' : 'none',
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={containerStyle}>
        <MaterialIcons name="check" size={22} style={iconStyle} />
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  itemContainer: {
    borderRadius: 30,
    // width: 39,
    // height: 39,
    width: responsiveScreenWidth(8.5),
    height: responsiveScreenHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    left: responsiveScreenWidth(4),
  },
  checkIcon: {
    color: 'white',
    // fontSize: 24,
    fontSize: responsiveScreenFontSize(2.7),
  },
};

export default ItemColor;
