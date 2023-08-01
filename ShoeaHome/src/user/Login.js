import { View, Text, TouchableOpacity, TextInput, Image, Platform, ScrollView } from 'react-native'
import React, { useState, useContext, useEffect, useRef } from 'react'
import StyleLogin from '../style/StyleLogin'
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK, GO_TO_SIGNUP, GO_TO_FORGOT_PASSWORD, GO_TO_SHOES } from '../function/NavigationNext';
import Toast from 'react-native-toast-message';
import { handleLoginAuth } from '../auth/user/LoginAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { HandeleLoginGoogle } from '../auth/AuthGoogle';
import InstagramLogin from 'react-native-instagram-login';
import { HandeleLoginFacebook } from '../auth/AuthFaceBook';
import ThemeContext from '../../config/context/ThemContext';
import { Alert } from 'react-native';

const Login = ({ route }) => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showError, setShowError] = useState(false);
  const Theme = useContext(ThemeContext);
  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };
  useEffect(() => {
    const retrieveRememberMe = async () => {
      try {
        const storedRememberMe = await AsyncStorage.getItem('rememberMe');
        if (storedRememberMe) {
          const { email: storedEmail, password: storedPassword } = JSON.parse(storedRememberMe);
          setEmail(storedEmail);
          setPassword(storedPassword);
          setChecked(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    retrieveRememberMe();
  }, []);
  const handleSignIn = async () => {
    if (!email) {
      setEmailError('Please enter your email');
      setShowError(true); // Hiển thị thông báo lỗi khi đăng nhập không thành công
      return;
    }
    if (!password) {
      setPasswordError('Please enter your password');
      setShowError(true); // Hiển thị thông báo lỗi khi đăng nhập không thành công
      return;
    }
    const loginSuccess = await handleLoginAuth(email, password, navigation);
    if (!loginSuccess) {
      setLoginError('Incorrect email or password. Please try again.');
      setShowError(true); // Hiển thị thông báo lỗi khi đăng nhập không thành công
      return;
    }
    if (checked) {
      const rememberMeData = JSON.stringify({ email, password }); // Chuyển object thành chuỗi JSON để lưu vào AsyncStorage
      AsyncStorage.setItem('rememberMe', rememberMeData)
        .then(() => {
          console.log('Remember me data saved successfully');
        })
        .catch((error) => {
          console.log('Error saving remember me data:', error);
        });
    }
    //lưu trạng thái đăng nhập vào AsyncStorage
    await AsyncStorage.setItem('userId', 'true');
  };
  // Hàm xử lý thay đổi email
  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError('');
    setShowError(false); // Ẩn thông báo lỗi khi người dùng thay đổi email
  }
  // Hàm xử lý thay đổi mật khẩu
  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError('');
    setShowError(false); // Ẩn thông báo lỗi khi người dùng thay đổi mật khẩu
  }
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleId = userInfo.user.id;
      const email = userInfo.user.email;
      const fullname = userInfo.user.name;
      const imgAvatar = userInfo.user.photo;
      console.log("🚀 ~ file: Login.js ~ line 144 ~ handleGoogleSignIn ~ googleId", googleId)
      HandeleLoginGoogle(googleId, email, fullname, imgAvatar, navigation);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated');
      } else {
        console.log('Some other error happened:', error);
      }
    }
  }
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '896442052016-fd6segd94bvt1nmlomp9tg2a9j31klk4.apps.googleusercontent.com',
      // offlineAccess: true,
      // scopes: ['profile', 'email'],
    });
  }, []);
  const handleLoginInstagram = (data) => {
    // Xử lý kết quả đăng nhập thành công từ InstagramLogin
    console.log('Login success:', data);
    const facebookId = data.user_id;
    HandeleLoginFacebook(facebookId, navigation);
  };
  //hàm xử lý đăng nhập thất bại từ InstagramLogin
  const handleLoginFailure = (data) => {
    // Xử lý kết quả đăng nhập thất bại từ InstagramLogin
    console.log('Login failure:', data);
    // Hiển thị thông báo lỗi hoặc thực hiện các hành động khác tùy thuộc vào kết quả đăng nhập
  };
  const handleLoginApple = () => {
    if (Platform.OS === 'ios') {
      // Nếu đang chạy trên iOS, hiển thị tùy chọn đăng nhập Apple
      // Xử lý đăng nhập bằng Apple tại đây
      // ...
    } else {
      // Nếu không phải iOS (đang chạy trên Android), không hiển thị tùy chọn đăng nhập Apple
      Alert.alert('Cannot sign in with Apple on Android devices.');
    }
  };
  return (
    <View style={StyleLogin.container}>
      <Toast />
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('HomeOption')}>
          <Icon name="keyboard-backspace" size={35} color="#000" style={StyleLogin.iconback} />
        </TouchableOpacity>
        <View style={StyleLogin.viewbody}>
          <View style={StyleLogin.viewlogo}>
            <Image source={require('../../assets/images/logo.jpg')} style={StyleLogin.logo} />
            <Text style={StyleLogin.textlogo}>Login to Your Account</Text>
          </View>
          <View style={StyleLogin.viewlogin}>
            <Icon name="email" size={25} style={StyleLogin.iconemail} />
            <TextInput
              style={StyleLogin.textlogin}
              placeholder='Email'
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
          {emailError ? <Text style={StyleLogin.errorText}>{emailError}</Text> : null}
          <View View style={StyleLogin.viewpassword}>
            <Icon name="lock" size={24} color="#000" style={StyleLogin.iconpassword} />
            <TextInput
              style={StyleLogin.textlogin}
              placeholder='Password'
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={isPasswordHidden} />
            <TouchableOpacity onPress={togglePasswordVisibility} style={StyleLogin.viewiconpassword}>
              <Icon name={isPasswordHidden ? 'eye' : 'eye-off'} size={25} style={StyleLogin.iconpassword} />
            </TouchableOpacity>
          </View>
          {passwordError ? <Text style={StyleLogin.errorText}>{passwordError}</Text> : null}
          {showError && <Text style={StyleLogin.errorText}>{loginError}</Text>}
          <CheckBox
            title={<Text style={StyleLogin.textcheckbox}>Remember me</Text>}
            checked={checked}
            onPress={() => setChecked(!checked)}
            containerStyle={StyleLogin.checkbox}
            textStyle={StyleLogin.textcheckbox}
            checkedColor='#000'
            uncheckedColor='#000'
          />
          <TouchableOpacity style={StyleLogin.buttonlogin} onPress={handleSignIn}>
            <Text style={StyleLogin.textbuttonlogin}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={StyleLogin.viewfortgot} onPress={() => GO_TO_FORGOT_PASSWORD(navigation)}>
            <Text style={StyleLogin.textforgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <View style={StyleLogin.line} />
            <View>
              <Text style={StyleLogin.textline}>or continue with</Text>
            </View>
            <View style={StyleLogin.line} />
          </View>
          <View style={StyleLogin.viewaccount}>
            <TouchableOpacity style={StyleLogin.buttonfacebook} onPress={() => this.instagramLogin.show()}>
              <Image source={require('../../assets/images/facebook.png')} style={StyleLogin.logo1} />
            </TouchableOpacity>
            <TouchableOpacity style={StyleLogin.buttonfacebook} onPress={() => { handleGoogleSignIn() }}>
              <Image source={require('../../assets/images/google.png')} style={StyleLogin.logo1} />
            </TouchableOpacity>
            {Platform.OS === 'ios' ? ( // Chỉ hiển thị khi đang chạy trên iOS
              <TouchableOpacity style={StyleLogin.buttonfacebook} onPress={() => handleLoginApple()}>
                <Image source={require('../../assets/images/apple.png')} style={StyleLogin.logo1} />
              </TouchableOpacity>
            ) : null}
          </View>
          <InstagramLogin
            ref={ref => (this.instagramLogin = ref)}
            appId='1692811321236601'
            appSecret='eef975a7c765f1e4a2c5b066fc0b0501'
            redirectUrl='https://github.com/'
            scopes={['user_profile']}
            onLoginSuccess={handleLoginInstagram}
            onLoginFailure={handleLoginFailure}
          />
          <View style={StyleLogin.viewsignup}>
            <Text style={StyleLogin.textsignup}>Already have an account?</Text>
            <TouchableOpacity onPress={() => GO_TO_SIGNUP(navigation)}>
              <Text style={StyleLogin.textsignup1}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView >
    </View >
  )
}

export default Login