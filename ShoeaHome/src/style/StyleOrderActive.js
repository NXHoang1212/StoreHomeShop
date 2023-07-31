import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


const StyleOrderActive = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    containerItem: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    containerCartItem: {
        // width: '90%',
        // height: 118,
        width: responsiveScreenWidth(90),
        height: responsiveHeight(16.5),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.MainWhite,
        elevation: 5,
        borderRadius: 15,
        alignSelf: 'center',
        // marginTop: 25,
        // gap: 15,
        marginTop: responsiveHeight(3),
        gap: responsiveHeight(2),
    },
    image: {
        // width: 200,
        // height: 200,
        width: responsiveHeight(25),
        height: responsiveHeight(25),
        resizeMode: 'contain',
    },
    viewtext: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20,
        // gap: 8,
        marginTop: responsiveHeight(2),
        gap: responsiveHeight(1),
    },
    text: {
        // fontSize: 20,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    text1: {
        // fontSize: 16,
        fontSize: responsiveFontSize(2),
    },
    viewImageCartItem: {
        // width: 100,
        // height: 100,
        width: responsiveHeight(13),
        height: responsiveHeight(12),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.MainGray3,
        borderRadius: 18,
        marginLeft: responsiveHeight(1.8),
    },
    imageCartItem: {
        // width: 90,
        // height: 90,
        width: responsiveHeight(10),
        height: responsiveHeight(10),
        resizeMode: 'contain',
    },
    viewTextCartItem: {
        flexDirection: 'column',
        // gap: 5,
        gap: responsiveHeight(0.7),
    },
    textCartItemname: {
        // fontSize: 16,
        fontSize: responsiveFontSize(1.9),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textCartItemqty: {
        // fontSize: 13,
        fontSize: responsiveFontSize(1.5),
        color: Color.MainGray,
        fontWeight: '400',
        letterSpacing: 0.7,
    },
    textCartItemdelivery: {
        // fontSize: 13,
        fontSize: responsiveFontSize(1.5),
        color: Color.MainBlack,
        fontWeight: '500',
        // width: 79,
        // height: 20,
        width: responsiveHeight(10),
        height: responsiveHeight(2.5),
        backgroundColor: Color.MainGray3,
        borderRadius: 5,
        textAlign: 'center',
        top: responsiveHeight(0.5),
    },
    viewTextCartItemprice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: 200,
        width: responsiveHeight(28.5),
    },
    textCartItemprice: {
        // fontSize: 16,
        fontSize: responsiveFontSize(1.9),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textCartItemtrack: {
        // fontSize: 13,
        fontSize: responsiveFontSize(1.5),
        color: Color.MainWhite,
        fontWeight: '500',
        // width: 90,
        // height: 33,
        width: responsiveHeight(11),
        height: responsiveHeight(4),
        backgroundColor: Color.MainBlack,
        borderRadius: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});


export default StyleOrderActive;