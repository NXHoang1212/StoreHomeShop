import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveWidth, responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

const StyleReebook = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        marginTop: responsiveHeight(3),
        marginHorizontal: responsiveWidth(3),
    },
    headerbar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {

    },
    title: {
        // fontSize: 20,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: Color.MainBlack,
        left: responsiveWidth(3),
        letterSpacing: 0.25,
    },
    iconsearch: {
        marginLeft: 'auto',
        // right: 2,
        right: responsiveWidth(3),
    },
    viewFlashLit: {
        // marginTop: 20,
        marginTop: responsiveHeight(3),
        height: responsiveHeight(100),
    },
});


export default StyleReebook;