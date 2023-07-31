import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveWidth, responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";


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
        marginTop: responsiveHeight(2),
        marginLeft: responsiveWidth(4),
        marginBottom: responsiveHeight(3),
    },
    title: {
        // fontSize: 20,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: Color.MainBlack,
        // marginLeft: 10,
        left: responsiveWidth(3),
    },
    iconsearch: {
        marginLeft: 'auto',
        right: responsiveWidth(5),
    },


});



export default styleBannerPromo;