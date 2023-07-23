import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

const StyleWellCome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackGround,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
    },
});

export default StyleWellCome;