import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";

const StyleMostPopular = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
        // marginHorizontal: 20,
        // gap: 20,
        marginTop: responsiveScreenHeight(2),
        marginHorizontal: responsiveScreenWidth(3),
        gap: responsiveScreenWidth(3),
    },
    iconback: {
        color: Color.MainBlack,
    },
    headerText: {
        // fontSize: 18,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    iconsearch: {
        marginLeft: 'auto',
    },
    viewbody: {
        // marginTop: 20,
        // marginHorizontal: 20,
        marginTop: responsiveScreenHeight(2),
        alignSelf: 'center',
    },
    viewtab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 10,
        // gap: 15,
        // marginLeft: 10,
        marginBottom: responsiveScreenHeight(1.5),
        gap: responsiveScreenWidth(4),
        marginLeft: responsiveScreenWidth(3),
    },
    tabcontainer: {
        // width: 60,
        // height: 30,
        width: responsiveScreenWidth(15),
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    tabcontainerother: {
        // width: 79,
        // height: 30,
        width: responsiveScreenWidth(20),
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    tabcontainerother1: {
        // width: 110,
        // height: 30,
        width: responsiveScreenWidth(27.5),
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    texttab: {
        textAlign: 'center',
        // paddingVertical: 2,
        paddingVertical: responsiveScreenHeight(0.3),
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(1.8),
        fontWeight: '600',
        color: Color.MainBlack,
    },
    activeTab: {
        backgroundColor: Color.MainBlack,
    },
    activeText: {
        color: Color.MainWhite,
    },
    viewtabcontent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    texttabcontent: {
    },

});

export default StyleMostPopular;