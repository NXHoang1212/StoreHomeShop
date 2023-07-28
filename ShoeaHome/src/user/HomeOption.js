import { View, Text, TouchableOpacity, Image, Platform, Alert } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import StyleHomeOption from '../style/StyleHomOption'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK, GO_TO_SIGNUP, GO_TO_SIGNIN } from '../function/NavigationNext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AxiosInstance from '../../config/context/AxiosIntance'
import { getUserId, getorderId } from '../../config/service/Utils'
import { useFocusEffect } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { HandeleLoginGoogle } from '../auth/AuthGoogle'
import { HandeleLoginFacebook } from '../auth/AuthFaceBook'
import InstagramLogin from 'react-native-instagram-login'

const HomeOption = ({ navigation }) => {
  const checkLoginStatus = async () => {
    try {
      const isLogged = await AsyncStorage.getItem('userId');
      if (isLogged) {
        // Người dùng đã đăng nhập, chuyển hướng ngay lập tức đến màn hình trang chủ
        navigation.navigate('HomeShoes');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkLoginStatus();
  }, [navigation]);
  const deleteOrder = async () => {
    const userId = await getUserId();
    const orderId = await getorderId();
    try {
      const response = await AxiosInstance().delete(`order/${userId}/deleteOrder/${orderId}`);
      console.log(response);
      GO_BACK(navigation);
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        deleteOrder();
      });
      return unsubscribe;
    }, [])
  );
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
    <View style={StyleHomeOption.container}>
      <TouchableOpacity onPress={() => GO_BACK(navigation)}>
        <Icon name="keyboard-backspace" size={38} color="#000" style={StyleHomeOption.iconback} />
      </TouchableOpacity>
      <View style={StyleHomeOption.viewbody1}>
        <Image source={require('../../assets/images/banner.jpg')} style={StyleHomeOption.logo} />
        <Text style={StyleHomeOption.text}>Let's you in</Text>
      </View>
      <View style={StyleHomeOption.viewbody2}>
        <TouchableOpacity onPress={() => { this.instagramLogin.show() }}>
          <View style={StyleHomeOption.button}>
            <Image source={require('../../assets/images/facebook.png')} style={StyleHomeOption.logo1} />
            <Text style={StyleHomeOption.textbutton}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { handleGoogleSignIn() }}>
          <View style={StyleHomeOption.button}>
            <Image source={require('../../assets/images/google.png')} style={StyleHomeOption.logo1} />
            <Text style={StyleHomeOption.textbutton}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        {Platform.OS === 'ios' ? (
          <TouchableOpacity>
            <View style={StyleHomeOption.button}>
              <Image source={require('../../assets/images/apple.png')} style={StyleHomeOption.logo1} />
              <Text style={StyleHomeOption.textbutton}>Continue with Apple</Text>
            </View>
          </TouchableOpacity>
        ) : null}
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <View style={StyleHomeOption.line} />
          <View style={{ justifyContent: 'center', paddingHorizontal: 10 }}>
            <Text style={StyleHomeOption.textline}>Or</Text>
          </View>
          <View style={StyleHomeOption.line} />
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
        <TouchableOpacity style={StyleHomeOption.buttonpassword} onPress={() => GO_TO_SIGNIN(navigation)}>
          <View>
            <Text style={StyleHomeOption.textbuttonpassword}>Sign in with password</Text>
          </View>
        </TouchableOpacity>
        <View style={StyleHomeOption.viewaccount}>
          <View style={StyleHomeOption.viewsmallaccount}>
            <Text style={StyleHomeOption.textaccount}>Don't have an account?</Text>
          </View>
          <TouchableOpacity onPress={() => GO_TO_SIGNUP(navigation)}>
            <Text style={StyleHomeOption.textsignup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HomeOption