import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const StyleSecurity = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    body: {
        backgroundColor: Color.MainWhite,
        // marginTop: 30,
        // gap: 20,
        marginTop: responsiveScreenHeight(1.5),
        gap: responsiveScreenHeight(1),
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {
        // marginLeft: 8,
        // top: 1,
        marginLeft: responsiveScreenWidth(2),
        top: responsiveScreenHeight(0.1),
        color: Color.MainBlack,
    },
    textheader: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: 'bold',
        // marginLeft: 14,
        left: responsiveScreenWidth(3),
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    viewSecurity: {
        // marginTop: 35,
        // gap: 30,
        marginTop: responsiveScreenHeight(2),
        gap: responsiveScreenHeight(2),
    },
    viewSecurityItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textpin: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.8),
        fontWeight: '500',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        textAlign: 'center',
    },
    textSecurity: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.85),
        fontWeight: '500',
        // marginLeft: 20,
        left: responsiveScreenWidth(4),
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    CustomSwitch: {
        flexDirection: 'row',
        marginLeft: 'auto',
        // right: 20,
        right: responsiveScreenWidth(4),
    },
    custombutton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // width: '92%',
        width: responsiveScreenWidth(95),
    },
    iconright: {
        color: Color.MainBlack,
    },
    viewbutton: {
        top: responsiveScreenHeight(3),
    },
    viewchange: {
        // marginTop: 30,
        marginTop: responsiveScreenHeight(2.5),
        alignItems: 'center',
        // width: 295,
        // height: 50,
        width: responsiveScreenWidth(80),
        height: responsiveScreenHeight(5.9),
        borderRadius: 28,
        backgroundColor: Color.MainGray3,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    textchange: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: '500',
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
});

export default StyleSecurity;