import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";


const StyleChooseShipping = StyleSheet.create({
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
        letterSpacing: 0.25,
    },
    viewapply: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
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
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainWhite,
        letterSpacing: 0.25,
    },
    body: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    viewshipping: {
        marginBottom: 20,
    },
    viewbackgorund: {
        width: '100%',
        height: 72,
        backgroundColor: Color.MainWhite,
        borderRadius: 15,
        elevation: 5,
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignSelf: 'center',
    },
    viewshippingitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textshipping1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,

    },
    textshipping2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    viewicon: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: Color.MainBlack,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewlistname: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        left: 5,
    },
    viewcheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 10,
    },
    checkbox: {
        borderWidth: 0,
        padding: 0,
        margin: 0,
    },
});


export default StyleChooseShipping;