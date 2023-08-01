import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";


const StyleChooseShipping = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    header: {
        // marginTop: 25,
        marginTop: responsiveScreenHeight(2),
    },
    headerbar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {
        // marginLeft: 15,
        // marginTop: 2,
        marginLeft: responsiveScreenWidth(2),
        marginTop: responsiveScreenHeight(0.5),
    },
    title: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.5),
        fontWeight: 'bold',
        // marginLeft: 10,
        left: responsiveScreenWidth(3),
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    viewapply: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginBottom: 20,
        marginBottom: responsiveScreenHeight(2),
    },
    apply: {
        // width: 320,
        // height: 50,
        width: responsiveScreenWidth(80),
        height: responsiveScreenHeight(6),
        backgroundColor: Color.MainBlack,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    textapply: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.4),
        fontWeight: 'bold',
        color: Color.MainWhite,
        letterSpacing: 0.25,
    },
    body: {
        // marginTop: 30,
        // marginHorizontal: 20,
        marginTop: responsiveScreenHeight(3),
        marginHorizontal: responsiveScreenWidth(5),
    },
    viewshipping: {
        // marginBottom: 20,
        marginBottom: responsiveScreenHeight(2),
    },
    viewbackgorund: {
        // width: '100%',
        // height: 72,
        width: responsiveScreenWidth(92),
        height: responsiveScreenHeight(8),
        backgroundColor: Color.MainWhite,
        borderRadius: 15,
        elevation: 5,
        justifyContent: 'center',
        // paddingHorizontal: 10,
        paddingHorizontal: responsiveScreenWidth(2.8),
        alignSelf: 'center',
    },
    viewshippingitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textshipping1: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textshipping2: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: 'bold',
        color: Color.MainBlack,
        left: responsiveScreenWidth(3),
    },
    viewicon: {
        // width: 45,
        // height: 45,
        width: responsiveScreenWidth(11),
        height: responsiveScreenHeight(5),
        borderRadius: 25,
        backgroundColor: Color.MainBlack,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewlistname: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        // left: 5,
    },
    viewcheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        left: responsiveScreenWidth(3),
    },
    checkbox: {
        borderWidth: 0,
    },
});


export default StyleChooseShipping;