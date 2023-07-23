import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import StyleEditProfile from '../style/styleOptionInfor/StyleEditProfile';
import ThemeContext from '../../config/context/ThemContext';

const ModalSaveProfile = ({ isVisible, onDiscardChanges, onSaveChanges }) => {
    const Theme = useContext(ThemeContext)
    return (
        <Modal animationType="fade" transparent={true} visible={isVisible}>
            <View style={StyleEditProfile.modalContainer}>
                <View style={[StyleEditProfile.modalContent, { backgroundColor: Theme.backgroundBorder }]}>
                    <View>
                        <Text style={[StyleEditProfile.modalTitle, { color: Theme.color }]}>Change Cancel</Text>
                        <Text style={[StyleEditProfile.modalText, { color: Theme.color }]}>
                            Do you want to cancel the change of the edited information?
                        </Text>
                    </View>
                    <View style={StyleEditProfile.line} />
                    <View style={StyleEditProfile.modalButtons}>
                        <View>
                            <TouchableOpacity
                                onPress={onDiscardChanges}>
                                <Text style={StyleEditProfile.modalButtonTextBack}>GoBack</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={StyleEditProfile.linebutton} />
                        <View>
                            <TouchableOpacity
                                onPress={onSaveChanges}>
                                <Text style={StyleEditProfile.modalButtonTextSave}>Tochange</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalSaveProfile;
