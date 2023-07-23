const notifeeModel = require('../model/NotifeeModel');

// Tạo thông báo theo userId
const createNotifee = async (notifeeData, userId) => {
    try {
        const notifee = new notifeeModel({ ...notifeeData, userId });
        const result = await notifee.save();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


const getNotifee = async (userId) => {
    try {
        const result = await notifeeModel.find({ userId }).select('notificationTitle notificationChild notificationBody name date');
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};


const deleteNotifee = async (notificationId) => {
    try {
        const result = await notifeeModel.findByIdAndDelete(notificationId);
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

module.exports = { createNotifee, getNotifee, deleteNotifee };

