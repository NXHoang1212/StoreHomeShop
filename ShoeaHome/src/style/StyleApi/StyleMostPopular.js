import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";

const StyleMostPopular = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        gap: 20,
    },
    iconback: {
        color: Color.MainBlack,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    iconsearch: {
        marginLeft: 'auto',
    },
    viewbody: {
        marginTop: 20,
        marginHorizontal: 20,
        width: '100%',
        alignSelf: 'center',
    },
    viewtab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        gap: 15,
        marginLeft: 10,
    },
    tabcontainer: {
        width: 60,
        height: 30,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    tabcontainerother: {
        width: 79,
        height: 30,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    tabcontainerother1: {
        width: 110,
        height: 30,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    texttab: {
        textAlign: 'center',
        paddingVertical: 2,
        fontSize: 15,
        fontWeight: '600',
        color: Color.MainBlack,
    },
    activeTab: {
        backgroundColor: Color.MainBlack,
    },
    activeText: {
        color: Color.MainWhite,
    },
    viewtabcontent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    texttabcontent: {
    },

});

export default StyleMostPopular;