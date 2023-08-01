import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";

const StyleNike = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        // marginTop: 25,
        marginTop: responsiveScreenHeight(2),
        marginHorizontal: responsiveScreenWidth(3),
    },
    headerbar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {

    },
    title: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.5),
        fontWeight: 'bold',
        color: Color.MainBlack,
        // marginLeft: 12,
        left: responsiveScreenWidth(3),
        letterSpacing: 0.25,
    },
    iconsearch: {
        marginLeft: 'auto',
        right: responsiveScreenWidth(3),
    },
    viewFlashLit: {
        // marginTop: 20,
        marginTop: responsiveScreenHeight(3),
        height: responsiveScreenHeight(100),
    },

});


export default StyleNike;