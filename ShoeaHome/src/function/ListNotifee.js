import AxiosInstance from "../../config/context/AxiosIntance";
import { getUserId } from "../../config/service/Utils";

export const SuccessUserNotifee = async () => {
    const userName = await getuser();
    return {
        notificationTitle: 'Account Setup Successful',
        notificationBody: `Account your ${userName} has been created`,
    }
};

export const HardNotifee = {
    notificationTitle: 'New Service Available',
    notificationBody: 'Now you can track orders in real time',
};


export const PaymentNotifee = {
    notificationTitle: 'Payment Notification',
    notificationBody: `Your payment has been successful`,
};



export const getuser = async () => {
    const id = await getUserId();
    const res = await AxiosInstance().get(`api/users/${id}/updateProfile`);
    const user = res.users.name;
    return user;
};