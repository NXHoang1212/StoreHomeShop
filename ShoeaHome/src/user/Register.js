import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Platform, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import StyleRegister from '../style/StyleRegister';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CheckBox } from 'react-native-elements';
import { GO_BACK, GO_TO_SIGNIN } from '../function/NavigationNext';
import { handleRegisterAuth } from '../auth/user/RegisterAuth';
import Toast from 'react-native-toast-message';
import { HandeleLoginGoogle } from '../auth/AuthGoogle';
import InstagramLogin from 'react-native-instagram-login';
import { HandeleLoginFacebook } from '../auth/AuthFaceBook';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

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
  const [showError, setShowError] = useState(false);
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
      setShowError(true);
      return;
    }
    if (!email) {
      setEmailError('Please enter your email');
      setShowError(true);
      return;
    }
    if (!password) {
      setPasswordError('Please enter your password');
      setShowError(true);
      return;
    }
    if (!confirm_password) {
      setConfirmPasswordError('Please enter your confirm password');
      setShowError(true);
      return;
    }
    if (password !== confirm_password) {
      setConfirmPasswordError('Confirm password does not match');
      setShowError(true);
      return;
    }
    // Gọi hàm xử lý đăng nhập từ file LoginAuth.js
    handleRegisterAuth(fullname, email, password, confirm_password, setIsRegistered, setRegisterError);
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
    setShowError(false);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError(''); // Xóa thông báo lỗi khi người dùng nhập vào
    setShowError(false);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError(''); // Xóa thông báo lỗi khi người dùng nhập vào
    setShowError(false);
  };
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setConfirmPasswordError(''); // Xóa thông báo lỗi khi người dùng nhập vào
    setShowError(false);
  };
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
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            <Icon name="account" size={25} style={StyleRegister.iconaccount} />
            <TextInput
              style={StyleRegister.textlogin}
              placeholder='FullName'
              value={fullname}
              onChangeText={handleFullnameChange}
            />
          </View>
          {showError && <Text style={StyleRegister.errorText}>{fullnameError}</Text>}
          <View style={StyleRegister.viewlogin}>
            <Icon name="email" size={23} style={StyleRegister.iconemail} />
            <TextInput
              style={StyleRegister.textlogin}
              placeholder='Email'
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
          {showError && <Text style={StyleRegister.errorText}>{emailError}</Text>}
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
          {showError && <Text style={StyleRegister.errorText}>{passwordError}</Text>}
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
          {showError && <Text style={StyleRegister.errorText}>{confirm_passwordError}</Text>}
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
            <View>
              <Text style={StyleRegister.textline}>or continue with</Text>
            </View>
            <View style={StyleRegister.line} />
          </View>
          <View style={StyleRegister.viewaccount}>
            <TouchableOpacity style={StyleRegister.buttonfacebook} onPress={() => { this.instagramLogin.show() }}>
              <Image source={require('../../assets/images/facebook.png')} style={StyleRegister.logo1} />
            </TouchableOpacity>
            <TouchableOpacity style={StyleRegister.buttonfacebook} onPress={() => { handleGoogleSignIn() }}>
              <Image source={require('../../assets/images/google.png')} style={StyleRegister.logo1} />
            </TouchableOpacity>
            {Platform.OS === 'ios' ? ( // Chỉ hiển thị khi đang chạy trên iOS
              <TouchableOpacity style={StyleRegister.buttonfacebook} onPress={() => handleLoginApple()}>
                <Image source={require('../../assets/images/apple.png')} style={StyleRegister.logo1} />
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