import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import StylePuma from '../../style/StyleApi/StylePuma'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK, GO_TO_SEARCH } from '../../function/NavigationNext'
import axios from 'axios'
import { HOST } from '../../../config/Constant'
import ItemShoes from '../../home/ItemShoes'
import { FlashList } from '@shopify/flash-list';
import AxiosInstance from '../../../config/context/AxiosIntance'


const Puma = ({ navigation }) => {
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
    <View style={StylePuma.container}>
      <View style={StylePuma.header}>
        <View style={StylePuma.headerbar}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)} >
            <Icon name="arrow-left" size={30} color="#000" style={StylePuma.iconback} />
          </TouchableOpacity>
          <Text style={StylePuma.title}>Puma</Text>
          <TouchableOpacity style={StylePuma.iconsearch} onPress={() => GO_TO_SEARCH(navigation)} >
            <Icon name="magnify" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={StylePuma.viewFlashLit}>
          <FlashList
            numColumns={2}
            data={product.filter((item) => item.categoryId.name === "Puma")}
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

export default Puma