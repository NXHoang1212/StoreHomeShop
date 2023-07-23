import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";

const StyleAdidas = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        marginTop: 25,
        marginHorizontal: 15,
    },
    headerbar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainBlack,
        marginLeft: 12,
        letterSpacing: 0.25,
    },
    iconsearch: {
        marginLeft: 'auto',
        right: 2,
    },
    viewFlashLit: {
        marginTop: 20,
        width: '100%',
        height: '100%',
    },
});


export default StyleAdidas;