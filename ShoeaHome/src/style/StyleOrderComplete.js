import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


const StyleOrderComplete = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainBlack,
    },
    viewheader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: responsiveHeight(10),
    },
    viewimage: {
        bottom: responsiveHeight(1),
        right: responsiveHeight(1),
    },
    image: {
        // width: 200,
        // height: 200,
        width: responsiveHeight(25),
        height: responsiveHeight(25),
        resizeMode: 'contain',
    },
    viewtext: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20,
        // gap: 8,
        marginTop: responsiveHeight(2),
        gap: responsiveHeight(1),
    },
    text: {
        // fontSize: 20,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    text1: {
        // fontSize: 16,
        fontSize: responsiveFontSize(2),
    },
});


export default StyleOrderComplete;