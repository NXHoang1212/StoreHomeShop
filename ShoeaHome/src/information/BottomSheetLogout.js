import { View, Text, Dimensions, Animated, StyleSheet } from 'react-native'
import React from 'react'
import { Color } from '../../config/Color'
import { Portal } from 'react-native-paper'

const BottomSheetLogout = () => {
    const bottomSheetHeight = Dimensions.get('window').height * 0.5;
    const deviceWith = Dimensions.get('window').width;

    return (
        <Portal>
            <Animated.View style={[styles.root, { height: bottomSheetHeight, bottom: 0 }]}>

            </Animated.View>
        </Portal>
    )
}

export default BottomSheetLogout

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: Color.MainWhite,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowColor: Color.MainBlack,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        height: 33,
        backgroundColor: Color.MainWhite,
    },
})