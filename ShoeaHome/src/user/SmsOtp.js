import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import StyleSmsOtp from '../style/StyleSmsOtp'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK, GO_TO_NEW_PASSWORD } from '../function/NavigationNext'
import { handleCheckOtp } from '../auth/user/CheckOtp';
import { getUserId } from '../../config/service/Utils';
import AxiosInstance from '../../config/context/AxiosIntance';
import { HOST } from '../../config/Constant';
import { useFocusEffect } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

const SmsOtp = ({ navigation, route }) => {
  const { contactInfor } = route.params;
  const isFocused = useIsFocused();
  const [values, setValues] = useState(['', '', '', '']); // Mảng lưu trữ các giá trị của các ô nhập
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Mảng lưu trữ các ref của các TextInput
  const [remainingSeconds, setRemainingSeconds] = useState(120); // Số giây còn lại cho đến khi có thể gửi lại mã OTP
  const [isCountdownFinished, setIsCountdownFinished] = useState(false); // Trạng thái countdown đã kết thúc hay chưa
  const [token, SetToken] = useState([]);
  // Hàm xử lý sự kiện khi người dùng nhập vào một ô
  const handleInputChange = (text, index) => {
    const newValues = [...values];
    newValues[index] = text;
    setValues(newValues);
    // Nếu đang ở ô nhập cuối cùng thì không làm gì cả
    if (index === 3) return;
    // Nếu người dùng đã nhập đúng số, chuyển sang ô nhập tiếp theo
    if (text.length === 1) {
      refs[index + 1].current.focus();
    }
  };
  // Hàm xử lý sự kiện khi người dùng nhấn nút "back"
  const handleInputBackspace = (index) => {
    // Nếu đang ở ô nhập đầu tiên thì không làm gì cả
    if (index === 0) return;
    // Di chuyển trở lại ô nhập trước đó
    refs[index - 1].current.focus();
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        setIsCountdownFinished(true);
      }
    }, 1000);
    // Xóa interval khi component bị unmount hoặc remainingSeconds = 0
    return () => clearInterval(interval);
  }, [remainingSeconds]);
  // Hàm định dạng thời gian
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60); // Phút = Tổng số giây / 60
    const remainingSeconds = seconds % 60;  // Số giây còn lại = Tổng số giây chia dư cho 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  const getUser = async () => {
    const userId = await getUserId();
    if (userId) {
      const response = await AxiosInstance().get(`api/users/${userId}`);
      SetToken(response.user.resetPassword);
      console.log("🚀 ~ file: SmsOtp.js:77 ~ getUser ~ response.user", response.user.resetPassword)
    }
  }
  const handleSendOtp = async () => {
    // const otp = values.join('');
    // const response = await handleCheckOtp(token, otp, navigation);
    // console.log("🚀 ~ file: SmsOtp.js:77 ~ handleSendOtp ~ response", response)
    navigation.navigate('NewsPassword', { token: token });
  }
  useEffect(() => {
    if (isFocused) {
      getUser();
    }
  }, [isFocused]);

  return (
    <View style={StyleSmsOtp.container}>
      <View style={StyleSmsOtp.viewbody}>
        <View style={StyleSmsOtp.viewlogo}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)}>
            <Icon name="arrow-left" size={33} style={StyleSmsOtp.iconback} />
          </TouchableOpacity>
          <Text style={StyleSmsOtp.textlogo}>Forgot Password</Text>
        </View>
        <View style={StyleSmsOtp.viewtext}>
          <Text style={StyleSmsOtp.text}>Code has been send to {contactInfor}</Text>
        </View>
        <View style={StyleSmsOtp.viewotp}>
          {values.map((value, index) => (
            <TextInput
              key={index}
              style={StyleSmsOtp.input}
              maxLength={1}
              value={value}
              onChangeText={(text) => handleInputChange(text, index)}
              onKeyPress={({ nativeEvent }) =>
                nativeEvent.key === 'Backspace' && handleInputBackspace(index)
              }
              keyboardType={'numeric'}
              ref={refs[index]}
            />
          ))}
        </View>
        <View style={StyleSmsOtp.viewsend}>
          <TouchableOpacity>
            <Text style={[StyleSmsOtp.text, isCountdownFinished && StyleSmsOtp.negative]}>
              Resend Code
            </Text>
          </TouchableOpacity>
          <Text style={StyleSmsOtp.text}>{formatTime(remainingSeconds)}</Text>
        </View>
        <TouchableOpacity style={StyleSmsOtp.viewverify} onPress={handleSendOtp}>
          <Text style={StyleSmsOtp.textverify}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default SmsOtp