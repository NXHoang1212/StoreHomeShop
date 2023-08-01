import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const StyleInviteFriends = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    body: {
        backgroundColor: Color.MainWhite,
        // marginTop: 30,
        // gap: 20,
        marginTop: responsiveScreenHeight(2),
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {
        // marginLeft: 8,
        // top: 1,
        marginLeft: responsiveScreenWidth(2),
        color: Color.MainBlack,
    },
    textheader: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: 'bold',
        // marginLeft: 14,
        left: responsiveScreenWidth(2),
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    viewbody: {
        // marginTop: 20,
        // paddingHorizontal: 20,
        // width: '100%',
        // height: '100%',
        marginTop: responsiveScreenHeight(1),
        height: responsiveScreenHeight(100),
        marginHorizontal: responsiveScreenWidth(7),
    },
    viewitem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewtitle: {
        flexDirection: 'column',
        // marginTop: 10,
        // paddingVertical: 18,
        // width: 200,
        top: responsiveScreenHeight(2),
        width: responsiveScreenWidth(50),
        paddingVertical: responsiveScreenHeight(2),
    },
    texttitle: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textmessage: {
        // fontSize: 14,
        fontSize: responsiveScreenFontSize(1.8),
        color: Color.MainGray,
        fontWeight: '500',
    },
    viewbutton: {
        // backgroundColor: Color.MainBlack,
        borderRadius: 12,
        // paddingHorizontal: 15,
        // paddingVertical: 7,
        width: responsiveScreenWidth(14.8),
        height: responsiveScreenHeight(3),
        // top: 3,
        alignItems: 'center',
        justifyContent: 'center',
        top: responsiveScreenHeight(1.5),
    },
    textbutton: {
        // fontSize: 14,
        fontSize: responsiveScreenFontSize(1.6),
        fontWeight: 'bold',
        color: Color.MainWhite,
        textAlign: 'center',
    },
    viewimage: {
        // top: 5,
        top: responsiveScreenHeight(2.1),
    },
    image: {
        // width: 50,
        // height: 50,
        width: responsiveScreenWidth(11.8),
        height: responsiveScreenHeight(5.5),
        borderRadius: 50,
    },
});

export default StyleInviteFriends;