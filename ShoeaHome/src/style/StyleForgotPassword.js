import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


const StyleForgotPassword = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    viewbody: {

    },
    viewlogo: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
        // marginHorizontal: 20,
        // gap: 10,
        marginTop: responsiveScreenHeight(0.9),
        left: responsiveScreenWidth(2),
        gap: responsiveScreenWidth(2),
    },
    iconback: {
        color: Color.MainBlack,
    },
    textlogo: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: 'bold',
        color: Color.MainBlack,
        // bottom: 1,
    },
    viewimage: {

    },
    image: {
        // width: 300,
        // height: 300,
        width: responsiveScreenWidth(80),
        height: responsiveScreenHeight(33),
        alignSelf: 'center',
        // marginTop: 20,
        marginTop: responsiveScreenHeight(3),
    },
    textimage: {
        // fontSize: 18,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: '400',
        color: Color.MainBlack,
        // marginTop: 20,
        // marginLeft: 20,
        marginTop: responsiveScreenHeight(3),
        left: responsiveScreenWidth(4),
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.MainWhite,
        borderWidth: 1,
        borderColor: Color.MainGray,
        borderRadius: 28,
        // marginHorizontal: 20,
        // marginTop: 20,
        // padding: 10,
        // gap: 20,
        // height: 90,
        marginHorizontal: responsiveScreenWidth(5),
        marginTop: responsiveScreenHeight(3),
        padding: responsiveScreenHeight(1),
        gap: responsiveScreenWidth(5),
        height: responsiveScreenHeight(10),
    },
    iconbutton: {
        color: Color.MainBlack,
    },
    viewicon: {
        backgroundColor: Color.White,
        borderRadius: 30,
        // padding: 10,
        padding: responsiveScreenHeight(0.8),
    },
    viewbutton: {
    },
    textsms: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: '400',
    },
    textbutton: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: '800',
        color: Color.MainBlack,
    },
    Viewcontinue: {
        backgroundColor: Color.MainBlack,
        borderRadius: 28,
        // marginHorizontal: 20,
        // marginTop: 29,
        // padding: 18,
        height: responsiveScreenHeight(7),
        width: responsiveScreenWidth(90),
        top: responsiveScreenHeight(5.8),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
    },
    textcontinue: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: '800',
        color: Color.MainWhite,
    },
});

export default StyleForgotPassword;