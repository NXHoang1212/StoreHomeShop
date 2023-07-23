var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const session = require('express-session');

var authLogin = require('./routes/authLogin');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/product');
var cartRouter = require('./routes/cart');
var addressRouter = require('./routes/address');
var favouriteRouter = require('./routes/favourite');
var orderRouter = require('./routes/order');
var shippingRouter = require('./routes/Shipping');
var promoRouter = require('./routes/promo');
var noticationRouter = require('./routes/notication');
// Load các biến môi trường
require('dotenv').config();

// Load các file config
require("./model/UserModel");

require("./model/CategoryModel");

require("./model/ProductModel");

require('./model/CartModel');

require("./model/AddressModel")

require("./model/FavouriteModel");

require("./model/OrderModel");

require("./model/ShippingModel");

require("./model/PromoModel");


var app = express();

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Kết nối thành công'))
  .catch((err) => console.log('MongoDB bị lỗi  ', err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use('/', indexRouter);
app.use('/auth', authLogin);
app.use('/api', usersRouter);
app.use('/product', productsRouter);
app.use('/cart', cartRouter);
app.use('/address', addressRouter);
app.use('/heart', favouriteRouter);
app.use('/order', orderRouter);
app.use('/shipping', shippingRouter);
app.use('/promo', promoRouter);
app.use('/notification', noticationRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
