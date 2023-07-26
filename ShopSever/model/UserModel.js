const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  fullname: { type: String },
  email: { type: String },
  password: { type: String },
  imgAvatar: { type: String, default: null },
  name: { type: String },
  dateofbirth: { type: String, default: 0 },
  country: { type: String },
  mobile: { type: String, default: 0 },
  gender: { type: String },
  //phương thức đăng nhập bằng google
  googleId: { type: String },
  //phương thức đăng nhập bằng facebook
  facebookId: { type: String },
  resetPassword: { type: String, required: false, default: null },
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', UserSchema);
