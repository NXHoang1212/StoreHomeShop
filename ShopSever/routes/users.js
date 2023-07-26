var express = require("express");
var router = express.Router();
var UserController = require("../controller/UserController");
var jwt = require("jsonwebtoken");
var authen = require("../middleware/authen");
const moment = require('moment-timezone');

/* GET users listing. */
/* http://localhost:3000/api/users/register */
router.post("/users/register", async function (req, res, next) {
  try {
    const { fullname, email, password, confirm_password } = req.body;
    const user = await UserController.register(fullname, email, password, confirm_password);
    console.log("🚀 ~ file: users.js:14 ~ user:", user)
    res.status(200).json({ user });
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
});

/* http://localhost:3000/api/users/login */
router.post('/users/login', async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await UserController.login(email, password);
    if (user) {
      const token = jwt.sign({ user }, 'shhhhh', { expiresIn: 60 * 60 });
      res.status(200).json({ token, user });
      console.log("🚀 ~ file: users.js:31 ~ user:", user)
    } else {
      res.status(401).json({ error: 'Sai email hoặc mật khẩu' });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

/* http://localhost:3000/api/users/login-google */
router.post('/users/login-google', async function (req, res, next) {
  try {
    const { googleId, email, fullname, imgAvatar } = req.body;
    const user = await UserController.loginWithGoogle(googleId, email, fullname, imgAvatar);
    if (user) {
      const token = jwt.sign({ user }, 'shhhhh', { expiresIn: 60 * 60 });
      res.status(200).json({ token, user });
    } else {
      res.status(401).json({ error: 'Thông tin đăng nhập không chính xác' });
    }
    console.log("🚀 ~ file: users.js:31 ~ user:", user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Đã xảy ra lỗi trong quá trình đăng nhập' });
  }
});


/* http://localhost:3000/api/users/login-facebook */
router.post('/users/login-facebook', async function (req, res, next) {
  try {
    const { facebookId } = req.body;
    const user = await UserController.loginWithFacebook(facebookId);
    if (user) {
      const token = jwt.sign({ user }, 'shhhhh', { expiresIn: 60 * 60 });
      res.status(200).json({ token, user });
    } else {
      res.status(401).json({ error: 'Thông tin đăng nhập không chính xác' });
    }
    console.log("🚀 ~ file: users.js:31 ~ user:", user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Đã xảy ra lỗi trong quá trình đăng nhập' });
  }
})

//lấy thông tin user ra để làm quên mật khẩu
/* http://localhost:3000/api/users/:userId */
router.get("/users/:userId", async function (req, res, next) {
  try {
    const { userId } = req.params;
    const user = await UserController.get(userId);
    console.log("🚀 ~ file: users.js:31 ~ user:", user)
    res.status(200).json({ user });
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
})

//http://localhost:3000/api/:userId/updateProfile
router.get("/users/:userId/updateProfile", async function (req, res, next) {
  try {
    const { userId } = req.params;
    const users = await UserController.get(userId);
    console.log("🚀 ~ file: users.js:87 ~ users:", users)
    res.status(200).json({ users });
    console.log(users);
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
});

//http://localhost:3000/api/users/:userId/updateEditProfile
router.post("/users/:userId/updateEditProfile", async function (req, res, next) {
  try {
    let { name, fullname, dateofbirth, country, mobile, gender } = req.body;
    const { userId } = req.params;
    const user = await UserController.update(userId, name, fullname, dateofbirth, country, mobile, gender);
    console.log("🚀 ~ file: users.js:102 ~ user:", user)
    res.status(200).json({ user });
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
});

//http://localhost:3000/api/users/:userId/uploadAvatar
router.post("/users/:userId/uploadAvatar", async function (req, res) {
  try {
    const { imgAvatar } = req.body;
    const { userId } = req.params;
    const user = await UserController.uploadAvatar(userId, imgAvatar);
    console.log("🚀 ~ file: users.js:102 ~ user:", user)
    res.status(200).json({ user });
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
  }
});


/*http://localhost:3000/api/users/forgot-password */
router.post('/users/forgot-password', async function (req, res, next) {
  try {
    const { email } = req.body;
    await UserController.forgotPassword(email);
    res.status(200).json({ status: 'ok', message: 'Vui lòng kiểm tra email để lấy mã OTP' });
    console.log("🚀 ~ file: users.js:118 ~ email:", email)
  } catch (error) {
    res.status(414).json({ error: error.message });
  }
});

/*http://localhost:3000/api/users/forgot-passwordsms */
router.post('/users/forgot-passwordsms', async function (req, res, next) {
  try {
    const { mobile } = req.body;
    await UserController.forgotPasswordSMS(mobile);
    res.status(200).json({ status: 'ok', mobile });
    console.log("🚀 ~ file: users.js:118 ~ mobile:", mobile)
  } catch (error) {
    console.log(error);
    res.status(414).json({ error: error.message });
  }
});

/*http://localhost:3000/api/users/check-otp */
router.post('/users/check-otp', async function (req, res, next) {
  try {
    const { token, otp } = req.body;
    const user = await UserController.checkOTP(token, otp);
    res.status(200).json({ user });
    console.log("🚀 ~ file: users.js:131 ~ user:", user)
  } catch (error) {
    res.status(414).json({ error: error.message });
  }
})


//http://localhost:3000/api/users/reset-password
router.post('/users/reset-password', async function (req, res, next) {
  try {
    const { token, password, confirm_password } = req.body;
    const result = await UserController.resetPassword(token, password, confirm_password);
    res.status(200).json({ result });
    console.log("🚀 ~ file: users.js:141 ~ result:", result)
  } catch (error) {
    res.status(414).json({ error: error.message });
  }
});




module.exports = router;
