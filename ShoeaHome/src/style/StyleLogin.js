import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";

const StyleLogin = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    iconback: {
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(3),
    },
    viewbody: {
        marginTop: responsiveHeight(3.8),
    },
    viewlogo: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: responsiveHeight(2),
    },
    logo: {
        // width: 120,
        // height: 120,
        width: responsiveWidth(30),
        height: responsiveWidth(30),
    },
    textlogo: {
        // fontSize: 22,
        fontSize: responsiveFontSize(2.9),
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
        marginTop: responsiveHeight(2.7),
        width: responsiveWidth(90),
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    iconemail: {
        marginLeft: responsiveWidth(7),
        marginTop: responsiveHeight(1.5),
        color: Color.MainGray,
    },
    textlogin: {
        // fontSize: 15,
        fontSize: responsiveFontSize(2),
        marginLeft: responsiveWidth(4.5),
        color: Color.MainBlack,
        width: responsiveWidth(90),
    },
    textloginFocus: {
        backgroundColor: '#ccc', // màu sắc khi focus
    },
    viewiconpassword: {
        justifyContent: 'flex-end',
        position: 'absolute',
        right: responsiveWidth(5),
    },
    iconpassword: {
        color: Color.MainBlack,
    },
    viewpassword: {
        flexDirection: 'row',
        alignSelf: 'center',
        // marginTop: 25,
        marginTop: responsiveHeight(3),
        width: responsiveWidth(90),
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    iconpassword: {
        marginLeft: responsiveWidth(7),
        marginTop: responsiveHeight(1.5),
        color: Color.MainGray,
    },
    checkbox: {
        borderWidth: 0,
        // marginTop: 20,
        marginTop: responsiveHeight(1.8),
        alignSelf: 'center',
        backgroundColor: Color.MainWhite,
    },
    textcheckbox: {
        color: Color.MainBlack,
        marginLeft: responsiveWidth(1.5),
        // fontSize: 16,
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
    },
    buttonlogin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(1),
        width: responsiveWidth(90),
        height: responsiveHeight(7.3),
        backgroundColor: Color.MainBlack,
        borderRadius: 30,
        alignSelf: 'center',
        elevation: 6,
    },
    textbuttonlogin: {
        // fontSize: 18,
        fontSize: responsiveFontSize(2.3),
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    viewfortgot: {
        alignSelf: 'center',
        marginTop: responsiveHeight(3.5),
        left: responsiveWidth(1.5),
    },
    textforgot: {
        // fontSize: 16,
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        color: Color.MainBlack,
        alignSelf: 'center',
    },
    line: {
        width: responsiveWidth(35),
        height: 1,
        backgroundColor: Color.MainGray,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(4.5),
    },
    textline: {
        // fontSize: 18,
        fontSize: responsiveFontSize(2.3),
        fontWeight: 'bold',
        color: Color.MainGray,
        marginTop: responsiveHeight(4),
        marginHorizontal: responsiveWidth(2.3),
        marginLeft: responsiveWidth(4),
    },
    viewaccount: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveHeight(2.8),
        gap: responsiveWidth(7),
        left: responsiveWidth(0.5),
    },
    buttonfacebook: {
        width: responsiveWidth(13),
        height: responsiveWidth(13),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Color.MainGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo1: {
        // width: 30,
        // height: 30,
        width: responsiveWidth(7),
        height: responsiveWidth(7),
    },
    viewsignup: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveHeight(2.5),
    },
    textsignup: {
        // fontSize: 16,
        fontSize: responsiveFontSize(2),
        color: Color.MainGray,
        fontWeight: '800',
    },
    textsignup1: {
        // fontSize: 16,
        fontSize: responsiveFontSize(2),
        color: Color.MainBlack,
        fontWeight: '800',
    },
    errorText: {
        color: 'red',
        marginLeft: responsiveWidth(12),
        top: responsiveHeight(0.8),
    },
    errorLogin: {
        color: 'red',
        marginLeft: responsiveWidth(12),
    },
});

export default StyleLogin;