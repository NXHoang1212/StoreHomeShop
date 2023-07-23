import { View, Text, TouchableOpacity, FlatList, Image, RefreshControl } from 'react-native';
import React, { useState, useCallback, useRef, useContext } from 'react';
import { GO_BACK } from '../../../function/NavigationNext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StyleInviteFriends from '../../../style/StyleInviteFriends';
import InviteYourFriends from './ArrayInviteFriend';
import share from 'react-native-share';
import { FlashList } from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';
import ThemeContext from '../../../../config/context/ThemContext';

const InviteFriends = ({ navigation }) => {
  const { Invite, refreshImages } = InviteYourFriends();
  const [refreshing, setRefreshing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(Date.now());
  const Theme = useContext(ThemeContext);

  const onShare = async () => {
    const shareOptions = {
      message: 'Invite your friends to join the app',
      url: 'https://www.facebook.com/profile.php?id=100034854099513/',
    };
    try {
      const ShareResponse = await share.open(shareOptions);
      console.log("🚀 ~ file: InviteFriends.js:19 ~ onShare ~ ShareResponse:", ShareResponse);
    } catch (error) {
      console.log("🚀 ~ file: InviteFriends.js:21 ~ onShare ~ error", error);
    }
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      refreshImages(); // Gọi hàm refreshImages để cập nhật lại ảnh
      setRefreshing(false);
    }, 2000);
  }, [refreshImages]);
  return (
    <View style={[StyleInviteFriends.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={[StyleInviteFriends.body, { backgroundColor: Theme.backgroundColor }]}>
        <View style={StyleInviteFriends.viewheader}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)}>
            <Icon name="arrow-left" size={30} style={[StyleInviteFriends.iconback, { color: Theme.color }]} />
          </TouchableOpacity>
          <Text style={[StyleInviteFriends.textheader, { color: Theme.color }]}>Invite Friends</Text>
        </View>
        <View style={StyleInviteFriends.viewbody}>
          <FlashList
            estimatedItemSize={250}
            showsVerticalScrollIndicator={false}
            data={Invite}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 150 }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            renderItem={({ item }) => (
              <View style={StyleInviteFriends.viewitem}>
                <View style={StyleInviteFriends.viewimage}>
                  <FastImage
                    style={StyleInviteFriends.image}
                    source={{
                      uri: `${item.image}?${refreshKey}`, // Thêm khóa refresh vào URL
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
                <View style={StyleInviteFriends.viewtitle}>
                  <Text style={[StyleInviteFriends.texttitle, { color: Theme.color }]}>{item.title}</Text>
                  <Text style={[StyleInviteFriends.textmessage, { color: Theme.color }]}>{item.message}</Text>
                </View>
                <TouchableOpacity onPress={onShare}>
                  <View style={[StyleInviteFriends.viewbutton, { backgroundColor: Theme.backgroundInvite }]}>
                    <Text style={StyleInviteFriends.textbutton}>Invite</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default InviteFriends;