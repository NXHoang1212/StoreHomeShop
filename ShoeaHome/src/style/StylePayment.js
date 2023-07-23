import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

const StylePayment = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    body: {
        backgroundColor: Color.MainWhite,
        marginTop: 30,
        gap: 20,
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleheader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {
        marginLeft: 8,
        top: 1,
        color: Color.MainBlack,
    },
    textheader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 14,
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    viewPaymentIcon: {
        marginLeft: 'auto',
        marginRight: 20,
    },
    viewPaymentmethod: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        gap: 30,
    },
    choosepayment: {
        flexDirection: 'row',
        width: 350,
        height: 60,
        backgroundColor: Color.BackGround,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 2,
    },
    choosepaymentgg: {
        flexDirection: 'row',
        width: 350,
        height: 50,
        backgroundColor: Color.MainGray3,
        borderRadius: 10,
        alignItems: 'center',
    },
    imagepayment: {
        width: 28,
        height: 28,
        marginLeft: 20,
        top: 1,
    },
    imagemaster: {
        width: 48,
        height: 28,
        marginLeft: 10,
        top: 2,
        resizeMode: 'contain',
    },
    textpayment: {
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 14,
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    textmaster: {
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 6,
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    buttonconnect: {
        marginLeft: 'auto',
        marginRight: 15,
    },
    textconnect: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    buttonadd: {
        width: 350,
        height: 60,
        backgroundColor: Color.MainBlack,
        borderRadius: 29,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 220,
        elevation: 6,
    },
    textadd: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainWhite,
        letterSpacing: 0.25,
    },
});


export default StylePayment;