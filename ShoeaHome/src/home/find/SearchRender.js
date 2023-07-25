import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GO_TO_SEARCH } from '../../function/NavigationNext';
import { GO_BACK } from '../../function/NavigationNext';
import StyleSearchRender from '../../style/styleFind/StyleSearchRender';
import { FlashList } from '@shopify/flash-list';
import ItemShoes from '../ItemShoes';


const SearchRender = ({ navigation, route }) => {
  const { filteredProducts } = route.params;
  console.log('Search Options:', filteredProducts);
  return (
    <View style={StyleSearchRender.container}>
      <View style={StyleSearchRender.header}>
        <View style={StyleSearchRender.headerbar}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)} >
            <Icon name="arrow-left" size={30} color="#000" style={StyleSearchRender.iconback} />
          </TouchableOpacity>
          <Text style={StyleSearchRender.title}>SearchRender</Text>
          <TouchableOpacity style={StyleSearchRender.iconsearch} onPress={() => GO_TO_SEARCH(navigation)}>
            <Icon name="magnify" size={30} color="#000" />
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
