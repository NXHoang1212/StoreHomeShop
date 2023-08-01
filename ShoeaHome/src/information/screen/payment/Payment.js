import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useCallback, useRef, useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StylePayment from '../../../style/StylePayment'
import { GO_BACK } from '../../../function/NavigationNext'
import { showMessage } from 'react-native-flash-message'
import ThemeContext from '../../../../config/context/ThemContext'

const Payment = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Theme = useContext(ThemeContext);
  //những chức năng chưa làm được nên chỉ để tạm show message
  const handlePaypal = useCallback(() => {
    showMessage({
      message: 'Paypal',
      description: 'Paypal successfully',
      type: 'success',
      icon: 'success',
    })
  })
  const handleGooglePay = useCallback(() => {
    showMessage({
      message: 'Google Pay',
      description: 'Google Pay successfully',
      type: 'success',
      icon: 'success',
    })
  })
  const handleApplePay = useCallback(() => {
    showMessage({
      message: 'Apple Pay',
      description: 'Apple Pay successfully',
      type: 'success',
      icon: 'success',
    })
  })
  const handleMasterCard = useCallback(() => {
    showMessage({
      message: 'Master Card',
      description: 'Master Card successfully',
      type: 'success',
      icon: 'success',
    })
  })
  const handleSuccess = useCallback(() => {
    showMessage({
      message: 'Success',
      description: 'Success',
      type: 'success',
      icon: 'success',
    })
  })

  return (
    <View style={[StylePayment.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={[StylePayment.body, { backgroundColor: Theme.backgroundColor }]}>
        <View style={StylePayment.viewheader}>
          <View style={StylePayment.titleheader}>
            <TouchableOpacity onPress={() => GO_BACK(navigation)}>
              <Icon name="arrow-left" size={28} style={[StylePayment.iconback, { color: Theme.color }]} />
            </TouchableOpacity>
            <Text style={[StylePayment.textheader, { color: Theme.color }]}>Payment</Text>
          </View>
          <TouchableOpacity style={StylePayment.viewPaymentIcon}>
            <Icon name="dots-horizontal-circle-outline" size={28} style={[StylePayment.iconback, { color: Theme.color }]} />
          </TouchableOpacity>
        </View>
        <View style={StylePayment.viewPaymentmethod}>
          <View style={[StylePayment.choosepayment, { backgroundColor: Theme.backgroundBorder }]}>
            <Image source={require('../../../../assets/images/paypal.png')} style={StylePayment.imagepayment} />
            <Text style={[StylePayment.textpayment, { color: Theme.color }]}>Paypal</Text>
            <TouchableOpacity style={StylePayment.buttonconnect} onPress={handlePaypal}>
              <Text style={[StylePayment.textconnect, { color: Theme.color }]}>Connect</Text>
            </TouchableOpacity>
          </View>
          <View style={[StylePayment.choosepayment, { backgroundColor: Theme.backgroundBorder }]}>
            <Image source={require('../../../../assets/images/google.png')} style={StylePayment.imagepayment} />
            <Text style={[StylePayment.textpayment, { color: Theme.color }]}>Google Pay</Text>
            <TouchableOpacity style={StylePayment.buttonconnect} onPress={handleGooglePay}        >
              <Text style={[StylePayment.textconnect, { color: Theme.color }]}>Connect</Text>
            </TouchableOpacity>
          </View>
          <View style={[StylePayment.choosepayment, { backgroundColor: Theme.backgroundBorder }]}>
            <Image source={require('../../../../assets/images/apple.png')} style={StylePayment.imagepayment} />
            <Text style={[StylePayment.textpayment, { color: Theme.color }]}>Apple Pay</Text>
            <TouchableOpacity style={StylePayment.buttonconnect} onPress={handleApplePay}  >
              <Text style={[StylePayment.textconnect, { color: Theme.color }]}>Connect</Text>
            </TouchableOpacity>
          </View>
          <View style={[StylePayment.choosepayment, { backgroundColor: Theme.backgroundBorder }]}>
            <Image source={require('../../../../assets/images/mastercard.png')} style={StylePayment.imagemaster} />
            <Text style={[StylePayment.textmaster, { color: Theme.color }]}>**** **** **** 4679</Text>
            <TouchableOpacity style={StylePayment.buttonconnect} onPress={handleMasterCard}>
              <Text style={[StylePayment.textconnect, { color: Theme.color }]}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={[StylePayment.buttonadd, { backgroundColor: Theme.backgroundCheckOut }]}
            onPress={handleSuccess}>
            <Text style={[StylePayment.textadd, { color: Theme.colorTextWhiteBlack }]}>Add New Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Payment