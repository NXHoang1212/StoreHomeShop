const UserService = require('../service/UserService');
const mailer = require('nodemailer');
const { Vonage } = require('@vonage/server-sdk');
const vonageSMS = new Vonage({
    apiKey: "5aa04246",
    apiSecret: "2CDkxPuCgeMDs0pN"
});

const register = async (fullname, email, password, confirm_password) => {
    const fullnameRegex = /^([A-ZĐÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰ][a-zđáàảãạâấầẩẫậăắằẳẵặéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữự]+\s)+[A-ZĐÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰ][a-zđáàảãạâấầẩẫậăắằẳẵặéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữự]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// Email phải có ít nhất 1 kí tự trước và sau dấu @
    //password phaỉ 10 kí tự là số không có chữ 
    const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{10,}$/;
    if (!fullnameRegex.test(fullname)) {
        throw new Error('Họ tên không hợp lệ');
    }

    if (!emailRegex.test(email)) {
        throw new Error('Email không hợp lệ');
    }

    if (!passwordRegex.test(password)) {
        throw new Error('Mật khẩu không hợp lệ');
    }

    if (password !== confirm_password) {
        throw new Error('Mật khẩu và xác nhận mật khẩu không khớp');
    }
    const user = await UserService.register(fullname, email, password, confirm_password);
    return user;

};

const uploadAvatar = async (id, imgAvatar) => {
    try {
        const user = await UserService.uploadAvatar(id, imgAvatar);
        return user;
    } catch (error) {
        console.log(error);
    }
};


const login = async (email, password) => {
    const user = await UserService.login(email, password);
    console.log("🚀 ~ file: UserController.js:80 ~ login ~ user", user)
    return user;
};

const update = async (id, name, fullname, dateofbirth, country, mobile, gender) => {
    try {
        const user = await UserService.update(id, name, fullname, dateofbirth, country, mobile, gender);
        return user;
    } catch (error) {
        console.log(error);
    }
}

const get = async (id, imgAvatar, fullname, name, dateofbirth, country, mobile, gender) => {
    try {
        const user = await UserService.get(id, imgAvatar, fullname, name, dateofbirth, country, mobile, gender);
        return user;
    } catch (error) {
        console.log(error);
    }
};

// Gửi mail
const transporter = mailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.SEND_MAIL,
        pass: process.env.SEND_MAIL_PASSWORD,
    },
});

// Sinh mã OTP
const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000); // Sinh số ngẫu nhiên từ 1000 đến 9999
    return otp.toString();
};
// Gửi mã OTP
const forgotPassword = async (email) => {
    const token = await UserService.forgotPassword(email);
    const otp = generateOTP();
    const mailOptions = {
        from: process.env.SEND_MAIL,
        to: email,
        subject: 'OTP to reset password',
        html: `<p>Your OTP to reset password is <b>${otp}</b></p>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log(`OTP sent: ${info.response}`);
    });
    return token;
};

// Gửi mã OTP qua SMS
const forgotPasswordSMS = async (mobile) => {
    const token = await UserService.forgotPasswordSMS(mobile);
    // const otp = generateOTP();
    const from = 'Vonage';
    const to = '84' + mobile.slice(1);
    // const text = 'OTP to reset password is ' + otp;
    vonageSMS.verify.start({ number: to, brand: from, code_length: '4' }, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            const verifyRequestId = result.request_id;
            console.log('request_id', verifyRequestId);
        }
    });
    console.log('token', token);
    return token;
};

// Kiểm tra mã OTP
const checkOTP = async (token, otp) => {
    const user = await UserService.checkOTP(token, otp);
    return user;
};

const resetPassword = async (token, password, confirm_password) => {
    if (password !== confirm_password) {
        throw new Error('Mật khẩu và xác nhận mật khẩu không khớp');
    }
    const user = await UserService.resetPassword(token, password);
    return user;
};



module.exports =
{
    register, login,
    uploadAvatar, update, get,
    forgotPassword, checkOTP, resetPassword, forgotPasswordSMS
};


