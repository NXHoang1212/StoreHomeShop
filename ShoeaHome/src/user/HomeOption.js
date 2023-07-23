import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import StyleHomeOption from '../style/StyleHomOption'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK, GO_TO_SIGNUP, GO_TO_SIGNIN } from '../function/NavigationNext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AxiosInstance from '../../config/context/AxiosIntance'
import { getUserId, getorderId } from '../../config/service/Utils'
import { useFocusEffect } from '@react-navigation/native'

const HomeOption = ({ navigation }) => {
  const checkLoginStatus = async () => {
    try {
      const isLogged = await AsyncStorage.getItem('userId');
      if (isLogged) {
        // Người dùng đã đăng nhập, chuyển hướng ngay lập tức đến màn hình trang chủ
        navigation.reset({
          index: 0,
          routes: [{ name: 'Shoes' }],
        }); // Xóa hết các màn hình cũ
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
        <TouchableOpacity>
          <View style={StyleHomeOption.button}>
            <Image source={require('../../assets/images/facebook.png')} style={StyleHomeOption.logo1} />
            <Text style={StyleHomeOption.textbutton}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={StyleHomeOption.button}>
            <Image source={require('../../assets/images/google.png')} style={StyleHomeOption.logo1} />
            <Text style={StyleHomeOption.textbutton}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={StyleHomeOption.button}>
            <Image source={require('../../assets/images/apple.png')} style={StyleHomeOption.logo1} />
            <Text style={StyleHomeOption.textbutton}>Continue with Apple</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <View style={StyleHomeOption.line} />
          <View style={{ justifyContent: 'center', paddingHorizontal: 10 }}>
            <Text style={StyleHomeOption.textline}>Or</Text>
          </View>
          <View style={StyleHomeOption.line} />
        </View>

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