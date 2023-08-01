import { View, Text, TouchableOpacity, Linking, Platform, TextInput } from 'react-native';
import React, { useState } from 'react';
import StyleCustomService from '../../../style/StyleCustomService';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GO_BACK } from '../../../function/NavigationNext';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { showMessage } from 'react-native-flash-message';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const CustomService = ({ navigation }) => {
    const [messages, setMessages] = useState
        ([{
            _id: 1,
            text: 'Hello, good morning.', createdAt: new Date(),
            user: bot,
        },
        {
            _id: 2,
            text: 'I am a Customer Service, is there anything i can help you with ? 😄', createdAt: new Date(),
        }
        ]);
    const bot = { _id: 2, name: 'Bot' };
    const handleCallPress = () => {
        if (Platform.OS === 'ios' || Platform.OS === 'android') {
            Linking.openURL('tel:0799542146');
            console.log('🚀 ~ file: CustomService.js:12 ~ handleFacebookPress ~ Linking:', Linking);
        } else {
            Linking.openURL('tel:0799542146');
            console.log('🚀 ~ file: CustomService.js:14 ~ handleFacebookPress ~ Linking:', Linking);
        }
    };
    const renderInputToolbar = (props) => {
        return (
            <View style={StyleCustomService.inputToolbarContainer}>
                <TextInput
                    style={StyleCustomService.inputText}
                    placeholder="Message"
                    multiline
                    placeholderTextColor="#9E9E9E"
                    value={props.text}
                    onChangeText={props.onTextChanged}
                    onSubmitEditing={() => props.onSend({ text: props.text.trim() }, true)}
                />
                <TouchableOpacity style={StyleCustomService.sendButton} onPress={() => props.onSend({ text: props.text.trim() }, true)}>
                    <Icon name="send" size={22} color="#393939" />
                </TouchableOpacity>
            </View>
        );
    };
    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: 'black',
                        // marginBottom: 15,
                        marginBottom: responsiveScreenHeight(2),
                    },
                    left: {
                        backgroundColor: '#F5F5F5',
                        // right: 30,
                        // width: 255,
                        // marginBottom: 8,
                        right: responsiveScreenWidth(7),
                        width: responsiveScreenWidth(70),
                        marginBottom: responsiveScreenHeight(1),
                    },
                }}
                textStyle={{
                    right: {
                        color: '#FFFFFF',
                    },
                    left: {
                        color: '#393939',
                        letterSpacing: 0.15,
                        // fontSize: 14,
                        fontSize: responsiveScreenFontSize(1.8),
                        color: 'black',
                        fontWeight: '400',
                        // width: 200,
                        width: responsiveScreenWidth(55),
                    },
                }}
            />
        );
    };
    const onSend = (newMessages = []) => {
        setMessages((previousMessages) => GiftedChat.prepend(previousMessages, newMessages));
    };
    const handleMessage = () => {
        showMessage({
            message: "Thank you for your feedback.",
            type: "success",
            duration: 2000,
            icon: { icon: "success", position: 'left' },
        });
    }
    return (
        <View style={StyleCustomService.container}>
            <View style={StyleCustomService.header}>
                <TouchableOpacity onPress={() => GO_BACK(navigation)}>
                    <Icon name="arrow-left" size={25} color="#393939" />
                </TouchableOpacity>
                <Text style={StyleCustomService.textheader}>Custom Service</Text>
                <View style={StyleCustomService.viewbutton}>
                    <TouchableOpacity onPress={handleCallPress}>
                        <Icon name="phone-outline" size={25} color="#393939" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleMessage}>
                        <Icon name="dots-horizontal-circle-outline" size={25} color="#393939" />
                    </TouchableOpacity>
                </View>
            </View>
            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{ _id: 1 }}
                renderInputToolbar={renderInputToolbar}
                renderBubble={renderBubble}
                inverted={false}
            />
        </View>
    );
};

export default CustomService;