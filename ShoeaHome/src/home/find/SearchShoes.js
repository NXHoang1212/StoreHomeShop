import { View, Text, TouchableOpacity, FlatList, TextInput, Image } from 'react-native'
import React, { useState, useEffect, useRef, useMemo, useCallback, useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { handleSearch } from '../../function/SearchHistory';
import ItemSearch from '../../item/ItemSearch';
import ModalOptionSearch from '../../dialog/ModalOptionSearch';
import ItemShoes from '../ItemShoes';
import { FlashList } from '@shopify/flash-list';
import StyleSearchShoes from '../../style/StyleSearchShoes';
import ThemeContext from '../../../config/context/ThemContext';

const SearchShoes = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const Theme = useContext(ThemeContext);
  const handlePress = () => {
    setModalVisible(true);
  };
  // Lấy lịch sử tìm kiếm từ AsyncStorage
  useEffect(() => {
    // Lấy lịch sử tìm kiếm từ AsyncStorage
    const getSearchHistory = async () => {
      try {
        const history = await AsyncStorage.getItem('searchHistory');
        if (history !== null) {
          setSearchHistory(JSON.parse(history));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getSearchHistory();
  }, []);
  // Xóa lịch sử tìm kiếm
  const clearSearchHistory = async () => {
    setSearchHistory([]);
    try {
      await AsyncStorage.removeItem('searchHistory');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={[StyleSearchShoes.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={[StyleSearchShoes.search, { backgroundColor: Theme.backgroundBorderTwo }]}>
        <Icon name="magnify" size={20} color={Theme.color} style={StyleSearchShoes.icon} />
        <TextInput
          style={[StyleSearchShoes.input, { color: Theme.color }]}
          placeholder="Search shoes"
          placeholderTextColor={Theme.color}
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
          onSubmitEditing={() => handleSearch(searchTerm, searchHistory, setSearchHistory, setSearchResult, setShowResult)}
        />
        <TouchableOpacity onPress={handlePress}>
          <Icon name="tune-variant" size={20} color={Theme.color} style={StyleSearchShoes.icontune} />
        </TouchableOpacity>
        <ModalOptionSearch visible={modalVisible} setModalVisible={setModalVisible} />
      </View>
      {searchTerm && (
        <View style={StyleSearchShoes.viewrecentclearall}>
          <Text style={[StyleSearchShoes.textrecent, { color: Theme.color }]}>Result for {searchTerm}</Text>
          <Text style={[StyleSearchShoes.textclearall, { color: Theme.color }]}>{searchResult.length === 0 ? '0' : searchResult.length} found</Text>
        </View>
      )}
      {!searchTerm && (
        <View style={StyleSearchShoes.viewrecentclearall}>
          <TouchableOpacity>
            <Text style={[StyleSearchShoes.textrecent, { color: Theme.color }]}>Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clearSearchHistory}>
            <Text style={[StyleSearchShoes.textclearall, { color: Theme.color }]}>Clear All</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={StyleSearchShoes.line}></View>
      <View style={StyleSearchShoes.recentSearchesContainer}>
        {searchTerm !== '' ? (
          searchResult.length > 0 ? (
            <View style={StyleSearchShoes.searchResultContainer}>
              <FlashList
                numColumns={2}
                data={searchResult}
                renderItem={({ item }) => <ItemShoes item={item} />}
                keyExtractor={(item, index) => index.toString()}
                estimatedItemSize={500}
              />
            </View>
          ) : (
            <View style={StyleSearchShoes.imageContainer}>
              <Image source={require('../../../assets/images/noorder.png')} style={StyleSearchShoes.imagenosearch} />
              <Text style={[StyleSearchShoes.noResultText, { color: Theme.color }]}>Not found</Text>
              <Text style={[StyleSearchShoes.noResul, { color: Theme.color }]}>Sorry, the keyword you entered cannot be found. Please check again or search with another keyword.</Text>
            </View>
          )
        ) : (
          <ItemSearch searchHistory={searchHistory} setSearchHistory={setSearchHistory} />
        )}
      </View>
    </View>
  )
}

export default SearchShoes