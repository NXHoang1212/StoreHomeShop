import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StyleNewBlance from '../../style/StyleApi/StyleNewBlance'
import { GO_BACK, GO_TO_SEARCH } from '../../function/NavigationNext'
import axios from 'axios'
import { HOST } from '../../../config/Constant'
import ItemShoes from '../../home/ItemShoes'
import { FlashList } from '@shopify/flash-list';
import AxiosInstance from '../../../config/context/AxiosIntance'

const NewBlance = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AxiosInstance().get("/product");
        setProduct(res);
        //thêm rating và views
        const products = res.map(item => ({
          ...item,
          rating: 4.5,
          views: `8,152`,
        }));
        setProduct(products);
      } catch (error) {
        console.log(error);
      }
    };
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    fetchData();
    return unsubscribe;
  }, []);
  return (
    <View style={StyleNewBlance.container}>
      <View style={StyleNewBlance.header}>
        <View style={StyleNewBlance.headerbar}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)} >
            <Icon name="arrow-left" size={30} color="#000" style={StyleNewBlance.iconback} />
          </TouchableOpacity>
          <Text style={StyleNewBlance.title}>NewBlance</Text>
          <TouchableOpacity style={StyleNewBlance.iconsearch} onPress={() => GO_TO_SEARCH(navigation)}>
            <Icon name="magnify" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={StyleNewBlance.viewFlashLit}>
          <FlashList
            numColumns={2}
            data={product.filter((item) => item.categoryId.name === "NewBalance")}
            renderItem={({ item }) => <ItemShoes item={item} />}
            keyExtractor={item => item._id}
            estimatedItemSize={300}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 170 }}
          />
        </View>
      </View>
    </View>
  )
}

export default NewBlance