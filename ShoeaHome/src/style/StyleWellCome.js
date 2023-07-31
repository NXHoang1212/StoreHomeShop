import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveFontSize, responsiveScreenWidth, responsiveScreenHeight } from "react-native-responsive-dimensions";

const StyleWellCome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackGround,
    },
    image: {
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(89),
        resizeMode: "stretch",
    },
});

export default StyleWellCome;