import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import StylePromoCode from '../../../style/styleDiscount/StylePromoCode'
import AxiosInstance from '../../../../config/context/AxiosIntance'
import { OrderContext } from '../../../../config/context/OrderContext'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK, GO_TO_CHECKOUTORDER } from '../../../function/NavigationNext'
import { CheckBox } from 'react-native-elements'
import ThemeContext from '../../../../config/context/ThemContext'

const PromoCode = ({ navigation }) => {
  const [code, setcode] = useState([]);
  const { setPromocode } = useContext(OrderContext);
  const ListName = ['Special promo only today!', 'New user special promo', 'Special promo only today!', 'Special promo only valid today!', 'Special promo only today!'];
  const Theme = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance().get(`promo/getallpromo`);
        setcode(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handlePromoCodeSelect = (selectedPromoCode, index) => {
    const updatedPromoCode = code.map((promo, i) => {
      if (i === index) {
        return { ...promo, checked: true };
      } else {
        return { ...promo, checked: false };
      }
    });
    setcode(updatedPromoCode);
    setPromocode({
      ...selectedPromoCode,
      title: ListName[index],
    });
  };

  return (
    <View style={[StylePromoCode.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={StylePromoCode.viewheader}>
        <TouchableOpacity onPress={() => GO_BACK(navigation)}>
          <Icon name="arrow-left" size={30} color={Theme.color} />
        </TouchableOpacity>
        <Text style={[StylePromoCode.textheader, { color: Theme.color }]}>Add Promo</Text>
        <TouchableOpacity style={StylePromoCode.iconseacrh}>
          <Icon name="magnify" size={30} color={Theme.color} />
        </TouchableOpacity>
      </View>
      <View style={StylePromoCode.viewbody}>
        {code.map((item, index) => {
          return (
            <View style={[StylePromoCode.viewitem, { backgroundColor: Theme.backgroundBorderTwo }]} key={index}>
              <View style={[StylePromoCode.viewimage, { backgroundColor: Theme.backgroundCheckOut }]}>
                <Icon name="gift-open-outline" size={23} color={Theme.colorTextWhiteBlack} style={StylePromoCode.icongift} />
              </View>
              <View style={StylePromoCode.viewitemleft}>
                <View>
                  <Text style={[StylePromoCode.textcode, { color: Theme.color }]}>{item.code}</Text>
                  <Text style={[StylePromoCode.textname, { color: Theme.color }]}>{ListName[index]}</Text>
                </View>
              </View>
              <View style={StylePromoCode.viewcheckbox}>
                <CheckBox
                  checked={item.checked}
                  onPress={() => handlePromoCodeSelect(item, index)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checkedColor={Theme.color}
                  uncheckedColor={Theme.color}
                />
              </View>
            </View>
          )
        })}
      </View>
      <View style={StylePromoCode.viewfooter}>
        <TouchableOpacity style={[StylePromoCode.button, { backgroundColor: Theme.backgroundCheckOut }]} onPress={() => GO_TO_CHECKOUTORDER(navigation)}>
          <Text style={[StylePromoCode.textbutton, { color: Theme.colorTextWhiteBlack }]}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PromoCode