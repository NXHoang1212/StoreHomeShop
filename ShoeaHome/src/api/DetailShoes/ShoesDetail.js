import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import { HOST } from '../../../config/Constant'
import FastImage from 'react-native-fast-image'
import styleShoeSDetail from '../../style/styleShoes/StyleShoesDetail'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK } from '../../function/NavigationNext'
import ItemSize from '../../item/itemSizeColor/ItemSize'
import ItemColor from '../../item/itemSizeColor/ItemColor'
import AxiosInstance from '../../../config/context/AxiosIntance'
import { getUserId } from '../../../config/service/Utils'
import { CartContext } from '../../../config/context/CartContext'
import { createdNotifeeCart } from '../../../config/service/Notifee'
import { NotifeeContext } from '../../../config/context/NotifeeContext'
import ThemeContext from '../../../config/context/ThemContext'

const ShoesDetail = ({ navigation, route }) => {
  const { id } = route.params
  console.log("🚀 ~ file: ShoesDetail.js:22 ~ ShoesDetail ~ id", id)
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [showFullDescription, setShowFullDescription] = useState(false); // State để điều khiển việc hiển thị và ẩn mô tả đầy đủ
  const [rating, setRating] = useState('')
  const [views, setViews] = useState('')
  const [selectedSize, setSelectedSize] = useState(null);//chọn size
  const [selectedColor, setSelectedColor] = useState(null);//chọn màu
  const [quantity, setQuantity] = useState(1);//số lượng
  const [cartItems, setCartItems] = useState([]);
  const { setCartItemCount } = useContext(CartContext);
  const { SetNotifeeCount } = useContext(NotifeeContext);
  const Theme = useContext(ThemeContext)
  useEffect(() => {
    AxiosInstance().get(`product/${id}/detail`)
      .then(function (res) {
        setName(res.product.name);
        setImage(res.product.image);
        setPrice(res.product.price);
        setDescription(res.product.description);
        setRating(4.5); // Đặt giá trị cứng cho rating
        setViews(`8,152`); // Đặt giá trị cứng cho views
        console.log("🚀 ~ file: ShoesDetail.js:22 ~ useEffect ~ res", name)
      })
      .catch(function (error) {
        console.log("🚀 ~ file: ShoesDetail.js:22 ~ useEffect ~ err", error)
      })
  }, [])
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription); // Khi nhấn vào, đảo ngược giá trị của state showFullDescription
  };
  const handleSizePress = (size) => {
    setSelectedSize(size); // Cập nhật item được chọn
  };
  const handleColorPress = (color) => {
    setSelectedColor(color);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const addToCart = async () => {
    const userId = await getUserId();
    const data = {
      userId: userId,
      productId: id,
      quantity: quantity,
    };
    console.log("🚀 ~ file: ShoesDetail.js:22 ~ addToCart ~ data", data)
    AxiosInstance().post(`cart/${userId}/addtocart`, data)
      .then(function (res) {
        setCartItems((prevCartItems) => [...prevCartItems, res]);
        setCartItemCount((prevCount) => prevCount + quantity); // Thay đổi số lượng mặt hàng trong giỏ hàng
        console.log("🚀 ~ file: ShoesDetail.js:22 ~ addToCart ~ res", setCartItemCount)
        console.log("🚀 ~ file: ShoesDetail.js:22 ~ addToCart ~ res", res)
        handleNotification();
      })
      .catch(function (error) {
        console.log("🚀 ~ file: ShoesDetail.js:22 ~ addToCart ~ error", error)
      })
  };
  const handleNotification = () => {
    createdNotifeeCart();
    SetNotifeeCount((prevCount) => prevCount + 1);
  };
  return (
    <View style={[styleShoeSDetail.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={[styleShoeSDetail.header, { backgroundColor: Theme.backgroundBorder }]}>
        <Icon name="arrow-left" size={33} color={Theme.color} style={styleShoeSDetail.iconback} onPress={() => GO_BACK(navigation)} />
        <FastImage
          style={styleShoeSDetail.image}
          source={{
            uri: image,
            priority: FastImage.priority.high,
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styleShoeSDetail.viewbody}>
          <View style={styleShoeSDetail.namebody}>
            <Text style={[styleShoeSDetail.name, { color: Theme.color }]}>{name}</Text>
            <TouchableOpacity>
              <Icon name="heart-outline" size={30} color={Theme.color} style={styleShoeSDetail.iconheart} />
            </TouchableOpacity>
          </View>
          <View style={styleShoeSDetail.viewrating}>
            <View style={[styleShoeSDetail.views, { backgroundColor: Theme.backgroundBorderTwo }]}>
              <Text style={[styleShoeSDetail.textviews, { color: Theme.color }]}>{views} sold</Text>
            </View>
            <View style={styleShoeSDetail.ratingreviews}>
              <Icon name="star" size={20} color={Theme.color} style={styleShoeSDetail.starIcon} />
              <Text style={[styleShoeSDetail.rating, { color: Theme.color }]}>{rating} (5,389reviews)</Text>
            </View>
          </View>
          <View style={styleShoeSDetail.line} />
          <View style={styleShoeSDetail.viewdescription}>
            <Text style={[styleShoeSDetail.titledescription, { color: Theme.color }]}>Description</Text>
            <Text style={[styleShoeSDetail.description, { color: Theme.color }]}>
              {description ? (showFullDescription ? description : description.substring(0, 95)) : ''}
              <TouchableOpacity onPress={toggleDescription}>
                <Text style={showFullDescription ? styleShoeSDetail.viewless : styleShoeSDetail.viewmore}>
                  {showFullDescription ? 'view less...' : 'view more...'}
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={styleShoeSDetail.viewsizecolor}>
            <View style={styleShoeSDetail.viewsize}>
              <Text style={[styleShoeSDetail.titlesize, { color: Theme.color }]}>Size</Text>
              <Text style={[styleShoeSDetail.titlecolor, { color: Theme.color }]}>Color</Text>
            </View>
            <View style={styleShoeSDetail.viewitemrender}>
              <View style={styleShoeSDetail.itemsize}>
                <ItemSize item="35" onPress={handleSizePress} selected={selectedSize} />
                <ItemSize item="37" onPress={handleSizePress} selected={selectedSize} />
                <ItemSize item="41" onPress={handleSizePress} selected={selectedSize} />
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styleShoeSDetail.itemColor}>
                  <ItemColor color="#393939" onPress={handleColorPress} selected={selectedColor} />
                  <ItemColor color="gray" onPress={handleColorPress} selected={selectedColor} />
                  <ItemColor color="#0037ff" onPress={handleColorPress} selected={selectedColor} />
                  <ItemColor color="#f300f7" onPress={handleColorPress} selected={selectedColor} />
                  <ItemColor color="#FFA500" onPress={handleColorPress} selected={selectedColor} />
                  <ItemColor color="#00f746" onPress={handleColorPress} selected={selectedColor} />
                  <ItemColor color="#f70000" onPress={handleColorPress} selected={selectedColor} />
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styleShoeSDetail.viewquantity}>
            <Text style={[styleShoeSDetail.titlequantity, { color: Theme.color }]}>Quantity</Text>
            <View style={[styleShoeSDetail.viewbuttonquantity, { backgroundColor: Theme.backgroundBorderTwo }]}>
              <TouchableOpacity onPress={decreaseQuantity}>
                <Icon name="minus" size={21} color={Theme.color} style={styleShoeSDetail.iconminus} />
              </TouchableOpacity>
              <Text style={[styleShoeSDetail.quantity, { color: Theme.color }]}>{quantity}</Text>
              <TouchableOpacity onPress={increaseQuantity}>
                <Icon name="plus" size={21} color={Theme.color} style={styleShoeSDetail.iconplus} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styleShoeSDetail.line} />
          <View style={styleShoeSDetail.viewtotalpriceAddcart}>
            <View style={styleShoeSDetail.viewtotalprice}>
              <Text style={[styleShoeSDetail.titleprice, { color: Theme.color }]}>Total price</Text>
              <Text style={[styleShoeSDetail.price, { color: Theme.color }]}>${price ? price.toFixed(2) : ''}</Text>
            </View>
            <TouchableOpacity onPress={addToCart}>
              <View style={[styleShoeSDetail.addtocart, { backgroundColor: Theme.backgroundCheckOut }]}>
                <Icon name="shopping" size={22} color={Theme.colorTextWhiteBlack} style={styleShoeSDetail.iconcart} />
                <Text style={[styleShoeSDetail.textaddcart, { color: Theme.colorTextWhiteBlack }]}>Add to cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View >
  )
}

export default ShoesDetail