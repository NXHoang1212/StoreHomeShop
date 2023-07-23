import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

const StyleContactUs = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Color.BackGround,
    },
    viewbody: {
        marginTop: 40,
        marginHorizontal: 20,
    },
    viewitem: {
        gap: 25,
    },
    viewitem1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: Color.MainWhite,
        borderRadius: 13,
        height: 60,
    },
    textitem: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    icon: {
        marginLeft: 20,
    },
});


export default StyleContactUs;