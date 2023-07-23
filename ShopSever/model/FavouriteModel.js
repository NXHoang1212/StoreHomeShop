const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const favouriteSchema = new Schema({
  userId: {
    type: ObjectId,
    ref: 'user',
    required: true
  },
  productId: [{
    type: ObjectId,
    ref: 'product',
    required: true,
    index: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('favourite', favouriteSchema);
