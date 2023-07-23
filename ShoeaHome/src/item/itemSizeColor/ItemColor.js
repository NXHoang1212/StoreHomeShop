import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    width: 39,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
  },
  checkIcon: {
    color: 'white',
    fontSize: 24,
  },
};

export default ItemColor;
