import { View, Text, TouchableOpacity, Image, Modal, Dimensions } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StylePaymentMethod from '../style/stylePayment/StylePaymentMethod';
import { GO_BACK } from '../function/NavigationNext';
import { CheckBox } from 'react-native-elements';
import AxiosInstance from '../../config/context/AxiosIntance';
import { HOST } from '../../config/Constant';
import { WebView } from 'react-native-webview';
import { getUserId, getorderId } from '../../config/service/Utils';
import { createdNotifeePayment } from '../../config/service/Notifee';
import ThemeContext from '../../config/context/ThemContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotifeeContext } from '../../config/context/NotifeeContext';
import { CartContext } from '../../config/context/CartContext';
import RazorpayCheckout from 'react-native-razorpay';
import { showMessage } from 'react-native-flash-message';

const PaymentMeThod = ({ navigation }) => {
    const [selectedPayment, setSelectedPayment] = useState('');
    const [showWebView, setShowWebView] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState('');
    const [orderId, setOrderId] = useState('');
    const { SetNotifeeCount } = useContext(NotifeeContext);
    const { decrementCartItem } = useContext(CartContext);
    const Theme = useContext(ThemeContext);
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUserId().then((id) => {
                setUserId(id);
            });
            getorderId().then((id) => {
                setOrderId(id);
            });
        });
        getUserId().then((id) => {
            setUserId(id);
        });
        getorderId().then((id) => {
            setOrderId(id);
        });

        return unsubscribe;
    }, [selectedPayment]);
    const handleConfirmPayment = async () => {
        if (selectedPayment === 'PayPal') {
            setShowWebView(true);
        } else if (selectedPayment === 'RazorPay') {
            var options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.jpg',
                currency: 'INR',
                key: 'rzp_test_x6V407sUQIe5BV',
                amount: '5000',
                name: 'Acme Corp',
                order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
                prefill: {
                    email: 'gaurav.kumar@example.com',
                    contact: '9191919191',
                    name: 'Gaurav Kumar'
                },
                theme: { color: '#53a20e' }
            }
            RazorpayCheckout.open(options)
                .then((data) => {
                    // Xử lý khi thanh toán thành công
                    setShowModal(true);
                    console.log(data);
                })
                .catch((error) => {
                    // Xử lý khi thanh toán thất bại
                    console.log(error);
                });
        } else if (selectedPayment === 'My Wallet') {
            showMessage({
                message: "Post function developed",
                type: "warning",
                duration: 2000,
                icon: "warning",
            });
        } else if (selectedPayment === 'Apple Pay') {
            showMessage({
                message: "Post function developed",
                type: "warning",
                duration: 2000,
                icon: "warning",
            });
        } else if (selectedPayment === 'mastercard') {
            showMessage({
                message: "Post function developed",
                type: "warning",
                duration: 2000,
                icon: "warning",
            });
        }
    };
    const handleWallet = () => {
        navigation.navigate('Wallet');
    };
    const handleNavigationStateChange = async (newState) => {
        const url = newState.url;
        if (url.includes('/success')) {
            setShowWebView(false);
            setShowModal(true);
            // Xử lý khi thanh toán thành công
            const paymentId = url.split('paymentId=')[1].split('&')[0];
            const PayerID = url.split('PayerID=')[1];
            AxiosInstance()
                .get(`order/success?paymentId=${paymentId}&PayerID=${PayerID}`)
                .then((res) => {
                    console.log(res);
                    //xóa đơn hàng 
                    AxiosInstance().delete(`cart/${userId}/removeallcartitems`).then((res) => {
                        //xóa hết số lượng sản phẩm trong giỏ hàng
                        decrementCartItem();
                        console.log(res);
                    }).catch((error) => {
                        console.log(error);
                    });
                    //tạo mã vạch
                    AxiosInstance().post(`order/${userId}/createBarcode/${orderId}`, {
                        userId: userId,
                    }).then((res) => {
                        console.log(res);
                    }).catch((error) => {
                        console.log(error);
                    });
                    //Cập nhật lại trạng thái đơn hàng
                    AxiosInstance().post(`order/${userId}/updateOrder/${orderId}`, {
                        status: 'Paid',
                        paymentStatus: 'Paid',
                        PaymentMeThod: 'PayPal',
                    }).then((res) => {
                        console.log(res);
                    }).catch((error) => {
                        console.log(error);
                    });
                    handleNotification();
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (url.includes('/cancel')) {
            setShowWebView(false);
        }
    };
    //chạy tới màn hình Order
    const handleGoToOrder = () => {
        navigation.navigate('Order');
    };
    const handleNotification = () => {
        createdNotifeePayment();
        SetNotifeeCount((prevCount) => prevCount + 1);
        const removeId = AsyncStorage.removeItem('orderId');
        console.log("🚀 ~ file: PaymentMeThod.js:97 ~ handleNotification ~ removeId:", removeId)
    };
    // xóa đơn hàng khi back lại màn hình giỏ hàng
    const deleteOrder = async () => {
        try {
            const response = await AxiosInstance().delete(`order/${userId}/deleteOrder/${orderId}`);
            console.log(response);
            const removeId = AsyncStorage.removeItem('orderId');
            console.log(removeId);
            GO_BACK(navigation);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={[StylePaymentMethod.container, { backgroundColor: Theme.backgroundColor }]}>
            <View style={StylePaymentMethod.header}>
                <View style={StylePaymentMethod.headerbar}>
                    <TouchableOpacity style={StylePaymentMethod.iconback} onPress={deleteOrder}>
                        <Icon name="arrow-left" size={30} color={Theme.color} />
                    </TouchableOpacity>
                    <Text style={[StylePaymentMethod.title, { color: Theme.color }]}>Payment Method</Text>
                    <TouchableOpacity style={StylePaymentMethod.iconother}>
                        <Icon name="plus-circle-outline" size={29} color={Theme.color} />
                    </TouchableOpacity>
                </View>
                <Text style={[StylePaymentMethod.textseclect, { color: Theme.color }]}>Select the payment method want to use.</Text>
            </View>
            <View style={StylePaymentMethod.viewpayment}>
                <View style={StylePaymentMethod.viewpaymentlist}>
                    <View style={[StylePaymentMethod.listchoosepayment, { backgroundColor: Theme.backgroundBorderTwo }]}>
                        <Icon name="wallet" size={30} color={Theme.color} style={{ marginLeft: 20 }} />
                        <Text style={[StylePaymentMethod.textpayment, { color: Theme.color }]}>My Wallet</Text>
                        <CheckBox
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor={Theme.color}
                            uncheckedColor={Theme.color}
                            checked={selectedPayment === 'My Wallet'}
                            onPress={() => setSelectedPayment('My Wallet')}
                            containerStyle={{ marginLeft: 'auto' }}
                        />
                    </View>
                    <View style={[StylePaymentMethod.listchoosepayment, { backgroundColor: Theme.backgroundBorderTwo }]}>
                        <Image source={require('../../assets/images/paypal.png')} style={StylePaymentMethod.imagepaypal} />
                        <Text style={[StylePaymentMethod.textpayment, { color: Theme.color }]}>PayPal</Text>
                        <CheckBox
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor={Theme.color}
                            uncheckedColor={Theme.color}
                            checked={selectedPayment === 'PayPal'}
                            onPress={() => setSelectedPayment('PayPal')}
                            containerStyle={{ marginLeft: 'auto' }}
                        />
                    </View>
                    <View style={[StylePaymentMethod.listchoosepayment, { backgroundColor: Theme.backgroundBorderTwo }]}>
                        <Image source={require('../../assets/images/razorpay-glyph.png')} style={StylePaymentMethod.imagegoogle} />
                        <Text style={[StylePaymentMethod.textpayment, { right: 15 }, { color: Theme.color }]}>RazorPay</Text>
                        <CheckBox
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor={Theme.color}
                            uncheckedColor={Theme.color}
                            checked={selectedPayment === 'RazorPay'}
                            onPress={() => setSelectedPayment('RazorPay')}
                            containerStyle={{ marginLeft: 'auto' }}
                        />
                    </View>
                    <View style={[StylePaymentMethod.listchoosepayment, { backgroundColor: Theme.backgroundBorderTwo }]}>
                        <Icon name="apple" size={30} color={Theme.color} style={{ marginLeft: 20 }} />
                        <Text style={[StylePaymentMethod.textpayment, { color: Theme.color }]}>Apple Pay</Text>
                        <CheckBox
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor={Theme.color}
                            uncheckedColor={Theme.color}
                            checked={selectedPayment === 'Apple Pay'}
                            onPress={() => setSelectedPayment('Apple Pay')}
                            containerStyle={{ marginLeft: 'auto' }}
                        />
                    </View>
                    <View style={[StylePaymentMethod.paymentmastercard, { backgroundColor: Theme.backgroundBorderTwo }]}>
                        <Image source={require('../../assets/images/mastercard.png')} style={StylePaymentMethod.imagemastercard} />
                        <Text style={[StylePaymentMethod.textpayment, { color: Theme.color }]}>mastercard</Text>
                        <CheckBox
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor={Theme.color}
                            uncheckedColor={Theme.color}
                            checked={selectedPayment === 'mastercard'}
                            onPress={() => setSelectedPayment('mastercard')}
                            containerStyle={{ marginLeft: 'auto', hitSlop: { top: 10, bottom: 10, left: 10, right: 10 } }}
                        />
                    </View>
                </View>
            </View>
            <View style={StylePaymentMethod.viewconfirm}>
                <TouchableOpacity style={[StylePaymentMethod.buttonconfirm, { backgroundColor: Theme.backgroundCheckOut }]} onPress={handleConfirmPayment}>
                    <Text style={[StylePaymentMethod.textconfirm, { color: Theme.colorTextWhiteBlack }]}>Confirm Payment</Text>
                </TouchableOpacity>
            </View>
            {/* WebView */}
            <Modal visible={showWebView}>
                <View style={{ flex: 1 }}>
                    <WebView
                        source={{ uri: `${HOST().HOST}order/${userId}/payWithPaypal` }}
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                        onNavigationStateChange={handleNavigationStateChange}
                    />
                </View>
            </Modal>
            {showModal && (
                <Modal visible={showModal} transparent animationType="slide">
                    <View style={StylePaymentMethod.modalBackground}>
                        <View style={[StylePaymentMethod.modalContent, { backgroundColor: Theme.backgroundPaymentModal }]}>
                            <Image source={require('../../assets/images/password.png')} style={StylePaymentMethod.imageorder} />
                            <View style={StylePaymentMethod.viewiconorder}>
                                <Icon name="cart" size={35} color={Theme.color} style={StylePaymentMethod.iconorder} />
                            </View>
                            <Text style={[StylePaymentMethod.textorder, { color: Theme.color }]}>Order Successful!</Text>
                            <View style={StylePaymentMethod.viewordercheckout}>
                                <Text style={[StylePaymentMethod.textmadorder, { color: Theme.color }]}>You have successfully made order</Text>
                                <View style={StylePaymentMethod.viewbutoonorder}>
                                    <TouchableOpacity onPress={handleGoToOrder} style={[StylePaymentMethod.buttonorder1, { backgroundColor: Theme.backgroundCheckOut }]}>
                                        <Text style={[StylePaymentMethod.textbuttonorder1, { color: Theme.colorTextWhiteBlack }]}>View Order</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleWallet} style={[StylePaymentMethod.buttonorder2, { backgroundColor: Theme.backgroundModalReceipt }]}>
                                        <Text style={[StylePaymentMethod.textbuttonorder2, { color: Theme.color }]}>View E-Receipt</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    )
}

export default PaymentMeThod