import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useRef, useState, useCallback, useContext } from 'react'
import StyleHomShoes from '../style/StylesHomShoes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import images from '../item/ImageHomeShoes'
import {
  GO_TO_NOTIFY, GO_TO_FAVOURITE, GO_TO_SEARCH, GO_TO_NIKE, GO_TO_REEBOOK,
  GO_TO_ADIDAS, GO_TO_PUMA, GO_TO_ASICS, GO_TO_CONVERSE, GO_TO_BALANCIA, GO_TO_NEWBLANCE,
  GO_TO_MOSTPOPULAR, GO_TO_SPECIALOFFERS
} from '../function/NavigationNext'
import ItemShoes from './ItemShoes'
import { FlashList } from "@shopify/flash-list";
import NetInfo from '@react-native-community/netinfo';
import AxiosInstance from '../../config/context/AxiosIntance'
import { getUserId } from '../../config/service/Utils'
import { FavouriteContext } from '../../config/context/FavouriteContext'
import ThemeContext from '../../config/context/ThemContext'
import { useFocusEffect } from '@react-navigation/native'
import { NotifeeContext } from '../../config/context/NotifeeContext'

const getGreeting = () => {
  const currentHour = new Date().getHours();
  let greeting = '';
  if (currentHour >= 5 && currentHour < 11) {
    greeting = 'Good Morning 👋';
  } else if (currentHour >= 11 && currentHour < 17) {
    greeting = 'Good Afternoon 👋';
  } else {
    greeting = 'Good Evening 👋';
  }
  return greeting;
};

