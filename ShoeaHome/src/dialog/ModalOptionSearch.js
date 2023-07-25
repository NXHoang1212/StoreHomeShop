import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StyleSheet, Animated, ScrollView } from 'react-native';
import styleModalOptionSearch from '../style/StyleModalOptionSearch';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RangerPrice from './RangerPrice';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AxiosInstance from '../../config/context/AxiosIntance';

const ModalOptionSearch = ({ visible, setModalVisible, navigation }) => {
  // const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [showBar, setShowBar] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const animatedValue = useRef(new Animated.Value(0)).current;
  const MIN_DEFAULT = 50;
  const MAX_DEFAULT = 1000;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);
  const [searchOptions, setSearchOptions] = useState({
    selectedCategory: '',
    selectedBrand: '',
    selectedPriceRange: { min: MIN_DEFAULT, max: MAX_DEFAULT },
    selectedSortBy: '',
    selectedRating: '',
  });
  const toggleBar = () => {
    setShowBar(!showBar);
    Animated.timing(animatedValue, {
      toValue: showBar ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const handlePress = (option) => {
    setSelectedOption(option);
    setSearchOptions({ ...searchOptions, selectedCategory: option });
  };
  const handlePress1 = (option) => {
    setSelectedOption1(option);
    setSearchOptions({ ...searchOptions, selectedBrand: option });
  };
  const handlePress2 = (option) => {
    setSelectedOption2(option);
    setSearchOptions({ ...searchOptions, selectedSortBy: option });
  };
  const handlePress3 = (option) => {
    setSelectedOption3(option);
    setSearchOptions({ ...searchOptions, selectedRating: option });
  };
  const handleApply = async () => {
    const { selectedCategory, selectedBrand, selectedPriceRange, selectedRating } = searchOptions;
    const { min, max } = selectedPriceRange;
    // Chuyển đổi giá trị min và max từ chuỗi sang số
    const minPrice = parseFloat(min);
    const maxPrice = parseFloat(max);
    try {
      // Gửi yêu cầu API và nhận về danh sách sản phẩm
      const response = await AxiosInstance().get('product');
      const allProducts = response; // Giả sử dữ liệu trả về là một mảng chứa tất cả sản phẩm
      // Lọc các sản phẩm dựa trên các điều kiện đã chọn
      const filteredProducts = allProducts.filter(product => {
        const categoryMatch = selectedCategory === 'All' || selectedCategory === '' || product.categoryId.name === selectedCategory;
        const brandMatch = selectedBrand === 'All' || selectedBrand === '' || product.gender === selectedBrand;
        // Thêm trường dữ liệu rating và views vào sản phẩm
        product.rating = 4.5; // Rating cứng, bạn có thể thay đổi giá trị tùy ý
        product.views = `8,152`; // Views cứng, bạn có thể thay đổi giá trị tùy ý
        // Chuyển đổi giá tiền từ chuỗi sang số
        const productPrice = parseFloat(product.price.replace('$', ''));
        const priceMatch = productPrice >= minPrice && productPrice <= maxPrice;
        return categoryMatch && brandMatch && priceMatch;
      });
      setModalVisible(false);
      navigation.navigate('SearchRender', { filteredProducts }); // Chuyển danh sách sản phẩm đã lọc sang màn hình SearchRender
    } catch (error) {
      console.log("🚀 ~ file: ModalOptionSearch.js:78 ~ handleApply ~ error:", error)
    }
  };
  const handleReset = async (option) => {
    setSelectedOption(option);
    setSearchOptions({ ...searchOptions, selectedCategory: option });
    setSelectedOption1(option);
    setSearchOptions({ ...searchOptions, selectedBrand: option });
    setSelectedOption2(option);
    setSearchOptions({ ...searchOptions, selectedSortBy: option });
    setSelectedOption3(option);
    setSearchOptions({ ...searchOptions, selectedRating: option });
    setMinValue(MIN_DEFAULT);
    setMaxValue(MAX_DEFAULT);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styleModalOptionSearch.modalContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styleModalOptionSearch.modalContent}>
            <TouchableOpacity onPress={() => { toggleBar(); setModalVisible(false); }}>
              <View style={styleModalOptionSearch.viewbar}></View>
            </TouchableOpacity>
            <Text style={styleModalOptionSearch.title}>Sort & Filter</Text>
            <View style={styleModalOptionSearch.line}></View>
            <Text style={styleModalOptionSearch.textcategory}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* Categories */}
              <View style={styleModalOptionSearch.viewcategory}>
                <TouchableOpacity onPress={() => handlePress('All')}>
                  <View style={[styleModalOptionSearch.viewcategoryitem, selectedOption === 'All' && { backgroundColor: 'black' },]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption === 'All' && { color: 'white' },]}>
                      All
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Nike')}>
                  <View style={[styleModalOptionSearch.viewcategoryitem, selectedOption === 'Nike' && { backgroundColor: 'black' }]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption === 'Nike' && { color: 'white' }]}>
                      Nike
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Adidas')}>
                  <View style={[styleModalOptionSearch.viewcategoryitem1, selectedOption === 'Adidas' && { backgroundColor: 'black' },]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption === 'Adidas' && { color: 'white' },]}>
                      Adidas
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Puma')}>
                  <View style={[styleModalOptionSearch.viewcategoryitem1, selectedOption === 'Puma' && { backgroundColor: 'black' },]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption === 'Puma' && { color: 'white' },]}>
                      Puma
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Asics')}>
                  <View style={[styleModalOptionSearch.viewcategoryitem, selectedOption === 'Asics' && { backgroundColor: 'black' },]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption === 'Asics' && { color: 'white' },]}>
                      Asics
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Reebok')}>
                  <View style={[styleModalOptionSearch.viewcategoryitem1, selectedOption === 'Reebok' && { backgroundColor: 'black' },]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption === 'Reebok' && { color: 'white' },]}>
                      Reebok
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress(' New Balance')}>
                  <View style={[styleModalOptionSearch.viewcategoryitem2, selectedOption === ' New Balance' && { backgroundColor: 'black' },]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption === ' New Balance' && { color: 'white' },]}>
                      New Balance
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Balenciaga')}>
                  <View style={[styleModalOptionSearch.viewcategoryitem2, selectedOption === 'Balenciaga' && { backgroundColor: 'black' },]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption === 'Balenciaga' && { color: 'white' },]}>
                      Balenciaga
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={styleModalOptionSearch.viewfilter}>
              {/* gender */}
              <Text style={styleModalOptionSearch.textcategory}>Gender</Text>
              <View style={styleModalOptionSearch.viewgender}>
                <TouchableOpacity onPress={() => handlePress1('All')}>
                  <View style={[styleModalOptionSearch.viewcategoryitem, selectedOption1 === 'All' && { backgroundColor: 'black' },]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption1 === 'All' && { color: 'white' },]}>
                      All
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress1('Men')}>
                  <View style={[styleModalOptionSearch.viewcategoryitem, selectedOption1 === 'Men' && { backgroundColor: 'black' },]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption1 === 'Men' && { color: 'white' },]}>
                      Men
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress1('Women')}>
                  <View style={[styleModalOptionSearch.viewcategoryitem1, selectedOption1 === 'Women' && { backgroundColor: 'black' },]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption1 === 'Women' && { color: 'white' },]}>
                      Women
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* Price */}
              <Text style={styleModalOptionSearch.textcategory}>Price Range</Text>
              <View style={styleModalOptionSearch.viewprice}>
                <Text style={styleModalOptionSearch.textprice}>$ {minValue}</Text>
                <Icon name="arrow-right-alt" size={55} style={styleModalOptionSearch.Icon} />
                <Text style={styleModalOptionSearch.textprice}>$ {maxValue}</Text>
              </View>
              <GestureHandlerRootView>
                <RangerPrice sliderWidth={300}
                  min={MIN_DEFAULT}
                  max={MAX_DEFAULT}
                  step={10}
                  onValueChange={range => {
                    setMinValue(range.min);
                    setMaxValue(range.max);
                  }} />
              </GestureHandlerRootView>
              {/* Sortby */}
              <View style={styleModalOptionSearch.viewsortby}>
                <Text style={styleModalOptionSearch.textsortby}>Sort By</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {/* Categories */}
                  <View style={styleModalOptionSearch.viewcategory}>
                    <TouchableOpacity onPress={() => handlePress2('Popular')}>
                      <View style={[styleModalOptionSearch.viewcategoryitem2, selectedOption2 === 'Popular' && { backgroundColor: 'black' },]}>
                        <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption2 === 'Popular' && { color: 'white' },]}>
                          Popular
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress2('Most Recent')}>
                      <View style={[styleModalOptionSearch.viewcategoryitem2, selectedOption2 === 'Most Recent' && { backgroundColor: 'black' },]}>
                        <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption2 === 'Most Recent' && { color: 'white' },]}>
                          Most Recent
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress2('Price High')}>
                      <View style={[styleModalOptionSearch.viewcategoryitem2, selectedOption2 === 'Price High' && { backgroundColor: 'black' },]}>
                        <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption2 === 'Price High' && { color: 'white' },]}>
                          Price High
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress2('Price Low')}>
                      <View style={[styleModalOptionSearch.viewcategoryitem2, selectedOption2 === 'Price Low' && { backgroundColor: 'black' },]}>
                        <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption2 === 'Price Low' && { color: 'white' },]}>
                          Price Low
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress2('Discount')}>
                      <View style={[styleModalOptionSearch.viewcategoryitem2, selectedOption2 === 'Discount' && { backgroundColor: 'black' },]}>
                        <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption2 === 'Discount' && { color: 'white' },]}>
                          Discount
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress2('Trending')}>
                      <View style={[styleModalOptionSearch.viewcategoryitem2, selectedOption2 === 'Trending' && { backgroundColor: 'black' },]}>
                        <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption2 === 'Trending' && { color: 'white' },]}>
                          Trending
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
              {/* Rating */}
              <View style={styleModalOptionSearch.viewrating}>
                <Text style={styleModalOptionSearch.textsortby}>Rating</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {/* Categories */}
                  <View style={styleModalOptionSearch.viewcategory}>
                    <TouchableOpacity onPress={() => handlePress3('All')}>
                      <View style={[styleModalOptionSearch.viewstar, selectedOption3 === 'All' && { backgroundColor: 'black' },]}>
                        <Icon name="star" size={20} style={[styleModalOptionSearch.Iconstar, selectedOption3 === 'All' && { color: 'white' },]} />
                        <Text style={[styleModalOptionSearch.textstar, selectedOption3 === 'All' && { color: 'white' },]}>
                          All
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress3('5')}>
                      <View style={[styleModalOptionSearch.viewstar, selectedOption3 === '5' && { backgroundColor: 'black' },]}>
                        <Icon name="star" size={20} style={[styleModalOptionSearch.Iconstar, selectedOption3 === '5' && { color: 'white' },]} />
                        <Text style={[styleModalOptionSearch.textstar, selectedOption3 === '5' && { color: 'white' },]}>
                          5
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress3('4')}>
                      <View style={[styleModalOptionSearch.viewstar, selectedOption3 === '4' && { backgroundColor: 'black' },]}>
                        <Icon name="star" size={20} style={[styleModalOptionSearch.Iconstar, selectedOption3 === '4' && { color: 'white' },]} />
                        <Text style={[styleModalOptionSearch.textstar, selectedOption3 === '4' && { color: 'white' },]}>
                          4
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress3('3')}>
                      <View style={[styleModalOptionSearch.viewstar, selectedOption3 === '3' && { backgroundColor: 'black' },]}>
                        <Icon name="star" size={20} style={[styleModalOptionSearch.Iconstar, selectedOption3 === '3' && { color: 'white' },]} />
                        <Text style={[styleModalOptionSearch.textstar, selectedOption3 === '3' && { color: 'white' },]}>
                          3
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress3('2')}>
                      <View style={[styleModalOptionSearch.viewstar, selectedOption3 === '2' && { backgroundColor: 'black' },]}>
                        <Icon name="star" size={20} style={[styleModalOptionSearch.Iconstar, selectedOption3 === '2' && { color: 'white' },]} />
                        <Text style={[styleModalOptionSearch.textstar, selectedOption3 === '2' && { color: 'white' },]}>
                          2
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress3('1')}>
                      <View style={[styleModalOptionSearch.viewstar, selectedOption3 === '1' && { backgroundColor: 'black' },]}>
                        <Icon name="star" size={20} style={[styleModalOptionSearch.Iconstar, selectedOption3 === '1' && { color: 'white' },]} />
                        <Text style={[styleModalOptionSearch.textstar, selectedOption3 === '1' && { color: 'white' },]}>
                          1
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
              {/* checkout */}
              <View style={styleModalOptionSearch.line2}></View>
              <View style={styleModalOptionSearch.containercheckout}>
                <TouchableOpacity onPress={handleReset}>
                  <View style={styleModalOptionSearch.viewcheckout}>
                    <Text style={styleModalOptionSearch.textcheckout}>Reset</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleApply}>
                  <View style={styleModalOptionSearch.viewcheckout2}>
                    <Text style={styleModalOptionSearch.textcheckout2}>Apply</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View >
    </Modal >
  );
};
export default ModalOptionSearch;