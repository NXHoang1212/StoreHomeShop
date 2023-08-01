import React, { useContext, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Color } from '../../../../config/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderActive from './OrderActive';
import OrderComplete from './OrderComplete';
import ThemeContext from '../../../../config/context/ThemContext';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';


const Tab = createMaterialTopTabNavigator();

const TabOrder = () => {
    const Theme = useContext(ThemeContext);
    const logoImage = Theme.image;
    const [Tabisvisible, setTabisvisible] = useState(false);
    return (
        <View style={[styles.container, { backgroundColor: Theme.displayColor }]}>
            <View style={styles.header}>
                <Image source={logoImage} style={{ width: responsiveScreenHeight(4), height: responsiveScreenHeight(4) }} />
                <Text style={[styles.textheader, { color: Theme.color }]}>My Order</Text>
                <View style={styles.viewbutton}>
                    <TouchableOpacity>
                        <Icon name="magnify" size={28} color='#393939' style={[{ color: Theme.color }]} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Icon name="dots-horizontal-circle-outline" size={28} color='#393939' style={[{ color: Theme.color }]} />
                    </TouchableOpacity>
                </View>
            </View>
            <Tab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: {
                        backgroundColor: Theme.color,
                        height: responsiveScreenHeight(0.3),
                    },
                    tabBarLabelStyle: {
                        // fontSize: 16,
                        fontSize: responsiveScreenFontSize(1.9),
                        fontWeight: 'bold',
                        color: Theme.color,
                    },
                    tabBarStyle: {
                        backgroundColor: Theme.displayColor,
                    },
                }}>
                <Tab.Screen name="Active" component={OrderActive} />
                <Tab.Screen name="Complete" component={OrderComplete} />
            </Tab.Navigator>
        </View>
    );
}

export default TabOrder;

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
        padding: responsiveScreenHeight(1.5),
        marginTop: responsiveScreenHeight(0.3),
        // marginBottom: responsiveScreenHeight(0.3),
        left: responsiveScreenHeight(0.5),
    },
    textheader: {
        // fontSize: 22,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: '600',
        // marginLeft: 10,
        marginLeft: responsiveScreenHeight(1),
        color: Color.MainBlack,
    },
    viewbutton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // gap: 15,
        // marginHorizontal: 10,
        // flex: 1,
        gap: responsiveScreenHeight(2),
        marginHorizontal: responsiveScreenHeight(1.5),
        flex: 1,
    },
});