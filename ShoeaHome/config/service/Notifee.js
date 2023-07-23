import messaging from '@react-native-firebase/messaging';
import AxiosInstance from '../context/AxiosIntance';
import { HOST } from '../Constant';
import { getUserId } from './Utils';
import { OrderNotifee, PaymentNotifee, SuccessUserNotifee } from '../../src/function/ListNotifee';

//thông báo chào mừng tới ứng dụng
export const letNotification = async () => {
    const granted = await messaging().requestPermission();
    if (granted) {
        const token = await messaging().getToken();
        const user = await getuser();
        console.log('token', token);
        AxiosInstance().post(`notification/send-notification`, {
            deviceToken: token,
            userName: user,
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    } else {
        console.log('No token received');
    }
};

//lấy tên user
export const getuser = async () => {
    const id = await getUserId();
    const res = await AxiosInstance().get(`api/users/${id}/updateProfile`);
    const user = res.users.fullname;
    return user;
};

//thông báo thanh toán thành công
export const letNotificationPayment = async () => {
    const granted = await messaging().requestPermission();
    if (granted) {
        const token = await messaging().getToken();
        const user = await getuser();
        const order = await getOrderHistory();
        console.log('token', token);
        AxiosInstance().post(`notification/send-notification/payment`, {
            deviceToken: token,
            userName: user,
            order: order,
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    } else {
        console.log('No token received');
    }
};

//lịch sử đơn hàng
export const getOrderHistory = async () => {
    const userId = await getUserId();
    if (userId) {
        const reponse = await AxiosInstance().get(`order/${userId}/getOrderHistory`);
        if (reponse.order && reponse.order.length > 0) {
            const order = reponse.order[0].cart.productId;
            console.log('++++', order);
            return order;
        }
        if (reponse.order && reponse.order.length > 0) {
            const order = reponse.order[0].products[0]._id;
            console.log('++++', order);
            return order;
        }
    }
};

export const createdNotifee = async () => {
    const userId = await getUserId();
    const name = await getuser();
    const token = await messaging().getToken();
    const notificationTitle = SuccessUserNotifee.notificationTitle;
    const notificationBody = SuccessUserNotifee.notificationBody;
    const reponse = await AxiosInstance().post(`notification/create-notifee/${userId}`, {
        name: name,
        deviceToken: token,
        notificationTitle: notificationTitle,
        notificationBody: notificationBody,
    });
    console.log("🚀 ~ file: Notifee.js:82 ~ reponse ~ reponse:", reponse)
};

export const createdNotifeeCart = async () => {
    const userId = await getUserId();
    const name = await getuser();
    const token = await messaging().getToken();
    const notificationTitle = OrderNotifee.notificationTitle;
    const notificationBody = OrderNotifee.notificationBody;
    const reponse = await AxiosInstance().post(`notification/create-notifee/${userId}`, {
        name: name,
        deviceToken: token,
        notificationTitle: notificationTitle,
        notificationBody: notificationBody,
    });
    console.log("🚀 ~ file: Notifee.js:82 ~ reponse ~ reponse:", reponse)
};

export const createdNotifeePayment = async () => {
    const userId = await getUserId();
    const name = await getuser();
    const token = await messaging().getToken();
    const notificationTitle = PaymentNotifee.notificationTitle;
    const notificationBody = PaymentNotifee.notificationBody;
    const reponse = await AxiosInstance().post(`notification/create-notifee/${userId}`, {
        name: name,
        deviceToken: token,
        notificationTitle: notificationTitle,
        notificationBody: notificationBody,
    });
    console.log("🚀 ~ file: Notifee.js:82 ~ reponse ~ reponse:", reponse)
};