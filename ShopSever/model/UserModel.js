const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  imgAvatar: { type: String, default: null },
  name: { type: String, require: true },
  dateofbirth: { type: String, required: true, default: 0 },
  country: { type: String, require: true },
  mobile: { type: String, required: true, default: 0 },
  gender: { type: String, require: true },
  resetPassword: { type: String, required: false, default: null },
  //phương thức đăng nhập bằng google
  googleId: { type: String },
  //phương thức đăng nhập bằng facebook
  facebookId: { type: String },
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', UserSchema);
