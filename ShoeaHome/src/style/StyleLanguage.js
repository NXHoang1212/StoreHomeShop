import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

const StyleLanguage = StyleSheet.create({
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
    viewlanguage: {
        marginTop: 15,
        marginLeft: 25,
        gap: 10,
    },
    textlanguage: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    viewflashlit: {
        width: '100%',
        height: '100%',
    },
    viewoption: {
        marginTop: 10,
        gap: 10,
    },
    viewoptionflashlit: {
        marginTop: 10,
        gap: 10,
        // width: '100%',
        height: '100%',
    },
    textlanguageoption: {
        fontSize: 16,
        color: Color.MainBlack,
        letterSpacing: 0.5,
        fontWeight: '500',
    },
    line: {
        width: 350,
        height: 1,
        backgroundColor: Color.MainGray3,
        marginTop: 10,
    },
    viewcheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkedCheckbox: {
        borderColor: Color.MainWhite,
        color: Color.MainBlack,
    },
    uncheckedCheckbox: {
        backgroundColor: Color.MainWhite,
        borderColor: Color.MainWhite,
        color: Color.MainBlack,
    },
});

export default StyleLanguage;