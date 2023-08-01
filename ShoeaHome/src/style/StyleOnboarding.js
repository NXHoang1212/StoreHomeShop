import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const StyleOnboarding = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackGround,
    },
    image: {
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(63),
    },
    textContainer: {
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
        backgroundColor: Color.MainWhite,
        bottom: responsiveScreenHeight(15),
    },
    text: {
        // fontSize: 35,
        fontSize: responsiveScreenFontSize(3.5),
        color: Color.MainBlack,
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 1,
        // top: 25,
        top: responsiveScreenHeight(2),
        width: responsiveScreenWidth(80),
        alignSelf: "center",
        fontFamily: "Roboto-Thin",
    },
    button: {
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(6.5),
        shadowColor: Color.MainBlack,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 8,
        elevation: 6,
        backgroundColor: Color.MainBlack,
        borderRadius: 40,
        alignSelf: "center",
        justifyContent: "center",
        bottom: responsiveScreenHeight(1),
        right: responsiveScreenWidth(1),
    },
    buttonText: {
        fontSize: responsiveScreenFontSize(2.3),
        color: Color.MainWhite,
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 1,
        fontFamily: "Roboto-Thin",
    },

});

export default StyleOnboarding;