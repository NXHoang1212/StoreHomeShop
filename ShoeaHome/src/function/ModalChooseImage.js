import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StyleAccount from '../style/StyleAccount';
import { BottomSheetModal } from '@gorhom/bottom-sheet';


const ModalChooseImage = ({ bottomSheetRef,snapPoints, onCancel, onLogout}) => {
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      backgroundStyle={{ borderRadius: 50 }}
      onDismiss={onCancel}
    >
      <View style={StyleAccount.viewmodalcontainer}>
        <Text>Upload Photo</Text>
        <Text style={StyleAccount.texttitlelogout}>Choose your profile picture</Text>
        <View style={StyleAccount.line} />
        <Text style={StyleAccount.textchoose}>Are you sure you want to log out?</Text>
        <View style={StyleAccount.viewbutton}>
          <TouchableOpacity onPress={onCancel}>
            <View style={StyleAccount.viewcancel}>
              <Text style={StyleAccount.textcancel}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onLogout}>
            <View style={StyleAccount.viewlogout}>
              <Text style={StyleAccount.textlogout}>Yes, Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default ModalChooseImage;
