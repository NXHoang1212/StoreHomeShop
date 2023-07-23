const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv').config();
const User = require('../model/UserModel');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        // Kiểm tra xem người dùng đã tồn tại trong hệ thống hay chưa
        User.findOne({ googleId: profile.id }, (err, existingUser) => {
            if (err) {
                return done(err);
            }

            if (existingUser) {
                // Người dùng đã tồn tại, cập nhật thông tin Google
                existingUser.googleAccessToken = accessToken;
                existingUser.save((err) => {
                    if (err) {
                        return done(err);
                    }

                    return done(null, existingUser);
                });
            } else {
                // Người dùng chưa tồn tại, tạo mới người dùng từ thông tin Google
                const newUser = new User({
                    fullname: profile.displayName,
                    email: profile.emails[0].value,
                    password: '', // Google không cung cấp mật khẩu, để trống hoặc sử dụng một giá trị tùy ý
                    imgAvatar: profile.photos[0].value,
                    name: '', // Bạn có thể cung cấp một giá trị tùy ý cho trường name
                    dateofbirth: '', // Cung cấp giá trị tùy ý cho trường dateofbirth
                    country: '', // Cung cấp giá trị tùy ý cho trường country
                    mobile: '', // Cung cấp giá trị tùy ý cho trường mobile
                    gender: '', // Cung cấp giá trị tùy ý cho trường gender
                    googleId: profile.id,
                    googleAccessToken: accessToken,
                });

                newUser.save((err) => {
                    if (err) {
                        return done(err);
                    }

                    return done(null, newUser);
                });
            }
        });
    }

));


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    User.findById({ _id: user._id }, (err, user) => {
        done(err, user);
    });
});

module.exports = passport;