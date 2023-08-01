import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Switch, Animated } from 'react-native';
import ThemeContext from '../../config/context/ThemContext';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const CustomSwitch = ({ value, onValueChange }) => {
    const [isEnabled, setIsEnabled] = useState(value);
    const theme = useContext(ThemeContext);
    const handleToggleSwitch = () => {
        const newValue = !isEnabled;
        setIsEnabled(newValue);
        onValueChange(newValue);
    };
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.switchContainer, isEnabled && styles.switchContainerActive]}
            onPress={handleToggleSwitch}>
            <Animated.View style={[styles.thumb, isEnabled && styles.thumbActive]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    switchContainer: {
        // width: 48,
        // height: 24,
        width: responsiveScreenWidth(12),
        height: responsiveScreenHeight(2.8),
        borderRadius: 12,
        backgroundColor: '#DFDFDF',
        justifyContent: 'center',
        // paddingHorizontal: 2,
        paddingHorizontal: responsiveScreenWidth(0.5),
    },
    switchContainerActive: {
        backgroundColor: 'blue',
    },
    thumb: {
        // width: 16,
        // height: 16,
        width: responsiveScreenWidth(4),
        height: responsiveScreenHeight(2),
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    thumbActive: {
        marginLeft: 'auto',
        left: 'auto',
        // right: 2,
        right: responsiveScreenWidth(0.5),
    },
});

export default CustomSwitch;
