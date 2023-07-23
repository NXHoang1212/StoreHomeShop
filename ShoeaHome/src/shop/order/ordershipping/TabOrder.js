import React, { useContext, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Color } from '../../../../config/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderActive from './OrderActive';
import OrderComplete from './OrderComplete';
import ThemeContext from '../../../../config/context/ThemContext';


const Tab = createMaterialTopTabNavigator();

const TabOrder = () => {
    const Theme = useContext(ThemeContext);
    const logoImage = Theme.image;
    const [Tabisvisible, setTabisvisible] = useState(false);
    return (
        <View style={[styles.container, { backgroundColor: Theme.displayColor, },
        { backgroundColor: Tabisvisible ? '#51565F' : Theme.displayColor }]}>
            <View style={styles.header}>
                <Image source={logoImage} style={{ width: 33, height: 33 }} />
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
                        height: 3,
                    },
                    tabBarLabelStyle: {
                        fontSize: 16,
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
        padding: 10,
        marginTop: 15,
        marginBottom: 10,
        left: 5,
    },
    textheader: {
        fontSize: 22,
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