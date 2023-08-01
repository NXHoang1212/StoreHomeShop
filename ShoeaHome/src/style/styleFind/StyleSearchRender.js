import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";

const StyleSearchRender = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        marginTop: responsiveScreenHeight(2),
    },
    headerbar: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconback: {
        marginLeft: responsiveScreenWidth(3),
    },
    title: {
        // fontSize: 19,
        fontSize: responsiveScreenFontSize(2.5),
        fontWeight: "bold",
        // marginLeft: 15,
        left: responsiveScreenWidth(3),
        color: Color.MainBlack,
    },
    iconsearch: {
        marginLeft: 'auto',
        // marginRight: 20,
        marginRight: responsiveScreenWidth(5),
    },
    viewrender: {
        // marginTop: 20,
        // marginLeft: 20,
        top: responsiveScreenHeight(3),
        // height: '100%',
        height: responsiveScreenHeight(100),
    },
});



export default StyleSearchRender;