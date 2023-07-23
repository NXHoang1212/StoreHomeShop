import { View, Text, TouchableOpacity, TextInput, ScrollView, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import StyleNewsPassWord from '../style/StyleNewsPassWord'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DialogNewPassword from '../dialog/DialogNewPassword'
import { GO_BACK, GO_TO_SIGNIN } from '../function/NavigationNext'
import AxiosInstance from '../../config/context/AxiosIntance'
import { HOST } from '../../config/Constant'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
import { getUserId } from '../../config/service/Utils'
import { CheckBox } from 'react-native-elements'

const NewsPassword = ({ navigation, route }) => {
    const [password, setPassword] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [confirm_password, SetConfirm_password] = useState('');
    const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);//modal
    const [token, SetToken] = useState([]);
    const [selectedOption, setSelectedOption] = useState(false);
    const handlePress = () => {
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
            GO_TO_SIGNIN(navigation);
        }, 3000);
    };
    const togglePasswordVisibility = () => {
        setIsPasswordHidden(!isPasswordHidden);
    };
    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordHidden(!isConfirmPasswordHidden);
    };
    const getUser = async () => {
        const userId = await getUserId();
        if (userId) {
            const response = await AxiosInstance().get(`api/users/${userId}`);
            SetToken(response.user.resetPassword);
            console.log("🚀 ~ file: SmsOtp.js:77 ~ getUser ~ response.user", response.user.resetPassword)
        }
    }
    useFocusEffect(
        React.useCallback(() => {
            const unsubscribe = navigation.addListener('focus', () => {
                getUser();
            });
            getUser();
            return unsubscribe;
        }, [])
    );
    const handleResetPassword = async () => {
        try {
            const response = await axios.post(`${HOST().HOST}api/users/reset-password`, {
                token,
                password: password,
                confirm_password: confirm_password,
            });
            console.log("🚀 ~ file: NewsPassword.js:77 ~ handleResetPassword ~ response", response)
            handlePress();
        } catch (error) {
            console.log("🚀 ~ file: NewsPassword.js:79 ~ handleResetPassword ~ error", error)
        }
    };
    return (
        <View style={StyleNewsPassWord.container}>
            <ScrollView>
                <View style={StyleNewsPassWord.viewbody}>
                    <View style={StyleNewsPassWord.viewlogo}>
                        <TouchableOpacity onPress={() => GO_BACK(navigation)}>
                            <Icon name="arrow-left" size={33} style={StyleNewsPassWord.iconback} />
                        </TouchableOpacity>
                        <Text style={StyleNewsPassWord.textlogo}>Create New Password</Text>
                    </View>
                    <Image source={require('../../assets/images/newpassword.png')} style={StyleNewsPassWord.image} />
                    <View style={StyleNewsPassWord.viewpassword}>
                        <Text style={StyleNewsPassWord.text}>Create Your New Password</Text>
                        <View style={StyleNewsPassWord.viewinput1}>
                            <Icon name="lock" size={25} style={StyleNewsPassWord.icon} />
                            <TextInput
                                style={StyleNewsPassWord.input}
                                placeholder="New Password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={isPasswordHidden}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility} style={StyleNewsPassWord.viewiconpassword}>
                                <Icon name={isPasswordHidden ? 'eye' : 'eye-off'} size={25} style={StyleNewsPassWord.iconpassword} />
                            </TouchableOpacity>
                        </View>
                        <View style={StyleNewsPassWord.viewinput2}>
                            <Icon name="lock" size={25} style={StyleNewsPassWord.icon} />
                            <TextInput
                                style={StyleNewsPassWord.input}
                                placeholder="Confirm Password"
                                value={confirm_password}
                                onChangeText={SetConfirm_password}
                                secureTextEntry={isConfirmPasswordHidden}
                            />
                            <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={StyleNewsPassWord.viewiconpassword}>
                                <Icon
                                    name={isConfirmPasswordHidden ? 'eye' : 'eye-off'}
                                    size={25}
                                    style={StyleNewsPassWord.iconpassword}
                                />
                            </TouchableOpacity>
                        </View>
                        <CheckBox
                            title={<Text style={StyleNewsPassWord.textcheckbox}>Remember me</Text>}
                            checked={selectedOption}
                            onPress={() => setSelectedOption(!selectedOption)}
                            containerStyle={StyleNewsPassWord.checkbox}
                            textStyle={StyleNewsPassWord.textcheckbox}
                            checkedColor='#000'
                            uncheckedColor='#000'
                        />
                        <TouchableOpacity style={StyleNewsPassWord.button} onPress={handleResetPassword}>
                            <Text style={StyleNewsPassWord.textbutton}>Change Password</Text>
                        </TouchableOpacity>
                        <DialogNewPassword
                            visible={modalVisible}
                            onClose={() => setModalVisible(false)}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default NewsPassword