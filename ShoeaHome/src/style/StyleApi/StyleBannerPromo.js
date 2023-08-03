import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";


const styleBannerPromo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
        // marginLeft: 10,
        // marginBottom: 10,
        marginTop: responsiveScreenHeight(1),
        marginLeft: responsiveScreenWidth(3),
        marginBottom: responsiveScreenHeight(3),
    },
    title: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.5),
        fontWeight: 'bold',
        color: Color.MainBlack,
        // marginLeft: 10,
        left: responsiveScreenWidth(3),
    },
    iconsearch: {
        marginLeft: 'auto',
        right: responsiveScreenWidth(6),
    },
    viewflashlit: {
        left: responsiveScreenWidth(2.8),
    },

});



export default styleBannerPromo;