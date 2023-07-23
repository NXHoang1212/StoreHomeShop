import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl, TouchableWithoutFeedback, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useRef, useContext } from 'react'
import styleMyCart from '../style/styleCart/StyleMycart'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { GO_TO_CHECKOUTORDER } from '../function/NavigationNext'
import { HOST } from '../../config/Constant'
import AxiosInstance from '../../config/context/AxiosIntance'
import { getUserId } from '../../config/service/Utils'
import { FlashList } from '@shopify/flash-list'
import axios from 'axios'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import BottomSheetContent from '../function/BottomSheetContent'
import { CartContext } from '../../config/context/CartContext'
import ThemeContext from '../../config/context/ThemContext'
import { useIsFocused } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

const Cart = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [cartItem, setCartItem] = useState([]);
  const [latestItemId, setLatestItemId] = useState(null); // Lưu id mới nhất của sản phẩm trong giỏ hàng
  const [totalPrice, setTotalPrice] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [status, setStatus] = useState(false); // Lưu trạng thái của sản phẩm trong giỏ hàng [true: đã mua, false: chưa mua
  const bottomSheetModalRef = useRef(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const { decrementCartItem } = useContext(CartContext);
  const Theme = useContext(ThemeContext);
  const logoImage = Theme.image;
  //bottomsheet
  const showBottomSheet = (item) => {
    setSelectedItem(item);
    bottomSheetModalRef.current?.present();
    setIsBottomSheetVisible(true);
  };
  const dismissSheet = () => {
    bottomSheetModalRef.current?.close();
    setSelectedItem(null);
    setIsBottomSheetVisible(false);
  };
  const touchHandleCancel = () => {
    bottomSheetModalRef.current?.close();
    setSelectedItem(null);
  };
  // Gọi API để lấy dữ liệu giỏ hàng
  const fetchCartData = async () => {
    try {
      const userId = await getUserId();
      if (userId) {
        const response = await AxiosInstance().get(`cart/${userId}/getcartitems`);
        const newCartItem = response.productId;
        setCartItem(newCartItem);
        // Lấy id mới nhất của sản phẩm trong giỏ hàng
        const latestItem = newCartItem[newCartItem.length - 1]?.product;
        // Lưu lại id mới nhất của sản phẩm trong giỏ hàng
        setLatestItemId(latestItem);
        console.log('newCartItem', response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Sử dụng useEffect chỉ khi isFocused thay đổi
  useEffect(() => {
    if (isFocused) {
      fetchCartData();
    }
  }, [isFocused]);
  // Gọi API updateCartItem
  const updateCartItem = async () => {
    try {
      const userId = await getUserId(); // Lấy userId
      if (selectedItem) {
        const productId = selectedItem.product; // Lấy productId
        await AxiosInstance().post(`cart/${userId}/updatecartitem`, {
          userId: userId,
          productId: productId,
          quantity: selectedItem.quantity,
        });
        // ToastAndroid.show('Cập nhật sản phẩm thành công', ToastAndroid.SHORT);
        // Gọi lại API để cập nhật dữ liệu giỏ hàng mới
        fetchCartData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Sử dụng useEffect chỉ khi selectedItem thay đổi
  useEffect(() => {
    if (selectedItem) {
      updateCartItem();
    }
  }, [selectedItem]);
  //tổng tiền
  useEffect(() => {
    let total = 0;
    cartItem.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total.toFixed(2));
  }, [cartItem]);
  //api Xóa sản phẩm
  const removeCartItem = async () => {
    try {
      const userId = await getUserId(); // Lấy userId
      if (selectedItem) {
        const productId = selectedItem.product; // Lấy productId
        await axios.delete(`${HOST().HOST}cart/${userId}/removecartitem`, {
          data: {
            userId: userId,
            productId: productId,
          },
        });
        ToastAndroid.show('Xóa sản phẩm thành công', ToastAndroid.SHORT);
        // Gọi lại API để cập nhật dữ liệu giỏ hàng mới
        fetchCartData();
        decrementCartItem();
        console.log('Xóa sản phẩm thành công');
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Sử dụng useEffect chỉ khi selectedItem thay đổi
  useEffect(() => {
    if (selectedItem) {
      console.log('selectedItem', selectedItem.product);
    }
  }, [selectedItem]);
  //cắt chuỗi
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + '...';
    } else {
      return str;
    }
  };
  //bottomsheet
  const renderBottomSheetContent = () => (
    <BottomSheetContent deleteItem={removeCartItem} selectedItem={selectedItem} dismissSheet={dismissSheet} />
  );
  //refresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetchCartData();
    }, 1000);
  }, [refreshing]);
  //thông báo khi có đơn hàng mới
  const sendNotification = async () => {
    const granted = await messaging().requestPermission();
    if (granted) {
      const token = await messaging().getToken();
      AxiosInstance().post(`notification/send-notification/order`, {
        deviceToken: token,
        order: latestItemId,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('No token received');
    }
  }
  //thông báo khi có đơn hàng mới
  useEffect(() => {
    if (latestItemId) {
      sendNotification();
    }
  }, [latestItemId]);
  //render cartItem
  const CartItem = ({ item }) => {
    const decreaseItemQuantity = () => {
      if (item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        setSelectedItem({ ...item, quantity: newQuantity });
      }
    };
    const increaseItemQuantity = () => {
      const newQuantity = item.quantity + 1;
      setSelectedItem({ ...item, quantity: newQuantity });
    };
    return (
      <View style={[styleMyCart.viewcart]}>
        <View style={[styleMyCart.viewcartbody]}>
          <View style={[styleMyCart.viewcart1]}>
            <Image style={[styleMyCart.viewcart1img]}
              source={{ uri: item.image }} />
            <View style={[styleMyCart.viewcart1text]}>
              <View style={[styleMyCart.viewcart1text1]}>
                <Text style={[styleMyCart.cart1text1]}>{truncateString(item.name, 18)}</Text>
                <TouchableOpacity style={styleMyCart.viewicondelelte} onPress={() => showBottomSheet(item)}>
                  <FontAwesome name="trash-alt" size={20} color="#000" />
                </TouchableOpacity>
              </View>
              <Text style={[styleMyCart.cart1text3]}>Black | Size = 42</Text>
              <Text style={[styleMyCart.cart1text2]}>${item.price.toFixed(2)}</Text>
            </View>
          </View>
          <View style={[styleMyCart.viewcart2,]}>
            <View style={[styleMyCart.viewcart2text]}>
              <TouchableOpacity style={styleMyCart.viewiconminus} onPress={decreaseItemQuantity}>
                <Icon name="minus" size={20} color="#000" />
              </TouchableOpacity>
              <Text style={[styleMyCart.viewcart2text1]}>{item.quantity}</Text>
              <TouchableOpacity style={styleMyCart.viewiconplus} onPress={increaseItemQuantity}>
                <Icon name="plus" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View >
    );
  };
  //kiểm tra giỏ hàng
  if (cartItem.length === 0) {
    return (
      <View style={[styleMyCart.viewcontainernoorder, { backgroundColor: Theme.displayColor }]}>
        <View style={styleMyCart.header}>
          <View style={styleMyCart.headerbar}>
            <Image
              style={styleMyCart.headerbaricon}
              source={logoImage}
            />
            <Text style={[styleMyCart.headerbartext, { color: Theme.color }]}>My Cart</Text>
            <TouchableOpacity style={styleMyCart.iconsearch}>
              <Icon name="magnify" size={33} color={Theme.color} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styleMyCart.containernoroder}>
          <View style={styleMyCart.viewheader}>
            <View style={styleMyCart.viewimage}>
              <Image source={require('../../assets/images/noorder.png')} style={styleMyCart.image} />
            </View>
            <View style={styleMyCart.viewtext}>
              <Text style={[styleMyCart.text1, { color: Theme.color }]}>You don't have an order yet</Text>
              <Text style={[styleMyCart.text2, { color: Theme.color }]}>You don't have an active order at this time</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          <TouchableWithoutFeedback onPress={touchHandleCancel}>
            <View style={[styleMyCart.container, { backgroundColor: Theme.displayColor }]}>
              <View style={[styleMyCart.header]}>
                <View style={[styleMyCart.headerbar]}>
                  <Image
                    style={[styleMyCart.headerbaricon]}
                    source={logoImage}
                  />
                  <Text style={[styleMyCart.headerbartext, { color: Theme.color }]}>My Cart</Text>
                  <TouchableOpacity style={[styleMyCart.iconsearch]}>
                    <Icon name="magnify" size={33} color="#000" style={[{ color: Theme.color }]} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styleMyCart.Flashviewcart]}>
                <FlashList
                  data={cartItem}
                  renderItem={({ item }) => <CartItem item={item} />}
                  keyExtractor={(item) => item._id}
                  estimatedItemSize={100}
                />
              </View>
              <View>
                <BottomSheetModal
                  visible={isBottomSheetVisible}
                  ref={bottomSheetModalRef}
                  snapPoints={['50%']}
                  index={0}
                  backgroundStyle={{ borderRadius: 50, backgroundColor: '#fff', [isBottomSheetVisible ? 'opacity' : '']: 1, elevation: 1 }}
                  onDismiss={dismissSheet} >
                  {renderBottomSheetContent()}
                </BottomSheetModal>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        <View style={[styleMyCart.viewcheckout, { backgroundColor: Theme.backgroundView }]}>
          <View style={styleMyCart.viewcheckout1}>
            <Text style={[styleMyCart.texttotal, { color: Theme.color }]}>Total price</Text>
            <Text style={[styleMyCart.textcheckout, { color: Theme.color }]}>${totalPrice}</Text>
          </View>
          <TouchableOpacity onPress={() => GO_TO_CHECKOUTORDER(navigation)} style={[styleMyCart.viewcheckout2]}  >
            <Text style={styleMyCart.textcheckout2}>Checkout</Text>
            <Icon name="arrow-right-thin" size={30} style={{ color: 'white' }} />
          </TouchableOpacity>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default Cart;