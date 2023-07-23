import AxiosInstance from '../../../config/context/AxiosIntance';
import { HOST } from '../../../config/Constant';
import { GO_TO_NEW_PASSWORD } from '../../function/NavigationNext';
import axios from 'axios';

export const handleCheckOtp = async (token, otp, navigation) => {
    try {
        const response = await axios.post(`api/users/check-otp`, {
            token: token,
            otp: otp,
        });
        console.log("🚀 ~ file: CheckOtp.js:35 ~ handleCheckOtp ~ response", response)
        //lưu token reset password vào AsyncStorage
        if (response) {
            GO_TO_NEW_PASSWORD(navigation);
        }
    } catch (error) {
        console.log(error);
    }
};

