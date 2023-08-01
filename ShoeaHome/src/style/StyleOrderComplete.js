import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


const StyleOrderComplete = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainBlack,
    },
    viewheader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: responsiveScreenHeight(8),
    },
    viewimage: {
        bottom: responsiveScreenHeight(0.5),
        right: responsiveScreenHeight(1),
    },
    image: {
        // width: 200,
        // height: 200,
        width: responsiveScreenHeight(25),
        height: responsiveScreenHeight(25),
        resizeMode: 'contain',
    },
    viewtext: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20,
        // gap: 8,
        marginTop: responsiveScreenHeight(2),
        gap: responsiveScreenHeight(1),
    },
    text: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.2),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    text1: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
    },
});


export default StyleOrderComplete;