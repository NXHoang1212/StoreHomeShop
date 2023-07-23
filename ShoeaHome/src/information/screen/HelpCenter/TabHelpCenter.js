import React, { useContext, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FaQ from './FaQ';
import ContactUs from './ContactUs';
import { Color } from '../../../../config/Color';
import { GO_BACK } from '../../../function/NavigationNext';
import ThemeContext from '../../../../config/context/ThemContext';


const Tab = createMaterialTopTabNavigator();

const TabHelpCenter = ({ navigation }) => {
    const Theme = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <View style={[styles.container, { backgroundColor: Theme.backgroundColor, }]}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', right: 8 }}
                    onPress={() => GO_BACK(navigation)}>
                    <Icon name="arrow-left" size={28} color={Theme.color} />
                </TouchableOpacity>
                <Text style={[styles.textheader, { color: Theme.color }]}>Help Center</Text>
                <View style={styles.viewbutton}>
                    <TouchableOpacity >
                        <Icon name="dots-horizontal-circle-outline" size={28} color={Theme.color} />
                    </TouchableOpacity>
                </View>
            </View>
            <Tab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: { backgroundColor: Theme.color, width: 170, marginLeft: 10, height: 3 },
                    tabBarStyle: { backgroundColor: Theme.backgroundColor, },
                }}>
                <Tab.Screen name="FaQ"
                    component={FaQ} options={{ tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15, color: Theme.color, letterSpacing: 0.5 } }} />
                <Tab.Screen name="Contact us"
                    component={ContactUs} options={{ tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15, color: Theme.color } }} />
            </Tab.Navigator>
        </View>


    );
}

export default TabHelpCenter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 15,
        marginBottom: 10,
        left: 5,
    },
    textheader: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 10,
        color: Color.MainBlack,
    },
    viewbutton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 15,
        marginHorizontal: 10,
        flex: 1,
    },

});