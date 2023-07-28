import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const StyleOnboarding = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackGround,
    },
    image: {
        width: responsiveWidth(100),
        height: responsiveHeight(70),
    },
    textContainer: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        backgroundColor: Color.MainWhite,
        bottom: responsiveHeight(15),
    },
    text: {
        // fontSize: 35,
        fontSize: responsiveFontSize(5),
        color: Color.MainBlack,
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 1,
        lineHeight: 40,
        top: 25,
        width: responsiveWidth(83),
        alignSelf: "center",
        fontFamily: "Roboto-Thin",
    },
    button: {
        width: responsiveWidth(90),
        height: responsiveHeight(8),
        shadowColor: Color.MainBlack,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 8,
        elevation: 6,
        backgroundColor: Color.MainBlack,
        borderRadius: 40,
        alignSelf: "center",
        justifyContent: "center",
        bottom: responsiveHeight(2),
    },
    buttonText: {
        fontSize: responsiveFontSize(2.5),
        color: Color.MainWhite,
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 1,
        fontFamily: "Roboto-Thin",
    },

});

export default StyleOnboarding;