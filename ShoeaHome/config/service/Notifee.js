import messaging from '@react-native-firebase/messaging';
import AxiosInstance from '../context/AxiosIntance';
import { getUserId } from './Utils';
import { PaymentNotifee, SuccessUserNotifee } from '../../src/function/ListNotifee';
import notifee, { AndroidImportance } from '@notifee/react-native';

//thông báo chào mừng tới ứng dụng
export const SuccsessNotifee = async () => {
    await notifee.requestPermission();
    const userName = await getuser();
    const channelId = await notifee.createChannel({
        id: 'important',
        name: 'Important Notifications',
        sound: 'default',
        importance: AndroidImportance.HIGH,
    });
    await notifee.displayNotification({
        title: 'Hello',
        body: `Welcome ${userName} to my home store in ShopShoes`,
        android: {
            channelId,
            smallIcon: 'ic_launcher_round',
            color: 'red',
            sound: 'default',
            importance: AndroidImportance.HIGH,
        },
    });
};

//thông báo theo api dựa vào lấy tile và body
export const onDisplayNotification = async (title, body) => {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
        id: 'important',
        name: 'Important Notifications',
        sound: 'default',
        importance: AndroidImportance.HIGH,
    });
    await notifee.displayNotification({
        title: title,
        body: body,
        android: {
            channelId,
            smallIcon: 'ic_launcher_round',
            color: 'red',
            sound: 'default',
            importance: AndroidImportance.HIGH,
        },
    });
};

//lấy tên user
export const getuser = async () => {
    const id = await getUserId();
    const res = await AxiosInstance().get(`api/users/${id}/updateProfile`);
    const user = res.users.name;
    return user;
};

//lịch sử đơn hàng
export const getOrderHistory = async () => {
    const userId = await getUserId();
    const reponse = await AxiosInstance().get(`order/${userId}/getOrderHistory`);
    const order = reponse.order.slice(-1)[0]._id;
    console.log('++++', order);
    return order;
};

//lấy giỏ hàng
export const getcartitems = async () => {
    const userId = await getUserId();
    if (userId) {
        const reponse = await AxiosInstance().get(`cart/${userId}/getcartitems`);
        if (reponse.productId && reponse.productId.length > 0) {
            //lấy id sản phẩm mới nhất trong giỏ hàng
            const cartItems = reponse.productId.slice(-1)[0].product;
            console.log('++++', cartItems);
            return cartItems;
        }
    }
};

//thông báo người dùng khi set up thành công
export const createdNotifee = async () => {
    const userId = await getUserId();
    const notificationTitle = (await SuccessUserNotifee()).notificationTitle;
    const notificationBody = (await SuccessUserNotifee()).notificationBody;
    const reponse = await AxiosInstance().post(`notification/create-notifee/${userId}`, {
        notificationTitle: notificationTitle,
        notificationBody: notificationBody,
    });
    console.log("🚀 ~ file: Notifee.js:82 ~ reponse ~ reponse:", reponse)
};

//thông báo người dùng khi có đơn hàng mới
export const createdNotifeeCart = async () => {
    const userId = await getUserId();
    const order = await getcartitems();
    const reponse = await AxiosInstance().post(`notification/create-notifee/${userId}`, {
        notificationTitle: 'Cart Notification',
        notificationBody: `You have an order in your new cart ${order} please check your order`,
    });
    onDisplayNotification('Cart Notification', `You have an order in your new cart ${order} please check your order`);
    console.log("🚀 ~ file: Notifee.js:82 ~ reponse ~ reponse:", reponse)
};

//thông báo người dùng khi thanh toán thành công
export const createdNotifeePayment = async () => {
    const userId = await getUserId();
    const userName = await getuser();
    const order = await getOrderHistory();
    const reponse = await AxiosInstance().post(`notification/create-notifee/${userId}`, {
        notificationTitle: 'Payment Notification',
        notificationBody: `Congratulations ${userName} your order ${order} has been successfully paid`,
    });
    onDisplayNotification('Payment Notification', `Congratulations ${userName} your order ${order} has been successfully paid`);
    console.log("🚀 ~ file: Notifee.js:82 ~ reponse ~ reponse:", reponse)
};