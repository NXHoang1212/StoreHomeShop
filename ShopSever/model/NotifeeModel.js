const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const NotifeeSchema = new Schema({
    userId: { type: ObjectId, ref: 'user' },
    name: { type: String },
    notificationTitle: { type: String },
    notificationBody: { type: String },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('notifee', NotifeeSchema);
