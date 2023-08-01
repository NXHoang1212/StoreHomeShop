import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const StyleNotification = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    body: {
        backgroundColor: Color.MainWhite,
        // marginTop: 30,
        // gap: 20,
        marginTop: responsiveScreenHeight(1.5),
        gap: responsiveScreenHeight(2),
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {
        // marginLeft: 8,
        // top: 1,
        marginLeft: responsiveScreenWidth(2),
        top: responsiveScreenHeight(0.2),
        color: Color.MainBlack,
    },
    textheader: {
        // fontSize: 19,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: '500',
        // marginLeft: 14,
        left: responsiveScreenWidth(3),
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    viewcontent: {
        // marginTop: 15,
        // gap: 16,
        marginTop: responsiveScreenHeight(2),
        gap: responsiveScreenHeight(2),
    },
    viewbody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 20,
        // paddingVertical: 10,
        marginVertical: responsiveScreenHeight(1),
        marginHorizontal: responsiveScreenWidth(4),
    },
    textbody: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: '500',
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    viewswitch: {
    },
    switch: {
        // transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        transform: [{ scaleX: responsiveScreenWidth(0.05) }, { scaleY: responsiveScreenHeight(0.05) }],
    },
    switchContainer: {
        // width: 40,
        // height: 20,
        width: responsiveScreenWidth(10),
        height: responsiveScreenHeight(2.5),
        borderRadius: 10,
        backgroundColor: '#DFDFDF',
        justifyContent: 'center',
        // paddingHorizontal: 2,
        paddingHorizontal: responsiveScreenWidth(0.5),
    },
    switchContainerActive: {
        backgroundColor: '#393939',
    },
    thumb: {
        // width: 16,
        // height: 16,
        width: responsiveScreenWidth(4),
        height: responsiveScreenHeight(2),
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    thumbActive: {
        marginLeft: 'auto',
    },
});


export default StyleNotification;