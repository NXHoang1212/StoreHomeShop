import { View, Text, TouchableOpacity, FlatList, Image, ToastAndroid, ScrollView, RefreshControl } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import StyleAddress from '../../../style/styleAddresses/StyleAddress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GO_BACK, GO_TO_ADDNEWRESS } from '../../../function/NavigationNext';
import { SwipeListView } from 'react-native-swipe-list-view';
import AxiosInstance from '../../../../config/context/AxiosIntance';
import { getUserId } from '../../../../config/service/Utils';
import { useFocusEffect } from '@react-navigation/native';
import ThemeContext from '../../../../config/context/ThemContext';

const Address = ({ navigation, route }) => {
  const [addressList, setAddressList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const Theme = useContext(ThemeContext);
  // hàm refresh màn hình
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);
  // hàm lấy danh sách địa chỉ
  const loadAddressList = async () => {
    const userId = await getUserId();
    try {
      const response = await AxiosInstance().get(`address/${userId}/getAddress`);
      setAddressList(response.addresses);
      console.log("🚀 ~ file: Address.js:30 ~ loadAddressList ~ response:", response)
    } catch (error) {
      console.log('Lỗi khi tải danh sách địa chỉ:', error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        loadAddressList();
      });
      loadAddressList();
      return unsubscribe;
    }, [])
  );
  // hàm xoá địa chỉ
  const handleDeleteAddress = async (item) => {
    if (item.isDefault) {
      ToastAndroid.show('Bạn không thể xóa địa chỉ mặc định', ToastAndroid.SHORT);
      return;
    }
    try {
      const userId = await getUserId();
      const response = await AxiosInstance().delete(`address/${userId}/deleteAddress`, {
        data: {
          addressId: item.addressId,
        },
      });
      console.log('response', response);
      // Xóa địa chỉ khỏi danh sách
      const updatedAddressList = addressList.filter(address => address.addressId !== item.addressId);
      setAddressList(updatedAddressList);
    } catch (error) {
      console.log('Lỗi khi xoá địa chỉ:', error);
    }
  };

  // hàm cập nhật địa chỉ mới swipelisview xoá và cập nhật
  const renderHiddenItem = ({ item }) => {
    return (
      <View style={StyleAddress.rowBack}>
        <TouchableOpacity
          style={StyleAddress.backRightBtn}
          onPress={() => handleDeleteAddress(item)}>
          <Icon name="trash-can-outline" size={27} style={StyleAddress.backTexticon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={StyleAddress.backRightBtn}
          onPress={() => GO_TO_ADDNEWRESS(navigation, item)}>
          <Icon name="pencil" size={27} style={StyleAddress.backTexticon} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    return (
      <View style={[StyleAddress.viewaddress, { backgroundColor: Theme.backgroundColor, }]}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[StyleAddress.addressItem, { backgroundColor: Theme.backgroundBorder }]}>
            <View style={[StyleAddress.viewiconhome, { backgroundColor: Theme.imageBorder }]}>
              <View style={StyleAddress.imageview} />
              <Image source={require('../../../../assets/images/location.png')} style={StyleAddress.iconhome} />
            </View>
            <View style={StyleAddress.viewtextaddress}>
              <View style={StyleAddress.viewdefaultaddress}>
                <Text style={[StyleAddress.textaddresstitle, { color: Theme.color }]}>{item.addressLine1}</Text>
                {item.isDefault && <Text style={StyleAddress.textdefault}>Default</Text>}
              </View>
              <View>
                <Text style={[StyleAddress.textaddressdetail, { color: Theme.color }]}>{item.addressLine2}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };


  return (
    <View style={[StyleAddress.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={StyleAddress.body}>
        <View style={StyleAddress.viewheader}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)}>
            <Icon name="arrow-left" size={28} style={[StyleAddress.iconback, { color: Theme.color }]} />
          </TouchableOpacity>
          <Text style={[StyleAddress.textheader, { color: Theme.color }]}>Address</Text>
        </View>
        <SwipeListView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          data={addressList}
          closeOnRowPress={true}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-145}
          style={StyleAddress.listaddress}
        />
      </View>
      <View style={[StyleAddress.addButtonContainer, { backgroundColor: Theme.backgroundCheckOut }]}>
        <TouchableOpacity
          style={StyleAddress.addButton}
          onPress={() => GO_TO_ADDNEWRESS(navigation)}>
          <Text style={[StyleAddress.addButtonText, { color: Theme.colorTextWhiteBlack }]}>Add New Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Address;
