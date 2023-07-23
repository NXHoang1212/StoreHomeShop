import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";


const StylePromoCode = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
    },
    textheader: {
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 10,
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    iconseacrh: {
        marginLeft: 'auto',
        marginRight: 16,
    },
    viewbody: {
        marginTop: 25,
        marginHorizontal: 10,
    },
    viewitem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
        height: 78,
        backgroundColor: Color.MainWhite,
        borderRadius: 15,
        elevation: 5,
        alignSelf: 'center',
    },
    viewimage: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: Color.MainBlack,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
    },
    viewitemleft: {
        marginLeft: 10,
    },
    textcode: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    textname: {
        fontSize: 15,
        color: Color.MainGray,
        letterSpacing: 0.5,
        fontWeight: '600',
    },
    viewfooter: {
        marginTop: 'auto',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        height: 55,
        backgroundColor: Color.MainBlack,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    textbutton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    viewcheckbox: {
        marginLeft: 'auto',
        left: 5,
    },
});

export default StylePromoCode;