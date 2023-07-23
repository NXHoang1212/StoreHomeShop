import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../../config/Color';

const DialogNewPassword = ({ visible }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{ position: 'absolute', top: 72, left: 125, zIndex: 1 }}>
            <Image source={require('../../assets/images/accsesspassword.png')} style={{ width: 100, height: 100 }} />
          </View>
          <View style={{ position: 'relative', alignItems: 'center' }}>
            <Image source={require('../../assets/images/password.png')} style={{ width: 200, height: 200 }} />
          </View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.title}>Congratulations!</Text>
            <Text style={{ textAlign: 'center', width: 250, letterSpacing: 0.5, color: Color.MainBlack, }}>Your account is ready to use. You will be redirected to the Home page in a few seconds.</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', top: 10 }}>
              <ActivityIndicator size={50} color="blue" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
  },
  modalContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    position: 'relative',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 60,
    height: 400,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: Color.MainBlack,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DialogNewPassword;
