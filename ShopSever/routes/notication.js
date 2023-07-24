var express = require('express');
var router = express.Router();
const admin = require('firebase-admin');
const notifeeController = require('../controller/NotifeeController');
// Đường dẫn đến tệp dịch vụ Firebase (serviceAccountKey.json)
const serviceAccount = require('../config/google-services.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});




// Đường dẫn POST '/notification/send-notification' để nhận deviceToken và gửi thông báo
let notificationSent = false; // Biến để kiểm tra trạng thái gửi thông báo
let latestOrder = null; // Biến để lưu đơn hàng mới nhất
//thông báo chào mừng tới ứng dụng
router.post('/send-notification', async (req, res) => {
    const { deviceToken, userName } = req.body;
    // Kiểm tra xem deviceToken và userName đã được gửi từ ứng dụng React Native hay chưa
    if (!deviceToken || !userName) {
        return res.status(400).json({ message: 'Missing deviceToken or userName' });
    }
    // // Kiểm tra xem đã gửi thông báo trước đó hay chưa
    // if (notificationSent) {
    //     return res.status(400).json({ message: 'Notification already sent' });
    // }
    // // Cập nhật trạng thái đã gửi thông báo
    // notificationSent = true;
    // Tạo thông báo
    const notification = {
        notification: {
            title: 'Hello',
            body: `Welcome, ${userName} to my home store in ShopShoes`, // Sử dụng userName trong nội dung thông báo
        },
        token: deviceToken,
    };
    console.log(notification);
    try {
        // Gửi thông báo
        const response = await admin.messaging().send(notification);
        console.log('Notification sent successfully:', response);
        res.status(200).json({ message: 'Notification sent successfully', response });
    } catch (error) {
        console.error('Error sending notification:', error);
        res.status(500).json({ message: 'Error sending notification', error });
    }
});


//thông báo khi có đơn hàng mới
router.post('/send-notification/order', async (req, res) => {
    const { deviceToken, order } = req.body;
    // Kiểm tra xem deviceToken đã được gửi từ ứng dụng React Native hay chưa
    if (!deviceToken || !order) {
        return res.status(400).json({ message: 'Missing deviceToken' });
    }
    // Kiểm tra xem đã gửi thông báo trước đó hay chưa
    if (notificationSent) {
        return res.status(400).json({ message: 'Notification already sent' });
    }
    // Cập nhật trạng thái đã gửi thông báo
    notificationSent = true;
    // Kiểm tra xem đơn hàng mới nhất có khác với đơn hàng đã gửi thông báo trước đó hay không
    if (latestOrder && latestOrder === order) {
        return res.status(400).json({ message: 'Latest order already sent' });
    }
    latestOrder = order; // Cập nhật đơn hàng mới nhất
    // Tạo thông báo với nội dung tùy chỉnh dựa trên đơn hàng mới
    const notification = {
        notification: {
            title: 'Cart Notification',
            body: `You have an order in your new cart ${order} please check your order`,
        },
        token: deviceToken,
    };
    try {
        // Gửi thông báo
        const response = await admin.messaging().send(notification);
        console.log('Notification sent successfully:', response);
        res.status(200).json({ message: 'Notification sent successfully', response });
    } catch (error) {
        console.error('Error sending notification:', error);
        res.status(500).json({ message: 'Error sending notification', error });
    }
});


//thông báo thanh toán thành công
router.post('/send-notification/payment', async (req, res) => {
    const { deviceToken, userName, order } = req.body;
    // Kiểm tra xem deviceToken, userName và order đã được gửi từ ứng dụng React Native hay chưa
    if (!deviceToken || !userName || !order) {
        return res.status(400).json({ message: 'Missing deviceToken, userName, or order' });
    }
    // Kiểm tra xem đơn hàng đã được gửi thông báo trước đó hay chưa
    if (notificationSent) {
        return res.status(400).json({ message: 'Notification already sent' });
    }
    // Cập nhật trạng thái đã gửi thông báo
    notificationSent = true;
    // Tạo thông báo với nội dung tùy chỉnh dựa trên đơn hàng đã thanh toán thành công
    const notification = {
        notification: {
            title: 'Payment Notification',
            body: `Congratulations ${userName}, your order ${order} has been successfully paid`,
        },
        token: deviceToken,
    };
    try {
        // Gửi thông báo
        const response = await admin.messaging().send(notification);
        console.log('Notification sent successfully:', response);
        res.status(200).json({ message: 'Notification sent successfully', response });
    } catch (error) {
        console.error('Error sending notification:', error);
        res.status(500).json({ message: 'Error sending notification', error });
    }
});



//tự tạo thông báo
//http://localhost:3000/notification/create-notifee/:userId
router.post('/create-notifee/:userId', notifeeController.createNotifee);

//http://localhost:3000/notification/get-notifee/:userId
router.get('/get-notifee/:userId', notifeeController.getNotifee);

//http://localhost:3000/notification/delete-notifee/:id
router.delete('/delete-notifee/:id', notifeeController.deleteNotifee);


module.exports = router;
