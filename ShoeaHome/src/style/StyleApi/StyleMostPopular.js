import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveWidth, responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

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
        marginTop: responsiveHeight(3),
        marginHorizontal: responsiveWidth(3),
        gap: responsiveWidth(3),
    },
    iconback: {
        color: Color.MainBlack,
    },
    headerText: {
        // fontSize: 18,
        fontSize: responsiveFontSize(2.3),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    iconsearch: {
        marginLeft: 'auto',
    },
    viewbody: {
        // marginTop: 20,
        // marginHorizontal: 20,
        marginTop: responsiveHeight(3),
        alignSelf: 'center',
    },
    viewtab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 10,
        // gap: 15,
        // marginLeft: 10,
        marginBottom: responsiveHeight(1.5),
        gap: responsiveWidth(4),
        marginLeft: responsiveWidth(3),
    },
    tabcontainer: {
        // width: 60,
        // height: 30,
        width: responsiveWidth(15),
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    tabcontainerother: {
        // width: 79,
        // height: 30,
        width: responsiveWidth(20),
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    tabcontainerother1: {
        // width: 110,
        // height: 30,
        width: responsiveWidth(27.5),
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    texttab: {
        textAlign: 'center',
        // paddingVertical: 2,
        paddingVertical: responsiveHeight(0.3),
        // fontSize: 15,
        fontSize: responsiveFontSize(1.8),
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