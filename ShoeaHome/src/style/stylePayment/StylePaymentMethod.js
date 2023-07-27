import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";


const StylePaymentMethod = StyleSheet.create({
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
        marginLeft: 10,
        marginTop: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: Color.MainBlack,
    },
    iconother: {
        marginLeft: 'auto',
        marginRight: 15,
    },
    textseclect: {
        fontSize: 15,
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 22,
        color: Color.MainGray,
    },
    viewpayment: {
        flex: 1,
        marginTop: 20,
    },
    viewpaymentlist: {
        alignItems: 'center',
        flexDirection: 'column',
        gap: 19,
    },
    listchoosepayment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        width: '90%',
        height: 60,
        backgroundColor: Color.MainWhite,
        elevation: 5,
        borderRadius: 13,
    },
    imagepaypal: {
        marginLeft: 20,
        width: 30,
        height: 30,
    },
    imagegoogle: {
        marginLeft: 20,
        width: 45,
        height: 45,
    },
    imagemastercard: {
        marginLeft: 20,
        width: 39,
        height: 30,
    },
    textpayment: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        color: Color.MainBlack,
    },
    viewconfirm: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    buttonconfirm: {
        backgroundColor: Color.MainBlack,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginHorizontal: 20,
        elevation: 5,
    },
    textconfirm: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 5, 10, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 38,
        width: '75%',
        height: 418,
    },
    viewiconorder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '18%',
        height: 50,
        backgroundColor: Color.MainBlack,
        borderRadius: 40,
        position: 'absolute',
        top: '14%',
        right: '40%',
    },
    imageorder: {
        width: 160,
        height: 160,
        marginTop: 20,
        alignSelf: 'center',
    },
    iconorder: {
        right: 3,
    },
    textorder: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainBlack,
        textAlign: 'center',
        marginTop: 20,
    },
    viewordercheckout: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
    },
    textmadorder: {
        fontSize: 15,
        fontWeight: '500',
        color: Color.MainGray,
    },
    viewbutoonorder: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 23,
        gap: 15,
    },
    buttonorder1: {
        backgroundColor: Color.MainBlack,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        width: 250,
        height: 50,
    },
    buttonorder2: {
        backgroundColor: Color.MainGray3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        width: 250,
        height: 50,
    },
    textbuttonorder1: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainWhite,
    },
    textbuttonorder2: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainBlack,
    },
    webViewContainer: {
        flex: 1,
    },
});



export default StylePaymentMethod;