import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


const StyleTrackOrder = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
        marginTop: responsiveScreenHeight(1.5),
    },
    iconleft: {
        // marginLeft: 20,
        marginLeft: responsiveScreenHeight(2),
    },
    title: {
        // fontSize: 22,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: 'bold',
        color: Color.MainBlack,
        left: responsiveScreenHeight(1),
    },
    iconright: {
        marginLeft: 'auto',
        right: responsiveScreenHeight(2),
    },
});



export default StyleTrackOrder;