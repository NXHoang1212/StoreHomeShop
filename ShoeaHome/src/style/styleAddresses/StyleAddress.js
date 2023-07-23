import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";

const StyleAddress = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackGround,
    },
    body: {
        marginTop: 30,
        gap: 20,
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {
        marginLeft: 8,
        top: 1,
        color: Color.MainBlack,
    },
    textheader: {
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 14,
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    viewlocation: {
        width: 250,
        height: 50,
        padding: 10,
        backgroundColor: Color.MainBlack,
        borderRadius: 20,
        top: 620,
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    textlocation: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainWhite,
        textAlign: 'center',
    },
    viewaddress: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    viewiconhome: {
        width: 53,
        height: 53,
        backgroundColor: Color.MainGray2,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        left: 8,
        flexDirection: 'row',
        top: 6,
    },
    imageview: {
        backgroundColor: Color.MainWhite,
        position: 'absolute',
        height: 28,
        width: 28,
    },
    viewtextaddress: {
        flexDirection: 'column',
        bottom: 49,
        left: 63,
        gap: 5,
    },
    viewdefaultaddress: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

    },
    addressItem: {
        backgroundColor: Color.MainWhite,
        width: '95%',
        height: 65,
        marginTop: 15,
        borderRadius: 15,
        left: 10,
    },
    addressList: {
        // backgroundColor: Color.BackGround,
        // width: '100%',
        // height: 50,
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        marginLeft: 10,
        color: Color.MainBlack,
    },
    textaddresstitle: {
        fontSize: 17,
        marginLeft: 10,
        color: Color.MainBlack,
        top: 4,
        fontWeight: '800',
    },
    textdefault: {
        fontSize: 13,
        top: 4,
        width: 60,
        height: 20,
        fontWeight: '500',
        backgroundColor: Color.MainGray3,
        borderRadius: 6,
        textAlign: 'center',
        color: Color.MainBlack,
    },
    textaddressdetail: {
        fontSize: 15,
        marginLeft: 10,
        color: Color.MainGray,
        top: 4,
        fontWeight: '800',
        width: 294,
    },
    iconpencil: {
        color: Color.MainBlack,
        bottom: 2,
        right: 29,
    },
    iconhome: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 39,
        height: 39,
        borderRadius: 8,
    },
    listaddress: {
        height: 620,
    },
    addButtonContainer: {
        width: 300,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: Color.MainBlack,
        height: 50,
        borderRadius: 30,
        elevation: 5,
    },
    addButtonText: {
        fontSize: 16,
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
        marginLeft: 15,
        marginRight: 15,
        gap: 10,
    },
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 15,
        bottom: 0,
        width: 62,
        height: 62,
        borderRadius: 10,
        backgroundColor: Color.MainRed,
        alignSelf: 'flex-end',
    },
    backRightBtnRight: {
        backgroundColor: Color.MainRed,
    },
    backTextWhite: {
        color: Color.MainWhite,
        fontSize: 16,
        fontWeight: 'bold',
    },
    backTexticon: {
        color: Color.MainWhite,
    },
});

export default StyleAddress;