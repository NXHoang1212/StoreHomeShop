import React, { useContext, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FaQ from './FaQ';
import ContactUs from './ContactUs';
import { Color } from '../../../../config/Color';
import { GO_BACK } from '../../../function/NavigationNext';
import ThemeContext from '../../../../config/context/ThemContext';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';


const Tab = createMaterialTopTabNavigator();

const TabHelpCenter = ({ navigation }) => {
    const Theme = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <View style={[styles.container, { backgroundColor: Theme.backgroundColor, }]}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={{ width: responsiveScreenWidth(5), height: responsiveScreenHeight(3), justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => GO_BACK(navigation)}>
                    <Icon name="arrow-left" size={26} color={Theme.color} />
                </TouchableOpacity>
                <Text style={[styles.textheader, { color: Theme.color }]}>Help Center</Text>
                <View style={styles.viewbutton}>
                    <TouchableOpacity >
                        <Icon name="dots-horizontal-circle-outline" size={25} color={Theme.color} />
                    </TouchableOpacity>
                </View>
            </View>
            <Tab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: { backgroundColor: Theme.color, width: responsiveScreenWidth(49), marginLeft: responsiveScreenWidth(1), height: responsiveScreenHeight(0.4) },
                    tabBarStyle: { backgroundColor: Theme.backgroundColor, },
                }}>
                <Tab.Screen name="FaQ"
                    component={FaQ} options={{ tabBarLabelStyle: { fontWeight: 'bold', fontSize: responsiveScreenFontSize(1.9), color: Theme.color, letterSpacing: 0.5 } }} />
                <Tab.Screen name="Contact us"
                    component={ContactUs} options={{ tabBarLabelStyle: { fontWeight: 'bold', fontSize: responsiveScreenFontSize(1.8), color: Theme.color } }} />
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
        // padding: 10,
        // marginTop: 15,
        // marginBottom: 10,
        // left: 5,
        padding: responsiveScreenHeight(1),
        marginTop: responsiveScreenHeight(1.5),
        marginBottom: responsiveScreenHeight(1),
        left: responsiveScreenWidth(0.5),
    },
    textheader: {
        // fontSize: 20,
        fontSize: responsiveScreenHeight(2.2),
        fontWeight: '600',
        left: responsiveScreenWidth(3),
        color: Color.MainBlack,
    },
    viewbutton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // gap: 15,
        // marginHorizontal: 10,
        marginHorizontal: responsiveScreenWidth(2),
        flex: 1,
    },

});