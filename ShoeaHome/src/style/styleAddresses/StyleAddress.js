import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const StyleAddress = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackGround,
    },
    body: {
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
        // fontSize: 19,
        fontSize: responsiveScreenFontSize(2.2),
        fontWeight: 'bold',
        // marginLeft: 14,
        left: responsiveScreenWidth(2),
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    // viewlocation: {
    //     // width: 250,
    //     // height: 50,
    //     width: responsiveScreenWidth(70),
    //     height: responsiveScreenHeight(6),
    //     backgroundColor: Color.MainBlack,
    //     borderRadius: 20,
    //     top: 620,
    //     alignSelf: 'center',
    //     justifyContent: 'center',
    //     elevation: 5,
    // },
    // textlocation: {
    //     // fontSize: 16,
    //     fontSize: responsiveScreenFontSize(1.8),
    //     fontWeight: 'bold',
    //     color: Color.MainWhite,
    //     textAlign: 'center',
    // },
    // viewaddress: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // gap: 10,
    //     gap: responsiveScreenWidth(2),
    // },
    viewiconhome: {
        // width: 53,
        // height: 53,
        width: responsiveScreenWidth(12),
        height: responsiveScreenHeight(5.5),
        backgroundColor: Color.MainGray2,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // left: 8,
        left: responsiveScreenWidth(1.9),
        flexDirection: 'row',
        // top: 6,
        top: responsiveScreenHeight(1.1),
    },
    imageview: {
        backgroundColor: Color.MainWhite,
        position: 'absolute',
        // height: 28,
        // width: 28,
        height: responsiveScreenHeight(3.5),
        width: responsiveScreenWidth(5),
    },
    viewtextaddress: {
        flexDirection: 'column',
        // bottom: 49,
        // left: 63,
        // gap: 5,
        bottom: responsiveScreenHeight(4.8),
        left: responsiveScreenWidth(15),
        gap: responsiveScreenHeight(0.5),
    },
    viewdefaultaddress: {
        flexDirection: 'row',
        alignItems: 'center',
        // gap: 10,
        gap: responsiveScreenWidth(4),
    },
    addressItem: {
        backgroundColor: Color.MainWhite,
        // width: '95%',
        // height: 65,
        // marginTop: 15,
        // borderRadius: 15,
        // left: 10,
        width: responsiveScreenWidth(95),
        height: responsiveScreenHeight(7.5),
        marginTop: responsiveScreenHeight(1.5),
        borderRadius: 15,
        left: responsiveScreenWidth(2.5),
    },
    title: {
        // fontSize: 17,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '700',
        // marginLeft: 10,
        marginLeft: responsiveScreenWidth(2),
        color: Color.MainBlack,
    },
    textaddresstitle: {
        // fontSize: 17,
        // marginLeft: 10,
        fontSize: responsiveScreenFontSize(1.9),
        left: responsiveScreenWidth(2),
        color: Color.MainBlack,
        // top: 4,
        top: responsiveScreenHeight(0.3),
        fontWeight: '800',
    },
    textdefault: {
        // fontSize: 13,
        // top: 4,
        // width: 60,
        // height: 20,
        fontSize: responsiveScreenFontSize(1.4),
        top: responsiveScreenHeight(0.3),
        width: responsiveScreenWidth(14),
        height: responsiveScreenHeight(2),
        fontWeight: '500',
        backgroundColor: Color.MainGray3,
        borderRadius: 6,
        textAlign: 'center',
        color: Color.MainBlack,
    },
    textaddressdetail: {
        // fontSize: 15,
        // marginLeft: 10,
        fontSize: responsiveScreenFontSize(1.7),
        left: responsiveScreenWidth(2),
        color: Color.MainGray,
        // top: 4,
        top: responsiveScreenHeight(0.3),
        fontWeight: '800',
        // width: 294,
        width: responsiveScreenWidth(70),
    },
    iconpencil: {
        color: Color.MainBlack,
        // bottom: 2,
        // right: 29,
        bottom: responsiveScreenHeight(0.2),
        right: responsiveScreenWidth(6.5),
    },
    iconhome: {
        justifyContent: 'center',
        alignItems: 'center',
        // width: 39,
        // height: 39,
        width: responsiveScreenWidth(8.7),
        height: responsiveScreenHeight(4),
        borderRadius: 8,
    },
    listaddress: {
        // height: 620,
        height: responsiveScreenHeight(74),
    },
    addButtonContainer: {
        // width: 300,
        width: responsiveScreenWidth(80),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: Color.MainBlack,
        // height: 50,
        height: responsiveScreenHeight(6),
        borderRadius: 30,
        elevation: 5,
    },
    addButtonText: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.8),
        fontWeight: 'bold',
        color: Color.MainWhite,
        letterSpacing: 0.5,
    },
    deleteaddress: {
    },
    rowBack: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginLeft: 15,
        // marginRight: 15,
        // gap: 10,
        marginRight: responsiveScreenWidth(3),
        gap: responsiveScreenWidth(2.9),
    },
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        // top: 15,
        // bottom: 0,
        // width: 62,
        // height: 62,
        top: responsiveScreenHeight(1.8),
        bottom: responsiveScreenHeight(0.1),
        width: responsiveScreenWidth(14),
        height: responsiveScreenHeight(7),
        borderRadius: 10,
        backgroundColor: Color.MainRed,
        alignSelf: 'flex-end',
    },
    backRightBtnRight: {
        backgroundColor: Color.MainRed,
    },
    backTextWhite: {
        color: Color.MainWhite,
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.8),
        fontWeight: 'bold',
    },
    backTexticon: {
        color: Color.MainWhite,
    },
});

export default StyleAddress;