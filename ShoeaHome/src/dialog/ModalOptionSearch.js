import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StyleSheet, Animated, ScrollView } from 'react-native';
import styleModalOptionSearch from '../style/StyleModalOptionSearch';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RangerPrice from './RangerPrice';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';
import { HOST } from '../../config/Constant';
import { useNavigation } from '@react-navigation/native';
import { GO_TO_SEARCHRENDER } from '../function/NavigationNext';

const ModalOptionSearch = ({ visible, setModalVisible }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showBar, setShowBar] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const animatedValue = useRef(new Animated.Value(0)).current;
  const MIN_DEFAULT = 50;
  const MAX_DEFAULT = 1000;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);
  const navigation = useNavigation();
  const searchOptions = {
    selectedCategory: selectedOption,
    selectedBrand: selectedOption1,
    selectedPriceRange: { min: minValue, max: maxValue },
    selectedSortBy: selectedOption2,
    selectedRating: selectedOption3,
  };

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
  };
  const handlePress1 = (option) => {
    setSelectedOption1(option);
  };
  const handlePress2 = (option) => {
    setSelectedOption2(option);
  };
  const handlePress3 = (option) => {
    setSelectedOption3(option);
  };
  const handleApply = () => {
    // Lấy các giá trị lựa chọn tìm kiếm từ state
    const { selectedCategory, selectedBrand, selectedPriceRange } = searchOptions;

    // Áp dụng lựa chọn tìm kiếm vào danh sách sản phẩm
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (selectedBrand) {
      filteredProducts = filteredProducts.filter(product => product.brand === selectedBrand);
    }

    if (selectedPriceRange) {
      filteredProducts = filteredProducts.filter(product => product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max);
    }

    // Cập nhật danh sách sản phẩm đã lọc vào state
    setFilteredProducts(filteredProducts);

    // Đóng modal
    setModalVisible(false);

    // Điều hướng đến màn hình danh sách sản phẩm
    GO_TO_SEARCHRENDER(navigation, searchOptions);
    console.log(searchOptions);
  };

  useEffect(() => {
    // Lấy danh sách sản phẩm từ API hoặc nguồn dữ liệu khác
    axios.get(`${HOST().HOST}product`)
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  const filterProducts = () => {
    let filtered = products;
    if (selectedOption === 'Nike') {
      filtered = filtered.filter(product => product.category === 'Nike');
    } else if (selectedOption === 'Adidas') {
      filtered = filtered.filter(product => product.category === 'Adidas');
    }

    return filtered;
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
                  <View style={[styleModalOptionSearch.viewcategoryitem, selectedOption === 'Nike' && { backgroundColor: 'black' },]}>
                    <Text style={[styleModalOptionSearch.textcategoryitem, selectedOption === 'Nike' && { color: 'white' },]}>
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
                <TouchableOpacity>
                  <View style={styleModalOptionSearch.viewcheckout}>
                    <Text style={styleModalOptionSearch.textcheckout}>Reset</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleApply(navigation)}>
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
