import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { useWindowDimensions, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const widthScreen = width;
const heightScreen = height;

const StyleAccount = StyleSheet.create({
    container: {
        backgroundColor: Color.MainWhite,
        flex: 1,
        gap: 15,
    },
    header: {
        backgroundColor: Color.MainWhite,
    },
    headerContent: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        gap: 3,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 10,
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    viewicon: {
        alignItems: 'flex-end',
        bottom: 28,
        right: 20,
    },
    viewiconlanguge: {
        alignItems: 'flex-end',
        bottom: 28,
        right: 20,
        flexDirection: 'row',
    },
    iconname: {
        color: Color.MainBlack,
    },
    viewimage: {
        alignItems: 'center',
        bottom: 5,
        right: 5,
    },
    viewbuttonimage: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 14,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 65,
        marginLeft: 22,
    },
    iconimage: {
        color: Color.MainBlack,
        marginTop: 90,
        right: 32,
    },
    imagelogo: {
        width: 32,
        height: 32,
    },
    textuser: {
        fontSize: 23,
        fontWeight: '600',
        marginTop: 6,
        color: Color.MainBlack,
        letterSpacing: 0.5,
        marginLeft: 10,
    },
    texphone: {
        color: Color.MainBlack,
        fontSize: 15,
        fontWeight: '500',
        marginTop: 4,
        marginLeft: 10,
    },
    line: {
        height: 1,
        backgroundColor: Color.MainGray3,
        width: 350,
        alignSelf: 'center',

    },
    viewlistitem: {
        backgroundColor: Color.MainWhite,
        height: 500,
        marginBottom: 20,
    },
    listItem: {
        marginTop: 12,
        marginHorizontal: 22,
        flexDirection: 'column',
    },
    item: {
        flexDirection: 'row',
        height: 43,
    },
    itemlast: {
        flexDirection: 'row',
        height: 43,
        bottom: 5,
    },
    viewlist: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        width: 120,
    },
    icon: {
        color: Color.MainBlack,
    },
    iconlog: {
        color: Color.MainRed,
    },
    iconright: {
        color: Color.MainBlack,
        left: 256,
        bottom: 2,
    },
    iconrightlanguage: {
        color: Color.MainBlack,
        left: 256,
        marginTop: 3,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainBlack,
    },
    textselectedLanguage: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainBlack,
        marginLeft: 108,
        width: 95,
        marginTop: 5,
    },
    itemdark: {
        flexDirection: 'row',
        height: 43,
    },
    viewicondark: {
        bottom: 25,
        marginLeft: 'auto',
        position: 'relative',
        width: 38,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    },
    viewmodal: {
        backgroundColor: Color.MainWhite,
        width: widthScreen / 1.5,
        height: heightScreen / 2.8,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '70%',
        elevation: 6,
        gap: 20,
    },
    texttitle: {
        fontSize: 17,
        fontWeight: '600',
        color: Color.MainBlack,
        letterSpacing: 0.25,
        bottom: 10,
    },
    viewmodalcontainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    texttitlelogout: {
        fontSize: 19,
        fontWeight: '600',
        color: Color.MainRed,
        letterSpacing: 0.25,
    },
    textchoose: {
        fontSize: 18,
        fontWeight: '700',
        color: Color.MainBlack,
    },
    viewbutton: {
        flexDirection: 'row',
        gap: 28,
        marginTop: 10,
    },
    viewcancel: {
        width: 135,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.MainGray3,
        elevation: 5,
    },
    textcancel: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainBlack,
    },
    viewlogout: {
        width: 135,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.MainBlack,
        elevation: 5,
    },
    textlogout: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainWhite,
    },
});

export default StyleAccount;