import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";


const StyleNewsPassWord = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    viewbody: {
        marginTop: 10,
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
    image: {
        width: 380,
        height: 298,
        alignSelf: 'center',
        marginTop: 50,
    },
    viewpassword: {
        marginTop: '10%',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainBlack,
        marginBottom: 25,
    },
    viewinput1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 17,
        width: '100%',
        height: 50,
        borderRadius: 18,
        backgroundColor: Color.White,
    },
    viewinput2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
        height: 50,
        borderRadius: 18,
        backgroundColor: Color.White,
    },
    icon: {
        color: Color.MainBlack,
        marginHorizontal: 10,
    },
    viewiconpassword: {
        right: 10,
        justifyContent: 'flex-end',
        position: 'absolute',
    },
    iconpassword: {
        color: Color.MainBlack,
    },
    input: {
        fontSize: 15,
        fontWeight: '500',
    },
    button: {
        width: '100%',
        height: 55,
        borderRadius: 38,
        backgroundColor: Color.MainBlack,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 6,
    },
    textbutton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    textcheckbox: {
        color: Color.MainBlack,
        fontSize: 16,
        fontWeight: 'bold',
    },
    checkbox: {
        borderWidth: 0,
        alignSelf: 'center',
        marginRight: 10,
    },
});

export default StyleNewsPassWord;