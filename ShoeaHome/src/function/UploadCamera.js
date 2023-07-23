import ImagePicker from 'react-native-image-crop-picker';
import AxiosInstance from '../../config/context/AxiosIntance';
import { getUserId } from '../../config/service/Utils';

const uploadAvatar = async (image) => {
    const userId = await getUserId();
    const data = new FormData();
    data.append('file', {
        uri: image,
        type: 'image/jpeg',
        name: 'avatar.jpg',
    });
    data.append('upload_preset', 'employApp');
    data.append('cloud_name', 'dxlvdrb52');
    try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dxlvdrb52/image/upload', {
            method: 'POST',
            body: data,
        });
        if (!response.ok) {
            throw new Error('Upload failed');
        }
        const result = await response.json();
        console.log('1254', result);
        const imgAvatar = result.url;
        console.log('2567', imgAvatar);
        // Gửi yêu cầu cập nhật avatar lên server
        const upload = await AxiosInstance().post(`api/users/${userId}/uploadAvatar`, { imgAvatar });
        console.log("🚀 ~ file: UploadCamera.js:20 ~ choosePhotoFromLibrary ~ upload", upload);
    } catch (error) {
        console.log("Error uploading to Cloudinary:", error);
    }
};



export const takePhotoCamera = (setImgAvatar) => {
    ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
    }).then(image => {
        console.log("🚀 ~ file: UploadCamera.js:20 ~ choosePhotoFromLibrary ~ image:", image)
        setImgAvatar(image.path);
        console.log(image.path);
        uploadAvatar(image.path);
    });
};

export const choosePhotoFromLibrary = (setImgAvatar) => {
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
    }).then(image => {
        console.log("🚀 ~ file: UploadCamera.js:20 ~ choosePhotoFromLibrary ~ image:", image)
        setImgAvatar(image.path);
        console.log(image.path);
        uploadAvatar(image.path);
    });
};
