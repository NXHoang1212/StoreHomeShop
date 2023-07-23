import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleSearchShoes from '../style/StyleSearchShoes'
import ThemeContext from '../../config/context/ThemContext';

const ItemSearch = ({ searchHistory, setSearchHistory }) => {
  const Theme = useContext(ThemeContext);
  const clearitemHistory = (index) => {
    setSearchHistory((prevHistory) => {
      const newHistory = [...prevHistory];
      newHistory.splice(index, 1);
      return newHistory;
    });
  };

  const renderSearchHistoryItem = ({ item, index }) => {
    return (
      <View style={StyleSearchShoes.viewrecentSearchItem}>
        <Text style={[StyleSearchShoes.recentSearchItem, { color: Theme.color }]}>{item}</Text>
        <TouchableOpacity onPress={() => clearitemHistory(index)}>
          <View style={StyleSearchShoes.viewdelete}>
            <Icon name="close" size={18} style={StyleSearchShoes.icondelete} color={Theme.buttonview} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={StyleSearchShoes.recentSearchesContainer}>
      <FlatList
        data={searchHistory}
        renderItem={renderSearchHistoryItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ItemSearch;
