import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import StyleRegister from '../style/StyleRegister';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CheckBox } from 'react-native-elements';
import { GO_BACK, GO_TO_SIGNIN } from '../function/NavigationNext';
import { handleRegisterAuth } from '../auth/user/RegisterAuth';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Register = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);//hide password
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);//hide confirm password
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [fullnameError, setFullnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirm_passwordError, setConfirmPasswordError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  //hide password
  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };
  //hide confirm password
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordHidden(!isConfirmPasswordHidden);
  };

  const handleSignIn = () => {
    // Kiểm tra và hiển thị thông báo lỗi bên dưới từng trường nhập liệu
    if (!fullname) {
      setFullnameError('Please enter your fullname');
      return;
    }
    if (!email) {
      setEmailError('Please enter your email');
      return;
    }
    if (!password) {
      setPasswordError('Please enter your password');
      return;
    }
    if (!confirm_password) {
      setConfirmPasswordError('Please enter your confirm password');
      return;
    }
    if (password !== confirm_password) {
      setConfirmPasswordError('Confirm password does not match');
      return;
    }
    // Gọi hàm xử lý đăng nhập từ file LoginAuth.js
    handleRegisterAuth(fullname, email, password, confirm_password, navigation, Toast);
    Toast.show({
      type: 'success',
      text1: 'Register Success',
      visibilityTime: 2000,
      autoHide: true,
    })

  };
  const handleFullnameChange = (text) => {
    setFullname(text);
    setFullnameError(''); // Xóa thông báo lỗi khi người dùng nhập vào
  };
  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError(''); // Xóa thông báo lỗi khi người dùng nhập vào
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError(''); // Xóa thông báo lỗi khi người dùng nhập vào
  };
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setConfirmPasswordError(''); // Xóa thông báo lỗi khi người dùng nhập vào
  };
  // Kiểm tra trạng thái đã đăng ký khi màn hình được tải lên
  // const checkRegistrationStatus = async () => {
  //   const registrationStatus = await AsyncStorage.getItem('registrationStatus');
  //   if (registrationStatus === 'registered') {
  //     setIsRegistered(true);
  //   }
  // };
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        checkRegistrationStatus();
      });
      return unsubscribe;
    }, [navigation])
  );


  return (
    <ScrollView>
      <View style={StyleRegister.container}>
        <Toast />
        <TouchableOpacity onPress={() => GO_BACK(navigation)}>
          <Icon name="keyboard-backspace" size={35} color="#000" style={StyleRegister.iconback} />
        </TouchableOpacity>
        <View style={StyleRegister.viewbody}>
          <View style={StyleRegister.viewlogo}>
            <Image source={require('../../assets/images/logo.jpg')} style={StyleRegister.logo} />
            <Text style={StyleRegister.textlogo}>Create Your Account</Text>
          </View>
          <View style={StyleRegister.viewusers}>
            <Icon name="account" size={25} style={StyleRegister.iconemail} />
            <TextInput
              style={StyleRegister.textlogin}
              placeholder='FullName'
              value={fullname}
              onChangeText={handleFullnameChange}
            />
          </View>
          <Text style={StyleRegister.errorText}>{fullnameError}</Text>
          <View style={StyleRegister.viewlogin}>
            <Icon name="email" size={25} style={StyleRegister.iconemail} />
            <TextInput
              style={StyleRegister.textlogin}
              placeholder='Email'
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
          <Text style={StyleRegister.errorText}>{emailError}</Text>
          <View style={StyleRegister.viewpassword}>
            <Icon name="lock" size={24} color="#000" style={StyleRegister.iconpassword} />
            <TextInput style={StyleRegister.textlogin}
              placeholder='Password'
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={isPasswordHidden}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={StyleRegister.viewiconpassword1}>
              <Icon name={isPasswordHidden ? 'eye' : 'eye-off'} size={25} style={StyleRegister.iconpassword} />
            </TouchableOpacity>
          </View>
          <Text style={StyleRegister.errorText}>{passwordError}</Text>
          <View style={StyleRegister.viewpassword}>
            <Icon name="lock" size={24} color="#000" style={StyleRegister.iconpassword} />
            <TextInput style={StyleRegister.textlogin}
              placeholder='Confirm Password'
              value={confirm_password}
              onChangeText={handleConfirmPasswordChange}
              secureTextEntry={isConfirmPasswordHidden}
            />
            <TouchableOpacity
              onPress={toggleConfirmPasswordVisibility}
              style={StyleRegister.viewiconpassword1}>
              <Icon
                name={isConfirmPasswordHidden ? 'eye' : 'eye-off'}
                size={25}
                style={StyleRegister.iconpassword}
              />
            </TouchableOpacity>
          </View>
          <Text style={StyleRegister.errorText}>{confirm_passwordError}</Text>
          <CheckBox
            title={<Text style={StyleRegister.textcheckbox}>Remember me</Text>}
            checked={checked}
            onPress={() => setChecked(!checked)}
            checkedColor='black'
            uncheckedColor='gray'
            containerStyle={StyleRegister.checkbox}
          />
          <TouchableOpacity style={StyleRegister.buttonlogin} onPress={handleSignIn}>
            <Text style={StyleRegister.textbuttonlogin}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <View style={StyleRegister.line} />
            <View style={{ justifyContent: 'center', paddingHorizontal: 10 }}>
              <Text style={StyleRegister.textline}>or continue with</Text>
            </View>
            <View style={StyleRegister.line} />
          </View>
          <View style={StyleRegister.viewaccount}>
            <TouchableOpacity style={StyleRegister.buttonfacebook}>
              <Image source={require('../../assets/images/facebook.png')} style={StyleRegister.logo1} />
            </TouchableOpacity>
            <TouchableOpacity style={StyleRegister.buttonfacebook}>
              <Image source={require('../../assets/images/google.png')} style={StyleRegister.logo1} />
            </TouchableOpacity>
            <TouchableOpacity style={StyleRegister.buttonfacebook}>
              <Image source={require('../../assets/images/apple.png')} style={StyleRegister.logo1} />
            </TouchableOpacity>
          </View>
          <View style={StyleRegister.viewsignup}>
            <Text style={StyleRegister.textsignup}>Already have an account?</Text>
            <TouchableOpacity onPress={() => GO_TO_SIGNIN(navigation)}>
              <Text style={StyleRegister.textsignup1}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Register