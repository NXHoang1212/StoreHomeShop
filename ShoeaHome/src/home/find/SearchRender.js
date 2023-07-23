import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GO_TO_SEARCH } from '../../function/NavigationNext';
import { GO_BACK } from '../../function/NavigationNext';
import StyleSearchRender from '../../style/styleFind/StyleSearchRender';


const SearchRender = ({ navigation, selectedCategory, selectedBrand, selectedPriceRange }) => {
  return (
    <View style={StyleSearchRender.container}>
      <View style={StyleSearchRender.header}>
        <View style={StyleSearchRender.headerbar}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)} >
            <Icon name="arrow-left" size={30} color="#000" style={StyleSearchRender.iconback} />
          </TouchableOpacity>
          <Text style={StyleSearchRender.title}>Search</Text>
          <TouchableOpacity style={StyleSearchRender.iconsearch} onPress={() => GO_TO_SEARCH(navigation)}>
            <Icon name="magnify" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={StyleSearchRender.viewrender}>
        <Text>SearchRender</Text>
        <Text>Selected Category: {selectedCategory}</Text>
        <Text>Selected Brand: {selectedBrand}</Text>
        <Text>Selected Price Range: {selectedPriceRange}</Text>
        {/* Hiển thị danh sách sản phẩm đã chọn */}
      </View>
    </View>
  );
};

export default SearchRender;
