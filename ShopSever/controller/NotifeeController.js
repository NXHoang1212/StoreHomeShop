const notifeeService = require('../service/NotifeeService');

const createNotifee = async (req, res) => {
    try {
        const notifeeData = req.body;
        const userId = req.params.userId; // Lấy userId từ request parameters
        const result = await notifeeService.createNotifee(notifeeData, userId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getNotifee = async (req, res) => {
    try {
        const userId = req.params.userId; // Lấy userId từ request parameters
        const result = await notifeeService.getNotifee(userId);
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteNotifee = async (req, res) => {
    try {
        const notificationId = req.params.id; // Lấy notificationId từ request parameters
        const result = await notifeeService.deleteNotifee(notificationId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createNotifee, getNotifee, deleteNotifee };

