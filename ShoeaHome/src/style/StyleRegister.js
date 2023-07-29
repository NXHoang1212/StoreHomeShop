import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";

const StyleRegister = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    iconback: {
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(3),
    },
    viewbody: {
        bottom: responsiveHeight(2.3),
    },
    viewlogo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: responsiveWidth(30),
        height: responsiveWidth(30),
    },
    textlogo: {
        // fontSize: 28,
        fontSize: responsiveFontSize(2.8),
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 1,
    },
    viewusers: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveHeight(3),
        width: responsiveWidth(88),
        height: responsiveHeight(6),
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    viewlogin: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveHeight(2.8),
        width: responsiveWidth(88),
        height: responsiveHeight(6),
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    iconaccount: {
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(1.2),
        color: Color.MainGray,
    },
    iconemail: {
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(1.5),
        color: Color.MainGray,
    },
    textlogin: {
        fontSize: responsiveFontSize(1.8),
        marginLeft: responsiveWidth(3),
        color: Color.MainBlack,
    },
    inputFocused: {
        borderColor: '#000',
    },
    viewpassword: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveHeight(2.8),
        width: responsiveWidth(88),
        height: responsiveHeight(6),
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    iconpassword: {
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(1.4),
        color: Color.MainGray,
    },
    viewiconpassword1: {
        right: responsiveWidth(4),
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
        left: responsiveWidth(2),
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
    },
    buttonlogin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        width: responsiveWidth(88),
        height: responsiveHeight(7),
        backgroundColor: Color.MainBlack,
        borderRadius: 30,
        alignSelf: 'center',
        elevation: 6,
    },
    textbuttonlogin: {
        // fontSize: 18,
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    line: {
        width: responsiveWidth(25),
        height: 1,
        backgroundColor: Color.MainGray,
        alignSelf: 'center',
        top: responsiveHeight(1.5),
    },
    textline: {
        fontSize: responsiveFontSize(2.3),
        fontWeight: 'bold',
        color: Color.MainGray,
        marginTop: responsiveHeight(2.5),
        marginHorizontal: responsiveWidth(2),
        marginLeft: responsiveWidth(4),
    },
    viewaccount: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveHeight(2.8),
        gap: responsiveWidth(5),
    },
    buttonfacebook: {
        width: responsiveWidth(13),
        height: responsiveHeight(7),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Color.MainGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: responsiveWidth(4),
    },
    logo1: {
        width: responsiveWidth(7),
        height: responsiveHeight(3.5),
    },
    viewsignup: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveHeight(2.8),
    },
    textsignup: {
        fontSize: responsiveFontSize(2),
        color: Color.MainGray,
        fontWeight: '800',
    },
    textsignup1: {
        fontSize: responsiveFontSize(2),
        color: Color.MainBlack,
        fontWeight: '800',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginHorizontal: responsiveWidth(10),
        top: responsiveHeight(1.3),
    },
});

export default StyleRegister;