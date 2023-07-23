import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { GO_BACK, GO_TO_ADDNEWRESS, GO_TO_CHECKOUTORDER } from '../../../function/NavigationNext'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StyleShippingAddress from '../../../style/styleShipping/StyleShippingAddress'
import { CheckBox } from 'react-native-elements'
import { getUserId } from '../../../../config/service/Utils'
import { HOST } from '../../../../config/Constant'
import AxiosInstance from '../../../../config/context/AxiosIntance'
import ThemeContext from '../../../../config/context/ThemContext'

const ShippingAddress = ({ navigation }) => {
  const [addressList, setAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const Theme = useContext(ThemeContext);

  useEffect(() => {
    const getAddress = async () => {
      try {
        const userId = await getUserId();
        if (userId) {
          const response = await AxiosInstance().get(`address/${userId}/getAddress`);
          const addresses = response.addresses;
          setAddressList(addresses);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAddress();
  }, []);
  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const goToCheckOutOrder = () => {
    GO_TO_CHECKOUTORDER(navigation, selectedAddress);
  };

  return (
    <View style={[StyleShippingAddress.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={StyleShippingAddress.header}>
        <View style={StyleShippingAddress.headerbar}>
          <TouchableOpacity style={StyleShippingAddress.iconback} onPress={() => GO_BACK(navigation)}>
            <Icon name="arrow-left" size={30} color={Theme.color} />
          </TouchableOpacity>
          <Text style={[StyleShippingAddress.title, { color: Theme.color }]}>Shipping Address</Text>
        </View>
      </View>
      <View style={StyleShippingAddress.viewaddress}>
        {addressList.map((item, index) => {
          return (
            <View style={[StyleShippingAddress.viewitemaddress, { backgroundColor: Theme.backgroundPorfile }]} key={index}>
              <View style={StyleShippingAddress.viewimage}>
                <View style={StyleShippingAddress.backgroundimage} />
                <Image source={require('../../../../assets/images/location.png')} style={StyleShippingAddress.imageaddress} />
              </View>
              <View style={StyleShippingAddress.viewitem}>
                <View style={StyleShippingAddress.viewdefault}>
                  <Text style={[StyleShippingAddress.textname, { color: Theme.color }]}>{item.addressLine1}</Text>
                  {item.isDefault && <Text style={StyleShippingAddress.textdefault}>Default</Text>}
                </View>
                <View style={StyleShippingAddress.viewcheckbox}>
                  <Text style={[StyleShippingAddress.textaddress, { color: Theme.color }]}>{item.addressLine2}</Text>
                </View>
              </View>
              <CheckBox
                checked={selectedAddress === item}
                onPress={() => handleAddressSelect(item)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={Theme.color}
                uncheckedColor={Theme.color}
                containerStyle={StyleShippingAddress.checkbox}
              />
            </View>
          )
        })}
      </View>
      <View style={StyleShippingAddress.viewadd}>
        <TouchableOpacity style={[StyleShippingAddress.add, { backgroundColor: Theme.imageBorder }]} onPress={() => GO_TO_ADDNEWRESS(navigation)}>
          <Text style={[StyleShippingAddress.textadd, { color: Theme.color }]}>Add New Address</Text>
        </TouchableOpacity>
      </View>
      <View style={[StyleShippingAddress.viewapply, {backgroundColor: Theme.backgroundPorfile, borderColor: Theme.bordercolor}]}>
        <TouchableOpacity style={[StyleShippingAddress.apply, { backgroundColor: Theme.backgroundCheckOut }]} onPress={goToCheckOutOrder}>
          <Text style={[StyleShippingAddress.textapply, { color: Theme.colorTextWhiteBlack }]}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ShippingAddress