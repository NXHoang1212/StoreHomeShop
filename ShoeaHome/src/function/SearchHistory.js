import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { HOST } from '../../config/Constant';
import AxiosInstance from '../../config/context/AxiosIntance';

export const handleSearch = async (searchTerm, searchHistory, setSearchHistory, setSearchResult, setShowResult) => {
  if (searchTerm.trim() !== '') {
    // Thêm từ khóa tìm kiếm vào lịch sử tìm kiếm
    const history = [...searchHistory];
    if (!history.includes(searchTerm)) {
      history.push(searchTerm);
    }
    setSearchHistory(history);
    try {
      // Lưu lại lịch sử tìm kiếm vào AsyncStorage
      await AsyncStorage.setItem('searchHistory', JSON.stringify(history));
    } catch (e) {
      console.log(e);
    }
    // Tìm kiếm sản phẩm
    try {
      const response = await AxiosInstance().get(`product`);
      const products = response.map(item => ({
        ...item,
        rating: 4.5,
        views: `8,152`,
      }));
      // Lọc kết quả tìm kiếm dựa trên từ khóa
      const filteredResult = products.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResult(filteredResult); // Cập nhật kết quả tìm kiếm
      setShowResult(filteredResult.length > 0); // Hiển thị kết quả tìm kiếm nếu có kết quả, ẩn nếu không có
    } catch (error) {
      console.log(error);
    }
  } else {
    setSearchResult([]); // Đặt kết quả tìm kiếm thành một mảng rỗng
    setShowResult(false); // Ẩn kết quả tìm kiếm
  }
};


