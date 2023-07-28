import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

const StyleHomeOption = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    iconback: {
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(3),
    },
    logo: {
        width: responsiveScreenWidth(70),
        height: responsiveHeight(33),
        marginTop: responsiveHeight(2),
        alignSelf: 'center',
    },
    text: {
        // fontSize: 35,
        fontSize: responsiveFontSize(5),
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: responsiveHeight(3),
        color: Color.MainBlack,
    },
    viewbody1: {
        flexDirection: 'column',
    },
    viewbody2: {
        flexDirection: 'column',
        marginTop: responsiveHeight(1),
    },
    button: {
        flexDirection: 'row',
        backgroundColor: Color.MainWhite,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Color.MainGray3,
        width: responsiveWidth(90),
        height: responsiveHeight(6),
        alignSelf: 'center',
        marginTop: responsiveHeight(2),
    },
    logo1: {
        width: responsiveWidth(7),
        height: responsiveHeight(3.5),
        // marginTop: 16,
        // // marginLeft: 50,
        // marginLeft: 35,
        alignSelf: 'center',
        marginLeft: responsiveWidth(15),
    },
    textbutton: {
        // fontSize: 20,
        fontSize: 17,
        fontWeight: '500',
        alignSelf: 'center',
        color: Color.MainBlack,
        marginLeft: 10,
    },
    line: {
        width: 150,
        height: 1,
        backgroundColor: Color.MainGray,
        alignSelf: 'center',
        marginTop: 20,
    },
    textline: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Color.MainBlack,
        marginTop: 10,
    },
    buttonpassword: {
        backgroundColor: Color.MainBlack,
        borderRadius: 20,
        width: 350,
        height: 58,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        elevation: 6,
    },
    textbuttonpassword: {
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'center',
        color: Color.MainWhite,
        marginLeft: 10,
    },
    viewaccount: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 25,
    },
    viewsmallaccount: {
    },
    textaccount: {
        fontSize: 17,
        fontWeight: '500',
        alignSelf: 'center',
        color: Color.MainGray2,
    },
    textsignup: {
        fontSize: 17,
        fontWeight: '500',
        alignSelf: 'center',
        color: Color.MainBlack,
        marginLeft: 8,
    },
});

export default StyleHomeOption;