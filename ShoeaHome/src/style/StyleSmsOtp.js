import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";


const StyleSmsOtp = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    viewbody: {
        marginTop: 10,
    },
    viewlogo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        gap: 10,
    },
    iconback: {
        color: Color.MainBlack,
    },
    textlogo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainBlack,
        bottom: 1,
    },
    viewotp: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 12,
    },
    viewtext: {
        marginTop: '45%',
        marginHorizontal: 20,
        alignSelf: 'center',
    },
    text: {
        fontSize: 16,
        color: Color.MainBlack,
        fontWeight: '500',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginHorizontal: 4,
        textAlign: 'center',
        fontSize: 18,
        top: 20,

    },
    viewsend: {
        marginTop: 70,
        marginHorizontal: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    viewverify: {
        marginTop: 20,
        marginHorizontal: 20,
        alignSelf: 'center',
        backgroundColor: Color.MainBlack,
        borderRadius: 35,
        width: 300,
        height: 50,
        justifyContent: 'center',
        elevation: 6,
    },
    textverify: {
        fontSize: 18,
        color: Color.MainWhite,
        fontWeight: '500',
        textAlign: 'center',
    },
    negative: {
        color: 'red',
    },
});

export default StyleSmsOtp;