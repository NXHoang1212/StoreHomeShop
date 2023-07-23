import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

const StyleHomeOption = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    iconback: {
        marginLeft: 15,
        marginTop: 20,
    },
    logo: {
        width: 220,
        height: 220,
        marginTop: 20,
        alignSelf: 'center',
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20,
        color: Color.MainBlack,
    },
    viewbody1: {
        flexDirection: 'column',
    },
    viewbody2: {
        flexDirection: 'column',
        marginTop: 10,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: Color.MainWhite,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Color.MainGray3,
        width: 350,
        height: 55,
        alignSelf: 'center',
        marginTop: 20,
    },
    logo1: {
        width: 23,
        height: 23,
        marginTop: 16,
        marginLeft: 50,
    },
    textbutton: {
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'center',
        color: Color.MainBlack,
        marginLeft: 10,
    },
    line: {
        width: 150,
        height: 1,
        backgroundColor: Color.MainGray,
        alignSelf: 'center',
        marginTop: 20,
    },
    textline: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Color.MainBlack,
        marginTop: 10,
    },
    buttonpassword: {
        backgroundColor: Color.MainBlack,
        borderRadius: 20,
        width: 350,
        height: 58,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        elevation: 6,
    },
    textbuttonpassword: {
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'center',
        color: Color.MainWhite,
        marginLeft: 10,
    },
    viewaccount: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 25,
    },
    viewsmallaccount: {
    },
    textaccount: {
        fontSize: 17,
        fontWeight: '500',
        alignSelf: 'center',
        color: Color.MainGray2,
    },
    textsignup: {
        fontSize: 17,
        fontWeight: '500',
        alignSelf: 'center',
        color: Color.MainBlack,
        marginLeft: 8,
    },
});

export default StyleHomeOption;