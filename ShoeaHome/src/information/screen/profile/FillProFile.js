import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import styleFillProfile from '../../../style/styleInformation/StyleFillProfile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import PhoneInput from 'react-native-phone-number-input';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import { dataGender } from '../../../function/ArrayCountry';
import AxiosInstance from '../../../../config/context/AxiosIntance';
import { choosePhotoFromLibrary, takePhotoCamera } from '../../../function/UploadCamera';
import { getUserId } from '../../../../config/service/Utils';
import { NotifeeContext } from '../../../../config/context/NotifeeContext';
import { createdNotifee, SuccsessNotifee } from '../../../../config/service/Notifee';
import { Modal } from 'react-native';
import ThemeContext from '../../../../config/context/ThemContext';
import { GO_TO_SHOES } from '../../../function/NavigationNext';
import { useNavigation } from '@react-navigation/native';


const FillProFile = () => {
  const navigation = useNavigation();
  const [imgAvatar, setImgAvatar] = useState('');
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
  const [openModal, setOpenModal] = useState(false);
  const { SetNotifeeCount } = useContext(NotifeeContext);
  const Theme = useContext(ThemeContext);
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
    getUserId()
  }, []);
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = await getUserId();
      if (userId) {
        const userResponse = await AxiosInstance().get(`api/users/${userId}/updateProfile`);
        console.log('User Response:', userResponse);
        // console.log('User Response >>>>:', userResponse.users.fullname);
        // Cập nhật state hoặc thực hiện các tác vụ khác với thông tin người dùng
        setImgAvatar(userResponse.users.imgAvatar);
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
        SetNotifeeCount((prevCount) => prevCount + 1);
        createdNotifee();
        SuccsessNotifee();
        navigation.reset({
          index: 0,
          routes: [{ name: 'Shoes', params: { screen: 'Home' } }],
        });
      }
    } catch (error) {
      console.log('Save Changes Error:', error);
    }
  };
  const handleChoosePhotoFromLibrary = () => {
    choosePhotoFromLibrary(setImgAvatar);
    setOpenModal(false);
  };
  const handleTakePhotoCamera = () => {
    takePhotoCamera(setImgAvatar);
    setOpenModal(false);
  };
  const handeBlack = () => {
    SetNotifeeCount((prevCount) => prevCount + 1);
    createdNotifee();
    SuccsessNotifee();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Shoes', params: { screen: 'Home' } }],
    });
  }

  return (
    <View style={[styleFillProfile.container, { backgroundColor: Theme.container }]}>
      <ScrollView>
        <View style={[styleFillProfile.viewbody, { backgroundColor: Theme.container }]}>
          <View style={styleFillProfile.viewheader}>
            <TouchableOpacity onPress={() => { handeBlack() }}>
              <Icon name="arrow-left" size={30} style={[styleFillProfile.iconback, { color: Theme.color }]} />
            </TouchableOpacity>
            <Text style={[styleFillProfile.textheader, { color: Theme.color }]}>Fill Your Profile</Text>
          </View>
          <View style={styleFillProfile.viewimage}>
            <TouchableOpacity style={styleFillProfile.viewbuttonimage} onPress={() => setOpenModal(true)}>
              {imgAvatar ?
                <Image
                  source={{ uri: imgAvatar }}
                  style={styleFillProfile.image} /> :
                <Image
                  source={require('../../../../assets/images/avatar.jpg')}
                  style={styleFillProfile.image} />
              }
              <Icon name="pencil-box" size={31} style={[styleFillProfile.iconimage, { color: Theme.color }]} />
            </TouchableOpacity>
          </View>
          <View style={styleFillProfile.containerInput}>
            <View style={[styleFillProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={styleFillProfile.textname}>NickName</Text>
              <TextInput
                style={[styleFillProfile.textinput, { color: Theme.color }]}
                value={name}
                placeholderTextColor="black"
                onChangeText={(text) => {
                  setName(text)
                }}
              />
            </View>
            <View style={[styleFillProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={styleFillProfile.textname}>FullName</Text>
              <TextInput
                style={[styleFillProfile.textinput, { color: Theme.color }]}
                value={fullname}
                onChangeText={(text) => {
                  setFullname(text)
                }}
              />
            </View>
            <View style={[styleFillProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={styleFillProfile.textname}>DateOfBrith</Text>
              <View style={styleFillProfile.viewinfor}>
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
                  <View style={styleFillProfile.viewinfor}>
                    <Text style={[styleFillProfile.textmail, { color: Theme.color }]}>{dateofbirth}</Text>
                    <TouchableOpacity onPress={toggleDatePicker}>
                      <Icon name="calendar" size={21} style={[styleFillProfile.iconcalendar, { color: Theme.color }]} />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <View style={[styleFillProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={styleFillProfile.textname}>Email</Text>
              <View style={styleFillProfile.viewinfor}>
                <Text style={[styleFillProfile.textmail, { color: Theme.color }]}>{email}</Text>
                <TouchableOpacity style={styleFillProfile.iconemail} >
                  <Icon name="email-open-multiple-outline" size={21} color={Theme.color} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styleFillProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={styleFillProfile.textname}>Country</Text>
              <Dropdown
                placeholderStyle={[styleFillProfile.placeholderStyle, { color: Theme.color }]}
                selectedTextStyle={[styleFillProfile.selectedTextStyle, { color: Theme.color }]}
                inputSearchStyle={[styleFillProfile.inputSearchStyle, { color: Theme.color }]}
                iconStyle={[styleFillProfile.iconStyle, { tintColor: Theme.color }]}
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
                containerStyle={[styleFillProfile.viewphone, { backgroundColor: Theme.backgroundBorder }]}
                textInputStyle={[styleFillProfile.textphone, { color: Theme.color }]}
                textContainerStyle={[styleFillProfile.textphone, { backgroundColor: Theme.backgroundBorder }]}
                placeholder={mobile}
                textInputProps={{ placeholderTextColor: Theme.color }}
                codeTextStyle={[{ color: Theme.color }]}
                onChangeText={(text) => {
                  setMobile(text)
                }}
              />
            </View>
            <View style={[styleFillProfile.viewinput, { backgroundColor: Theme.backgroundBorder }]}>
              <Text style={styleFillProfile.textname}>Gender</Text>
              <Dropdown
                placeholderStyle={[styleFillProfile.placeholderStyle, { color: Theme.color }]}
                selectedTextStyle={[styleFillProfile.selectedTextStyle, { color: Theme.color }]}
                inputSearchStyle={[styleFillProfile.inputSearchStyle, { color: Theme.color }]}
                iconStyle={[styleFillProfile.iconStyle, { tintColor: Theme.color }]}
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
              <View style={[styleFillProfile.button, { backgroundColor: Theme.backgroundCheckOut }]}>
                <Text style={[styleFillProfile.textbutton, { color: Theme.colorTextWhiteBlack }]}>Update</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Modal animationType="slide" transparent={true} visible={openModal}
          onRequestClose={() => { setOpenModal(!openModal); }} >
          <View style={styleFillProfile.viewmodal}>
            <Text style={styleFillProfile.texttitle}>Choose Profile Picture</Text>
            <View style={styleFillProfile.viewmodalcontainer}>
              <View style={styleFillProfile.viewlogout}>
                <TouchableOpacity onPress={handleTakePhotoCamera}>
                  <Text style={styleFillProfile.textlogout}>Take Photo</Text>
                </TouchableOpacity>
              </View>
              <View style={styleFillProfile.viewlogout}>
                <TouchableOpacity onPress={handleChoosePhotoFromLibrary}>
                  <Text style={styleFillProfile.textlogout}>Form Library</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <View style={styleFillProfile.viewcancel}>
                <Text style={styleFillProfile.textcancel}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView >
    </View >
  )
}

export default FillProFile