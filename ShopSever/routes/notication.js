var express = require('express');
var router = express.Router();
const admin = require('firebase-admin');
const notifeeController = require('../controller/NotifeeController');
// Đường dẫn đến tệp dịch vụ Firebase (serviceAccountKey.json)
const serviceAccount = require('../config/google-services.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});


//http://localhost:3000/notification/create-notifee/:userId
router.post('/create-notifee/:userId', notifeeController.createNotifee);

//http://localhost:3000/notification/get-notifee/:userId
router.get('/get-notifee/:userId', notifeeController.getNotifee);

//http://localhost:3000/notification/delete-notifee/:id
router.delete('/delete-notifee/:id', notifeeController.deleteNotifee);


module.exports = router;
