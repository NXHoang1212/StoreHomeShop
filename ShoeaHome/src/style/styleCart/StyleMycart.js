import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";

const styleMyCart = StyleSheet.create({
    rootContainerStyle: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu nền mờ
    },
    header: {
        marginTop: 25,

    },
    headerbar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerbaricon: {
        width: 38,
        height: 38,
        marginLeft: 10,
    },
    headerbartext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    iconsearch: {
        marginLeft: 'auto',
        marginRight: 10,
        top: 2,
    },
    viewMycart: {

    },
    viewcheckout: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        bottom: 30,
        width: '100%',
        height: 120,
        marginVertical: 10,
        backgroundColor: Color.MainWhite,
        alignSelf: 'flex-start',
        alignContent: 'flex-start',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
    },
    viewcheckout1: {
        flexDirection: 'column',
        marginRight: 'auto',
        marginLeft: 20,
        marginTop: 24,
    },
    texttotal: {
        fontSize: 14,
    },
    textcheckout: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    viewcheckout2: {
        flexDirection: 'row',
        width: 190,
        height: 53,
        backgroundColor: Color.MainBlack,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30,
        marginTop: 18,
        gap: 5,
        elevation: 5,
    },
    textcheckout2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    viewcart: {

    },
    viewcartbody: {
        flexDirection: 'row',
    },
    viewcart1: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 20,
        marginLeft: 8,
        backgroundColor: Color.MainWhite,
        width: '95%',
        height: 125,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    viewcart1img: {
        width: 95,
        height: 90,
        backgroundColor: Color.MainGray3,
        borderRadius: 15,
        marginLeft: 10,
    },
    image: {
        width: 135,
        height: 110,
        right: 22,
        bottom: 20,
    },
    viewcart1text: {
        flexDirection: 'column',
        gap: 15,
        marginLeft: 2,
    },
    viewcart1text1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 250,
    },
    cart1text3: {
        fontSize: 13,
        right: 2,
        color: Color.MainGray,
        fontWeight: '500',
        bottom: 3,
    },
    cart1text1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainBlack,
        right: 2,
    },
    cart1text2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
        bottom: 5,
        right: 2,
    },
    Flashviewcart: {
        width: '100%',
        height: '100%',
    },
    viewicondelelte: {
        // left: 'auto',
        // marginLeft: 'auto',
        right: 15,
    },
    viewcartquantity: {
        top: 20,
    },
    viewcart2: {
        alignSelf: 'flex-end',
        right: 103,
        bottom: 18,
    },
    viewselectedItem: {
        alignSelf: 'flex-end',
        bottom: 12,
    },
    viewcart2text: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        height: 32,
        backgroundColor: Color.Gray,
        borderRadius: 15,
        gap: 12,
    },
    viewcart2bottomtext: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        height: 32,
        backgroundColor: Color.Gray,
        borderRadius: 15,
        gap: 12,
        right: '51%',
    },
    viewcart2text1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
        textAlign: 'center',
    },
    viewiconminus: {
        marginLeft: 5,
    },
    viewiconplus: {
        marginRight: 5,
    },
    bottomSheetBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '40%',
    },
    bottomSheetContainer: {
    },
    bottomSheetText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainBlack,
        textAlign: 'center',
    },
    line: {
        width: '80%',
        height: 1,
        backgroundColor: Color.MainGray,
        alignSelf: 'center',
        marginTop: 10,

    },
    viewbottomcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 20,
        alignSelf: 'center',
        marginBottom: 15,
        width: '93%',
        height: 125,
        backgroundColor: Color.MainWhite,
        borderRadius: 25,
        elevation: 6,
    },
    bottomSheetImage: {
        width: 100,
        height: 100,
        backgroundColor: Color.MainGray3,
        borderRadius: 15,
        marginLeft: 12,
    },
    viewbottomItem: {
        flexDirection: 'column',
        gap: 16,
        bottom: 8,
    },
    bottomSheetProduct: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
        marginTop: 12,
    },
    bottomSheetText1: {
        fontSize: 13,
        fontWeight: '500',
        color: Color.MainGray,
    },
    bottomSheetText2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    bottomSheetButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 50,
        top: 22,
    },
    bottomSheetButtonGray: {
        width: 160,
        height: 45,
        backgroundColor: Color.MainGray3,
        borderRadius: 25,
    },
    bottomSheetButtonWhite: {
        width: 160,
        height: 45,
        backgroundColor: Color.MainBlack,
        borderRadius: 20,
    },
    bottomSheetButtonTextGray: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
        marginTop: 8,
        textAlign: 'center',
        top: 3,
    },
    bottomSheetButtonTextWhite: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainWhite,
        marginTop: 8,
        textAlign: 'center',
        top: 3,
    },
    viewcontainernoorder: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    containernoroder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 55,
    },
    viewheader: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    viewimage: {

    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    viewtext: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    text2: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainGray,
        marginTop: 10,
    },
});


export default styleMyCart;