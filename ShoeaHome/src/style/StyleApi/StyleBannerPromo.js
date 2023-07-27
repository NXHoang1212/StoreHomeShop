import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";


const styleBannerPromo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainBlack,
        marginLeft: 10,
    },
    iconsearch: {
        marginLeft: 'auto',
        marginRight: 15,
    },
    

});



export default styleBannerPromo;