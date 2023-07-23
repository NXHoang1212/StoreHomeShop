import { View, Text, TouchableOpacity, Image, ScrollView, ToastAndroid, Platform, PermissionsAndroid, Alert } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { getUserId } from '../../../config/service/Utils'
import { HOST } from '../../../config/Constant'
import AxiosInstance from '../../../config/context/AxiosIntance'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StyleDetailHistory from '../../style/stylePayment/styleDetailHistory'
import { GO_BACK } from '../../function/NavigationNext'
import { FlashList } from '@shopify/flash-list'
import Clipboard from '@react-native-clipboard/clipboard';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
import Printer from 'react-native-print';
import { useFocusEffect } from '@react-navigation/native'
import { showMessage } from 'react-native-flash-message'
import ThemeContext from '../../../config/context/ThemContext'

const DetailHistory = ({ navigation, route }) => {
    const { id } = route.params
    console.log("🚀 ~ file: DetailHistory.js:21 ~ DetailHistory ~ id:", id)
    const [barcodeImage, setBarcodeImage] = useState(null);
    const [history, setHistory] = useState([]);
    const [code, setCode] = useState('');
    const [total, setTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [Methods, setMethods] = useState('');
    const [orderHour, setOrderHour] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [status, setStatus] = useState('');
    const [showView, setShowView] = useState(false); // State để kiểm soát việc hiển thị view nhỏ
    const Theme = useContext(ThemeContext);
    useFocusEffect(
        React.useCallback(() => {
            const unsubscribe = navigation.addListener('focus', () => {
                fetchBarcodeImage();
            });
            fetchBarcodeImage();
            return unsubscribe;
        }, [])
    );
    const fetchBarcodeImage = async () => {
        try {
            const userId = await getUserId();
            if (userId) {
                const response = await AxiosInstance().get(`order/${userId}/getOrderHistoryDetail/${id}`);
                setHistory(response.order.products);
                setBarcodeImage(response.order.barcode);
                setTransactionId(response.order.TransactionId);
                setOrderDate(response.order.timeBuy);
                setOrderHour(response.order.orderHour);
                setStatus(response.order.status);
                setCode(response.order.promoCode);
                setTotal(response.order.total);
                setShipping(response.order.shippingId.price);
                setMethods(response.order.paymentMethod);
                console.log('++++++', response.order.paymentMethod);
            }
        } catch (error) {
            console.log(error);
        }
    };
    //xây dựng chức năng coppy mã giao dịch
    const coppyTransactionId = () => {
        Clipboard.setString(transactionId);
        ToastAndroid.show('Copied', ToastAndroid.SHORT);
        console.log(transactionId);
    };
    //xây dựng chức năng hiển thị view nhỏ
    const handleDotsIconPress = () => {
        setShowView(!showView);
    };
    //xây dựng chức năng chia sẻ mã đơn hàng
    const handleShareIconPress = async () => {
        try {
            // Tạo nội dung HTML từ thông tin đơn hàng
            const htmlContent = generateHTML(); // Hàm generateHTML() cần được xây dựng để tạo nội dung HTML từ thông tin đơn hàng
            // Tạo tệp PDF từ nội dung HTML
            const options = {
                html: htmlContent,
                fileName: 'receipt',
                directory: 'Documents',
            };
            const pdf = await RNHTMLtoPDF.convert(options);
            const filePath = pdf.filePath;
            // Chia sẻ tệp PDF
            const shareOptions = {
                type: 'application/pdf',
                url: `file://${filePath}`,
            };
            await Share.open(shareOptions);
        } catch (error) {
            console.log('Share Error:', error);
            // Xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi cho người dùng)
        }
    };
    //xây dựng chức năng tạo nội dung HTML từ thông tin đơn hàng
    const generateHTML = () => {
        // Xây dựng chuỗi HTML từ thông tin đơn hàng
        const orderInfo = getOrderInfo(); // Hàm getOrderInfo() cần được xây dựng để lấy thông tin đơn hàng
        const html = `<html><body>${orderInfo}</body></html>`;
        return html;
    };
    //xây dựng chức năng lấy thông tin đơn hàng
    const getOrderInfo = () => {
        // Xây dựng chuỗi HTML từ thông tin đơn hàng
        const orderInfo = `
      <h1>Order Information</h1>
      <p><strong>Transaction ID:</strong> ${transactionId}</p>
      <p><strong>Payment Method:</strong> ${Methods}</p>
      <p><strong>Date:</strong> ${orderDate} | ${orderHour}</p>
      <p><strong>Status:</strong> ${status}</p>
      <h1>Order Items</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          ${history.map((item) => {
            return `
              <tr>
                <td>${item.name}</td>
                <td><img src="${item.image}" alt="Product Image" /></td
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            `;
        })}
        </tbody>
      </table>
      <h1>Order Summary</h1>
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${total.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>${code}</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>${shipping}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    `;
        return orderInfo;
    };
    //xây dựng chức năng tải xuống mã đơn hàng
    const handleDownloadIconPress = async () => {
        try {
            // Tạo nội dung HTML từ thông tin đơn hàng
            const htmlContent = generateHTML(); // Hàm generateHTML() cần được xây dựng để tạo nội dung HTML từ thông tin đơn hàng
            // Tạo tệp PDF từ nội dung HTML
            const options = {
                html: htmlContent,
                fileName: 'receipt',
                directory: 'Documents',
            };
            const pdf = await RNHTMLtoPDF.convert(options);
            const filePath = pdf.filePath;
            // Tải xuống tệp PDF
            const { fs } = RNFetchBlob;
            const downloads = fs.dirs.DownloadDir;
            const dest = `${downloads}/receipt.pdf`;
            await fs.cp(filePath, dest);
            // Hiển thị thông báo tải xuống thành công
            showMessage({
                message: 'Downloaded',
                type: 'success',
                duration: 2000,
                icon: 'success',
            });
        } catch (error) {
            console.log('Download Error:', error);
            // Xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi cho người dùng)
        }
    };
    //xây dựng chức năng in mã đơn hàng
    const handlePrintIconPress = async () => {
        // Tạo nội dung HTML từ thông tin đơn hàng
        const htmlContent = generateHTML(); // Hàm generateHTML() cần được xây dựng để tạo nội dung HTML từ thông tin đơn hàng
        // In tệp PDF
        const results = await Printer.print({ html: htmlContent });
        console.log(results);
    };
    //xây dựng chức năng hiển thị danh sách sản phẩm
    const renderBarcodeImage = ({ item }) => {
        return (
            <View style={[StyleDetailHistory.viewlistitem, { backgroundColor: Theme.backgroundColor }]}>
                <View style={[StyleDetailHistory.viewlistitemproduct, { backgroundColor: Theme.backgroundPorfile }]}>
                    <View style={StyleDetailHistory.viewitemnameimage}>
                        <View style={[StyleDetailHistory.viewimageproduct, { backgroundColor: Theme.imageBorder }]}>
                            <Image source={{ uri: item.image }} style={StyleDetailHistory.imageproduct} />
                        </View>
                        <View style={StyleDetailHistory.viewtextproduct}>
                            <View style={StyleDetailHistory.viewnameproduct}>
                                <Text style={[StyleDetailHistory.textname, { color: Theme.color }]}>{item.name}</Text>
                                <Text style={[StyleDetailHistory.texthardwhite, { color: Theme.color }]}>Black</Text>
                                <View style={StyleDetailHistory.viewcolor} />
                            </View>
                            <View style={StyleDetailHistory.viewcount}>
                                <Text style={[StyleDetailHistory.textcount, { color: Theme.color }]}>Qty={item.quantity}</Text>
                                <Text style={[StyleDetailHistory.texthardwhite, { color: Theme.color }]}>size =42</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[StyleDetailHistory.viewamountitem, { backgroundColor: Theme.backgroundPorfile }]}>
                    <View style={StyleDetailHistory.viewamount}>
                        <Text style={[StyleDetailHistory.textamount, { color: Theme.color }]}>Amount</Text>
                        <Text style={[StyleDetailHistory.textamountitem, { color: Theme.color }]}>${item.price.toFixed(2)}</Text>
                    </View>
                    {code && (
                        <View style={StyleDetailHistory.viewamount}>
                            <Text style={[StyleDetailHistory.textamount, { color: Theme.color }]}>Promo</Text>
                            <Text style={[StyleDetailHistory.textamountitem, { color: Theme.color }]}>-${code.discount}</Text>
                        </View>
                    )}
                    <View style={StyleDetailHistory.viewamount}>
                        <Text style={[StyleDetailHistory.textamount, { color: Theme.color }]}>Shipping</Text>
                        <Text style={[StyleDetailHistory.textamountitem, { color: Theme.color }]}>+${shipping}</Text>
                    </View>
                    <View style={StyleDetailHistory.line} />
                    <View style={StyleDetailHistory.viewamount}>
                        <Text style={[StyleDetailHistory.textamount, { color: Theme.color }]}>Total</Text>
                        <Text style={[StyleDetailHistory.textamountitem, { color: Theme.color }]}>${total}</Text>
                    </View>
                </View>
                <View style={[StyleDetailHistory.viewstatus, { backgroundColor: Theme.backgroundPorfile }]}>
                    <View style={StyleDetailHistory.viewstatusitem}>
                        <Text style={[StyleDetailHistory.textstatus, { color: Theme.color }]}>Payment Methods</Text>
                        <Text style={[StyleDetailHistory.textstatusitem, { color: Theme.color }]}>{Methods}</Text>
                    </View>
                    <View style={StyleDetailHistory.viewstatusitem}>
                        <Text style={[StyleDetailHistory.textstatus, { color: Theme.color }]}>Date</Text>
                        <Text style={[StyleDetailHistory.textstatusitem, { color: Theme.color }]}>{orderDate} | {orderHour}</Text>
                    </View>
                    <View style={StyleDetailHistory.viewstatusitem}>
                        <Text style={[StyleDetailHistory.textstatus, { color: Theme.color }]}>Transaction ID</Text>
                        <Text style={[StyleDetailHistory.textstatusitemleft, { color: Theme.color }]}>{transactionId}</Text>
                        <TouchableOpacity onPress={coppyTransactionId}>
                            <Icon name="file-multiple-outline" size={18} color={Theme.color} style={StyleDetailHistory.iconcopy} />
                        </TouchableOpacity>
                    </View>
                    <View style={StyleDetailHistory.viewstatusitem}>
                        <Text style={[StyleDetailHistory.textstatus, { color: Theme.color }]}>Status</Text>
                        <View style={[StyleDetailHistory.viewstatus1, { backgroundColor: Theme.backgroundestatus }]}>
                            <Text style={StyleDetailHistory.textstatusitem1}>{status}</Text>
                        </View>
                    </View>
                </View>
                <View style={[StyleDetailHistory.viewcategory, { backgroundColor: Theme.backgroundPorfile }]}>
                    <View style={StyleDetailHistory.viewcategoryitem}>
                        <Text style={[StyleDetailHistory.textcategory, { color: Theme.color }]}>Category</Text>
                        <Text style={[StyleDetailHistory.textorder, { color: Theme.color }]}>Orders</Text>
                        <Icon name="chevron-down" size={30} color={Theme.color} style={StyleDetailHistory.icondown} />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={[StyleDetailHistory.container, { backgroundColor: Theme.backgroundColor }]}>
            <View style={StyleDetailHistory.header}>
                <TouchableOpacity onPress={() => GO_BACK(navigation)}>
                    <Icon name="arrow-left" size={28} color={Theme.color} style={StyleDetailHistory.iconleft} />
                </TouchableOpacity>
                <Text style={[StyleDetailHistory.textheader, { color: Theme.color }]}>E-Receipt</Text>
                <TouchableOpacity onPress={handleDotsIconPress} style={StyleDetailHistory.iconright} >
                    <Icon name="dots-horizontal-circle-outline" size={28} color={Theme.color} />
                </TouchableOpacity>
            </View>
            <View style={[StyleDetailHistory.viewbarcode, { backgroundColor: Theme.backgroundColor }]}>
                {barcodeImage !== null && (
                    <Image source={{ uri: barcodeImage }} style={[StyleDetailHistory.barcode, { backgroundColor: Theme.backgroundColor }]} />
                )}
            </View>
            {showView && (
                <View style={[StyleDetailHistory.viewshare, { backgroundColor: Theme.backgroundPorfile }]}>
                    <TouchableOpacity onPress={handleShareIconPress}>
                        <View style={StyleDetailHistory.viewshareitem}>
                            <Icon name="send-outline" size={22} color={Theme.color} style={[StyleDetailHistory.iconshare, { transform: [{ rotate: '310deg' }] }]} />
                            <Text style={[StyleDetailHistory.texticon, { color: Theme.color }]}>Share E-Receipt</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={StyleDetailHistory.linesmall} />
                    <TouchableOpacity onPress={handleDownloadIconPress}>
                        <View style={StyleDetailHistory.viewshareitem}>
                            <Icon name="file-download-outline" size={22} color={Theme.color} style={StyleDetailHistory.iconshare} />
                            <Text style={[StyleDetailHistory.texticon, { color: Theme.color }]}>Download E-Receipt</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={StyleDetailHistory.linesmall} />
                    <TouchableOpacity onPress={handlePrintIconPress}>
                        <View style={StyleDetailHistory.viewshareitem}>
                            <Icon name="cloud-print-outline" size={22} color={Theme.color} style={StyleDetailHistory.iconshare} />
                            <Text style={[StyleDetailHistory.texticon, { color: Theme.color }]}>Print</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            <ScrollView>
                <View style={StyleDetailHistory.viewlist}>
                    <FlashList
                        data={history}
                        estimatedItemSize={500}
                        renderItem={renderBarcodeImage}
                        keyExtractor={(item) => item._id}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailHistory