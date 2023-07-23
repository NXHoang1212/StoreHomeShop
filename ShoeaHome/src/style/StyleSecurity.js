import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

const StyleSecurity = StyleSheet.create({
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
    viewSecurity: {
        marginTop: 35,
        gap: 30,
    },
    viewSecurityItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textpin: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        textAlign: 'center',
    },
    textSecurity: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 20,
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    CustomSwitch: {
        flexDirection: 'row',
        marginLeft: 'auto',
        right: 20,
    },
    custombutton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '92%',
    },
    iconright: {
        color: Color.MainBlack,
    },
    viewchange: {
        marginTop: 30,
        alignItems: 'center',
        width: 295,
        height: 50,
        borderRadius: 28,
        backgroundColor: Color.MainGray3,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    textchange: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
});

export default StyleSecurity;