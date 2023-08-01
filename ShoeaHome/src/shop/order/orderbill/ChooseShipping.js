import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StyleChooseShipping from '../../../style/styleShipping/StyleChooseShipping';
import { HOST } from '../../../../config/Constant';
import AxiosInstance from '../../../../config/context/AxiosIntance';
import { CheckBox } from 'react-native-elements';
import { OrderContext } from '../../../../config/context/OrderContext';
import { GO_BACK, GO_TO_CHECKOUTORDER } from '../../../function/NavigationNext';
import ThemeContext from '../../../../config/context/ThemContext';

const ChooseShipping = ({ navigation }) => {
  const [Shipping, setShipping] = useState([]);
  const { selectedShipping, setSelectedShipping } = useContext(OrderContext);
  const IconName = ['package-variant', 'package-variant-closed', 'truck', 'truck-fast'];
  const ListName = ['Economy', 'Regular', 'Cargo', 'Express'];
  const Theme = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance().get(`shipping/getshipping`);
        setShipping(response);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    fetchData();
    return unsubscribe;
  }, []);

  const handleAddressSelect = (selectedShipping, index) => {
    const updatedShipping = Shipping.map((shipping, i) => {
      if (i === index) {
        return { ...shipping, checked: true };
      } else {
        return { ...shipping, checked: false };
      }
    });
    setShipping(updatedShipping);
    setSelectedShipping({
      ...selectedShipping,
      icon: IconName[index],
      title: ListName[index],
    });
  };

  const goToCheckOutOrder = () => {
    GO_TO_CHECKOUTORDER(navigation);
  };

  return (
    <View style={[StyleChooseShipping.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={StyleChooseShipping.header}>
        <View style={StyleChooseShipping.headerbar}>
          <TouchableOpacity style={StyleChooseShipping.iconback} onPress={() => GO_BACK(navigation)}>
            <Icon name="arrow-left" size={32} color={Theme.color} style={StyleChooseShipping.iconlistitem} />
          </TouchableOpacity>
          <Text style={[StyleChooseShipping.title, { color: Theme.color }]}>Choose Shipping</Text>
        </View>
      </View>
      <View style={StyleChooseShipping.body}>
        {Shipping.map((item, index) => {
          return (
            <View style={StyleChooseShipping.viewshipping} key={index}>
              <View style={[StyleChooseShipping.viewbackgorund, { backgroundColor: Theme.backgroundPorfile }]}>
                <View style={StyleChooseShipping.viewshippingitem}>
                  <View style={[StyleChooseShipping.viewicon, { backgroundColor: Theme.backgroundCheckOut }]}>
                    <Icon name={IconName[index]} size={22} color={Theme.colorTextWhiteBlack} />
                  </View>
                  <View style={StyleChooseShipping.viewlistname}>
                    <Text style={[StyleChooseShipping.textshipping1, { color: Theme.color }]}>{ListName[index]}</Text>
                    <Text style={[StyleChooseShipping.textshipping1, { color: Theme.color }]}>{item.name}</Text>
                  </View>
                  <View style={StyleChooseShipping.viewcheckbox}>
                    <Text style={[StyleChooseShipping.textshipping2, { color: Theme.color }]}>${item.price}</Text>
                    <CheckBox
                      checked={item.checked}
                      onPress={() => handleAddressSelect(item, index)}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checkedColor={Theme.color}
                      uncheckedColor={Theme.color}
                      containerStyle={StyleChooseShipping.checkbox}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <View style={StyleChooseShipping.viewapply}>
        <TouchableOpacity style={[StyleChooseShipping.apply, { backgroundColor: Theme.backgroundCheckOut }]} onPress={goToCheckOutOrder}>
          <Text style={[StyleChooseShipping.textapply, { color: Theme.colorTextWhiteBlack }]}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseShipping;
