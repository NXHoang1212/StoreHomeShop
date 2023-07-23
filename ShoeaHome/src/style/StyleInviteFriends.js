import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

const StyleInviteFriends = StyleSheet.create({
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
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 14,
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    viewbody: {
        marginTop: 20,
        paddingHorizontal: 20,
        width: '100%',
        height: '100%',
    },
    viewitem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewtitle: {
        flexDirection: 'column',
        marginTop: 10,
        paddingVertical: 18,
        width: 200,
    },
    texttitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textmessage: {
        fontSize: 14,
        color: Color.MainGray,
        fontWeight: '500',
    },
    viewbutton: {
        // backgroundColor: Color.MainBlack,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 7,
        top: 3,
    },
    textbutton: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    viewimage: {
        top: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
});

export default StyleInviteFriends;