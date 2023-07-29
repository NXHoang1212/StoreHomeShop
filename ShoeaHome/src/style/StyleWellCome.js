import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";

const StyleWellCome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackGround,
    },
    image: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        resizeMode: "stretch",
    },
});

export default StyleWellCome;