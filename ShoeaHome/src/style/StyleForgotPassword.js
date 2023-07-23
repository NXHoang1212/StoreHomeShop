import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";


const StyleForgotPassword = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    viewbody: {

    },
    viewlogo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        gap: 10,
    },
    iconback: {
        color: Color.MainBlack,
    },
    textlogo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainBlack,
        bottom: 1,
    },
    viewimage: {

    },
    image: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginTop: 20,
    },
    textimage: {
        fontSize: 18,
        fontWeight: '400',
        color: Color.MainBlack,
        marginTop: 20,
        marginLeft: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.MainWhite,
        borderWidth: 1,
        borderColor: Color.MainGray,
        borderRadius: 28,
        marginHorizontal: 20,
        marginTop: 20,
        padding: 10,
        gap: 20,
        height: 90,
    },
    iconbutton: {
        color: Color.MainBlack,
    },
    viewicon:{
        backgroundColor: Color.White,
        borderRadius: 30,
        padding: 10,
    },
    viewbutton: {

    },
    textsms: {
        fontSize: 16,
        fontWeight: '400',
    },
    textbutton: {
        fontSize: 16,
        fontWeight: '800',
        color: Color.MainBlack,
    },
    Viewcontinue: {
        backgroundColor: Color.MainBlack,
        borderRadius: 28,
        marginHorizontal: 20,
        marginTop: 29,
        padding: 18,
        alignItems: 'center',
        elevation: 6,
    },
    textcontinue: {
        fontSize: 16,
        fontWeight: '800',
        color: Color.MainWhite,
    },
});

export default StyleForgotPassword;