const HomeShoes = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [product, setProduct] = useState([]);//useState dùng để lưu trữ giá trị của biến khi render lại
  const [quantityProduct, setQuantityProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [name, setName] = useState('');
  const [imgAvatar, setImgAvatar] = useState('');
  const { FavouriteCount } = useContext(FavouriteContext);
  const Theme = useContext(ThemeContext);
  const { NotifeeCount, SetNotifeeCount } = useContext(NotifeeContext);
  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };
  //chạy ảnh quảng cáo
  const scrollViewRef = useRef(null);//useRef dùng để lưu trữ giá trị của biến khi render lại
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      scrollViewRef.current.scrollTo({//scrollTo dùng để cuộn đến vị trí được chỉ định
        x: nextIndex * 395,//x: 0, y: 0, animated: true,
        y: 0,//x: 0, y: 0,
        animated: true,//animated: true,
      });
      setCurrentIndex(nextIndex);//setCurrentIndex dùng để cập nhật giá trị của currentIndex
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  //kiểm tra kết nối mạng
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);;
      console.log("🚀 ~ file: HomeShoes.js:54 ~ useEffect ~ state.isConnected", state.isConnected)
      console.log("🚀 ~ file: HomeShoes.js:55 ~ useEffect ~ state.details", state.details)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //hiện sản phẩm từ server
  const fetchData = async () => {
    try {
      const response = await AxiosInstance().get(`product`);
      const products = response.map(item => ({
        ...item,
        rating: 4.5,
        views: `8,152`,
      }));
      setProduct(products);
      setIsLoading(false);
      const categories = ['Nike', 'Adidas', 'Puma', 'Asics', 'Reebook', 'NewBalance', 'Converse', 'Balenciaga'];
      categories.forEach(category => {
        const count = products.filter(p => p.categoryId.name === category).length;//filter dùng để lọc các phần tử thỏa mãn điều kiện
        console.log(`Số lượng sản phẩm danh mục "${category}": ${count}`);
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  //thông tin user name với ảnh đại diện
  const fetchUserData = async () => {
    const userId = await getUserId();
    if (userId) {
      const userResponse = await AxiosInstance().get(`api/users/${userId}/updateProfile`);
      setImgAvatar(userResponse.users.imgAvatar);
      setName(userResponse.users.name);
      console.log("🚀 ~ file: Account.js:56 ~ fetchUserData ~ phone:", userResponse.users.name);
      console.log("🚀 ~ file: Account.js:56 ~ fetchUserData ~ imgAvatar:", userResponse.users.imgAvatar);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        fetchUserData();
      });
      fetchUserData();
      return unsubscribe;
    }, [])
  );
  //refresh lại sản phẩm
  const onRefresh = useCallback(() => {
    if (isConnected) {
      fetchData();
    }
    console.log("🚀 ~ file: HomeShoes.js:96 ~ onRefresh ~ isConnected", isConnected)
  }, [isConnected]);
  //lọc sản phẩm theo danh mục
  const filterProductsByCategory = (category) => {
    return product.filter(p => p.categoryId.name === category);
  };
  //lấy sản phẩm từ server chứa 70 sản phẩm 
  useEffect(() => {
    AxiosInstance().get(`product`)
      .then(response => {
        const quanityProduct = response.slice(0, 70).map(item => ({
          ...item,
          rating: 4.5,
          views: `8,152`,
        }));
        const shuffle = (array) => {
          let currentIndex = array.length, randomIndex;
          while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
          }
          return array;
        }//hàm trộn mảng
        const shuffleProduct = shuffle(quanityProduct);
        setQuantityProduct(shuffleProduct);
        console.log("🚀 ~ file: HomeShoes.js:45 ~ useEffect ~ số luong sản phẩm:", quanityProduct.length);
      }).catch(error => {
        console.log(error);
      });
  }, [product]);
  const handleNotifee = () => {
    SetNotifeeCount(-1);
    GO_TO_NOTIFY(navigation)
  };

  return (
    <View style={[StyleHomShoes.container, { backgroundColor: Theme.container }]}>
      <View style={StyleHomShoes.header}>
        <View style={StyleHomShoes.headerboder}>
          {imgAvatar ?
            <Image
              source={{ uri: imgAvatar }}
              style={StyleHomShoes.imageAvatar} /> :
            <Image
              source={require('../../assets/images/avatar.jpg')}
              style={StyleHomShoes.imageAvatar} />
          }
        </View>
        <View style={StyleHomShoes.headerTitle}>
          <Text style={[StyleHomShoes.headerTitleText, { color: Theme.color }]}>
            {getGreeting()}
          </Text>
          <Text style={[StyleHomShoes.headertext, { color: Theme.color }]}>{name}</Text>
        </View>
        <View style={StyleHomShoes.viewicon}>
          <TouchableOpacity onPress={handleNotifee}>
            <Icon name="bell-outline" size={28} color="#494949" style={{ marginLeft: 7, marginTop: 7, color: Theme.color }} />
            {NotifeeCount > 0 ? (
              <View style={StyleHomShoes.notificationCount}>
                <Text style={StyleHomShoes.notificationCountText}>{NotifeeCount}</Text>
              </View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => GO_TO_FAVOURITE(navigation)}>
            <View>
              <Icon name="cards-heart-outline" size={28} color="#494949" style={{ marginLeft: 7, marginTop: 7, color: Theme.color }} />
              {FavouriteCount > 0 ? (
                <View style={StyleHomShoes.favoriteCount}>
                  <Text style={StyleHomShoes.favoriteCountText}>{FavouriteCount}</Text>
                </View>
              ) : null}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={StyleHomShoes.headerinput}>
        <Icon name="magnify" size={25} color="#c9c9c9" style={{ marginLeft: 15, marginTop: 13 }} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#c9c9c9"
          style={[StyleHomShoes.textinput, { fontSize: 16 }]}
          onFocus={() => GO_TO_SEARCH(navigation)}
        />
        <TouchableOpacity>
          <Icon name="tune-variant" size={22} color="#000" style={{ marginTop: 12, right: 45 }} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        <View style={StyleHomShoes.viewtextheader}>
          <TouchableOpacity onPress={() => GO_TO_SPECIALOFFERS(navigation)}>
            <Text style={[StyleHomShoes.textheader, { color: Theme.color }]}>Special Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => GO_TO_SPECIALOFFERS(navigation)}>
            <Text style={[StyleHomShoes.textheader, { color: Theme.color }]}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={StyleHomShoes.viewimage}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            <View style={StyleHomShoes.imageContainer}>
              {images.map((image, index) => (
                <Image key={index} source={image} style={StyleHomShoes.image} />
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={StyleHomShoes.viewcontainercatogory}>
          <View style={StyleHomShoes.viewcategorty1}>
            <TouchableOpacity onPress={() => GO_TO_NIKE(navigation)}>
              <View style={StyleHomShoes.categoryimage}>
                <Image source={require('../../assets/images/nike.png')} style={StyleHomShoes.imagecategory} />
                <Text style={[StyleHomShoes.textcategory, { color: Theme.color }]}>Nike</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => GO_TO_ADIDAS(navigation)}>
              <View style={StyleHomShoes.categoryimage}>
                <Image source={require('../../assets/images/adidas.png')} style={StyleHomShoes.imagecategory} />
                <Text style={[StyleHomShoes.textcategorywidth, { color: Theme.color }]}>Adidas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => GO_TO_PUMA(navigation)}>
              <View style={StyleHomShoes.categoryimage}>
                <Image source={require('../../assets/images/puma.png')} style={StyleHomShoes.imagecategory} />
                <Text style={[StyleHomShoes.textcategory, { color: Theme.color }]}>Puma</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => GO_TO_ASICS(navigation)}>
              <View style={StyleHomShoes.categoryimage}>
                <Image source={require('../../assets/images/asics.png')} style={[StyleHomShoes.imagecategory, { tintColor: 'black' }]} />
                <Text style={[StyleHomShoes.textcategory, { color: Theme.color }]}>Asics</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={StyleHomShoes.viewcategorty2}>
            <TouchableOpacity onPress={() => GO_TO_REEBOOK(navigation)}>
              <View style={StyleHomShoes.categoryimage}>
                <Image source={require('../../assets/images/reebook.png')} style={StyleHomShoes.imagecategory} />
                <Text style={[StyleHomShoes.textcategoryreebok, { color: Theme.color }]}>Reebok</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => GO_TO_NEWBLANCE(navigation)}>
              <View style={StyleHomShoes.categoryimage}>
                <Image source={require('../../assets/images/blance.png')} style={StyleHomShoes.imagecategorybalance} />
                <Text style={[StyleHomShoes.textcategorybalance, { color: Theme.color }]}>New Ba..</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => GO_TO_CONVERSE(navigation)}>
              <View style={StyleHomShoes.categoryimage}>
                <Image source={require('../../assets/images/converse.png')} style={StyleHomShoes.imagecategoryconverse} />
                <Text style={[StyleHomShoes.textcategoryconverse, { color: Theme.color }]}>Converse</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => GO_TO_BALANCIA(navigation)}>
              <View style={StyleHomShoes.categoryimage}>
                <Image source={require('../../assets/images/balenciaga.png')} style={StyleHomShoes.imagecategory} />
                <Text style={[StyleHomShoes.textcategorybalanciga, { color: Theme.color }]}>Balanci..</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={StyleHomShoes.viewtitlecategory}>
            <TouchableOpacity onPress={() => GO_TO_MOSTPOPULAR(navigation)}>
              <Text style={[StyleHomShoes.textheader, { color: Theme.color }]}>Most Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => GO_TO_MOSTPOPULAR(navigation)}>
              <Text style={[StyleHomShoes.textheader, { color: Theme.color }]}>See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={StyleHomShoes.viewtabcontainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={StyleHomShoes.viewtab}>
              <TouchableOpacity style={[StyleHomShoes.tabcontainer, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 1" ? StyleHomShoes.activeTab : null,]}
                onPress={() => handleTabPress("Tab 1")}>
                <View >
                  <Text style={[StyleHomShoes.texttab, { color: Theme.color }, activeTab === "Tab 1" ? StyleHomShoes.activeText : null]}>All</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleHomShoes.tabcontainer, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 2" ? StyleHomShoes.activeTab : null,]}
                onPress={() => handleTabPress("Tab 2")}>
                <View>
                  <Text style={[StyleHomShoes.texttab, { color: Theme.color }, activeTab === "Tab 2" ? StyleHomShoes.activeText : null]}>Nike</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleHomShoes.tabcontainerother, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 3" ? StyleHomShoes.activeTab : null,]}
                onPress={() => handleTabPress("Tab 3")}>
                <View>
                  <Text style={[StyleHomShoes.texttab, { color: Theme.color }, activeTab === "Tab 3" ? StyleHomShoes.activeText : null]}>Adidas</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleHomShoes.tabcontainer, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 4" ? StyleHomShoes.activeTab : null,]}
                onPress={() => handleTabPress("Tab 4")}>
                <View>
                  <Text style={[StyleHomShoes.texttab, { color: Theme.color }, activeTab === "Tab 4" ? StyleHomShoes.activeText : null]}>Puma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleHomShoes.tabcontainer, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 5" ? StyleHomShoes.activeTab : null,]}
                onPress={() => handleTabPress("Tab 5")}>
                <View >
                  <Text style={[StyleHomShoes.texttab, { color: Theme.color }, activeTab === "Tab 5" ? StyleHomShoes.activeText : null]}>Asics</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleHomShoes.tabcontainerother, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 6" ? StyleHomShoes.activeTab : null,]}
                onPress={() => handleTabPress("Tab 6")}>
                <View>
                  <Text style={[StyleHomShoes.texttab, { color: Theme.color }, activeTab === "Tab 6" ? StyleHomShoes.activeText : null]}>Reebok</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleHomShoes.tabcontainerother1, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 7" ? StyleHomShoes.activeTab : null,]}
                onPress={() => handleTabPress("Tab 7")}>
                <View >
                  <Text style={[StyleHomShoes.texttab, { color: Theme.color }, activeTab === "Tab 7" ? StyleHomShoes.activeText : null]}>New Balance</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleHomShoes.tabcontainerother1, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 8" ? StyleHomShoes.activeTab : null,]}
                onPress={() => handleTabPress("Tab 8")}>
                <View>
                  <Text style={[StyleHomShoes.texttab, { color: Theme.color }, activeTab === "Tab 8" ? StyleHomShoes.activeText : null]}>Converse</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[StyleHomShoes.tabcontainerother1, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 9" ? StyleHomShoes.activeTab : null,]}
                onPress={() => handleTabPress("Tab 9")}>
                <View>
                  <Text style={[StyleHomShoes.texttab, { color: Theme.color }, activeTab === "Tab 9" ? StyleHomShoes.activeText : null]}>Balenciaga</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View>
          {activeTab === "Tab 1" ? (
            <View style={StyleHomShoes.viewtabcontent}>
              <FlashList
                numColumns={2}
                data={quantityProduct}
                renderItem={({ item }) => <ItemShoes item={item} />}
                estimatedItemSize={100}
                keyExtractor={(item) => item._id}
                // contentContainerStyle={{ paddingBottom: 120 }}
              />
            </View>
          ) : activeTab === "Tab 2" ? (
            <View style={StyleHomShoes.viewtabcontent}>
              <FlashList
                numColumns={2}
                data={filterProductsByCategory('Nike')}
                renderItem={({ item }) => <ItemShoes item={item} />}
                estimatedItemSize={100}
                keyExtractor={(item) => item._id}
              />
            </View>
          ) : activeTab === "Tab 3" ? (
            <View style={StyleHomShoes.viewtabcontent}>
              <FlashList
                numColumns={2}
                data={filterProductsByCategory('Adidas')}
                renderItem={({ item }) => <ItemShoes item={item} />}
                estimatedItemSize={100}
                keyExtractor={(item) => item._id}
              />
            </View>
          ) : activeTab === "Tab 4" ? (
            <View style={StyleHomShoes.viewtabcontent}>
              <FlashList
                numColumns={2}
                data={filterProductsByCategory('Puma')}
                renderItem={({ item }) => <ItemShoes item={item} />}
                estimatedItemSize={100}
                keyExtractor={(item) => item._id}
              />
            </View>
          ) : activeTab === "Tab 5" ? (
            <View style={StyleHomShoes.viewtabcontent}>
              <FlashList
                numColumns={2}
                data={filterProductsByCategory('Asics')}
                renderItem={({ item }) => <ItemShoes item={item} />}
                estimatedItemSize={100}
                keyExtractor={(item) => item._id}
              />
            </View>
          ) : activeTab === "Tab 6" ? (
            <View style={StyleHomShoes.viewtabcontent}>
              <FlashList
                numColumns={2}
                data={filterProductsByCategory('Reebook')}
                renderItem={({ item }) => <ItemShoes item={item} />}
                estimatedItemSize={100}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : activeTab === "Tab 7" ? (
            <View style={StyleHomShoes.viewtabcontent}>
              <FlashList
                numColumns={2}
                data={filterProductsByCategory('NewBalance')}
                renderItem={({ item }) => <ItemShoes item={item} />}
                estimatedItemSize={300}
                keyExtractor={(item) => item._id}
              />
            </View>
          ) : activeTab === "Tab 8" ? (
            <View style={StyleHomShoes.viewtabcontent}>
              <FlashList
                numColumns={2}
                data={filterProductsByCategory('Converse')}
                renderItem={({ item }) => <ItemShoes item={item} />}
                estimatedItemSize={100}
                keyExtractor={(item) => item._id}
              />
            </View>
          ) : activeTab === "Tab 9" ? (
            <View style={StyleHomShoes.viewtabcontent}>
              <FlashList
                numColumns={2}
                data={product.filter(p => p.categoryId.name === 'Balenciaga')}
                renderItem={({ item }) => <ItemShoes item={item} />}
                estimatedItemSize={100}
                keyExtractor={(item) => item._id}
              />
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeShoes