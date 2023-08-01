import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const StyleNotify = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    header: {
        // marginTop: 25,
        marginTop: responsiveScreenHeight(2),
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBack: {
        // marginLeft: 12,
        marginLeft: responsiveScreenWidth(2),
    },
    textHeader: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.5),
        fontWeight: 'bold',
        // marginLeft: 10,
        left: responsiveScreenWidth(2),
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    iconDots: {
        marginLeft: 'auto',
        // marginRight: 15,
        right: responsiveScreenWidth(3),
    },
    body: {
        // width: '100%',
        // height: '100%',
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
    },
    viewitem: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: 10,
        // marginTop: 30,
        marginHorizontal: responsiveScreenWidth(2),
        marginTop: responsiveScreenHeight(3.6),
        // width: '95%',
        // height: 70,
        width: responsiveScreenWidth(95),
        height: responsiveScreenHeight(9.5),
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: Color.MainWhite,
        elevation: 2,
    },
    viewicon: {
        // width: 48,
        // height: 48,
        width: responsiveScreenWidth(11),
        height: responsiveScreenHeight(5),
        borderRadius: 25,
        backgroundColor: Color.MainBlack,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 10,
        marginLeft: responsiveScreenWidth(3),
        top: responsiveScreenHeight(0.5),
    },
    iconaccount: {
        color: Color.MainWhite,
    },
    viewtext: {
        // marginLeft: 10,
        marginLeft: responsiveScreenWidth(3),
        flexDirection: 'column',
        // gap: 2.5,
        gap: responsiveScreenHeight(0.3),
        top: responsiveScreenHeight(0.5),
    },
    textTitle: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textbody: {
        // fontSize: 14,
        fontSize: responsiveScreenFontSize(1.8),
        fontWeight: '500',
        // width: 290,
        width: responsiveScreenWidth(64),
        letterSpacing: 0.25,
        textAlign: 'justify',
    },
    textday: {
        // fontSize: 18,
        fontSize: responsiveScreenFontSize(2.1),
        fontWeight: 'bold',
        color: Color.MainBlack,
        // marginLeft: 10,
        // top: 18,
        marginLeft: responsiveScreenWidth(3),
        top: responsiveScreenHeight(2.5),
    },
    containerItem: {
        flexDirection: 'column',

    },
    rowBack: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 10,
        // top: 55,
        // width: '17%',
        // height: 70,
        width: responsiveScreenWidth(16),
        height: responsiveScreenHeight(8),
        marginHorizontal: responsiveScreenWidth(3),
        top: responsiveScreenHeight(6.6),
        alignSelf: 'flex-end',
        borderRadius: 10,
        backgroundColor: Color.MainRed,
        elevation: 2,
    },
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        // width: 65,
        // bottom: 15,
        width: responsiveScreenWidth(15),
        bottom: responsiveScreenHeight(1.8),
    },
    backTexticon: {
        color: Color.MainWhite,

    },
});


export default StyleNotify;