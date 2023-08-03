import AsyncStorage from '@react-native-async-storage/async-storage';
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
            // await AsyncStorage.setItem('userId', response.user._id);
            // const userId = await AsyncStorage.getItem('userId');
            // console.log('User ID:', userId);
            console.log("🚀 ~ file: RegisterAuth.js:19 ~ handleRegisterAuth ~ response:", response)
            // Trong hàm xử lý đăng ký thành công
            navigation.navigate('Login');
        }
    } catch (error) {
        console.log(error);
    }
};

