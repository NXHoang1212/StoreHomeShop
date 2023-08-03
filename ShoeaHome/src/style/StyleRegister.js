import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenFontSize, responsiveScreenWidth, responsiveScreenHeight } from "react-native-responsive-dimensions";

const StyleRegister = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    iconback: {
        marginLeft: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(2),
    },
    viewbody: {
        bottom: responsiveScreenHeight(2.3),
    },
    viewlogo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: responsiveScreenWidth(30),
        height: responsiveScreenWidth(30),
    },
    textlogo: {
        // fontSize: 28,
        fontSize: responsiveScreenFontSize(2.8),
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 1,
    },
    viewusers: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2.5),
        width: responsiveScreenWidth(88),
        height: responsiveScreenHeight(5.6),
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    viewlogin: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2.5),
        width: responsiveScreenWidth(88),
        height: responsiveScreenHeight(5.6),
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    iconaccount: {
        marginLeft: responsiveScreenWidth(5),
        marginTop: responsiveScreenHeight(1.2),
        color: Color.MainGray,
    },
    iconemail: {
        marginLeft: responsiveScreenWidth(5),
        marginTop: responsiveScreenHeight(1.5),
        color: Color.MainGray,
    },
    textlogin: {
        fontSize: responsiveScreenFontSize(1.8),
        marginLeft: responsiveScreenWidth(3),
        color: Color.MainBlack,
    },
    inputFocused: {
        borderColor: '#000',
    },
    viewpassword: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2.8),
        width: responsiveScreenWidth(88),
        height: responsiveScreenHeight(5.6),
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    iconpassword: {
        marginLeft: responsiveScreenWidth(5),
        marginTop: responsiveScreenHeight(1.4),
        color: Color.MainGray,
    },
    viewiconpassword1: {
        right: responsiveScreenWidth(4),
        justifyContent: 'flex-end',
        position: 'absolute',
    },
    checkbox: {
        borderWidth: 0,
        alignSelf: 'center',
        backgroundColor: Color.MainWhite,
    },
    textcheckbox: {
        color: Color.MainBlack,
        left: responsiveScreenWidth(2),
        fontSize: responsiveScreenFontSize(2),
        fontWeight: 'bold',
    },
    buttonlogin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        width: responsiveScreenWidth(88),
        height: responsiveScreenHeight(6.3),
        backgroundColor: Color.MainBlack,
        borderRadius: 30,
        alignSelf: 'center',
        elevation: 6,
    },
    textbuttonlogin: {
        // fontSize: 18,
        fontSize: responsiveScreenFontSize(2.2),
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    line: {
        width: responsiveScreenWidth(25),
        height: 1,
        backgroundColor: Color.MainGray,
        alignSelf: 'center',
        top: responsiveScreenHeight(1.5),
    },
    textline: {
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: 'bold',
        color: Color.MainGray,
        marginTop: responsiveScreenHeight(2.5),
        marginHorizontal: responsiveScreenWidth(2),
        marginLeft: responsiveScreenWidth(4),
    },
    viewaccount: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2.8),
        gap: responsiveScreenWidth(5),
    },
    buttonfacebook: {
        width: responsiveScreenWidth(13),
        height: responsiveScreenHeight(5.8),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Color.MainGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: responsiveScreenWidth(4),
    },
    logo1: {
        width: responsiveScreenWidth(7),
        height: responsiveScreenHeight(3.5),
    },
    viewsignup: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2.8),
    },
    textsignup: {
        fontSize: responsiveScreenFontSize(2),
        color: Color.MainGray,
        fontWeight: '800',
    },
    textsignup1: {
        fontSize: responsiveScreenFontSize(2),
        color: Color.MainBlack,
        fontWeight: '800',
    },
    errorText: {
        color: Color.MainRed,
        // fontSize: 12,
        fontSize: responsiveScreenFontSize(1.5),
        marginHorizontal: responsiveScreenWidth(10),
        top: responsiveScreenHeight(1.3),
    },
    errorpassword: {
        color: Color.MainRed,
        fontSize: responsiveScreenFontSize(1.5),
        marginTop: responsiveScreenHeight(1),
        marginHorizontal: responsiveScreenWidth(10),
    }
});

export default StyleRegister;