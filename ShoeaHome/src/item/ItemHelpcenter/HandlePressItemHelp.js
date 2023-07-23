import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StyleFaQ from '../../style/StyleFaQ';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeContext from '../../../config/context/ThemContext';
import Theme from '../../../config/Theme';

export const handleItemPress = (item, data, setData) => {
  const updatedData = data.map(entry => {
    if (entry.id === item.id) {
      return { ...entry, visible: !entry.visible };
    }
    return entry;
  });
  setData(updatedData);
  console.log("🚀 ~ updatedData:", updatedData);
};


export const renderItem = ({ item, handleItemPress }) => (
  <TouchableOpacity style={StyleFaQ.notificationHeader} onPress={() => handleItemPress(item)}>
    <View style={StyleFaQ.viewFlast}>
      <Text style={[StyleFaQ.notificationTitle]}>{item.title}</Text>
      <Icon name='chevron-down' size={28} style={StyleFaQ.iconflast} />
    </View>
    <View>
      {item.visible && <View style={StyleFaQ.line}></View>}
      {item.visible && <Text style={StyleFaQ.message}>{item.message}</Text>}
    </View>
  </TouchableOpacity>
);
