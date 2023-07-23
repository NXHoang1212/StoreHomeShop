import { View, Text, Image, TouchableOpacity, Alert, Animated, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import StyleHomShoes from '../style/StylesHomShoes'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_TO_SHOESDETAIL } from '../function/NavigationNext'
import { useNavigation } from '@react-navigation/native';
import AxiosInstance from '../../config/context/AxiosIntance'
import { HOST } from '../../config/Constant'
import { getUserId } from '../../config/service/Utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FavouriteContext } from '../../config/context/FavouriteContext'
import ThemeContext from '../../config/context/ThemContext'

const ItemShoes = ({ item, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const [animationValue] = useState(new Animated.Value(0));
  const Easing = require('react-native/Libraries/Animated/Easing');
  const { setFavouriteCount } = useContext(FavouriteContext);
  const Theme = useContext(ThemeContext);
  const [itemVisible, setItemVisible] = useState(false);

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + '...';
    } else {
      return str;
    }
  };
  useEffect(() => {
    const checkFavoriteStatus = async () => {
      const userId = await getUserId();
      if (userId) {
        try {
          const isFavoriteStr = await AsyncStorage.getItem(`favorite_${item._id}`);
          if (isFavoriteStr !== null) {
            const isFavoriteValue = JSON.parse(isFavoriteStr);
            setIsFavorite(isFavoriteValue);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    checkFavoriteStatus();
  }, []);

  useEffect(() => {
    const saveFavoriteStatus = async () => {
      const userId = await getUserId();
      if (userId) {
        try {
          await AsyncStorage.setItem(`favorite_${item._id}`, JSON.stringify(isFavorite));
        } catch (error) {
          console.log(error);
        }
      }
    };
    saveFavoriteStatus();
  }, [isFavorite]);

  const toggleFavorite = async () => {
    const userId = await getUserId();
    if (userId) {
      try {
        if (!isFavorite) {
          const response = await AxiosInstance().post(`heart/${userId}/AddFavourites`, {
            userId: userId,
            productId: item._id,
          });
          Animated.timing(animationValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.linear,
          }).start();
          if (response) {
            setIsFavorite(!isFavorite);
            setFavouriteCount((prevCount) => prevCount + 1);
            ToastAndroid.show('Sản phẩm đã được thêm vào danh sách yêu thích', ToastAndroid.SHORT);
          }
        } else {
          const response = await AxiosInstance().delete(`${HOST().HOST}heart/${userId}/RemoveFavourites`, {
            data: {
              userId: userId,
              productId: item._id,
            },
          });
          if (response) {
            setIsFavorite(!isFavorite);
            setFavouriteCount((prevCount) => prevCount - 1);
            ToastAndroid.show('Sản phẩm đã được xóa khỏi danh sách yêu thích', ToastAndroid.SHORT);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Thông báo', 'Bạn cần đăng nhập để thêm/xóa sản phẩm vào danh sách yêu thích');
    }
  };

  const handlePressNavigation = () => {
    GO_TO_SHOESDETAIL(navigation, item._id);
  };

  const iconheartStyle = {
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 1.5, 1],
        }),
      }
    ],
  };

  return (
    <View style={[StyleHomShoes.viewflash, { backgroundColor: Theme.displayColor, }]}>
      <TouchableOpacity onPress={handlePressNavigation}>
        <View style={[StyleHomShoes.viewbackground, { backgroundColor: Theme.backgroundBorder, }]}>
          <View style={StyleHomShoes.viewitemimage}>
            <FastImage
              source={{
                uri: item.image,
                priority: FastImage.priority.high,
              }}
              style={StyleHomShoes.imageItem}
            />
          </View>
          <TouchableOpacity onPress={toggleFavorite}>
            <View style={StyleHomShoes.viewiconheart}>
              <Animated.View style={[iconheartStyle]}>
                <Icon
                  name={isFavorite ? 'heart' : 'heart-outline'}
                  size={20}
                  color='#fff'
                  style={StyleHomShoes.iconheart}
                />
              </Animated.View>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={[StyleHomShoes.textname, { color: Theme.color }]}>{truncateString(item.name, 18)}</Text>
      </TouchableOpacity>
      <View style={StyleHomShoes.ratingContainer}>
        <View style={StyleHomShoes.viewrating}>
          <Icon name="star" size={15} style={StyleHomShoes.starIcon} />
          <Text style={[StyleHomShoes.ratingText, { color: Theme.color }]}>{item.rating}</Text>
        </View>
        <View style={StyleHomShoes.viewline} />
        <View style={StyleHomShoes.viewsold}>
          <Text style={StyleHomShoes.viewCountText}>{item.views} Sold</Text>
        </View>
      </View>
      <Text style={[StyleHomShoes.texprice, { color: Theme.color }]}>{item.price}</Text>
    </View>
  );
};

export default ItemShoes;