import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useCallback, useRef, useContext } from 'react'
import { GO_BACK, GO_TO_FORGOT_PASSWORD } from '../../function/NavigationNext'
import StyleSecurity from '../../style/StyleSecurity'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomSwitch from '../../function/CustomSwitch'
import ThemeContext from '../../../config/context/ThemContext'

const Security = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(true);
  const [faceID, setFaceID] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const Theme = useContext(ThemeContext);

  const toggleSwitch = () => {
    setRememberMe(previousState => !previousState)
    setFaceID(previousState => !previousState)
  };
  const handeleNavigation = () => {
    navigation.navigate('User', { screen: 'ForgotPassword' });
  }

  return (
    <View style={[StyleSecurity.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={[StyleSecurity.body, { backgroundColor: Theme.backgroundColor }]}>
        <View style={StyleSecurity.viewheader}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)}>
            <Icon name="arrow-left" size={28} style={[StyleSecurity.iconback, { color: Theme.color }]} />
          </TouchableOpacity>
          <Text style={[StyleSecurity.textheader, { color: Theme.color }]}>Sercurity</Text>
        </View>
        <View style={[StyleSecurity.viewSecurity, { backgroundColor: Theme.backgroundColor, },
        { backgroundColor: isOpen ? '#535861' : Theme.backgroundColor }]}>
          <View style={StyleSecurity.viewSecurityItem}>
            <Text style={[StyleSecurity.textSecurity, { color: Theme.color }]}>Remember me</Text>
            <View style={StyleSecurity.CustomSwitch}>
              <CustomSwitch value={rememberMe} onValueChange={toggleSwitch} />
            </View>
          </View>
          <View style={StyleSecurity.viewSecurityItem}>
            <Text style={[StyleSecurity.textSecurity, { color: Theme.color }]}>Face ID</Text>
            <View style={StyleSecurity.CustomSwitch}>
              <CustomSwitch value={faceID} onValueChange={toggleSwitch} />
            </View>
          </View>
          <View style={StyleSecurity.viewSecurityItem}>
            <Text style={[StyleSecurity.textSecurity, { color: Theme.color }]}>Biometric ID</Text>
            <View style={StyleSecurity.CustomSwitch}>
              <CustomSwitch value={rememberMe} onValueChange={toggleSwitch} />
            </View>
          </View>
          <View style={StyleSecurity.viewSecurityItem}>
            <TouchableOpacity style={StyleSecurity.custombutton}>
              <Text style={[StyleSecurity.textSecurity, { color: Theme.color }]}>Google Authenticator</Text>
              <Icon name="chevron-right" size={30} style={[StyleSecurity.iconright, { color: Theme.color }]} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={StyleSecurity.viewbutton}>
          <TouchableOpacity>
            <View style={[StyleSecurity.viewchange, { backgroundColor: Theme.imageBorder }]}>
              <Text style={[StyleSecurity.textpin, { color: Theme.color }]}>Change PIN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handeleNavigation}>
            <View style={[StyleSecurity.viewchange, { backgroundColor: Theme.imageBorder }]}>
              <Text style={[StyleSecurity.textpin, { color: Theme.color }]}>Change Password</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Security