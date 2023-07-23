import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserId = async () => {
    try {
        const userId = await AsyncStorage.getItem('userId');
        // console.log("🚀 ~ file: Utils.js:6 ~ getUserId ~ userId:", userId)
        if (userId) {
            return userId;
        }
    } catch (error) {
        console.log(error);
    }
    return null;
};

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            return token;
        }
        console.log("🚀 ~ file: Utils.js:6 ~ getToken ~ token:", token)
    } catch (error) {
        console.log(error);
    }
    return null;
};


export const getorderId = async () => {
    try {
        const orderId = await AsyncStorage.getItem('orderId');
        if (orderId) {
            return orderId;
        }
        console.log("🚀 ~ file: Utils.js:6 ~ getorderId ~ orderId:", orderId);
    } catch (error) {
        console.log(error);
    }
};