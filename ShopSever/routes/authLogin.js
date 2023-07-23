const express = require('express');
const router = express.Router();
require('../auth/AuthGoogle');
require('../auth/AuthFaceBook');
const passport = require('passport');

router.use(passport.initialize());
router.use(passport.session());

const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.status(401).send('Unauthorized');
};

//gọi api này để lấy url để login google về client
//http://localhost:3000/auth/google
router.post('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback sau khi xác thực Google thành công
router.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/auth/protected', failureRedirect: '/auth/google/failure' }));

// Trang bảo vệ, trả về thông tin người dùng đã xác thực
router.get('/auth/protected', isLoggedIn, (req, res) => {
    let name = req.user.displayName;
    res.status(200).json({ message: `Welcome ${name}!` });
});

// Trang lỗi khi đăng nhập bằng Google thất bại
router.get('/auth/google/failure', isLoggedIn, (req, res) => {
    res.status(500).json({ message: 'Something went wrong' });
});
//http://localhost:3000/auth
router.get('/', (req, res) => {
    //ra trang index
    res.render('index');
});


// //http://localhost:3000/auth/facebook
// router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

// router.get('/facebook/callback', passport.authenticate('facebook',
//     { successRedirect: '/auth/profile', failureRedirect: '/auth/facebook/failed' },
// ));

// router.get('/profile', isLoggedIn, (req, res) => {
//     let name = req.user.displayName;
//     res.send(`Welcome ${name}!`);
// });

// router.get('/facebook/failed', isLoggedIn, (req, res) => {
//     res.send('Something went wrong');
// });




module.exports = router;