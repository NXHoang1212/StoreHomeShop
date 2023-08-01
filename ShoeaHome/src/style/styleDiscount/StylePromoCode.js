import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";

const StylePromoCode = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
        // marginLeft: 10,
        marginTop: responsiveScreenHeight(2),
        marginLeft: responsiveScreenWidth(2),
    },
    textheader: {
        // fontSize: 19,
        fontSize: responsiveScreenFontSize(2.4),
        fontWeight: 'bold',
        // marginLeft: 10,
        left: responsiveScreenWidth(3),
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    iconseacrh: {
        marginLeft: 'auto',
        // marginRight: 16,
        right: responsiveScreenWidth(3),
    },
    viewbody: {
        // marginTop: 25,
        // marginHorizontal: 10,
        marginTop: responsiveScreenHeight(2),
        marginHorizontal: responsiveScreenWidth(2),
    },
    viewitem: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 30,
        // width: '100%',
        // height: 78,
        marginBottom: responsiveScreenHeight(2),
        width: responsiveScreenWidth(94),
        height: responsiveScreenHeight(8),
        backgroundColor: Color.MainWhite,
        borderRadius: 15,
        elevation: 5,
        alignSelf: 'center',
    },
    viewimage: {
        // width: 50,
        // height: 50,
        width: responsiveScreenWidth(10.5),
        height: responsiveScreenHeight(4.8),
        borderRadius: 30,
        backgroundColor: Color.MainBlack,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 16,
        marginLeft: responsiveScreenWidth(4),
    },
    viewitemleft: {
        // marginLeft: 10,
        left: responsiveScreenWidth(3),
    },
    textcode: {
        // fontSize: 17,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    textname: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(1.8),
        color: Color.MainGray,
        letterSpacing: 0.5,
        fontWeight: '600',
    },
    viewfooter: {
        marginTop: 'auto',
        // marginBottom: 20,
        marginBottom: responsiveScreenHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        // width: '90%',
        // height: 55,
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(6.5),
        backgroundColor: Color.MainBlack,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    textbutton: {
        // fontSize: 18,
        fontSize: responsiveScreenFontSize(2.2),
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    viewcheckbox: {
        marginLeft: 'auto',
        // left: 5,
    },
});

export default StylePromoCode;