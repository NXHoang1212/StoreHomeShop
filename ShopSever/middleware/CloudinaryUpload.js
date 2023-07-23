const multer = require('multer');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
console.log("🚀 ~ file: CloudinaryUpload.js:10 ~ cloudinary:", cloudinary.config())

const storage = multer.diskStorage({});

const upload = multer({ storage: storage });

const uploadToCloudinary = (file) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file.path, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.secure_url);
            }
        });
    });
};

module.exports = { upload, uploadToCloudinary };
