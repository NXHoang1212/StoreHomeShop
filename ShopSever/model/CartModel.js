const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CartSchema = new Schema(
    {
        userId: { type: ObjectId, ref: 'user' },
        productId: [
            {
                product: { type: ObjectId, ref: 'product' },
                quantity: { type: Number, default: 1 },
                name: { type: String },
                price: { type: Number },
                image: { type: String },
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('cart', CartSchema);
