import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import AxiosInstance from '../../config/context/AxiosIntance';

export const HandeleLoginGoogle = async (googleId, email, fullname, imgAvatar, navigation) => {
    try {
        const response = await AxiosInstance().post(`api/users/login-google`, {
            googleId: googleId,
            email: email,
            fullname: fullname,
            imgAvatar: imgAvatar,
        });
        if (response.user) {
            await AsyncStorage.setItem('userId', response.user._id);
            await AsyncStorage.setItem('keepLoggedIn', JSON.stringify(true));
            navigation.navigate('FillProFile');
            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: 'Success',
                text2: 'Login Success',
                visibilityTime: 2000,
                autoHide: true,
            });
        } else {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Error',
                text2: 'Login Fail',
                visibilityTime: 2000,
                autoHide: true,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

