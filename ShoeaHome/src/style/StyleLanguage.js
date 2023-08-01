import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const StyleLanguage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    body: {
        backgroundColor: Color.MainWhite,
        // marginTop: 30,
        // gap: 20,
        marginTop: responsiveScreenHeight(1.5),
        gap: responsiveScreenHeight(1),
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {
        // marginLeft: 8,
        // top: 1,
        marginLeft: responsiveScreenWidth(2),
        top: responsiveScreenHeight(0.1),
        color: Color.MainBlack,
    },
    textheader: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.2),
        fontWeight: 'bold',
        // marginLeft: 14,
        left: responsiveScreenWidth(3),
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    viewlanguage: {
        // marginTop: 15,
        // marginLeft: 25,
        // gap: 10,
        marginTop: responsiveScreenHeight(1.5),
        marginLeft: responsiveScreenWidth(6),
        gap: responsiveScreenHeight(1),
    },
    textlanguage: {
        // fontSize: 18,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    viewflashlit: {
        // width: '100%',
        // height: '100%',
        height: responsiveScreenHeight(100),
    },
    viewoption: {
        // marginTop: 10,
        // gap: 10,
        marginTop: responsiveScreenHeight(1),
        gap: responsiveScreenHeight(0.5),
    },
    viewoptionflashlit: {
        // marginTop: 10,
        // gap: 10,
        marginTop: responsiveScreenHeight(1),
        gap: responsiveScreenHeight(0.5),
        // width: '100%',
        // height: '100%',
        height: responsiveScreenHeight(100),
    },
    textlanguageoption: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
        color: Color.MainBlack,
        letterSpacing: 0.5,
        fontWeight: '500',
    },
    line: {
        // width: 350,
        width: responsiveScreenWidth(90),
        height: 1,
        backgroundColor: Color.MainGray3,
        // marginTop: 10,
        marginTop: responsiveScreenHeight(1),
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