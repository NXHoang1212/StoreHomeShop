import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";

const StyleNotification = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    body: {
        backgroundColor: Color.MainWhite,
        marginTop: 30,
        gap: 20,
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconback: {
        marginLeft: 8,
        top: 1,
        color: Color.MainBlack,
    },
    textheader: {
        fontSize: 19,
        fontWeight: '500',
        marginLeft: 14,
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    viewcontent: {
        marginTop: 15,
        gap: 16,
    },
    viewbody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    viewtext: {

    },
    textbody: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainBlack,
        letterSpacing: 0.25,
    },
    viewswitch: {
    },
    switch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    },
    switchContainer: {
        width: 40,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#DFDFDF',
        justifyContent: 'center',
        paddingHorizontal: 2,
    },
    switchContainerActive: {
        backgroundColor: '#393939',
    },
    thumb: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    thumbActive: {
        marginLeft: 'auto',
    },
});


export default StyleNotification;