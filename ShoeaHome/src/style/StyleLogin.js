import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

const StyleLogin = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    iconback: {
        marginLeft: 15,
        marginTop: 20,
    },
    viewbody: {
        marginTop: 25,
    },
    viewlogo: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 12,
    },
    logo: {
        width: 120,
        height: 120,
    },
    textlogo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 5,
        color: Color.MainBlack,
        letterSpacing: 1,
    },
    viewusers: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
        width: 350,
        height: 50,
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    viewlogin: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 25,
        width: 350,
        height: 50,
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    iconemail: {
        marginLeft: 20,
        marginTop: 14,
        color: Color.MainGray,
    },
    textlogin: {
        fontSize: 15,
        marginLeft: 20,
        color: Color.MainBlack,
    },
    textloginFocus: {
        backgroundColor: '#ccc', // màu sắc khi focus
    },
    viewiconpassword: {
        right: 10,
        justifyContent: 'flex-end',
        position: 'absolute',
    },
    iconpassword: {
        color: Color.MainBlack,
    },
    viewpassword: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 25,
        width: 350,
        height: 50,
        backgroundColor: Color.MainGray3,
        borderRadius: 30,
    },
    iconpassword: {
        marginLeft: 20,
        marginTop: 14,
        color: Color.MainGray,
    },
    checkbox: {
        borderWidth: 0,
        paddingHorizontal: 0,
        marginTop: 20,
        alignSelf: 'center',
    },
    textcheckbox: {
        color: Color.MainBlack,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonlogin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        width: 350,
        height: 55,
        backgroundColor: Color.MainBlack,
        borderRadius: 30,
        alignSelf: 'center',
        elevation: 6,
    },
    textbuttonlogin: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    viewfortgot: {

    },
    textforgot: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
        alignSelf: 'center',
        marginTop: 30,
    },
    line: {
        width: 95,
        height: 1,
        backgroundColor: Color.MainGray,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 33,
    },
    textline: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        color: Color.MainGray,
        marginTop: 30,
    },
    viewaccount: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
        gap: 25,
    },
    buttonfacebook: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Color.MainGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    logo1: {
        width: 30,
        height: 30,
    },
    viewsignup: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
    },
    textsignup: {
        fontSize: 16,
        color: Color.MainGray,
        fontWeight: '800',
    },
    textsignup1: {
        fontSize: 16,
        color: Color.MainBlack,
        fontWeight: '800',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 45,
        top: 5,
    },
});

export default StyleLogin;