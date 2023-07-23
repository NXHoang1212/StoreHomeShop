import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";


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
        width: '90%',
        height: 118,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.MainWhite,
        elevation: 5,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 25,
        gap: 15,
    },
    viewheader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 45,
    },
    viewimage: {
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    viewtext: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        gap: 8,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    text1: {
        fontSize: 16,
    },
    viewImageCartItem: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.MainGray3,
        borderRadius: 18,
        marginLeft: 13,
    },
    imageCartItem: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },
    viewTextCartItem: {
        flexDirection: 'column',
        gap: 5,
    },
    textCartItemname: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textCartItemqty: {
        fontSize: 13,
        color: Color.MainGray,
        fontWeight: '400',
        letterSpacing: 0.7,
    },
    textCartItemdelivery: {
        fontSize: 13,
        color: Color.MainBlack,
        fontWeight: '500',
        width: 79,
        height: 20,
        backgroundColor: Color.MainGray3,
        borderRadius: 5,
        textAlign: 'center',
        top: 5,
    },
    viewTextCartItemprice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
    },
    textCartItemprice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textCartItemtrack: {
        fontSize: 13,
        color: Color.MainWhite,
        fontWeight: '500',
        width: 90,
        height: 33,
        backgroundColor: Color.MainBlack,
        borderRadius: 18,
        textAlign: 'center',
        paddingTop: 7,
    },
});


export default StyleOrderActive;