import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform, BackHandler } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import StyleEditProfile from '../../../style/styleOptionInfor/StyleEditProfile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalSaveProfile from '../../../function/ModalSaveProfile';
import DateTimePicker from '@react-native-community/datetimepicker';
import PhoneInput from 'react-native-phone-number-input';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import { dataGender } from '../../../function/ArrayCountry';
import { HOST } from '../../../../config/Constant';
import AxiosInstance from '../../../../config/context/AxiosIntance';
import { getUserId } from '../../../../config/service/Utils';
import ThemeContext from '../../../../config/context/ThemContext';

const EditProfile = ({ navigation }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // Modal xác nhận lưu thay đổi
  const [isDataChanged, setIsDataChanged] = useState(false); // Trạng thái thay đổi dữ liệu
  const [isFocus, setIsFocus] = useState(false);
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [mobile, setMobile] = useState('');
  const [date, setDate] = useState(new Date());
  const [dateofbirth, setDateofBirth] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const Theme = useContext(ThemeContext)
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const onchange = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateofBirth(formatDate(currentDate));
      }

    } else {
      toggleDatePicker();
    }
  };
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://api.countrystatecity.in/v1/countries',
      headers: {
        'X-CSCAPI-KEY': 'TGZVdVphbG1oS01odkZXaml2ckthcTNrNmFMYWpFQjAwek13Wm1YRA=='
      }
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        var countryArray = [];
        for (var i = 0; i < count; i++) {
          countryArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setCountryData(countryArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = await getUserId();
      if (userId) {
        const userResponse = await AxiosInstance().get(`api/users/${userId}/updateProfile`);
        console.log("🚀 ~ file: EditProfile.js:85 ~ fetchUserData ~ userResponse:", userResponse.users);
        // console.log('User Response >>>>:', userResponse.users.fullname);
        // Cập nhật state hoặc thực hiện các tác vụ khác với thông tin người dùng
        setName(userResponse.users.name);
        setFullname(userResponse.users.fullname);
        setEmail(userResponse.users.email);
        setCountry(userResponse.users.country);
        setMobile(userResponse.users.mobile);
        setGender(userResponse.users.gender);
        setDateofBirth(userResponse.users.dateofbirth);
      }
    };
    fetchUserData();
  }, []);
  // Xử lý sự kiện back android
  useEffect(() => {
    const backAction = () => {
      if (isDataChanged) {
        setShowConfirmationModal(true);
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [isDataChanged]);
  const handleUpdateProfile = async () => {
    try {
      const userId = await getUserId();
      if (userId) {
        const response = await AxiosInstance().post(`api/users/${userId}/updateEditProfile`, {
          name: name,
          fullname: fullname,
          dateofbirth: dateofbirth,
          country: country,
          mobile: mobile,
          gender: gender,
        });
        console.log("🚀 ~ file: EditProfile.js:129 ~ response ~ response:", response)
        // Xử lý thành công sau khi lưu thông tin
        setIsDataChanged(false);
        navigation.goBack();
      }
    } catch (error) {
      console.log('Save Changes Error:', error);
    }
  };
  const handleGoBack = () => {
    if (isDataChanged) {
      setShowConfirmationModal(true);
    } else {
      navigation.goBack();
    }
  };
  const handleDiscardChanges = () => {
    setIsDataChanged(false);
    setShowConfirmationModal(false);
    navigation.goBack();
  };
  const handleSaveChanges = () => {
    setIsDataChanged(false);
    setShowConfirmationModal(false);
    handleUpdateProfile();
  };

  return (
    <View style={[StyleEditProfile.container, { backgroundColor: Theme.backgroundColor }]}>
      <ScrollView>
        <View style={[StyleEditProfile.viewbody, { backgroundColor: Theme.backgroundColor }]}>
          <View style={StyleEditProfile.viewheader}>
            <TouchableOpacity onPress={handleGoBack}>
              <Icon name="arrow-left" size={30} style={[StyleEditProfile.iconback, { color: Theme.color }]} />
            </TouchableOpacity>
            <Text style={[StyleEditProfile.textheader, { color: Theme.color }]}>Edit Profile</Text>
          </View>
          <View style={StyleEditProfile.containerInput}>
            <View style={[StyleEditProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={StyleEditProfile.textname}>NickName</Text>
              <TextInput
                style={[StyleEditProfile.textinput, { color: Theme.color }]}
                value={name}
                placeholderTextColor="black"
                onChangeText={(text) => {
                  setName(text)
                  setIsDataChanged(true);
                }}
              />
            </View>
            <View style={[StyleEditProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={StyleEditProfile.textname}>FullName</Text>
              <TextInput
                style={[StyleEditProfile.textinput, { color: Theme.color }]}
                value={fullname}
                onChangeText={(text) => {
                  setFullname(text)
                  setIsDataChanged(true);
                }}
              />
            </View>
            <View style={[StyleEditProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={StyleEditProfile.textname}>DateOfBrith</Text>
              <View style={StyleEditProfile.viewinfor}>
                {showPicker && (
                  <DateTimePicker
                    mode="date"
                    display="calendar"
                    value={date}
                    onChange={onchange}
                    locale="vi-VN"
                  />
                )}
                {!showPicker && (
                  <View style={StyleEditProfile.viewinfor}>
                    <Text style={[StyleEditProfile.textmail, { color: Theme.color }]}>{dateofbirth}</Text>
                    <TouchableOpacity onPress={toggleDatePicker}>
                      <Icon name="calendar" size={21} style={[StyleEditProfile.iconcalendar, { color: Theme.color }]} />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <View style={[StyleEditProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={StyleEditProfile.textname}>Email</Text>
              <View style={StyleEditProfile.viewinfor}>
                <Text style={[StyleEditProfile.textmail, { color: Theme.color }]}>{email}</Text>
                <TouchableOpacity style={StyleEditProfile.iconemail} >
                  <Icon name="email-open-multiple-outline" size={21} style={[{ color: Theme.color }]} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[StyleEditProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={StyleEditProfile.textname}>Country</Text>
              <Dropdown
                placeholderStyle={[StyleEditProfile.placeholderStyle, { color: Theme.color }]}
                selectedTextStyle={[StyleEditProfile.selectedTextStyle, { color: Theme.color }]}
                inputSearchStyle={[StyleEditProfile.inputSearchStyle, { color: Theme.color }]}
                iconStyle={[StyleEditProfile.iconStyle, { tintColor: Theme.color }]}
                data={countryData}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? country : '...'}
                searchPlaceholder="Search..."
                value={country}
                onChange={item => {
                  setCountry(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
            <View>
              <PhoneInput
                defaultCode="VN"
                containerStyle={[StyleEditProfile.viewphone, { backgroundColor: Theme.backgroundBorder }]}
                textInputStyle={[StyleEditProfile.textphone, { color: Theme.color }]}
                textContainerStyle={[StyleEditProfile.textphone, { backgroundColor: Theme.backgroundBorder }]}
                placeholder={mobile}
                textInputProps={{ placeholderTextColor: Theme.color }}
                codeTextStyle={[{ color: Theme.color }]}
                onChangeText={(text) => {
                  setMobile(text)
                  setIsDataChanged(true);
                }}
              />
            </View>
            <View style={[StyleEditProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={StyleEditProfile.textname}>Gender</Text>
              <Dropdown
                placeholderStyle={[StyleEditProfile.placeholderStyle, { color: Theme.color }]}
                selectedTextStyle={[StyleEditProfile.selectedTextStyle, { color: Theme.color }]}
                inputSearchStyle={[StyleEditProfile.inputSearchStyle, { color: Theme.color }]}
                iconStyle={[StyleEditProfile.iconStyle, { tintColor: Theme.color }]}
                data={dataGender}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Gender' : '...'}
                value={gender}
                onChange={item => {
                  setGender(item.value);
                  setIsFocus(false);
                }} />
            </View>
            <TouchableOpacity onPress={() => { handleUpdateProfile(); }}>
              <View style={[StyleEditProfile.button, { backgroundColor: Theme.backgroundCheckOut, }]}>
                <Text style={[StyleEditProfile.textbutton, { color: Theme.colorTextWhiteBlack }]}>Update</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {showConfirmationModal && (
        <ModalSaveProfile
          visible={showConfirmationModal}
          onDiscardChanges={handleDiscardChanges}
          onSaveChanges={handleSaveChanges}
        />
      )}
    </View>
  )
}

export default EditProfile