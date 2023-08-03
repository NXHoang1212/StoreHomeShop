import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import React, { useContext, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Account from '../information/Account';
import Login from '../user/Login';
import HomeOption from '../user/HomeOption';
import Onboarding from '../slash/Onboarding';
import WellCome from '../slash/WellCome';
import Register from '../user/Register';
import ForgotPassword from '../user/ForgotPassword';
import SmsOtp from '../user/SmsOtp';
import NewsPassword from '../user/NewsPassword';
import HomeShoes from '../home/HomeShoes';
import Cart from '../shop/Cart';
import Notify from '../notifi/Notify';
import Favourite from '../heart/Favourite';
import SearchShoes from '../home/find/SearchShoes';
import EditProfile from '../information/screen/profile/EditProfile';
import Address from '../information/screen/AddressNew/Address';
import Language from '../information/screen/Language';
import Payment from '../information/screen/payment/Payment';
import Notification from '../information/screen/Notification';
import Security from '../information/screen/Security';
import AddNewRess from '../information/screen/AddressNew/AddNewRess';
import TabHelpCenter from '../information/screen/HelpCenter/TabHelpCenter';
import CustomService from '../information/screen/HelpCenter/CustomService';
import InviteFriends from '../information/screen/invitefriends/InviteFriends';
import Nike from '../api/Shoes/Nike';
import Adidas from '../api/Shoes/Adidas';
import Puma from '../api/Shoes/Puma';
import Asics from '../api/Shoes/Asics';
import Reebook from '../api/Shoes/Reebook';
import NewBlance from '../api/Shoes/NewBlance';
import Converse from '../api/Shoes/Converse';
import Balancia from '../api/Shoes/Balancia';
import ShoesDetail from '../api/DetailShoes/ShoesDetail';
import TabOrder from '../shop/order/ordershipping/TabOrder';
import MostPopular from '../api/Shoes/MostPopular';
import SpecialOffers from '../api/Shoes/SpecialOffers';
import SearchRender from '../home/find/SearchRender';
import ModalOptionSearch from '../dialog/ModalOptionSearch';
import CheckOutOrder from '../shop/order/ordercheckout/CheckOutOrder';
import ShippingAddress from '../shop/order/orderbill/ShippingAddress';
import ChooseShipping from '../shop/order/orderbill/ChooseShipping';
import PaymentMeThod from '../paymentChoose/PaymentMeThod';
import BottomSheetLogout from '../information/BottomSheetLogout';
import SlashScreen from '../slash/SlashScreen';
import { CartContext } from '../../config/context/CartContext';
import { View, Text, TouchableOpacity } from 'react-native';
import ThemeContext from '../../config/context/ThemContext';
import PromoCode from '../shop/order/discount/PromoCode';
import TrackOrder from '../shop/order/ordershipping/TrackOrder';
import TransactionHistory from '../paymentChoose/TransactionHistory';
import DetailHistory from '../paymentChoose/history/DetailHistory';
import Wallet from '../paymentChoose/history/Wallet';
import FillProFile from '../information/screen/profile/FillProFile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import BannerPromo from '../api/Shoes/BannerPromo';


const Stack = createNativeStackNavigator();
const User = () => {
  return (
    <Stack.Navigator initialRouteName='SlashScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SlashScreen" component={SlashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WellCome" component={WellCome} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="HomeOption" component={HomeOption} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="SmsOtp" component={SmsOtp} options={{ headerShown: false }} />
      <Stack.Screen name="NewsPassword" component={NewsPassword} options={{ headerShown: false }} />
      <Stack.Screen name="Notify" component={Notify} options={{ headerShown: false }} />
      <Stack.Screen name="Favourite" component={Favourite} options={{ headerShown: false }} />
      <Stack.Screen name="SearchShoes" component={SearchShoes} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      <Stack.Screen name="Address" component={Address} options={{ headerShown: false }} />
      <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />
      <Stack.Screen name="InviteFriends" component={InviteFriends} options={{ headerShown: false }} />
      <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Stack.Screen name="Security" component={Security} options={{ headerShown: false }} />
      <Stack.Screen name="AddNewRess" component={AddNewRess} options={{ headerShown: false }} />
      <Stack.Screen name="TabHelpCenter" component={TabHelpCenter} options={{ headerShown: false }} />
      <Stack.Screen name="CustomService" component={CustomService} options={{ headerShown: false }} />
      <stack.Screen name="Nike" component={Nike} options={{ headerShown: false }} />
      <stack.Screen name="Adidas" component={Adidas} options={{ headerShown: false }} />
      <stack.Screen name="Puma" component={Puma} options={{ headerShown: false }} />
      <stack.Screen name="Asics" component={Asics} options={{ headerShown: false }} />
      <stack.Screen name="Reebook" component={Reebook} options={{ headerShown: false }} />
      <stack.Screen name="NewBlance" component={NewBlance} options={{ headerShown: false }} />
      <stack.Screen name="Converse" component={Converse} options={{ headerShown: false }} />
      <stack.Screen name="Balancia" component={Balancia} options={{ headerShown: false }} />
      <stack.Screen name="ShoesDetail" component={ShoesDetail} options={{ headerShown: false }} />
      <stack.Screen name="MostPopular" component={MostPopular} options={{ headerShown: false }} />
      <Stack.Screen name="SpecialOffers" component={SpecialOffers} options={{ headerShown: false }} />
      <Stack.Screen name="ModalOptionSearch" component={ModalOptionSearch} options={{ headerShown: false }} />
      <Stack.Screen name="SearchRender" component={SearchRender} options={{ headerShown: false }} />
      <Stack.Screen name="CheckOutOrder" component={CheckOutOrder} options={{ headerShown: false }} />
      <Stack.Screen name="ShippingAddress" component={ShippingAddress} options={{ headerShown: false }} />
      <Stack.Screen name="ChooseShipping" component={ChooseShipping} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentMethod" component={PaymentMeThod} options={{ headerShown: false }} />
      <Stack.Screen name="BottomSheetLogout" component={BottomSheetLogout} options={{ headerShown: false }} />
      <Stack.Screen name="PromoCode" component={PromoCode} options={{ headerShown: false }} />
      <Stack.Screen name="TrackOrder" component={TrackOrder} options={{ headerShown: false }} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} options={{ headerShown: false }} />
      <Stack.Screen name="DetailHistory" component={DetailHistory} options={{ headerShown: false }} />
      <Stack.Screen name="FillProFile" component={FillProFile} options={{ headerShown: false }} />
      <Stack.Screen name="BannerPromo" component={BannerPromo} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};


const Tab = createBottomTabNavigator();
const Shoes = () => {
  const { cartItemCount } = useContext(CartContext);
  const Theme = useContext(ThemeContext);
  const isOpen = false;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let badgeCount = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'shopping' : 'shopping-outline';
            if (cartItemCount > 0) {
              badgeCount = cartItemCount;
            }
          } else if (route.name === 'Order') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          }
          return (
            <View>
              <Icon name={iconName} color={color} size={25} style={[{ color: Theme.color }]} />
              {badgeCount ? (
                <View
                  style={{
                    position: 'absolute',
                    // right: -6,
                    // top: -3,
                    right: responsiveScreenWidth(-1.5),
                    top: responsiveScreenHeight(-0.6),
                    backgroundColor: 'red',
                    borderRadius: 8,
                    // width: 18,
                    // height: 18,
                    width: responsiveScreenWidth(4.6),
                    height: responsiveScreenHeight(2.1),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: 'white', fontSize: responsiveScreenFontSize(1.5), right: responsiveScreenWidth(0.3) }}> {badgeCount}</Text>
                </View>
              ) : null
              }
            </View >
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold', bottom: 12, color: Theme.color, },
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          // height: 75,
          height: responsiveScreenHeight(8.4),
          backgroundColor: Theme.backgroundColor
        }
      })} >
      <Tab.Screen name="Home" component={HomeShoes} options={{ headerShown: false, }} />
      <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false, }} />
      <Tab.Screen name="Order" component={TabOrder} options={{ headerShown: false, }} />
      <Tab.Screen name="Wallet" component={Wallet} options={{ headerShown: false, }} />
      <Tab.Screen name="Profile" component={Account} options={{ headerShown: false, }} />
    </Tab.Navigator >
  );
};


const stack = createNativeStackNavigator();
const ContaintNavigator = ({ navigation }) => {
  const [isLogged, setIsLogged] = useState(false);
  const retrivedata = async () => {
    try {
      const data = await AsyncStorage.getItem('keepLoggedIn');
      setIsLogged(data);
      console.log('data', data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    retrivedata();
  }, [isLogged]);
  return (
    <>
      <stack.Navigator>
        {isLogged ? (
          <stack.Screen name="Shoes" component={Shoes} options={{ headerShown: false }} />
        ) : (
          <stack.Screen name="User" component={User} options={{ headerShown: false }} />
        )}
        <stack.Screen name="ShoesHome" component={Shoes} options={{ headerShown: false }} />
        <stack.Screen name="LoginUser" component={User} options={{ headerShown: false }} />
      </stack.Navigator>
    </>
  )
};

export default ContaintNavigator;
