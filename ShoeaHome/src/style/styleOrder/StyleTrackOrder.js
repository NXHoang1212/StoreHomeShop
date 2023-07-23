import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";


const StyleTrackOrder = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    iconleft: {
        marginLeft: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Color.MainBlack,
        marginLeft: 10,
    },
    iconright: {
        marginLeft: 'auto',
        marginRight: 20,
    },
});



export default StyleTrackOrder;