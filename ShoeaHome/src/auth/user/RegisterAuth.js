import AsyncStorage from '@react-native-async-storage/async-storage';
import { HOST } from '../../../config/Constant';
import Toast from 'react-native-toast-message';
import AxiosInstance from '../../../config/context/AxiosIntance';

export const handleRegisterAuth = async (fullname, email, password, confirm_password, navigation) => {
    try {
        const response = await AxiosInstance().post(`api/users/register`, {
            fullname: fullname,
            email: email,
            password: password,
            confirm_password: confirm_password,
        });
        if (response.user) {
            await AsyncStorage.setItem('userId', response.user._id);
            const userId = await AsyncStorage.getItem('userId');
            console.log('User ID:', userId);
            console.log("🚀 ~ file: RegisterAuth.js:19 ~ handleRegisterAuth ~ response:", response)
            // Trong hàm xử lý đăng ký thành công
            navigation.navigate('Login');
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: 'Login Success',
                visibilityTime: 1000,
                autoHide: true,
            });
        } else {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Login Fail',
                visibilityTime: 1000,
                autoHide: true,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

