const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AddressSchema = new Schema(
    {
        userId: { type: ObjectId, ref: 'user' },
        addressId: { type: ObjectId, ref: 'address' },
        addressLine1: { type: String, required: true },
        addressLine2: { type: String, required: true },
        isDefault: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('address', AddressSchema);