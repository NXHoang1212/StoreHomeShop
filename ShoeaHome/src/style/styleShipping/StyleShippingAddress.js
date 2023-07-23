import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";


const StyleShippingAddress = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    header: {
        marginTop: 25,
    },
    headerbar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {
        marginLeft: 15,
        marginTop: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: Color.MainBlack,
    },
    viewapply: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 'auto',
        height: 95,
        backgroundColor: Color.MainWhite,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 1,
        borderColor: Color.Black,
    },
    apply: {
        width: 320,
        height: 50,
        backgroundColor: Color.MainBlack,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    textapply: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    viewaddress: {
        marginTop: 20,
        marginBottom: 10,
    },
    viewitemaddress: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: '96%',
        height: 80,
        backgroundColor: Color.MainWhite,
        borderRadius: 15,
        elevation: 5,
        alignSelf: 'center',
        marginBottom: 20,
    },
    viewimage: {
        width: 50,
        height: 50,
        backgroundColor: Color.MainGray3,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    backgroundimage: {
        position: 'absolute',
        width: 30,
        height: 30,
        borderRadius: 25,
        backgroundColor: Color.MainWhite,
    },
    imageaddress: {
        width: 35,
        height: 35,
    },
    viewitem: {
        marginLeft: 10,
        flexDirection: 'column',
        gap: 5,
    },
    textname: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textaddress: {
        fontSize: 14,
        color: Color.MainGray2,
        fontWeight: 'bold',
        width: 260,
    },
    viewdefault: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    textdefault: {
        fontSize: 13.2,
        color: Color.MainBlack,
        fontWeight: '600',
        width: 60,
        height: 20,
        backgroundColor: Color.MainGray3,
        borderRadius: 5,
        textAlign: 'center',
    },
    viewcheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    checkbox: {
        right: 10,
    },
    viewadd: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    add: {
        width: 320,
        height: 50,
        backgroundColor: Color.MainGray3,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textadd: {
        fontSize: 17,
        fontWeight: '600',
        color: Color.MainBlack,
    },
});



export default StyleShippingAddress;