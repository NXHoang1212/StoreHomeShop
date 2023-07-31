import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveWidth, responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

const StyleSpecialOffers = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        marginTop: responsiveHeight(2),
        marginHorizontal: responsiveWidth(4),
        marginBottom: responsiveHeight(2),
    },
    headerbar: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconback: {
    },
    title: {
        // fontSize: 18,
        fontSize: responsiveFontSize(2.5),
        fontWeight: "bold",
        left: responsiveWidth(3),
        color: Color.MainBlack,
    },
    iconsearch: {
        marginLeft: 'auto',
    },
    viewimage: {
        // width: '100%',
        // height: '100%',
    },
    image: {
        // width: 340,
        // height: 148,
        width: responsiveWidth(87),
        height: responsiveHeight(20),
        borderRadius: 18,
        resizeMode: 'center',
        alignSelf: 'center',
        left: responsiveWidth(1),
    },
    viewimageitem: {
        flexDirection: 'column',
        marginTop: responsiveHeight(2),
        gap: responsiveHeight(4),
    },
});

export default StyleSpecialOffers;