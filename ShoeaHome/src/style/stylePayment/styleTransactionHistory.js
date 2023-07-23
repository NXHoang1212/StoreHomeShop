import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";

const StyleTransactionHistory = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WhiteLey,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
    },
    iconleft: {
        marginLeft: 15,
        top: 2,
    },
    textheader: {
        fontSize: 21,
        fontWeight: 'bold',
        color: Color.MainBlack,
        marginLeft: 13,
    },
    iconsearh: {
        marginLeft: 'auto',
        marginRight: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '93%',
        height: 40,
        backgroundColor: Color.MainGray3,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 15,
    },
    searchIcon: {
        marginLeft: 14,
    },
    searchInput: {
        width: '90%',
        height: '100%',
        fontSize: 13,
        letterSpacing: 0.25,
        left: 5,
    },
    viewlist: {
        marginTop: 20,
        marginHorizontal: 24,
        width: '90%',
        height: '100%',
    },
    viewitem: {
        flexDirection: 'column',
        gap: 10,
        marginBottom: 15,
        marginTop: 15,
    },
    viewproduct: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    viewimage: {
        width: 63,
        height: 60,
        backgroundColor: Color.MainGray3,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 65,
        height: 65,
    },
    viewtext: {
        flexDirection: 'column',
        width: '75%',
    },
    viewname: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 7,
    },
    textname: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    textprice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    viewtime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 2,
    },
    texttime: {
        fontSize: 13.5,
        fontWeight: '400',
        color: Color.MainBlack,
        letterSpacing: 0.25
    },
    viewicon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewiconup: {
        width: 21,
        height: 21,
        backgroundColor: Color.MainRed,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2,
        left: 8,
    },
    iconup: {

    },
});


export default StyleTransactionHistory;