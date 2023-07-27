import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";


const StyleSpecialOffers = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        marginTop: 25,
        marginHorizontal: 15,
    },
    headerbar: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconback: {
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        color: Color.MainBlack,
    },
    iconsearch: {
        marginLeft: 'auto',
    },
    viewimage: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: 340,
        height: 148,
        borderRadius: 18,
        resizeMode: 'center',
    },
    viewimageitem: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 28,
        gap: 30,
    },
});

export default StyleSpecialOffers;