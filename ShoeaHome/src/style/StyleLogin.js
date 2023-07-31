import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenFontSize, responsiveScreenWidth, responsiveScreenHeight } from "react-native-responsive-dimensions";

const StyleLogin = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    iconback: {
        marginLeft: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(2),
    },
    viewbody: {
        marginTop: responsiveScreenHeight(3.8),
    },
    viewlogo: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: responsiveScreenHeight(2),
    },
    logo: {
        // width: 120,
        // height: 120,
        width: responsiveScreenWidth(30),
        height: responsiveScreenWidth(30),
    },
    textlogo: {
        // fontSize: 22,
        fontSize: responsiveScreenFontSize(2.9),
        fontWeight: 'bold',
        // marginTop: 5,
        color: Color.MainBlack,
        letterSpacing: 1,
    },
    viewusers: {
        // flexDirection: 'row',
        // alignSelf: 'center',
        // backgroundColor: Color.MainGray3,
        // borderRadius: 30,
    },
    viewlogin: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2.7),
        width: responsiveScreenWidth(90),
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    iconemail: {
        marginLeft: responsiveScreenWidth(7),
        marginTop: responsiveScreenHeight(1.5),
        color: Color.MainGray,
    },
    textlogin: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(2),
        marginLeft: responsiveScreenWidth(4.5),
        color: Color.MainBlack,
        width: responsiveScreenWidth(90),
    },
    textloginFocus: {
        backgroundColor: '#ccc', // màu sắc khi focus
    },
    viewiconpassword: {
        justifyContent: 'flex-end',
        position: 'absolute',
        right: responsiveScreenWidth(5),
    },
    iconpassword: {
        color: Color.MainBlack,
    },
    viewpassword: {
        flexDirection: 'row',
        alignSelf: 'center',
        // marginTop: 25,
        marginTop: responsiveScreenHeight(3),
        width: responsiveScreenWidth(90),
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    iconpassword: {
        marginLeft: responsiveScreenWidth(7),
        marginTop: responsiveScreenHeight(1.5),
        color: Color.MainGray,
    },
    checkbox: {
        borderWidth: 0,
        // marginTop: 20,
        marginTop: responsiveScreenHeight(1.8),
        alignSelf: 'center',
        backgroundColor: Color.MainWhite,
    },
    textcheckbox: {
        color: Color.MainBlack,
        marginLeft: responsiveScreenWidth(1.5),
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(2.2),
        fontWeight: 'bold',
    },
    buttonlogin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveScreenHeight(1),
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(7.3),
        backgroundColor: Color.MainBlack,
        borderRadius: 30,
        alignSelf: 'center',
        elevation: 6,
    },
    textbuttonlogin: {
        // fontSize: 18,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    viewfortgot: {
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(3.5),
        left: responsiveScreenWidth(1.5),
    },
    textforgot: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(2.2),
        fontWeight: 'bold',
        color: Color.MainBlack,
        alignSelf: 'center',
    },
    line: {
        width: responsiveScreenWidth(35),
        height: 1,
        backgroundColor: Color.MainGray,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: responsiveScreenHeight(4.5),
    },
    textline: {
        // fontSize: 18,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: 'bold',
        color: Color.MainGray,
        marginTop: responsiveScreenHeight(4),
        marginHorizontal: responsiveScreenWidth(2.3),
        marginLeft: responsiveScreenWidth(4),
    },
    viewaccount: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2.8),
        gap: responsiveScreenWidth(7),
        left: responsiveScreenWidth(0.5),
    },
    buttonfacebook: {
        width: responsiveScreenWidth(13),
        height: responsiveScreenWidth(13),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Color.MainGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo1: {
        // width: 30,
        // height: 30,
        width: responsiveScreenWidth(7),
        height: responsiveScreenWidth(7),
    },
    viewsignup: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2.5),
    },
    textsignup: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(2),
        color: Color.MainGray,
        fontWeight: '800',
    },
    textsignup1: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(2),
        color: Color.MainBlack,
        fontWeight: '800',
    },
    errorText: {
        color: 'red',
        marginLeft: responsiveScreenWidth(12),
        top: responsiveScreenHeight(0.8),
    },
    errorLogin: {
        color: 'red',
        marginLeft: responsiveScreenWidth(12),
    },
});

export default StyleLogin;