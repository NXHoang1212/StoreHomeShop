import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, Alert, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GO_BACK, GO_TO_SEARCH, GO_TO_SHOESDETAIL } from '../function/NavigationNext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import { FlashList } from '@shopify/flash-list';
import StyleWhistList from '../style/styleFavourite/StyleWhistList';
import { HOST } from '../../config/Constant';
import AxiosInstance from '../../config/context/AxiosIntance';
import { getUserId } from '../../config/service/Utils';
import { useNavigation } from '@react-navigation/native';
import { FavouriteContext } from '../../config/context/FavouriteContext';

const Favourite = ({ item }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const navigation = useNavigation();
  const { decrementFavourite } = useContext(FavouriteContext);
  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    getFavoriteItems();
  }, []);
  //hiện danh sách sản phẩm yêu thích
  const getFavoriteItems = async () => {
    const userId = await getUserId();
    if (userId) {
      try {
        const response = await AxiosInstance().get(`${HOST().HOST}heart/${userId}/GetFavourites`);
        const products = response.productId.map(item => ({
          ...item,
          rating: 4.5,
          views: `8,152`,
        }));
        setFavoriteItems(products);
        // console.log(products[0]._id);
      } catch (error) {
        console.log(error);
      }
    }
  };
  //xóa sản phẩm khỏi danh sách yêu thích
  const removeFavoriteItem = async (item) => {
    const userId = await getUserId();
    if (userId) {
      try {
        const response = await AxiosInstance().delete(`${HOST().HOST}heart/${userId}/RemoveFavourites`, {
          data: {
            userId: userId,
            productId: item._id,
          },
        });
        if (response) {
          decrementFavourite();
          getFavoriteItems();
          ToastAndroid.show('Remove Favourite Success', ToastAndroid.SHORT);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  //render sản phẩm yêu thích
  const RenderItemShoes = ({ item }) => {
    const truncateString = (str, maxLength) => {
      if (str.length > maxLength) {
        return str.substring(0, maxLength - 3) + '...';
      } else {
        return str;
      }
    };
    return (
      <View style={StyleWhistList.viewflash}>
        <TouchableOpacity onPress={() => handlePressNavigation(item._id)}>
          <View style={StyleWhistList.viewbackground}>
            <View style={StyleWhistList.viewitemimage}>
              <FastImage
                source={{
                  uri: item.image,
                  priority: FastImage.priority.high,
                }}
                style={StyleWhistList.imageItem}
              />
            </View>
            <TouchableOpacity onPress={() => removeFavoriteItem(item)} >
              <View style={StyleWhistList.viewiconheart}>
                <Icon
                  name="heart"
                  size={20}
                  color="#fff"
                  style={StyleWhistList.iconheart}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={StyleWhistList.textname}>
            {truncateString(item.name, 18)}
          </Text>
        </TouchableOpacity>
        <View style={StyleWhistList.ratingContainer}>
          <View style={StyleWhistList.viewrating}>
            <Icon name="star" size={15} style={StyleWhistList.starIcon} />
            <Text style={StyleWhistList.ratingText}>{item.rating}</Text>
          </View>
          <View style={StyleWhistList.viewline} />
          <View style={StyleWhistList.viewsold}>
            <Text style={StyleWhistList.viewCountText}>{item.views} Sold</Text>
          </View>
        </View>
        <Text style={StyleWhistList.texprice}>${item.price.toFixed(2)}</Text>
      </View>
    );
  };
  //lọc sản phẩm theo danh mục
  const filterItemsByCategory = (items, category) => {
    if (category === "All") {
      return items;
    }
    console.log(items);
    return items.filter((item) => {
      return item.categoryId.name === category;
    });
  };
  //hiện danh mục sản phẩm
  const filteredItems = filterItemsByCategory(favoriteItems, activeTab);
  //chuyển đến trang chi tiết sản phẩm
  const handlePressNavigation = (_id) => {
    navigation.navigate('ShoesDetail', { id: _id });
  };
  return (
    <View style={StyleWhistList.container}>
      <View style={StyleWhistList.header}>
        <View style={StyleWhistList.headerbar}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)}>
            <Icon
              name="arrow-left"
              size={30}
              color="#000"
              style={StyleWhistList.iconback}
            />
          </TouchableOpacity>
          <Text style={StyleWhistList.title}>My WhistList</Text>
          <TouchableOpacity
            style={StyleWhistList.iconsearch}
            onPress={() => GO_TO_SEARCH(navigation)}
          >
            <Icon name="magnify" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={StyleWhistList.viewbody}>
        <View style={StyleWhistList.viewtab}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={StyleWhistList.viewtab}>
              <TouchableOpacity style={[StyleWhistList.tabcontainer, activeTab === "All" ? StyleWhistList.activeTab : null]} onPress={() => handleTabPress("All")}>
                <View >
                  <Text style={[StyleWhistList.texttab, activeTab === "All" ? StyleWhistList.activeText : null]}>All</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleWhistList.tabcontainer, activeTab === "Nike" ? StyleWhistList.activeTab : null]} onPress={() => handleTabPress("Nike")}   >
                <View>
                  <Text style={[StyleWhistList.texttab, activeTab === "Nike" ? StyleWhistList.activeText : null]}>Nike</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleWhistList.tabcontainer, activeTab === "Adidas" ? StyleWhistList.activeTab : null]} onPress={() => handleTabPress("Adidas")}>
                <View>
                  <Text style={[StyleWhistList.texttab, activeTab === "Adidas" ? StyleWhistList.activeText : null]}>Adidas</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleWhistList.tabcontainer, activeTab === "Puma" ? StyleWhistList.activeTab : null,]}
                onPress={() => handleTabPress("Puma")}>
                <View>
                  <Text style={[StyleWhistList.texttab, activeTab === "Puma" ? StyleWhistList.activeText : null]}>Puma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleWhistList.tabcontainer, activeTab === "Asics" ? StyleWhistList.activeTab : null,]}
                onPress={() => handleTabPress("Asics")}>
                <View >
                  <Text style={[StyleWhistList.texttab, activeTab === "Asics" ? StyleWhistList.activeText : null]}>Asics</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleWhistList.tabcontainerother, activeTab === "Reebook" ? StyleWhistList.activeTab : null,]}
                onPress={() => handleTabPress("Reebook")}>
                <View>
                  <Text style={[StyleWhistList.texttab, activeTab === "Reebook" ? StyleWhistList.activeText : null]}>Reebook</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleWhistList.tabcontainerother1, activeTab === "New Balance" ? StyleWhistList.activeTab : null,]}
                onPress={() => handleTabPress("New Balance")}>
                <View >
                  <Text style={[StyleWhistList.texttab, activeTab === "New Balance" ? StyleWhistList.activeText : null]}>New Balance</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleWhistList.tabcontainerother1, activeTab === "Converse" ? StyleWhistList.activeTab : null,]}
                onPress={() => handleTabPress("Converse")}>
                <View>
                  <Text style={[StyleWhistList.texttab, activeTab === "Converse" ? StyleWhistList.activeText : null]}>Converse</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleWhistList.tabcontainerother1, activeTab === "Balenciaga" ? StyleWhistList.activeTab : null,]}
                onPress={() => handleTabPress("Balenciaga")}>
                <View>
                  <Text style={[StyleWhistList.texttab, activeTab === "Balenciaga" ? StyleWhistList.activeText : null]}>Balenciaga</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View>
          <View style={StyleWhistList.viewactivetab}>
            {activeTab === "All" || activeTab === "Nike" || activeTab === "Adidas" || activeTab === "Puma" || activeTab === "Asics" || activeTab === "Reebook" || activeTab === "New Balance" || activeTab === "Converse" || activeTab === "Balenciaga" ? (
              <View style={StyleWhistList.viewtabcontent}>
                <FlashList
                  numColumns={2}
                  estimatedItemSize={100}
                  data={filteredItems}
                  renderItem={({ item }) => <RenderItemShoes item={item} />}
                  contentContainerStyle={{ paddingBottom: 250 }}
                />
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Favourite;
