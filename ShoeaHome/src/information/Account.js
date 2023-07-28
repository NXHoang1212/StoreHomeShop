import { View, Text, Image, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback, RefreshControl } from 'react-native'
import React, { useState, useContext, useRef, useCallback } from 'react'
import StyleAccount from '../style/StyleAccount'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_TO_ADDRESS, GO_TO_EDITPROFILE, GO_TO_HELPCENTER, GO_TO_INVITEFRIENDS, GO_TO_LANGUAGE, GO_TO_NOTIFICATION, GO_TO_PAYMENT, GO_TO_SECURITY } from '../function/NavigationNext'
import CustomSwitch from '../function/CustomSwitch'
import { EventRegister } from 'react-native-event-listeners'
import ThemeContext from '../../config/context/ThemContext'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LanguageContext } from '../../config/context/LanguageContext'
import { choosePhotoFromLibrary, takePhotoCamera } from '../function/UploadCamera'
import { getUserId } from '../../config/service/Utils'
import AxiosInstance from '../../config/context/AxiosIntance'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

const Account = ({ route }) => {
  const navigation = useNavigation();
  const Theme = useContext(ThemeContext);
  const { selectedLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);// Biến trạng thái kiểm soát bottom sheet để hiện đồ mờ khi bottom sheet mở
  const [isSheetOpen, setIsSheetOpen] = useState(true); // Biến trạng thái kiểm soát bottom sheet
  const [openModal, setOpenModal] = useState(false); // Biến trạng thái kiểm soát modal của hình ảnh lựa chọn 
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["35%", "40%"];
  const [darkmode, setDarkmode] = useState(false);
  const [imgAvatar, setImgAvatar] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const logoImgae = darkmode ? require('../../assets/images/logoflashblack.jpg') : require('../../assets/images/logoflash.png');
  //bottom sheet
  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
    setIsOpen(true);
  };
  //bottom sheet cancel
  const handelCancel = () => {
    bottomSheetModalRef.current?.close();
    setIsOpen(false);
  };
  //bottom sheet logout đăng xuất nguời dùng
  const handleLogout = () => {
    bottomSheetModalRef.current?.close();
    setIsOpen(false);
    const removeId = AsyncStorage.removeItem('userId');
    console.log(removeId);
    navigation.navigate('User', { screen: 'Login' });
  };
  //bottom sheet changes
  const handleSheetChanges = useCallback((index) => {
    setIsSheetOpen(index > 0); // Cập nhật trạng thái bottom sheet
  }, []);
  //api get user profile 
  const fetchUserData = async () => {
    const userId = await getUserId();
    if (userId) {
      const userResponse = await AxiosInstance().get(`api/users/${userId}/updateProfile`);
      setImgAvatar(userResponse.users.imgAvatar);
      setName(userResponse.users.name);
      setMobile(userResponse.users.mobile);
      // console.log("🚀 ~ file: Account.js:56 ~ fetchUserData ~ phone:", userResponse.users.mobile);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        fetchUserData();
      });
      fetchUserData();
      return unsubscribe;
    }, [])
  );
  const handleCamera = () => {
    takePhotoCamera(setImgAvatar);
    setOpenModal(false);
  };
  const handleLibrary = () => {
    choosePhotoFromLibrary(setImgAvatar);
    setOpenModal(false);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <BottomSheetModalProvider>
          <TouchableWithoutFeedback onPress={handelCancel}>
            <View style={[StyleAccount.container, { backgroundColor: isOpen ? '#535861' : Theme.backgroundColor }]}>
              <View style={[StyleAccount.header, { backgroundColor: isOpen ? '#535861' : Theme.backgroundColor }]}>
                <View style={StyleAccount.headerContent}>
                  <Image
                    source={logoImgae}
                    style={StyleAccount.imagelogo} />
                  <Text style={[StyleAccount.name, { color: Theme.color }]}>Profile</Text>
                </View>
                <TouchableOpacity >
                  <View style={StyleAccount.viewicon}>
                    <Icon name="dots-horizontal-circle-outline" size={25} style={[StyleAccount.iconname, { color: Theme.color }]} />
                  </View>
                </TouchableOpacity>
                <View style={[StyleAccount.viewimage, { backgroundColor: isOpen ? '#535861' : Theme.backgroundColor, opacity: isOpen ? 0.5 : 1 }]}>
                  <TouchableOpacity style={StyleAccount.viewbuttonimage} onPress={() => setOpenModal(true)}>
                    {imgAvatar ?
                      <Image
                        source={{ uri: imgAvatar }}
                        style={[StyleAccount.image, { backgroundColor: isOpen ? '#535861' : Theme.backgroundColor, opacity: isOpen ? 0.5 : 1 }]} /> :
                      <Image
                        source={require('../../assets/images/avatar.jpg')}
                        style={[StyleAccount.image, { backgroundColor: isOpen ? '#535861' : Theme.backgroundColor, opacity: isOpen ? 0.5 : 1 }]} />
                    }
                    <Icon name="pencil-box" size={31} style={[StyleAccount.iconimage, { color: Theme.color }]} />
                  </TouchableOpacity>
                  <Text style={[StyleAccount.textuser, { color: Theme.color }]}>{name}</Text>
                  <Text style={[StyleAccount.texphone, { color: Theme.color }]}>+84 {mobile}</Text>
                </View>
              </View>
              <View style={StyleAccount.line} />
              {/* lisitem */}
              <View style={[StyleAccount.viewlistitem, { backgroundColor: isOpen ? '#535861' : Theme.backgroundColor }]}>
                <View style={StyleAccount.listItem}>
                  <View style={StyleAccount.item}>
                    <TouchableOpacity onPress={() => GO_TO_EDITPROFILE(navigation)}>
                      <View style={StyleAccount.viewlist}>
                        <Icon name="account-outline" size={25} style={[StyleAccount.icon, { color: Theme.color }]} />
                        <Text style={[StyleAccount.text, { color: Theme.color }]}>Edit Profile</Text>
                      </View>
                      <View style={StyleAccount.viewicon}>
                        <Icon name="chevron-right" size={28} style={[StyleAccount.iconright, { color: Theme.color }]} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={StyleAccount.item}>
                    <TouchableOpacity onPress={() => GO_TO_ADDRESS(navigation)}>
                      <View style={StyleAccount.viewlist}>
                        <Icon name="map-marker-outline" size={25} style={[StyleAccount.icon, { color: Theme.color }]} />
                        <Text style={[StyleAccount.text, { color: Theme.color }]}>Address</Text>
                      </View>
                      <View style={StyleAccount.viewicon}>
                        <Icon name="chevron-right" size={28} style={[StyleAccount.iconright, { color: Theme.color }]} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={StyleAccount.item}>
                    <TouchableOpacity onPress={() => GO_TO_NOTIFICATION(navigation)}>
                      <View style={StyleAccount.viewlist}>
                        <Icon name="bell-ring-outline" size={25} style={[StyleAccount.icon, { color: Theme.color }]} />
                        <Text style={[StyleAccount.text, { color: Theme.color }]}>Notification</Text>
                      </View>
                      <View style={StyleAccount.viewicon}>
                        <Icon name="chevron-right" size={28} style={[StyleAccount.iconright, { color: Theme.color }]} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={StyleAccount.item}>
                    <TouchableOpacity onPress={() => GO_TO_PAYMENT(navigation)}>
                      <View style={StyleAccount.viewlist}>
                        <Icon name="wallet-outline" size={25} style={[StyleAccount.icon, { color: Theme.color }]} />
                        <Text style={[StyleAccount.text, { color: Theme.color }]}>Payment</Text>
                      </View>
                      <View style={StyleAccount.viewicon}>
                        <Icon name="chevron-right" size={28} style={[StyleAccount.iconright, { color: Theme.color }]} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={StyleAccount.item}>
                    <TouchableOpacity onPress={() => GO_TO_SECURITY(navigation)}>
                      <View style={StyleAccount.viewlist}>
                        <Icon name="shield-check-outline" size={25} style={[StyleAccount.icon, { color: Theme.color }]} />
                        <Text style={[StyleAccount.text, { color: Theme.color }]}>Security</Text>
                      </View>
                      <View style={StyleAccount.viewicon}>
                        <Icon name="chevron-right" size={28} style={[StyleAccount.iconright, { color: Theme.color }]} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={StyleAccount.item}>
                    <TouchableOpacity onPress={() => GO_TO_LANGUAGE(navigation)}>
                      <View style={StyleAccount.viewlist}>
                        <Icon name="account-outline" size={25} style={[StyleAccount.icon, { color: Theme.color }]} />
                        <Text style={[StyleAccount.text, { color: Theme.color }]}>Language</Text>
                        <Text style={[StyleAccount.textselectedLanguage, { color: Theme.color }]}>{selectedLanguage} </Text>
                      </View>
                      <View style={StyleAccount.viewicon}>
                        <Icon name="chevron-right" size={28} style={[StyleAccount.iconrightlanguage, { color: Theme.color }]} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View style={StyleAccount.viewlist}>
                      <Icon name="eye-outline" size={25} style={[StyleAccount.icon, { color: Theme.color }]} />
                      <Text style={[StyleAccount.text, { color: Theme.color }]}>Dark Mode</Text>
                    </View>
                    <View style={StyleAccount.viewicondark}>
                      <CustomSwitch
                        value={darkmode}
                        onValueChange={(value) => {
                          setDarkmode(value);
                          EventRegister.emit('changeTheme', value);
                        }}
                      />
                    </View>
                  </View>
                  <View style={StyleAccount.itemlast}>
                    <TouchableOpacity onPress={() => GO_TO_HELPCENTER(navigation)}>
                      <View style={StyleAccount.viewlist}>
                        <Icon name="help-rhombus-outline" size={25} style={[StyleAccount.icon, { color: Theme.color }]} />
                        <Text style={[StyleAccount.text, { color: Theme.color }]}>Help center</Text>
                      </View>
                      <View style={StyleAccount.viewicon}>
                        <Icon name="chevron-right" size={28} style={[StyleAccount.iconright, { color: Theme.color }]} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={StyleAccount.itemlast}>
                    <TouchableOpacity onPress={() => GO_TO_INVITEFRIENDS(navigation)}>
                      <View style={StyleAccount.viewlist}>
                        <Icon name="account-group-outline" size={25} style={[StyleAccount.icon, { color: Theme.color }]} />
                        <Text style={[StyleAccount.text, { color: Theme.color }]}>Invite Friends</Text>
                      </View>
                      <View style={StyleAccount.viewicon}>
                        <Icon name="chevron-right" size={28} style={[StyleAccount.iconright, { color: Theme.color }]} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={StyleAccount.itemlast}>
                    <TouchableOpacity onPress={handlePresentModal}>
                      <View style={StyleAccount.viewlist}>
                        <Icon name="logout" size={25} style={StyleAccount.iconlog} />
                        <Text style={[StyleAccount.text, { color: Theme.color }]}>Logout</Text>
                      </View>
                      <View style={StyleAccount.viewicon}>
                        <Icon name="chevron-right" size={28} style={[StyleAccount.iconright, { color: Theme.color }]} />
                      </View>
                    </TouchableOpacity>
                    <BottomSheetModal
                      ref={bottomSheetModalRef}
                      index={0}
                      snapPoints={snapPoints}
                      backgroundStyle={{ borderRadius: 50 }}
                      onDismiss={handelCancel} // Sử dụng sự kiện onDismiss để đóng bottom sheet
                      onChange={handleSheetChanges} // Sử dụng sự kiện onChange để theo dõi trạng thái bottom sheet
                    >
                      <View style={StyleAccount.viewmodalcontainer}>
                        <Text style={StyleAccount.texttitlelogout}>Logout</Text>
                        <View style={StyleAccount.line} />
                        <Text style={StyleAccount.textchoose}>Are you sure you want to log out?</Text>
                        <View style={StyleAccount.viewbutton}>
                          <TouchableOpacity onPress={handelCancel}>
                            <View style={StyleAccount.viewcancel}>
                              <Text style={StyleAccount.textcancel}>Cancel</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={handleLogout}>
                            <View style={StyleAccount.viewlogout}>
                              <Text style={StyleAccount.textlogout}>Yes, Logout</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </BottomSheetModal>
                  </View>
                </View>
              </View>
              <Modal animationType="slide" transparent={true} visible={openModal}
                onRequestClose={() => { setOpenModal(!openModal); }} >
                <View style={StyleAccount.viewmodal}>
                  <Text style={StyleAccount.texttitle}>Choose Profile Picture</Text>
                  <View style={StyleAccount.viewmodalcontainer}>
                    <View style={StyleAccount.viewlogout}>
                      <TouchableOpacity onPress={handleCamera}>
                        <Text style={StyleAccount.textlogout}>Take Photo</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={StyleAccount.viewlogout}>
                      <TouchableOpacity onPress={handleLibrary}>
                        <Text style={StyleAccount.textlogout}>Form Library</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => setOpenModal(false)}>
                    <View style={StyleAccount.viewcancel}>
                      <Text style={StyleAccount.textcancel}>Cancel</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
          </TouchableWithoutFeedback>
        </BottomSheetModalProvider>
      </ScrollView>
    </GestureHandlerRootView>
  )
}

export default Account