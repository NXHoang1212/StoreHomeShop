import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GO_TO_SEARCH } from '../../function/NavigationNext';
import { GO_BACK } from '../../function/NavigationNext';
import StyleSearchRender from '../../style/styleFind/StyleSearchRender';
import { FlashList } from '@shopify/flash-list';


const SearchRender = ({ navigation, route }) => {
  const { filteredProducts } = route.params;
  console.log("🚀 ~ file: SearchRender.js:12 ~ SearchRender ~ filteredProducts:", filteredProducts)
  
  const renderProductItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };
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
        <Text>SearchRender</Text>
        <FlashList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
          estimatedItemSize={500}
        />
      </View>
    </View>
  );
};

export default SearchRender;
