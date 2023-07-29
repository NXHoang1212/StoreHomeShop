import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { Color } from '../../config/Color';
import LottieView from 'lottie-react-native';
import NetInfo from '@react-native-community/netinfo';
import RNRestart from 'react-native-restart';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

const SlashScreen = ({ navigation }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [textMessage, setTextMessage] = useState('');
  const [isConnected, setIsConnected] = useState(true);
  const [isLottieViewComplete, setIsLottieViewComplete] = useState(false);
  const unsubscribeRef = useRef();

  useEffect(() => {
    unsubscribeRef.current = NetInfo.addEventListener((state) => {
      if (state.isConnected === false) {
        setAlertMessage('Mất kết nối mạng');
        setTextMessage('Đảm bảo Wi-Fi hoặc dữ liệu di động của bạn đã được bật.');
        setShowAlert(true);
        setIsConnected(false);
      } else if (state.isConnected === true) {
        console.log('Có kết nối mạng');
        setIsConnected(true);
      }
    });

    return () => {
      unsubscribeRef.current();
    };
  }, []);

  const handleReloadApp = () => {
    RNRestart.Restart();
  };

  const handleLottieViewComplete = () => {
    setIsLottieViewComplete(true);
  };
  useEffect(() => {
    if (isConnected && isLottieViewComplete) {
      navigation.replace('WellCome'); // Chuyển tới màn hình Welcome
    }
  }, [isConnected, isLottieViewComplete, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../../assets/images/logoflash.png')} />
        <Text style={styles.text}>Shoea</Text>
      </View>
      <View style={styles.body}>
        {isConnected ? (
          <LottieView
            style={{ width: 220, height: 50 }}
            source={require('../../assets/lottie/loading.json')}
            autoPlay
            loop={false}
            onAnimationFinish={handleLottieViewComplete}
          />
        ) : null}
        <Modal visible={showAlert} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.alertContainer}>
              <Text style={styles.alertText}>{alertMessage}</Text>
              <Text style={styles.textMessage}>{textMessage}</Text>
              <View style={styles.line} />
              <View>
                <TouchableOpacity style={styles.reloadButton} onPress={handleReloadApp}>
                  <Text style={styles.reloadButtonText}>Reload App</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.MainWhite,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: responsiveHeight(40),
    gap: 10,
    marginRight: responsiveWidth(2.3),
  },
  image: {
    width: responsiveWidth(13),
    height: responsiveHeight(5),
  },
  text: {
    // fontSize: 36,
    fontSize: responsiveFontSize(4.5),
    color: Color.MainBlack,
    fontFamily: 'Roboto-Bold',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: responsiveHeight(5),
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  alertContainer: {
    backgroundColor: '#fff',
    padding: responsiveWidth(5),
    borderRadius: 8,
    alignItems: 'center',
    width: responsiveWidth(80),
    borderWidth: 1,
    borderColor: 'gray',
  },
  alertText: {
    // fontSize: 17,
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  textMessage: {
    // fontSize: 13,
    fontSize: responsiveFontSize(1.7),
    textAlign: 'center',
    fontWeight: '400',
    color: '#000',
  },
  reloadButton: {
    marginTop: 15,
  },
  reloadButtonText: {
    // fontSize: 16,
    fontSize: responsiveFontSize(2),
    color: 'blue',
    fontWeight: 'bold',
  },
  line: {
    width: responsiveWidth(70),
    height: 1,
    backgroundColor: 'gray',
    marginTop: responsiveHeight(1.5),
  },
});

export default SlashScreen;
