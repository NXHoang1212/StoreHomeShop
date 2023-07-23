import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import StyleTransactionHistory from '../style/stylePayment/styleTransactionHistory'
import { getUserId } from '../../config/service/Utils'
import { HOST } from '../../config/Constant'
import AxiosInstance from '../../config/context/AxiosIntance'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlashList } from '@shopify/flash-list'
import { GO_BACK } from '../function/NavigationNext'
import { useFocusEffect } from '@react-navigation/native'
import ThemeContext from '../../config/context/ThemContext'

const TransactionHistory = ({ navigation }) => {
  const [historyOrder, setHistoryOrder] = useState([]);
  const [orderHour, setOrderHour] = useState('');
  const [orderDay, setOrderDay] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchDate, setSearchDate] = useState('');
  const [originalHistoryOrder, setOriginalHistoryOrder] = useState([]);
  const Theme = useContext(ThemeContext);
  const getOrderHistory = async () => {
    try {
      const userId = await getUserId();
      const response = await AxiosInstance().get(`order/${userId}/getOrderHistory`);
      const orderHistory = response.order;
      if (orderHistory.length > 0) {
        const filteredOrders = orderHistory.filter((order) => order.status === 'Paid');
        const updatedHistoryOrder = filteredOrders.flatMap((order) => order.products.map((product) => ({
          ...product,
          timeBuy: order.timeBuy || '',
          orderHour: order.orderHour || '',
        }))
        );
        setHistoryOrder(updatedHistoryOrder);
        setOriginalHistoryOrder(updatedHistoryOrder);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // Hàm này sẽ được gọi mỗi khi người dùng chọn một tab
        // Gọi API hoặc cập nhật dữ liệu sản phẩm ở đây
        getOrderHistory();
      });
      getOrderHistory();
      return unsubscribe;
    }, [])
  );
  const handleSearchIconPress = () => {
    setIsSearchVisible(true);
    setHistoryOrder([...originalHistoryOrder]); // Reset danh sách lịch sử giao dịch về danh sách gốc khi nhấn vào nút tìm kiếm
  };
  const handleSearch = (text) => {
    //tìm kiếm bằng tên sản phẩm và ngày mua thời gian mua hàng và giá tiền 
    setSearchDate(text);
    const filteredHistoryOrder = originalHistoryOrder.filter((item) => {
      const itemData = `${item.name.toUpperCase()} ${item.price.toFixed(2)} ${orderDay.toUpperCase()} ${orderHour.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setHistoryOrder(filteredHistoryOrder);
  };
  //chức năng đóng tìm kiếm khi nhấn submit
  const handleSearchSubmit = () => {
    setIsSearchVisible(false);
  }

  const renderItem = ({ item }) => {
    return (
      <View style={StyleTransactionHistory.viewitem}>
        <View style={StyleTransactionHistory.viewproduct}>
          <View style={[StyleTransactionHistory.viewimage, { backgroundColor: Theme.imageBorder }]}>
            <Image style={StyleTransactionHistory.image} source={{ uri: item.image }} />
          </View>
          <View style={StyleTransactionHistory.viewtext}>
            <View style={StyleTransactionHistory.viewname}>
              <Text style={[StyleTransactionHistory.textname, { color: Theme.color }]}>{item.name}</Text>
              <Text style={[StyleTransactionHistory.textprice, { color: Theme.color }]}>${item.price.toFixed(2)}</Text>
            </View>
            <View style={StyleTransactionHistory.viewtime}>
              <Text style={[StyleTransactionHistory.texttime, { color: Theme.color }]}>{item.timeBuy} | {item.orderHour}</Text>
              <View style={StyleTransactionHistory.viewicon}>
                <Text style={[StyleTransactionHistory.texttime, { color: Theme.color }]}>Orders</Text>
                <View style={StyleTransactionHistory.viewiconup}>
                  <Icon name="arrow-up" size={19} color={Theme.color} style={StyleTransactionHistory.iconup} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }


  return (
    <View style={[StyleTransactionHistory.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={StyleTransactionHistory.header}>
        <TouchableOpacity onPress={() => GO_BACK(navigation)} >
          <Icon name="arrow-left" size={30} color={Theme.color} style={StyleTransactionHistory.iconleft} />
        </TouchableOpacity>
        <Text style={[StyleTransactionHistory.textheader, { color: Theme.color }]}>Transaction History</Text>
        <TouchableOpacity style={StyleTransactionHistory.iconsearh} onPress={handleSearchIconPress}>
          <Icon name="magnify" size={30} color={Theme.color} />
        </TouchableOpacity>
      </View>
      {isSearchVisible && (
        <View style={StyleTransactionHistory.searchContainer}>
          <Icon name="magnify" size={20} color="gray" style={StyleTransactionHistory.searchIcon} />
          <TextInput
            style={StyleTransactionHistory.searchInput}
            placeholder="Search by date"
            value={searchDate}
            onChangeText={handleSearch}
            onSubmitEditing={handleSearchSubmit}
          />
        </View>
      )}
      <ScrollView>
        <View style={StyleTransactionHistory.viewlist}>
          <FlashList
            data={historyOrder}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            estimatedItemSize={200}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default TransactionHistory