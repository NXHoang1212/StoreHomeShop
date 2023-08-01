import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState, useEffect, useId, useContext } from 'react'
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlashList } from '@shopify/flash-list';
import StyleWallet from '../../style/stylePayment/StyleWallet';
import { getUserId } from '../../../config/service/Utils';
import AxiosInstance from '../../../config/context/AxiosIntance';
import { GO_TO_TransactionHistory, GO_TO_DETAILHISTORY } from '../../function/NavigationNext';
import { showMessage } from 'react-native-flash-message';
import { useFocusEffect } from '@react-navigation/native';
import ThemeContext from '../../../config/context/ThemContext';

const Wallet = ({ navigation }) => {
  const [historyOrder, setHistoryOrder] = useState([]);
  const Theme = useContext(ThemeContext)
  const logoImage = Theme.image;
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + '...';
    } else {
      return str;
    }
  };
  const getOrderHistory = async () => {
    try {
      const userId = await getUserId();
      const response = await AxiosInstance().get(`order/${userId}/getOrderHistory`);
      const orderHistory = response.order;
      if (orderHistory.length > 0) {
        // Lọc danh sách đơn hàng dựa trên trạng thái
        const filteredOrders = orderHistory.filter((order) => order.status === 'Paid');
        const updatedHistoryOrder = filteredOrders.flatMap((order) =>
          order.products.map((product) => ({
            ...product,
            orderId: order._id, // Thêm thuộc tính orderId để lưu trữ _id của đơn hàng
            timeBuy: order.timeBuy || '',
            orderHour: order.orderHour || '',
          }))
        );
        setHistoryOrder(updatedHistoryOrder);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        getOrderHistory();
      });
      getOrderHistory();
      return unsubscribe;
    }, [])
  );
  const handleSeeAllClick = () => {
    GO_TO_TransactionHistory(navigation);
  };
  //xây dừng chức năng toast lên màn hình đang phát triển
  const handleShowMassage = () => {
    showMessage({
      message: "Post function developed",
      type: "warning",
      duration: 2000,
      icon: "warning",
    });
  };
  const handleClickDetail = (itemId) => {
    GO_TO_DETAILHISTORY(navigation, itemId);
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleClickDetail(item.orderId)}>
        <View style={StyleWallet.viewitem}>
          <View style={StyleWallet.viewproduct}>
            <View style={StyleWallet.viewimage}>
              <Image style={StyleWallet.image} source={{ uri: item.image }} />
            </View>
            <View style={StyleWallet.viewtext}>
              <View style={StyleWallet.viewname}>
                <Text style={[StyleWallet.textname, { color: Theme.color }]}>{truncateString(item.name, 24)}</Text>
                <Text style={[StyleWallet.textprice, { color: Theme.color }]}>${item.price.toFixed(2)}</Text>
              </View>
              <View style={StyleWallet.viewtime}>
                <Text style={[StyleWallet.texttime, { color: Theme.color }]}>
                  {item.timeBuy} | {item.orderHour}
                </Text>
                <View style={StyleWallet.viewicon}>
                  <Text style={[StyleWallet.texttime, { color: Theme.color }]}>Orders</Text>
                  <View style={StyleWallet.viewiconup}>
                    <Icon name="arrow-up" size={16} color="#fff" style={StyleWallet.iconup} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[StyleWallet.container, { backgroundColor: Theme.displayColor }]}>
      <View style={StyleWallet.header}>
        <View style={StyleWallet.headerbar}>
          <FastImage
            style={StyleWallet.iconback}
            source={logoImage}
          />
          <Text style={[StyleWallet.title, { color: Theme.color }]}>My E-Wallet</Text>
          <TouchableOpacity style={StyleWallet.iconsearch}>
            <Icon name="magnify" size={25} color="#000" style={[{ color: Theme.color }]} />
          </TouchableOpacity>
          <TouchableOpacity style={StyleWallet.iconother}>
            <Icon name="dots-horizontal-circle-outline" size={25} color="#000" style={[{ color: Theme.color }]} />
          </TouchableOpacity>
        </View>
      </View>
      {/* the card */}
      <View style={StyleWallet.viewcard}>
        <View style={StyleWallet.viewcard1}>
          <View style={StyleWallet.viewcard2}>
            <Text style={StyleWallet.textcard1}>Nguyễn Xuân Hoàng</Text>
            <Image style={StyleWallet.imagecard} source={require('../../../assets/images/visa.png')} />
            <Image style={StyleWallet.imagecardmaster} source={require('../../../assets/images/cardmaster.png')} />
          </View>
          <Text style={StyleWallet.textcard1}>**** **** **** 1234</Text>
        </View>
        <View style={StyleWallet.viewcard3}>
          <Text style={StyleWallet.textcard3}>Your balance</Text>
          <View style={StyleWallet.viewcard4}>
            <Text style={StyleWallet.textcardprice}>$9,379</Text>
            <TouchableOpacity onPress={handleShowMassage}>
              <View style={StyleWallet.viewcard5}>
                <Icon name="arrow-down-box" size={19} color="#000" />
                <Text style={StyleWallet.textcardadd}>Top Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={StyleWallet.viewhistory}>
        <Text style={[StyleWallet.history, { color: Theme.color }]}>Transaction History</Text>
        <TouchableOpacity style={StyleWallet.iconhistory} onPress={handleSeeAllClick}>
          <Text style={[StyleWallet.texticon, { color: Theme.color }]}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={StyleWallet.viewlist}>
          <FlashList
            data={historyOrder}
            renderItem={renderItem}
            ListFooterComponentStyle={{ marginBottom: '20%' }}
            keyExtractor={(item) => item._id}
            estimatedItemSize={100}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Wallet