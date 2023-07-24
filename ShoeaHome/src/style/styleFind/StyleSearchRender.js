import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";

const StyleSearchRender = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        marginTop: 25,
    },
    headerbar: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconback: {
        marginLeft: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: "bold",
        marginLeft: 15,
        color: Color.MainBlack,
    },
    iconsearch: {
        marginLeft: 'auto',
        marginRight: 20,
    },
    viewrender: {
        marginTop: 20,
        marginLeft: 20,
        width: '90%',
        height: '100%',
    },
});



export default StyleSearchRender;