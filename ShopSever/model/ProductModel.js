const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    size: { type: String, required: true },
    favorite: { type: String, default: false },
    isFutured: { type: String, default: false },
    dateCreated: { type: Date, default: Date.now },
    categoryId: { type: ObjectId, ref: 'category' },
});

module.exports = mongoose.model('product', ProductSchema);

