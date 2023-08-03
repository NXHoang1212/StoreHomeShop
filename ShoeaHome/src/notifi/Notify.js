import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import StyleNotify from '../style/styleNotify/StyleNotify'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK, GO_TO_SHOES } from '../function/NavigationNext'
import { getUserId } from '../../config/service/Utils'
import AxiosInstance from '../../config/context/AxiosIntance'
import { useFocusEffect } from '@react-navigation/native'
import moment from 'moment'
import { SwipeListView } from 'react-native-swipe-list-view'
import ThemeContext from '../../config/context/ThemContext'
import { NotifeeContext } from '../../config/context/NotifeeContext'

const Notify = ({ navigation }) => {
  const [notificationData, setNotificationData] = useState([]);
  const currentDate = moment().format('MM DD, YYYY');
  const Theme = useContext(ThemeContext);
  const { SetNotifeeCount } = useContext(NotifeeContext); // Lấy context từ NotifeeContext giảm số lượng thông báo
  // Lấy thông báo từ server
  const getNotifee = async () => {
    try {
      const userId = await getUserId();
      const response = await AxiosInstance().get(`notification/get-notifee/${userId}`);
      // Truy cập mảng notifications trong response.data
      const notificationData = response;
      setNotificationData(notificationData);
    } catch (error) {
      console.log('Lỗi khi lấy thông báo:', error);
    }
  };

  // Xoá thông báo theo id
  const deleteNotifee = async (item) => {
    try {
      //xóa thông báo trên server theo item id
      const response = await AxiosInstance().delete(`notification/delete-notifee/${item._id}`);
      //xóa thông báo trên client
      const newNotificationData = notificationData.filter(notification => notification._id !== item._id);
      setNotificationData(newNotificationData);
      console.log('Xoá địa chỉ thành công:', response);
      SetNotifeeCount(-1); // Giảm số lượng thông báo
    } catch (error) {
      console.log('Lỗi khi xoá địa chỉ:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        getNotifee();

      });
      getNotifee();

      return unsubscribe;
    }, [])
  );

  const handleNavigation = (item) => {
    if (item.notificationTitle === 'Cart Notification') {
      navigation.navigate('Cart');
    } else if (item.notificationTitle === 'Payment Notification') {
      navigation.navigate('Shoes', { screen: 'Order' });
    } else if (item.notificationTitle === 'Account Setup Successful') {
      navigation.navigate('Profile');
    }
    console.log('item', item);
  };

  const renderHiddenItem = ({ item }) => {
    return (
      <TouchableOpacity style={StyleNotify.rowBack} onPress={() => deleteNotifee(item)}>
        <View style={StyleNotify.backRightBtn}>
          <Icon name="trash-can-outline" size={35} style={StyleNotify.backTexticon} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[StyleNotify.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={StyleNotify.header}>
        <View style={StyleNotify.headerBar}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)} >
            <Icon name="arrow-left" color={Theme.color} size={30} style={StyleNotify.iconBack} />
          </TouchableOpacity>
          <Text style={[StyleNotify.textHeader, { color: Theme.color }]}>Notification</Text>
          <TouchableOpacity style={StyleNotify.iconDots} >
            <Icon name="dots-horizontal-circle-outline" size={30} color={Theme.color} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={StyleNotify.body}>
        <SwipeListView
          data={notificationData}
          renderItem={({ item, index }) => (
            <View style={StyleNotify.containerItem}>
              <Text style={[StyleNotify.textday, { color: Theme.color }]}>
                {/* kiểm tra ngày nếu ngày hiện tại thì hiển thị today còn không thì hiển thị ngày tháng năm */}
                {moment(item.date).format('MM DD, YYYY') === currentDate ? 'Today' : moment(item.date).format('MM DD, YYYY')}
              </Text>
              <View>
                <TouchableOpacity style={[StyleNotify.viewitem, { backgroundColor: Theme.notifeeView }]} onPress={() => handleNavigation(item)}>
                  <View style={StyleNotify.viewicon}>
                    <Icon name="account" size={30} style={StyleNotify.iconaccount} />
                  </View>
                  <View style={StyleNotify.viewtext}>
                    <Text style={[StyleNotify.textTitle, { color: Theme.color }]}>{item.notificationTitle}</Text>
                    <Text style={[StyleNotify.textbody, { color: Theme.color }]}>{item.notificationBody}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-75}
          style={{ marginBottom: '20%' }}
          disableRightSwipe
        />
      </View>
    </View>
  )
}
export default Notify