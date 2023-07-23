import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

const StyleOnboarding = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackGround,
    },
    image: {
        width: "100%",
        height: "70%",
    },
    textContainer: {
        width: "100%",
        height: "50%",
        backgroundColor: Color.MainWhite,
        bottom: 120,
    },
    text: {
        fontSize: 35,
        color: Color.MainBlack,
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 1,
        lineHeight: 40,
        top: 25,
        width: "90%",
        alignSelf: "center",
        fontFamily: "Roboto-Thin",
    },
    button: {
        width: 370,
        height: 60,
        shadowColor: Color.MainBlack,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 8,
        elevation: 6,
        backgroundColor: Color.MainBlack,
        borderRadius: 40,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        bottom: 25,

    },
    buttonText: {
        fontSize: 20,
        color: Color.MainWhite,
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 1,
        lineHeight: 40,
        fontFamily: "Roboto-Thin",
    },

});

export default StyleOnboarding;