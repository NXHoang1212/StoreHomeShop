import { View, Text, TouchableOpacity, Switch, ScrollView } from 'react-native'
import React, { useState, useCallback, useRef, useContext } from 'react'
import { GO_BACK } from '../../function/NavigationNext'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomSwitch from '../../function/CustomSwitch'
import StyleNotification from '../../style/styleNotify/StyleNotification'
import ThemeContext from '../../../config/context/ThemContext'

const Notification = ({ navigation }) => {
  const [generalNotificationEnabled, setGeneralNotificationEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrateEnabled, setVibrateEnabled] = useState(false);
  const [specialOffersEnabled, setSpecialOffersEnabled] = useState(true);
  const [promoDiscountEnabled, setPromoDiscountEnabled] = useState(false);
  const [paymentsEnabled, setPaymentsEnabled] = useState(true);
  const [cashbackEnabled, setCashbackEnabled] = useState(false);
  const [updatesEnabled, setUpdatesEnabled] = useState(true);
  const [serviceAvailableEnabled, setServiceAvailableEnabled] = useState(false);
  const [tipsAvailableEnabled, setTipsAvailableEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const Theme = useContext(ThemeContext);
  const toggleSwitch = () => {
    setGeneralNotificationEnabled(previousState => !previousState);
    setSoundEnabled(previousState => !previousState);
    setVibrateEnabled(previousState => !previousState);
    setSpecialOffersEnabled(previousState => !previousState);
    setPromoDiscountEnabled(previousState => !previousState);
    setPaymentsEnabled(previousState => !previousState);
    setCashbackEnabled(previousState => !previousState);
    setUpdatesEnabled(previousState => !previousState);
    setServiceAvailableEnabled(previousState => !previousState);
    setTipsAvailableEnabled(previousState => !previousState);
  };

  return (
    <View style={[StyleNotification.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={[StyleNotification.body, { backgroundColor: Theme.backgroundColor }]}>
        <View style={StyleNotification.viewheader}>
          <TouchableOpacity onPress={() => GO_BACK(navigation)}>
            <Icon name="arrow-left" size={28} style={[StyleNotification.iconback, { color: Theme.color }]} />
          </TouchableOpacity>
          <Text style={[StyleNotification.textheader, { color: Theme.color }]}>Notification</Text>
        </View>
        <ScrollView>
          <View style={StyleNotification.viewcontent}>
            <View style={StyleNotification.viewbody}>
              <View style={StyleNotification.viewtext}>
                <Text style={[StyleNotification.textbody, { color: Theme.color }]}>General Notification</Text>
              </View>
              <View style={StyleNotification.viewswitch}>
                <CustomSwitch value={generalNotificationEnabled} onValueChange={toggleSwitch} />
              </View>
            </View>
            <View style={StyleNotification.viewbody}>
              <View style={StyleNotification.viewtext}>
                <Text style={[StyleNotification.textbody, { color: Theme.color }]}>Sound</Text>
              </View>
              <View style={StyleNotification.viewswitch}>
                <CustomSwitch value={soundEnabled} onValueChange={toggleSwitch} />
              </View>
            </View>
            <View style={StyleNotification.viewbody}>
              <View style={StyleNotification.viewtext}>
                <Text style={[StyleNotification.textbody, { color: Theme.color }]}>Vibrate</Text>
              </View>
              <View style={StyleNotification.viewswitch}>
                <CustomSwitch value={vibrateEnabled} onValueChange={toggleSwitch} />
              </View>
            </View>
            <View style={StyleNotification.viewbody}>
              <View style={StyleNotification.viewtext}>
                <Text style={[StyleNotification.textbody, { color: Theme.color }]}>Special Offers</Text>
              </View>
              <View style={StyleNotification.viewswitch}>
                <CustomSwitch value={specialOffersEnabled} onValueChange={toggleSwitch} />
              </View>
            </View>
            <View style={StyleNotification.viewbody}>
              <View style={StyleNotification.viewtext}>
                <Text style={[StyleNotification.textbody, { color: Theme.color }]}>Promo $ Discount</Text>
              </View>
              <View style={StyleNotification.viewswitch}>
                <CustomSwitch value={promoDiscountEnabled} onValueChange={toggleSwitch} />
              </View>
            </View>
            <View style={StyleNotification.viewbody}>
              <View style={StyleNotification.viewtext}>
                <Text style={[StyleNotification.textbody, { color: Theme.color }]}>Payments</Text>
              </View>
              <View style={StyleNotification.viewswitch}>
                <CustomSwitch value={paymentsEnabled} onValueChange={toggleSwitch} />
              </View>
            </View>
            <View style={StyleNotification.viewbody}>
              <View style={StyleNotification.viewtext}>
                <Text style={[StyleNotification.textbody, { color: Theme.color }]}>Cashback</Text>
              </View>
              <View style={StyleNotification.viewswitch}>
                <CustomSwitch value={cashbackEnabled} onValueChange={toggleSwitch} />
              </View>
            </View>
            <View style={StyleNotification.viewbody}>
              <View style={StyleNotification.viewtext}>
                <Text style={[StyleNotification.textbody, { color: Theme.color }]}>And Updates</Text>
              </View>
              <View style={StyleNotification.viewswitch}>
                <CustomSwitch value={updatesEnabled} onValueChange={toggleSwitch} />
              </View>
            </View>
            <View style={StyleNotification.viewbody}>
              <View style={StyleNotification.viewtext}>
                <Text style={[StyleNotification.textbody, { color: Theme.color }]}>New Service Available</Text>
              </View>
              <View style={StyleNotification.viewswitch}>
                <CustomSwitch value={serviceAvailableEnabled} onValueChange={toggleSwitch} />
              </View>
            </View>
            <View style={StyleNotification.viewbody}>
              <View style={StyleNotification.viewtext}>
                <Text style={[StyleNotification.textbody, { color: Theme.color }]}>New Tips Available</Text>
              </View>
              <View style={StyleNotification.viewswitch}>
                <CustomSwitch value={tipsAvailableEnabled} onValueChange={toggleSwitch} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Notification