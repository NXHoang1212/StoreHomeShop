import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";


const StyleWallet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        marginTop: 25,
    },
    headerbar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {
        marginLeft: 10,
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 10,
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    iconsearch: {
        marginLeft: 'auto',
        marginRight: 15,
    },
    iconother: {
        marginRight: 10,
    },
    viewcard: {
        width: 350,
        height: 180,
        alignSelf: 'center',
        backgroundColor: '#202020',
        marginTop: 28,
        borderRadius: 25,
        elevation: 5,
    },
    viewcard1: {
        flexDirection: 'column',
        marginTop: 20,
        marginHorizontal: 20,
        top: 5,
    },
    textcard1: {
        fontSize: 17,
        color: Color.MainWhite,
        letterSpacing: 0.25,
        fontWeight: 'bold',
    },
    viewcard2: {
        flexDirection: 'row',
    },
    imagecard: {
        width: 63,
        height: 23,
        marginLeft: 35,
    },
    imagecardmaster: {
        width: 65,
        height: 29,
        resizeMode: 'contain',
    },
    viewcard3: {
        flexDirection: 'column',
        marginTop: 15,
        marginHorizontal: 20,
        gap: 10,
    },
    textcard3: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Color.MainWhite,
        letterSpacing: 0.25,
    },
    textcardprice: {
        fontSize: 29,
        fontWeight: 'bold',
        color: Color.MainWhite,
        letterSpacing: 0.25,
    },
    viewcard4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewcard5: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 105,
        height: 35,
        backgroundColor: Color.MainWhite,
        borderRadius: 20,
        justifyContent: 'space-evenly',
        right: 5,
    },
    textcardadd: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    viewhistory: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        justifyContent: 'space-between',
        marginHorizontal: 24,
    },
    history: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    iconhistory: {

    },
    texticon: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    viewlist: {
        marginTop: 20,
        marginHorizontal: 24,
        width: '90%',
        height: '100%',
    },
    viewitem: {
        flexDirection: 'column',
        gap: 10,
        marginBottom: 15,
    },
    viewproduct: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    viewimage: {
        width: 63,
        height: 60,
        backgroundColor: Color.MainGray3,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 65,
        height: 65,
    },
    viewtext: {
        flexDirection: 'column',
        width: '75%',
    },
    viewname: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 7,
    },
    textname: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    textprice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    viewtime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 2,
    },
    texttime: {
        fontSize: 13.5,
        fontWeight: '400',
        color: Color.MainBlack,
        letterSpacing: 0.25
    },
    viewicon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewiconup: {
        width: 21,
        height: 21,
        backgroundColor: Color.MainRed,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2,
        left: 8,
    },
    iconup: {

    },

});


export default StyleWallet;