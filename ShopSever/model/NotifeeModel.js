const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const NotifeeSchema = new Schema({
    deviceToken: { type: String, required: true },
    userId: { type: ObjectId, ref: 'user', required: true },
    name: { type: String, required: true },
    notificationTitle: { type: String, required: true },
    notificationBody: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('notifee', NotifeeSchema);
