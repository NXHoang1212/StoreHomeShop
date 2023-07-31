import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveWidth, responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

const StyleSearchRender = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        marginTop: responsiveHeight(3),
    },
    headerbar: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconback: {
        marginLeft: responsiveWidth(3),
    },
    title: {
        // fontSize: 19,
        fontSize: responsiveFontSize(2.5),
        fontWeight: "bold",
        // marginLeft: 15,
        left: responsiveWidth(3),
        color: Color.MainBlack,
    },
    iconsearch: {
        marginLeft: 'auto',
        // marginRight: 20,
        marginRight: responsiveWidth(5),
    },
    viewrender: {
        // marginTop: 20,
        // marginLeft: 20,
        top: responsiveHeight(3),
        // height: '100%',
        height: responsiveHeight(100),
    },
});



export default StyleSearchRender;