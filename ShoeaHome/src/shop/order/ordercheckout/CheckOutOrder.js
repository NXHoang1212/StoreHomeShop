import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, Alert } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import styleCheckOutOrder from '../../../style/styleOrder/styleCheckOutOrder'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GO_BACK, GO_TO_SHIPPINGADDRESS, GO_TO_CHOOSESHIPPING, GO_TO_PAYMENTMETHOD, GO_TO_PROMOCODE } from '../../../function/NavigationNext';
import { getUserId } from '../../../../config/service/Utils';
import { HOST } from '../../../../config/Constant';
import AxiosInstance from '../../../../config/context/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { OrderContext } from '../../../../config/context/OrderContext';
import { showMessage } from 'react-native-flash-message';
import ThemeContext from '../../../../config/context/ThemContext';

const CheckOutOrder = ({ navigation }) => {
  const [promcode, setPromcode] = useState('')
  const [orderItem, setOrderItem] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [AllTotal, setAllTotal] = useState(0);
  const [address, setAddress] = useState([]);
  const [hasAddress, setHasAddress] = useState(false);
  const Theme = useContext(ThemeContext);
  const route = useRoute();
  const { selectedAddress } = route.params;
  const { selectedShipping, promocode, setPromocode } = useContext(OrderContext);
  // console.log('promocode', promocode);
  // console.log('address', selectedAddress);
  const getCartById = async () => {
    try {
      const userId = await getUserId();
      if (userId) {
        const response = await AxiosInstance().get(`cart/${userId}/getcartitems`);
        // Lọc ra các sản phẩm chưa thanh toán
        const newCartItem = response.productId.filter(item => item.status !== 'paid');
        // Cập nhật dữ liệu giỏ hàng mới
        setCartItem(newCartItem); // Cập nhật dữ liệu giỏ hàng mới
        //lấy id cart
        const cartId = response._id;
        // console.log("🚀 ~ file: CheckOutOrder.js ~ line 65 ~ getCartById ~ cartId", cartId);
        // Lưu cartId vào AsyncStorage
        await AsyncStorage.setItem('cartId', cartId);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCartById();
  }, []);
  useEffect(() => {
    getAddress();
  }, [selectedAddress]);
  //lấy địa chỉ
  const getAddress = async () => {
    try {
      const userId = await getUserId();
      if (userId) {
        const response = await AxiosInstance().get(`address/${userId}/getAddress`);
        const addresses = response.addresses;
        // Kiểm tra nếu có địa chỉ đã chọn từ màn hình "Shipping Address"
        if (selectedAddress) {
          // Tìm địa chỉ đã chọn trong danh sách địa chỉ
          const selected = addresses.find(item => item.addressId === selectedAddress.addressId);
          if (selected) {
            // Cập nhật địa chỉ đã chọn là địa chỉ hiển thị
            setAddress([selected]);
            setHasAddress(true);
          } else {
            setHasAddress(false);
          }
        } else {
          // Lấy địa chỉ mặc định
          const defaultAddress = addresses.filter(item => item.isDefault === true);
          if (defaultAddress.length > 0) {
            setAddress(defaultAddress);
            setHasAddress(true);
          } else {
            setHasAddress(false);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //tính tổng tiền
  useEffect(() => {
    let total = 0;
    cartItem.forEach(item => {
      total += item.price * item.quantity;
    });
    // Làm tròn số đến 2 chữ số thập phân
    total = Math.round(total * 100) / 100;
    setOrderItem(total);
  }, [cartItem]);
  //chức năng xóa mã giảm giả từ context truyền qua dùng cho màn hình này
  const handleRemovePromoCode = () => {
    setPromocode(null);
  };
  //chức năng nhập mã giảm giá từ context truyền qua dùng cho màn hình này
  const handlePromoCode = () => {
    // Kiểm tra nếu mã giảm giá đã được nhập
    if (promcode) {
      // Gọi API để lấy thông tin mã giảm giá
      getPromoCodeInfo(promcode).then(promo => {
        // Kiểm tra kết quả từ API
        if (promo) {
          // Cập nhật mã giảm giá vào context
          setPromocode(promo);
        } else {
          // Hiển thị thông báo lỗi
          Alert.alert('Error', 'Invalid promo code');
        }
      });
    }
  };
  // Hàm để lấy thông tin mã giảm giá từ nguồn dữ liệu
  const getPromoCodeInfo = async (promoCode) => {
    try {
      // Gọi API để lấy thông tin mã giảm giá
      const response = await AxiosInstance().get(`promo/getallpromo`);
      // Kiểm tra kết quả từ API
      if (response) {
        // Tìm mã giảm giá tương ứng với promoCode
        const promo = response.find(item => item.code === promoCode);
        if (promo) {
          // Trả về đối tượng mã giảm giá nếu tìm thấy
          return {
            code: promo.code,
            discount: promo.discount,
            // Bạn có thể bao gồm các thuộc tính khác từ đối tượng mã giảm giá nếu cần
          };
        }
      }
    } catch (error) {
      // Xử lý lỗi khi gọi API
      console.error(error);
    }
    // Trả về null nếu không tìm thấy mã giảm giá hoặc có lỗi khi gọi API
    return null;
  };
  //tính tổng tiền toàn bộ đơn hàng shipping + giá sản phẩm - giảm giá
  useEffect(() => {
    let total = 0;
    cartItem.forEach(item => {
      total += item.price * item.quantity;
    });
    // Làm tròn số đến 2 chữ số thập phân
    total = Math.round(total * 100) / 100;
    if (selectedShipping) {
      total += selectedShipping.price;
    }
    if (promocode) {
      total -= promocode.discount;
    }
    setAllTotal(total);
  }, [orderItem, selectedShipping, promocode]);
  //thêm đơn hàng
  const addOrder = async () => {
    try {
      const userId = await getUserId();
      if (userId) {
        let addressId = null;
        if (selectedAddress) {
          addressId = selectedAddress._id;
        } else if (address.length > 0) {
          addressId = address[0]._id;
        }
        if (!selectedShipping) {
          showMessage({
            message: "Error",
            description: "Please choose shipping type",
            type: "danger",
            icon: 'danger'
          })
          return;
        }
        // Gọi API để thêm đơn hàng
        const response = await AxiosInstance().post(`order/${userId}/addorder`, {
          userId: userId,
          products: cartItem,
          //cho phép chọn địa chỉ hoặc lấy địa chỉ mặc định
          addressId: addressId,
          total: AllTotal,
          shippingId: selectedShipping._id,
          promoCode: promocode._id,
        });
        //lấy id order
        const orderId = response._id;
        console.log("🚀 ~ file: CheckOutOrder.js ~ line 258 ~ addOrder ~ orderId", orderId)
        // Lưu orderId vào AsyncStorage
        await AsyncStorage.setItem('orderId', orderId);
        GO_TO_PAYMENTMETHOD(navigation);
        // console.log("🚀 ~ file: CheckOutOrder.js ~ line 258 ~ addOrder ~ order", addressId)
        // console.log("🚀 ~ file: CheckOutOrder.js ~ line 258 ~ addOrder ~ order", order)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[styleCheckOutOrder.container, { backgroundColor: Theme.backgroundColor }]}>
        <View style={styleCheckOutOrder.header}>
          <View style={styleCheckOutOrder.headerbar}>
            <TouchableOpacity style={styleCheckOutOrder.iconback} onPress={() => GO_BACK(navigation)}>
              <Icon name="arrow-left" size={30} color={Theme.color} />
            </TouchableOpacity>
            <Text style={[styleCheckOutOrder.headerbartext, { color: Theme.color }]}>Checkout</Text>
            <TouchableOpacity style={styleCheckOutOrder.iconother}>
              <Icon name="dots-horizontal-circle-outline" size={28} color={Theme.color} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styleCheckOutOrder.body}>
          <View style={styleCheckOutOrder.address}>
            <Text style={[styleCheckOutOrder.addresstext, { color: Theme.color }]}>Shipping Address</Text>
            <View style={styleCheckOutOrder.viewaddress}>
              {hasAddress ? (
                address.map((item, index) => (
                  <View style={[styleCheckOutOrder.viewaddressitem, { backgroundColor: Theme.backgroundPorfile }]} key={index}>
                    <View style={styleCheckOutOrder.viewimageaddress}>
                      <View style={styleCheckOutOrder.backgroundimage} />
                      <Image source={require('../../../../assets/images/location.png')} style={styleCheckOutOrder.imageaddress} />
                    </View>
                    <View style={styleCheckOutOrder.viewitemaddress}>
                      <View style={styleCheckOutOrder.viewiconedit}>
                        <Text style={[styleCheckOutOrder.textname, { color: Theme.color }]}>{item.addressLine1}</Text>
                        <TouchableOpacity style={styleCheckOutOrder.iconedit} onPress={() => GO_TO_SHIPPINGADDRESS(navigation)}>
                          <Icon name="pencil" size={23} color={Theme.color} />
                        </TouchableOpacity>
                      </View>
                      <Text style={[styleCheckOutOrder.textsize, { color: Theme.color }]}>{item.addressLine2}</Text>
                    </View>
                  </View>
                ))
              ) : (
                <View >
                  <TouchableOpacity style={[styleCheckOutOrder.viewaddressitem, { backgroundColor: Theme.backgroundPorfile }]} onPress={() => GO_TO_SHIPPINGADDRESS(navigation)}>
                    <View style={styleCheckOutOrder.viewimageaddress}>
                      <View style={styleCheckOutOrder.backgroundimage} />
                      <Image source={require('../../../../assets/images/location.png')} style={styleCheckOutOrder.imageaddress} />
                    </View>
                    <View style={styleCheckOutOrder.viewitemaddress}>
                      <View style={styleCheckOutOrder.viewiconedit}>
                        <Text style={[styleCheckOutOrder.textname, { color: Theme.color }]}>Add New Address</Text>
                        <Icon name="plus" size={30} color={Theme.color} style={styleCheckOutOrder.hideiconedit} />
                      </View>
                      <Text style={[styleCheckOutOrder.textsize, { color: Theme.color }]}>Add your address</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          <View style={styleCheckOutOrder.line} />
          <View style={styleCheckOutOrder.orderlist}>
            <Text style={[styleCheckOutOrder.orderlisttext, { color: Theme.color }]}>Order List</Text>
            <ScrollView>
              <View style={styleCheckOutOrder.vieworderlist}>
                {cartItem.map((item, index) => {
                  return (
                    <View style={[styleCheckOutOrder.viewrenderItem, { backgroundColor: Theme.backgroundPorfile }]} key={index}>
                      <View style={styleCheckOutOrder.viewproduct}>
                        <View style={styleCheckOutOrder.viewimage}>
                          <Image source={{ uri: item.image }} style={styleCheckOutOrder.image} />
                        </View>
                        <View style={styleCheckOutOrder.viewtext}>
                          <Text style={[styleCheckOutOrder.textname, { color: Theme.color }]}>{item.name}</Text>
                          <Text style={[styleCheckOutOrder.textsize, { color: Theme.color }]}>Black | Size = 42</Text>
                          <View style={styleCheckOutOrder.viewquantity}>
                            <Text style={[styleCheckOutOrder.textprice, { color: Theme.color }]}>${item.price.toFixed(2)}</Text>
                            <Text style={styleCheckOutOrder.textquantity}>{item.quantity}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  )
                })}
              </View>
            </ScrollView>
          </View>
          <View style={styleCheckOutOrder.line} />
          <Text style={[styleCheckOutOrder.textchooseshipping, { color: Theme.color }]}>Choose Shipping</Text>
          <View >
            <TouchableOpacity style={[styleCheckOutOrder.viewshipping, { backgroundColor: Theme.backgroundPorfile }]} onPress={() => GO_TO_CHOOSESHIPPING(navigation)}>
              {!selectedShipping ? (
                <>
                  <Icon name="truck" size={30} color={Theme.color} style={styleCheckOutOrder.iconship} />
                  <Text style={[styleCheckOutOrder.textshipping, { color: Theme.color }]}>Choose Shipping Type</Text>
                  <Icon name="chevron-right" size={30} color={Theme.color} style={styleCheckOutOrder.iconright} />
                </>
              ) : (
                <View style={[styleCheckOutOrder.viewshippingitem, { backgroundColor: Theme.backgroundPorfile }]}>
                  <View style={[styleCheckOutOrder.viewiconitemship, { backgroundColor: Theme.backgroundPorfile }]}>
                    <Icon name={selectedShipping.icon} size={23} color={Theme.color} style={styleCheckOutOrder.iconshipitem} />
                  </View>
                  <View>
                    <Text style={[styleCheckOutOrder.textshipping, { color: Theme.color }]}>{selectedShipping.title}</Text>
                    <Text style={[styleCheckOutOrder.textshippingitem, { color: Theme.color }]}>{selectedShipping.name}</Text>
                  </View>
                  <Text style={[styleCheckOutOrder.textshipping, { color: Theme.color }]}>${selectedShipping.price}</Text>
                  <Icon name="pencil-outline" size={30} color={Theme.color} style={styleCheckOutOrder.iconright} />
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styleCheckOutOrder.line} />
          <Text style={[styleCheckOutOrder.textpromocode, { color: Theme.color }]}>Promo Code</Text>
          <View style={styleCheckOutOrder.promcode}>
            {!promocode ? (
              <TextInput
                style={[styleCheckOutOrder.inputpromcode, { backgroundColor: Theme.backgroundPorfile }]}
                placeholder="Enter Promo Code"
                placeholderTextColor={Theme.color}
                value={promcode}
                onChangeText={setPromcode}
                onSubmitEditing={handlePromoCode}
              />

            ) : (
              <View style={[styleCheckOutOrder.viewpromocode, { backgroundColor: Theme.backgroundPorfile }]}>
                <Text style={[styleCheckOutOrder.textpromocodeitem, { color: Theme.color }]}>{promocode.code}</Text>
                <TouchableOpacity onPress={handleRemovePromoCode}>
                  <Icon name="close" size={22} color={Theme.color} style={styleCheckOutOrder.iconright} />
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity onPress={() => GO_TO_PROMOCODE(navigation)}>
              <Icon name="plus-circle" size={39} color={Theme.color} style={styleCheckOutOrder.iconright} />
            </TouchableOpacity>
          </View>
          <View style={[styleCheckOutOrder.viewtotalbill, { backgroundColor: Theme.backgroundPorfile }]}>
            <View style={styleCheckOutOrder.viewamount}>
              <Text style={[styleCheckOutOrder.textamount, { color: Theme.color }]}>Amount</Text>
              <Text style={[styleCheckOutOrder.textamount, { color: Theme.color }]}>${orderItem}</Text>
            </View>
            <View style={styleCheckOutOrder.viewtotalshipping}>
              <Text style={[styleCheckOutOrder.texttotalshipping, { color: Theme.color }]}>Shipping</Text>
              <Text style={[styleCheckOutOrder.textpricetotalshipping, { color: Theme.color }]}>{selectedShipping ? `$${selectedShipping.price}` : '$0'}.00</Text>
            </View>
            {promocode ? (
              <View style={styleCheckOutOrder.viewtotalshipping}>
                <Text style={[styleCheckOutOrder.texttotalshipping, { color: Theme.color }]}>Promo</Text>
                <Text style={[styleCheckOutOrder.textpricetotalshipping, { color: Theme.color }]}>-${promocode.discount}.00</Text>
              </View>
            ) : null}
            <View style={styleCheckOutOrder.linetotal} />
            <View style={styleCheckOutOrder.viewtotal}>
              <Text style={[styleCheckOutOrder.texttotal, { color: Theme.color }]}>Total</Text>
              <Text style={[styleCheckOutOrder.texttotal, { color: Theme.color }]}>${AllTotal.toFixed(2)}</Text>
            </View>
          </View>
        </View>
        <View style={styleCheckOutOrder.viewbutton}>
          <TouchableOpacity style={[styleCheckOutOrder.button, { backgroundColor: Theme.backgroundCheckOut }]}
            onPress={addOrder}>
            <Text style={[styleCheckOutOrder.textbutton, { color: Theme.colorTextWhiteBlack }]}>Continue to Payment</Text>
            <Icon name="chevron-right" size={30} color={Theme.colorTextWhiteBlack} style={styleCheckOutOrder.iconrighttotal} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default CheckOutOrder