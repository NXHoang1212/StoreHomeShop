import { View, Text, TouchableOpacity, Linking, Button, Platform } from 'react-native'
import React, { useState, useCallback, useEffect, useContext } from 'react'
import StyleContactUs from '../../../style/StyleContactUs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_TO_CUSTOMSERVICE } from '../../../function/NavigationNext'
import ThemeContext from '../../../../config/context/ThemContext'


const ContactUs = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Theme = useContext(ThemeContext);
  //whatsapp
  const handleWhatsAppPress = () => {
    // Kiểm tra nếu ứng dụng đang chạy trên thiết bị di động
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // Mở ứng dụng What'sApp
      Linking.openURL('https://www.whatsapp.com/');
      console.log("🚀 ~ file: ContactUs.js:18 ~ handleProfilePress ~ Linking:", Linking)
    } else {
      // Mở trang web What'sApp
      Linking.openURL('https://www.whatsapp.com/');
      console.log("🚀 ~ file: ContactUs.js:18 ~ handleProfilePress ~ Linking:", Linking)
    }
  };
  //facebook
  const handleFacebookPress = () => {
    // Kiểm tra nếu ứng dụng đang chạy trên thiết bị di động
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // Mở ứng dụng What'sApp
      Linking.openURL('https://www.facebook.com/profile.php?id=100034854099513/');
      console.log("🚀 ~ file: ContactUs.js:18 ~ handleProfilePress ~ Linking:", Linking)
    } else {
      // Mở trang web What'sApp
      Linking.openURL('https://www.facebook.com/profile.php?id=100034854099513/');
      console.log("🚀 ~ file: ContactUs.js:18 ~ handleProfilePress ~ Linking:", Linking)
    }
  };
  //website
  const handleWebSitePress = () => {
    // Kiểm tra nếu ứng dụng đang chạy trên thiết bị di động
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // Mở ứng dụng What'sApp
      Linking.openURL('https://myshoes.vn/');
      console.log("🚀 ~ file: ContactUs.js:18 ~ handleProfilePress ~ Linking:", Linking)
    } else {
      // Mở trang web What'sApp
      Linking.openURL('https://myshoes.vn/');
      console.log("🚀 ~ file: ContactUs.js:18 ~ handleProfilePress ~ Linking:", Linking)
    }
  };
  //twitter
  const handleTwitterPress = () => {
    // Kiểm tra nếu ứng dụng đang chạy trên thiết bị di động
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // Mở ứng dụng What'sApp
      Linking.openURL('https://twitter.com/lnstagood?gclid=CjwKCAjw6vyiBhB_EiwAQJRopp-Ay4pEL_O-mCellFIpYHjgonAfJ6D81zNYet0feGmltG6IL-g-SRoC78UQAvD_BwE/');
      console.log("🚀 ~ file: ContactUs.js:18 ~ handleProfilePress ~ Linking:", Linking)
    } else {
      // Mở trang web What'sApp
      Linking.openURL('https://twitter.com/lnstagood?gclid=CjwKCAjw6vyiBhB_EiwAQJRopp-Ay4pEL_O-mCellFIpYHjgonAfJ6D81zNYet0feGmltG6IL-g-SRoC78UQAvD_BwE/');
      console.log("🚀 ~ file: ContactUs.js:18 ~ handleProfilePress ~ Linking:", Linking)
    }
  };
  //instagram
  const handleInstagramPress = () => {
    // Kiểm tra nếu ứng dụng đang chạy trên thiết bị di động
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // Mở ứng dụng What'sApp
      Linking.openURL('https://www.instagram.com/hoangmap.me//');
      console.log("🚀 ~ file: ContactUs.js:18 ~ handleProfilePress ~ Linking:", Linking)
    } else {
      // Mở trang web What'sApp
      Linking.openURL('https://www.instagram.com/hoangmap.me/');
      console.log("🚀 ~ file: ContactUs.js:18 ~ handleProfilePress ~ Linking:", Linking)
    }
  };

  return (
    <View style={[StyleContactUs.container, { backgroundColor: Theme.backgroundColor, }]}>
      <View style={[StyleContactUs.viewbody, { backgroundColor: Theme.backgroundColor, }]}>
        <View style={StyleContactUs.viewitem}>
          <TouchableOpacity onPress={() => GO_TO_CUSTOMSERVICE(navigation)}>
            <View style={[StyleContactUs.viewitem1, { backgroundColor: Theme.backgroundBorder }]}>
              <Icon name="headset" size={25} color={Theme.color} style={StyleContactUs.icon} />
              <Text style={[StyleContactUs.textitem, { color: Theme.color }]}>Customer Service</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWhatsAppPress}>
            <View style={[StyleContactUs.viewitem1, { backgroundColor: Theme.backgroundBorder }]}>
              <Icon name="whatsapp" size={28} color={Theme.color} style={StyleContactUs.icon} />
              <Text style={[StyleContactUs.textitem, { color: Theme.color }]}>What'sApp</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWebSitePress}>
            <View style={[StyleContactUs.viewitem1, { backgroundColor: Theme.backgroundBorder }]}>
              <Icon name="web" size={28} color={Theme.color} style={StyleContactUs.icon} />
              <Text style={[StyleContactUs.textitem, { color: Theme.color }]}>Website</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFacebookPress}>
            <View style={[StyleContactUs.viewitem1, { backgroundColor: Theme.backgroundBorder }]}>
              <Icon name="facebook" size={28} color={Theme.color} style={StyleContactUs.icon} />
              <Text style={[StyleContactUs.textitem, { color: Theme.color }]}>Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTwitterPress}>
            <View style={[StyleContactUs.viewitem1, { backgroundColor: Theme.backgroundBorder }]}>
              <Icon name="twitter" size={28} color={Theme.color} style={StyleContactUs.icon} />
              <Text style={[StyleContactUs.textitem, { color: Theme.color }]}>Twitter</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleInstagramPress}>
            <View style={[StyleContactUs.viewitem1, { backgroundColor: Theme.backgroundBorder }]}>
              <Icon name="instagram" size={28} color={Theme.color} style={StyleContactUs.icon} />
              <Text style={[StyleContactUs.textitem, { color: Theme.color }]}>Instagram</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ContactUs