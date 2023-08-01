import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const StyleCustomService = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 10,
        // marginTop: 15,
        // marginBottom: 10,
        // left: 5,
        padding: responsiveScreenWidth(2),
        marginTop: responsiveScreenHeight(1),
        marginBottom: responsiveScreenHeight(1),
        left: responsiveScreenWidth(0.5),
    },
    textheader: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.5),
        fontWeight: '600',
        // marginLeft: 10,
        left: responsiveScreenWidth(2),
        color: Color.MainBlack,
    },
    viewbutton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // gap: 15,
        // marginHorizontal: 10,
        // flex: 1,
        gap: responsiveScreenWidth(3),
        marginHorizontal: responsiveScreenWidth(2),
        flex: 1,
    },
    inputToolbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.MainWhite,
        // height: 48,
        // marginHorizontal: 10,
        height: responsiveScreenHeight(6),
        marginHorizontal: responsiveScreenWidth(2),
        borderRadius: 15,
        elevation: 3,
        // bottom: 11,
        bottom: responsiveScreenHeight(1.3),
    },
    inputText: {
        flex: 1,
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.8),
        color: Color.MainBlack,
        // top: 3,
        top: responsiveScreenHeight(0.3),
    },
    sendButton: {
        // right: 10,
        // top: 3,
        right: responsiveScreenWidth(2),
        top: responsiveScreenHeight(0.5),
    },

});


export default StyleCustomService;