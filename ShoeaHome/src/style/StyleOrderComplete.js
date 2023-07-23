import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";


const StyleOrderComplete = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainBlack,
    },
    viewheader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 45,
    },
    viewimage: {
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    viewtext: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        gap: 8,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    text1: {
        fontSize: 16,
    },
});


export default StyleOrderComplete;