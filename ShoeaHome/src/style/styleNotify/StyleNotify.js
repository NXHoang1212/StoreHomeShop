import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";


const StyleNotify = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    header: {
        marginTop: 25,
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBack: {
        marginLeft: 12,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    iconDots: {
        marginLeft: 'auto',
        marginRight: 15,
    },
    body: {
        width: '100%',
        height: '100%',
    },
    viewitem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 30,
        width: '95%',
        height: 70,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: Color.MainWhite,
        elevation: 2,
    },
    viewicon: {
        width: 48,
        height: 48,
        borderRadius: 25,
        backgroundColor: Color.MainBlack,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    iconaccount: {
        color: Color.MainWhite,
    },
    viewtext: {
        marginLeft: 10,
        flexDirection: 'column',
        gap: 2.5,
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textbody: {
        fontSize: 14,
        fontWeight: '500',
        width: 290,
        textAlign: 'left',
    },
    textday: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainBlack,
        marginLeft: 10,
        top: 18,
    },
    containerItem: {
        flexDirection: 'column',
        
    },
    rowBack: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        top: 55,
        width: '17%',
        height: 70,
        alignSelf: 'flex-end',
        borderRadius: 10,
        backgroundColor: Color.MainRed,
        elevation: 2,
    },
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 65,
        bottom: 15,
    },
    backTexticon: {
        color: Color.MainWhite,

    },
});


export default StyleNotify;