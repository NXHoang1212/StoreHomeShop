import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ItemSize = ({ item, onPress, selected }) => {
  const handlePress = () => {
    onPress(item);
  };

  const containerStyle = {
    ...styles.itemContainer,
    backgroundColor: selected === item ? '#000000' : 'transparent',
    borderColor: selected === item ? '#000000' : 'gray',
  };

  const textStyle = {
    ...styles.itemText,
    color: selected === item ? '#ffffff' : 'gray',
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={containerStyle}>
        <Text style={textStyle}>{item}</Text>
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
    borderWidth: 1.5,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default ItemSize;
