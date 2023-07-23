import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";

const StyleDetailHistory = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 23,
    },
    iconleft: {
        marginLeft: 15,
        top: 1,
    },
    textheader: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: Color.MainBlack,
        marginLeft: 13,
    },
    iconright: {
        top: 1,
        marginLeft: 'auto',
        marginRight: 15,
    },
    viewlist: {
        marginTop: 5,
        marginHorizontal: 24,
        width: '90%',
        height: '100%',
    },
    viewbarcode: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    barcode: {
        width: 320,
        height: 150,
    },
    viewlistitem: {

    },
    viewlistitemproduct: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        backgroundColor: Color.MainWhite,
        borderRadius: 8,
        elevation: 5,
        marginBottom: 20,
    },
    viewitemnameimage: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 13,
        marginTop: 10,
    },
    viewimageproduct: {
        width: 55,
        height: 55,
        borderRadius: 45,
        backgroundColor: Color.MainGray3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageproduct: {
        width: 55,
        height: 55,
    },
    viewtextproduct: {
        flexDirection: 'column',
        marginLeft: 20,
        gap: 5,
    },
    viewnameproduct: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewcolor: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Color.Black,
        marginLeft: 5,
    },
    textname: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: Color.MainBlack,
        width: 180,
    },
    texthardwhite: {
        fontSize: 14,
        fontWeight: '500',
        color: Color.MainGray,
        textAlign: 'justify',
    },
    viewcount: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textcount: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        color: Color.MainGray,
        width: 180,
    },
    viewamountitem: {
        flexDirection: 'column',
        width: '100%',
        height: 160,
        backgroundColor: Color.MainWhite,
        borderRadius: 8,
        elevation: 5,
        marginBottom: 20,
    },
    viewamount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 12,
    },
    textamount: {
        fontSize: 14,
        color: Color.MainGray,
        fontFamily: 'Roboto-Regular',
    },
    textamountitem: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        color: Color.MainBlack,
    },
    line: {
        width: '92%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: Color.MainGray2,
        marginTop: 10,
    },
    viewstatus: {
        flexDirection: 'column',
        width: '100%',
        height: 160,
        backgroundColor: Color.MainWhite,
        borderRadius: 8,
        elevation: 5,
        marginBottom: 20,
    },
    viewstatusitem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 12,
    },
    textstatus: {
        fontSize: 14,
        color: Color.MainGray,
        fontFamily: 'Roboto-Regular',
    },
    textstatusitem: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        color: Color.MainBlack,
    },
    viewstatus1: {
        width: 50,
        height: 25,
        backgroundColor: Color.MainBlack,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textstatusitem1: {
        fontSize: 13,
        fontFamily: 'Roboto-Bold',
        color: Color.MainWhite,
    },
    textstatusitemleft: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        color: Color.MainBlack,
        left: 38,
    },
    viewcategory: {
        flexDirection: 'column',
        width: '100%',
        height: 50,
        backgroundColor: Color.MainWhite,
        borderRadius: 8,
        elevation: 5,
        marginBottom: 20,
    },
    viewcategoryitem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    },
    textcategory: {
        fontSize: 14,
        color: Color.MainGray,
        fontFamily: 'Roboto-Regular',
    },
    textorder: {
        fontSize: 16,
        color: Color.MainBlack,
        fontFamily: 'Roboto-Bold',
        left: 85,
    },
    icondown: {
        marginLeft: 10,
    },
    viewshare: {
        width: '50%',
        height: 138,
        backgroundColor: Color.MainWhite,
        borderRadius: 8,
        elevation: 5,
        position: 'absolute',
        alignSelf: 'flex-end',
        top: '7%',
        right: 10,
        flexDirection: 'column',
        gap: 10,

    },
    viewshareitem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginHorizontal: 15,
        marginTop: 5,
    },
    texticon: {
        fontSize: 15,
        color: Color.MainBlack,
        fontFamily: 'Roboto-Bold',
    },
    linesmall: {
        width: '100%',
        height: 1,
        backgroundColor: Color.MainGray2,
    },
});





export default StyleDetailHistory;