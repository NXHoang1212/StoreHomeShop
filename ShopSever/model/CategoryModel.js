const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
    name: { type: String, required: true },
    // products: [{ type: ObjectId, ref:'product' }]
});

module.exports = mongoose.model('category', CategorySchema);
