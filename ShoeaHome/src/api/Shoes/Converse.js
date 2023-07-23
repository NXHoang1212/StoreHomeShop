import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import StyleConverse from '../../style/StyleApi/StyleConverse'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK, GO_TO_SEARCH } from '../../function/NavigationNext'
import axios from 'axios'
import { HOST } from '../../../config/Constant'
import ItemShoes from '../../home/ItemShoes'
import { FlashList } from '@shopify/flash-list';
import AxiosInstance from '../../../config/context/AxiosIntance'


const Converse = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    AxiosInstance().get(`product`)
      .then(function (response) {
        const products = response.map(item => ({
          ...item,
          rating: 4.5,
          views: `8,152`,
        }));
        setProduct(products);
        console.log("product: ", products);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  return (
    <View style={StyleConverse.container}>
      <View style={StyleConverse.header}>
        <View style={StyleConverse.headerbar}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)} >
            <Icon name="arrow-left" size={30} color="#000" style={StyleConverse.iconback} />
          </TouchableOpacity>
          <Text style={StyleConverse.title}>Converse</Text>
          <TouchableOpacity style={StyleConverse.iconsearch} onPress={() => GO_TO_SEARCH(navigation)} >
            <Icon name="magnify" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={StyleConverse.viewFlashLit}>
          <FlashList
            numColumns={2}
            data={product.filter((item) => item.categoryId.name === "Converse")}
            renderItem={({ item }) => <ItemShoes item={item} />}
            keyExtractor={item => item._id}
            estimatedItemSize={300}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        </View>
      </View>
    </View>
  )
}

export default Converse