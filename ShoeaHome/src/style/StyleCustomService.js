import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

const StyleCustomService = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 15,
        marginBottom: 10,
        left: 5,
    },
    textheader: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 10,
        color: Color.MainBlack,
    },
    viewbutton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 15,
        marginHorizontal: 10,
        flex: 1,
    },
    inputToolbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.MainWhite,
        height: 48,
        marginHorizontal: 10,
        borderRadius: 15,
        elevation: 3,
        bottom: 11,
    },
    inputText: {
        flex: 1,
        fontSize: 16,
        color: Color.MainBlack,
        top: 3,
    },
    sendButton: {
        right: 10,
        top: 3,
    },

});


export default StyleCustomService;