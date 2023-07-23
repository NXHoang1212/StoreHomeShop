import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import StyleAdidas from '../../style/StyleApi/StyleAdidas'
import { GO_BACK, GO_TO_SEARCH } from '../../function/NavigationNext'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ItemShoes from '../../home/ItemShoes'
import { FlashList } from '@shopify/flash-list';
import AxiosInstance from '../../../config/context/AxiosIntance'


const Adidas = ({ navigation }) => {
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
    <View style={StyleAdidas.container}>
      <View style={StyleAdidas.header}>
        <View style={StyleAdidas.headerbar}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)} >
            <Icon name="arrow-left" size={30} color="#000" style={StyleAdidas.iconback} />
          </TouchableOpacity>
          <Text style={StyleAdidas.title}>Adidas</Text>
          <TouchableOpacity style={StyleAdidas.iconsearch} onPress={() => GO_TO_SEARCH(navigation)}>
            <Icon name="magnify" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={StyleAdidas.viewFlashLit}>
        <FlashList
          numColumns={2}
          data={product.filter((item) => item.categoryId.name === "Adidas")}
          renderItem={({ item }) => <ItemShoes item={item} />}
          keyExtractor={item => item._id}
          estimatedItemSize={300}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </View>
  )
}

export default Adidas