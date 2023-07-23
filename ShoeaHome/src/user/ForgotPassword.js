import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StyleForgotPassword from '../style/StyleForgotPassword'
import { GO_BACK, GO_TO_SmS } from '../function/NavigationNext'
import { useFocusEffect } from '@react-navigation/native'
import { HOST } from '../../config/Constant'
import { getUserId } from '../../config/service/Utils'
import AxiosInstance from '../../config/context/AxiosIntance'

const ForgotPassword = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    //chọn option nếu là sms thì gọi api gửi sms, nếu là email thì gọi api gửi mail
    const handleContinuePress = async () => {
        if (selectedOption === 'sms') {
            //gọi api gửi sms
            try {
                const response = AxiosInstance().post(`api/users/forgot-passwordsms`, { mobile: phone });
                console.log("🚀 ~ file: ForgotPassword.js:55 ~ handleContinuePress ~ response", response)
                navigation.navigate('SmsOtp', { contactInfor: phone });
            } catch (error) {
                console.log(error);
            }
        } else {
            //gọi api gửi mail
            try {
                const response = AxiosInstance().post(`api/users/forgot-password`, { email: email });
                console.log("🚀 ~ file: ForgotPassword.js:55 ~ handleContinuePress ~ response", response)
                navigation.navigate('SmsOtp', { contactInfor: email });
            } catch (error) {
                console.log(error);
            }
        }
    };
    const handleGetUser = async () => {
        const userId = await getUserId();
        const response = await AxiosInstance().get(`api/users/${userId}`);
        if (response && response.user) {
            setEmail(response.user.email);
            setPhone(response.user.mobile);
            console.log("🚀 ~ file: ForgotPassword.js:55 ~ handleGetUser ~ response", response.user.mobile);
        }
    };
    useFocusEffect(
        React.useCallback(() => {
            const unsubscribe = navigation.addListener('focus', () => {
                handleGetUser();
            });
            handleGetUser();
            return unsubscribe;
        }, [])
    );

    return (
        <View style={StyleForgotPassword.container}>
            <View style={StyleForgotPassword.viewbody}>
                <View style={StyleForgotPassword.viewlogo}>
                    <TouchableOpacity onPress={() => GO_BACK(navigation)}>
                        <Icon name="arrow-left" size={33} style={StyleForgotPassword.iconback} />
                    </TouchableOpacity>
                    <Text style={StyleForgotPassword.textlogo}>Forgot Password</Text>
                </View>
                <View style={StyleForgotPassword.viewimage}>
                    <Image source={require('../../assets/images/forgotpassword.png')} style={StyleForgotPassword.image} />
                    <Text style={StyleForgotPassword.textimage}>Select which your contact details should be we use to reset your password</Text>
                </View>
                <TouchableOpacity
                    style={[StyleForgotPassword.button, { borderWidth: 4, borderColor: selectedOption === 'sms' ? 'black' : '#9D9693' }]}
                    onPress={() => setSelectedOption('sms')}>
                    <View style={StyleForgotPassword.viewicon}>
                        <Icon name="chat-processing" size={30} style={StyleForgotPassword.iconbutton} />
                    </View>
                    <View style={StyleForgotPassword.viewbutton}>
                        <Text style={StyleForgotPassword.textsms}>Via SMS:</Text>
                        <Text style={StyleForgotPassword.textbutton}>{phone}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[StyleForgotPassword.button, { borderWidth: 4, borderColor: selectedOption === 'email' ? 'black' : '#9D9693' }]}
                    onPress={() => setSelectedOption('email')}>
                    <View style={StyleForgotPassword.viewicon}>
                        <Icon name="email" size={30} style={StyleForgotPassword.iconbutton} />
                    </View>
                    <View style={StyleForgotPassword.viewbutton}>
                        <Text style={StyleForgotPassword.textsms}>Via Email:</Text>
                        <Text style={StyleForgotPassword.textbutton}>{email}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={StyleForgotPassword.Viewcontinue} onPress={() => handleContinuePress()}>
                    <Text style={StyleForgotPassword.textcontinue}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ForgotPassword