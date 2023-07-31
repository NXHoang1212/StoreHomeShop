import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const StyleHomeOption = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    iconback: {
        marginLeft: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(1.5),
    },
    logo: {
        width: responsiveScreenWidth(68),
        height: responsiveScreenHeight(32),
        marginTop: responsiveScreenHeight(2),
        alignSelf: 'center',
    },
    text: {
        // fontSize: 35,
        fontSize: responsiveScreenFontSize(4),
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(3),
        color: Color.MainBlack,
    },
    viewbody1: {
        flexDirection: 'column',
    },
    viewbody2: {
        flexDirection: 'column',
        marginTop: responsiveScreenHeight(1),
    },
    button: {
        flexDirection: 'row',
        backgroundColor: Color.MainWhite,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Color.MainGray3,
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(5.5),
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2),
    },
    logo1: {
        width: responsiveScreenWidth(7.3),
        height: responsiveScreenHeight(3.4),
        // marginTop: 16,
        // // marginLeft: 50,
        // marginLeft: 35,
        alignSelf: 'center',
        marginLeft: responsiveScreenWidth(10),
    },
    logo2: {
        width: responsiveScreenWidth(6.9),
        height: responsiveScreenHeight(3.3),
        // marginTop: 16,
        // // marginLeft: 50,
        // marginLeft: 35,
        alignSelf: 'center',
        marginLeft: responsiveScreenWidth(10),
    },
    textbutton: {
        // fontSize: 20,
        // fontSize: 17,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: '500',
        alignSelf: 'center',
        color: Color.MainBlack,
        marginLeft: responsiveScreenWidth(4),
        letterSpacing: responsiveScreenWidth(0.2),
    },
    line: {
        width: responsiveScreenWidth(40),
        height: 1,
        backgroundColor: Color.MainGray,
        alignSelf: 'center',
        marginTop: 20,
    },
    textline: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Color.MainBlack,
        marginTop: responsiveScreenWidth(3),
    },
    buttonpassword: {
        backgroundColor: Color.MainBlack,
        borderRadius: 20,
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(6.5),
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: responsiveScreenHeight(3),
        elevation: 6,
    },
    textbuttonpassword: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: '500',
        alignSelf: 'center',
        color: Color.MainWhite,
        letterSpacing: responsiveScreenWidth(0.2),
        // marginLeft: responsiveWidth(1),
    },
    viewaccount: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(3.3),
    },
    viewsmallaccount: {
    },
    textaccount: {
        // fontSize: 17,
        fontSize: responsiveScreenFontSize(2.1),
        fontWeight: '600',
        alignSelf: 'center',
        color: Color.MainGray2,
    },
    textsignup: {
        // fontSize: 17,
        fontSize: responsiveScreenFontSize(2.1),
        fontWeight: '600',
        alignSelf: 'center',
        color: Color.MainBlack,
        marginLeft: responsiveScreenWidth(2),
    },
});

export default StyleHomeOption;