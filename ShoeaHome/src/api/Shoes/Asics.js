import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GO_BACK, GO_TO_SEARCH } from '../../function/NavigationNext'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StyleAscis from '../../style/StyleApi/StyleAsics'
import axios from 'axios'
import { HOST } from '../../../config/Constant'
import ItemShoes from '../../home/ItemShoes'
import { FlashList } from '@shopify/flash-list';
import AxiosInstance from '../../../config/context/AxiosIntance'

const Asics = ({ navigation }) => {
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
    <View style={StyleAscis.container}>
      <View style={StyleAscis.header}>
        <View style={StyleAscis.headerbar}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)} >
            <Icon name="arrow-left" size={30} color="#000" style={StyleAscis.iconback} />
          </TouchableOpacity>
          <Text style={StyleAscis.title}>Asics</Text>
          <TouchableOpacity style={StyleAscis.iconsearch} onPress={() => GO_TO_SEARCH(navigation)}>
            <Icon name="magnify" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={StyleAscis.viewFlashLit}>
          <FlashList
            numColumns={2}
            data={product.filter((item) => item.categoryId.name === "Asics")}
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

export default Asics