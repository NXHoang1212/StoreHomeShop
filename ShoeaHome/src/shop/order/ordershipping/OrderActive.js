import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { getUserId } from '../../../../config/service/Utils';
import AxiosInstance from '../../../../config/context/AxiosIntance';
import StyleOrderActive from '../../../style/StyleOrderActive';
import { GO_TO_TRACKORDER } from '../../../function/NavigationNext';
import ThemeContext from '../../../../config/context/ThemContext';

const OrderActive = ({ navigation }) => {
  const [orderActive, setOrderActive] = useState([]);
  const isFocused = useIsFocused();
  const Theme = useContext(ThemeContext);
  const [isOrdervisible, setIsOrdervisible] = useState(false);
  const getOrdersActive = async () => {
    try {
      const userId = await getUserId();
      const response = await AxiosInstance().get(`order/${userId}/getOrderHistory`);
      // console.log(response.order.products);
      //Lọc ra danh sách đơn hàng có trạng thái 
      const orderActive = response.order.filter((order) => order.status === 'Paid');
      // Lấy tất cả các sản phẩm từ tất cả các đơn hàng
      const allProducts = orderActive.flatMap((order) => order.products);
      console.log(allProducts);
      if (allProducts.length > 0) {
        setOrderActive(allProducts);
      }
      // console.log(orderActive);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrdersActive();
  }, [isFocused]);
  const renderItem = ({ item }) => {
    return (
      <View style={[StyleOrderActive.containerCartItem, { backgroundColor: Theme.backgroundBorder }]}>
        <View style={[StyleOrderActive.viewImageCartItem, { backgroundColor: Theme.imageBorder }]}>
          <Image source={{ uri: item.image }} style={StyleOrderActive.imageCartItem} />
        </View>
        <View style={StyleOrderActive.viewTextCartItem}>
          <Text style={[StyleOrderActive.textCartItemname, { color: Theme.color }]}>{item.name}</Text>
          <Text style={[StyleOrderActive.textCartItemqty, { color: Theme.color }]}>Black | Size = 42 | Qty={item.quantity}</Text>
          <Text style={StyleOrderActive.textCartItemdelivery}>In Delivery</Text>
          <View style={StyleOrderActive.viewTextCartItemprice}>
            <Text style={[StyleOrderActive.textCartItemprice, { color: Theme.color }]}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity onPress={() => GO_TO_TRACKORDER(navigation)}>
              <Text style={StyleOrderActive.textCartItemtrack}>Track Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  if (orderActive.length === 0) {
    return (
      <View style={[StyleOrderActive.container, { backgroundColor: Theme.displayColor, }]}>
        <View style={StyleOrderActive.viewheader}>
          <View style={StyleOrderActive.viewimage}>
            <Image
              source={require('../../../../assets/images/noorder.png')}
              style={StyleOrderActive.image}
            />
          </View>
          <View style={StyleOrderActive.viewtext}>
            <Text style={StyleOrderActive.text}>You don't have an order yet</Text>
            <Text style={StyleOrderActive.text1}>You don't have an active order at this time</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={[StyleOrderActive.containerItem, { backgroundColor: Theme.displayColor }]}>
      <FlashList
        data={orderActive}
        renderItem={renderItem}
        estimatedItemSize={200}
        ListFooterComponentStyle={{ marginBottom: '22%' }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default OrderActive;
