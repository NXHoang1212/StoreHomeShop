import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";

const StyleAddNewress = StyleSheet.create({
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
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        color: Color.MainBlack,
    },
    viewiconother: {
        marginLeft: 150,
    },
    viewlocation: {
        width: 250,
        height: 45,
        padding: 10,
        backgroundColor: Color.MainBlack,
        borderRadius: 20,
        elevation: 5,
        alignSelf: 'center',
        marginTop: 5,
    },
    textlocation: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainWhite,
        textAlign: 'center',
    },
    viewbody: {
        width: '100%',
        height: '100%',
        backgroundColor: Color.MainWhite,
        bottom: 40,
        borderTopLeftRadius: 38,
        borderTopRightRadius: 38,
    },
    lineShort: {
        width: 50,
        height: 4,
        backgroundColor: Color.MainGray3,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,
    },
    lineShort2: {
        width: 350,
        height: 1,
        backgroundColor: Color.MainGray3,
        alignSelf: 'center',
        marginTop: 15,
    },
    titlebody: {
        alignSelf: 'center',
        marginTop: 15,
        justifyContent: 'center',
    },
    texttitlebody: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    viewinput: {
        marginLeft: 20,
        marginTop: 20,
    },
    textinput: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    viewinput2: {
        width: 360,
        height: 40,
        backgroundColor: Color.BackGround,
        borderRadius: 12,
        marginTop: 10,
    },
    viewinput3: {
        width: 360,
        height: 40,
        backgroundColor: Color.BackGround,
        borderRadius: 12,
        marginTop: 10,
        flexDirection: 'row',
    },
    textinputview: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.25,
        marginLeft: 10,
    },
    textinputview2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.25,
        marginLeft: 10,
        width: '90%',
        top: 1,
    },
    textShowinputview: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.25,
        marginLeft: 10,
        width: '90%',
    },
    iconaddress: {
        marginTop: 8,
        justifyContent: 'flex-end',
        right: 10,
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        marginTop: 15,
    },
    textcheckbox: {
        fontSize: 15,
        color: Color.Black,
        letterSpacing: 0.25,
    },
});

export default StyleAddNewress;