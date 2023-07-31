import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


const StyleTrackOrder = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
        marginTop: responsiveHeight(2),
    },
    iconleft: {
        // marginLeft: 20,
        marginLeft: responsiveHeight(2),
    },
    title: {
        // fontSize: 22,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: Color.MainBlack,
        left: responsiveHeight(1),
    },
    iconright: {
        marginLeft: 'auto',
        right: responsiveHeight(2),
    },
});



export default StyleTrackOrder;