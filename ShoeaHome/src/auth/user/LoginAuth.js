import AsyncStorage from '@react-native-async-storage/async-storage';
import AxiosInstance from '../../../config/context/AxiosIntance';
import Toast from 'react-native-toast-message';
import { GO_TO_SHOES } from '../../function/NavigationNext';

export const handleLoginAuth = async (email, password, navigation) => {
  try {
    const response = await AxiosInstance().post(`api/users/login`, {
      email: email,
      password: password,
    });
    if (response.user) {
      // Lưu token vào AsyncStorage
      await AsyncStorage.setItem('userId', response.user._id);
      //lưu trạng thái đăng nhập vào AsyncStorage
      await AsyncStorage.setItem('keepLoggedIn', JSON.stringify(true));
      // Lưu trạng thái đã đăng nhập
      // const userId = await AsyncStorage.getItem('userId');
      // console.log('User ID:', userId);
      // GO_TO_SHOES(navigation);
      navigation.navigate('FillProFile');
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};

