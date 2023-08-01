import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const StyleContactUs = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Color.BackGround,
    },
    viewbody: {
        // marginTop: 40,
        // marginHorizontal: 20,
        marginTop: responsiveScreenHeight(2),
        marginHorizontal: responsiveScreenWidth(5),
    },
    viewitem: {
        // gap: 25,
        gap: responsiveScreenWidth(6),
    },
    viewitem1: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingVertical: 10,
        backgroundColor: Color.MainWhite,
        borderRadius: 13,
        // height: 60,
        height: responsiveScreenHeight(6),
        width: responsiveScreenWidth(90),
    },
    textitem: {
        // marginLeft: 20,
        left: responsiveScreenWidth(5),
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    icon: {
        // marginLeft: 20,
        marginLeft: responsiveScreenWidth(5),
    },
});


export default StyleContactUs;