import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { useContext } from "react";
import ThemeContext from "../../config/context/ThemContext";

const StyleFaQ = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackGround,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    viewcontainer: {
        height: '100%',
    },
    viewtabcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        right: 10,
    },
    viewtab: {
        flexDirection: 'row',
        marginTop: 29,
    },
    tabcontainer: {
        width: 80,
        height: 35,
        borderWidth: 2,
        borderRadius: 15,
        bottom: 19,
        marginLeft: 20,
        justifyContent: 'center',
    },
    activeTab: {
        backgroundColor: Color.MainBlack,
    },
    tabcontainerother: {
        width: 72,
        height: 35,
        borderWidth: 2,
        borderRadius: 15,
        bottom: 19,
        marginLeft: 20,
        justifyContent: 'center',
    },
    tabcontainerother1: {
        width: 110,
        height: 29,
        borderWidth: 2,
        borderRadius: 15,
        bottom: 19,
        marginLeft: 20,
        justifyContent: 'center',
    },
    texttab: {
        fontSize: 15,
        fontWeight: '700',
        color: Color.MainBlack,
        textAlign: 'center',
    },
    activeText: {
        color: Color.MainWhite,
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
    },
    viewtabcontent: {
        height: 485,
        marginHorizontal: 15,
        marginTop: 15,
    },
    tabContent: {
        fontSize: 15,
        fontWeight: '700',
        color: Color.MainBlack,
    },
    viewsearch: {
        width: 350,
        height: 50,
        backgroundColor: Color.MainGray3,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 15,
    },
    viewsearch1: {
        flexDirection: 'row',
        marginHorizontal: 20,
        gap: 5,
        alignItems: 'center',
        top: 2,
    },
    inputsearch: {
        fontSize: 16,
        fontWeight: '700',
        color: Color.MainBlack,
        width: 300,
    },
    iconoption: {
        marginLeft: 'auto',
        color: Color.MainBlack,
    },
    viewtitelsearch: {
        width: 350,
        height: 100,
        backgroundColor: Color.MainWhite,
    },
    viewtitelsearch1: {

    },
    notificationHeader: {
        marginTop: 15,
        width: 350,
        backgroundColor: Color.MainWhite,
        borderRadius: 15,
    },
    viewFlast: {
        flexDirection: 'row',
        marginLeft: 20,
        top: 10,
        gap: 5,
        height: 65,
    },
    notificationTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: Color.MainBlack,
        top: 10,
        width: 290,
    },
    message: {
        marginLeft: 20,
        fontSize: 15,
        color: Color.MainBlack,
        bottom: 10,
        marginTop: 15,
        width: 312,
        textAlign: 'justify',
        fontWeight: '500',
    },
    iconoption: {
        marginLeft: 'auto',
        color: Color.MainBlack,
    },
    iconflast: {
        color: Color.MainBlack,
        marginLeft: 'auto',
        right: 10,
        top: 8,
    },
    line: {
        width: 310,
        height: 1.5,
        backgroundColor: Color.MainGray3,
        alignSelf: 'center',
        bottom: 5,
        marginTop: 8,
    },
    line2: {
        width: 320,
        height: 1,
        backgroundColor: Color.MainGray2,
        bottom: 5,
        top: 8,
        left: 9,
    },
    viewsearch3: {
        width: 350,
        backgroundColor: Color.MainWhite,
        borderRadius: 15,
        position: 'absolute',
        top: '21%',
        elevation: 5,
        left: 20,
    },
    viewsearch2: {
        flexDirection: 'column',
        gap: 10,
    },
    textsearch: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainBlack,
        marginLeft: 10,
        marginTop: 15,
        textAlign: 'justify',
        width: 330,
    },

});

export default StyleFaQ;