import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GO_TO_SEARCH } from '../../function/NavigationNext';
import { GO_BACK } from '../../function/NavigationNext';
import StyleSearchRender from '../../style/styleFind/StyleSearchRender';
import { FlashList } from '@shopify/flash-list';
import ItemShoes from '../ItemShoes';
import ThemeContext from '../../../config/context/ThemContext';


const SearchRender = ({ navigation, route }) => {
  const { filteredProducts } = route.params;
  const Theme = useContext(ThemeContext);
  console.log('Search Options:', filteredProducts);
  return (
    <View style={[StyleSearchRender.container, { backgroundColor: Theme.container }]}>
      <View style={StyleSearchRender.header}>
        <View style={StyleSearchRender.headerbar}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)} >
            <Icon name="arrow-left" size={30} style={[StyleSearchRender.iconback, { color: Theme.color }]} />
          </TouchableOpacity>
          <Text style={[StyleSearchRender.title, { color: Theme.color }]}>SearchRender</Text>
          <TouchableOpacity style={StyleSearchRender.iconsearch} onPress={() => GO_TO_SEARCH(navigation)}>
            <Icon name="magnify" size={30} color={Theme.color} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={StyleSearchRender.viewrender}>
        <FlashList
          numColumns={2}
          data={filteredProducts}
          renderItem={({ item }) => <ItemShoes item={item} />}
          keyExtractor={item => item._id.toString()}
          estimatedItemSize={500}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      </View>
    </View>
  );
};

export default SearchRender;
