import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";

const StyleEditProfile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    viewbody: {
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
        color: Color.Black,
    },
    textheader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        color: Color.MainBlack,
    },
    containerInput: {
        gap: 6,
        bottom: 8,
    },
    viewphone: {
        marginTop: 20,
        width: '88%',
        height: 55,
        backgroundColor: Color.BackGround,
        borderRadius: 17,
        
        alignSelf: 'center',
    },
    textphone: {
        fontSize: 15,
        color: Color.MainBlack,
        letterSpacing: 0.5,
        fontWeight: '600',
        height: 55,
    },
    viewinput: {
        marginTop: 20,
        marginLeft: 20,
        width: '90%',
        height: 60,
        backgroundColor: Color.BackGround,
        borderRadius: 14,
    },
    textname: {
        fontSize: 13,
        color: Color.MainRed,
        marginLeft: 18,
        marginTop: 5,
        letterSpacing: 0.5,
        fontWeight: '600',
    },
    textmail: {
        fontSize: 15,
        color: Color.MainBlack,
        marginLeft: 18,
        fontWeight: '500',
        marginTop: 8,
    },
    viewinfor: {
        flexDirection: 'row',
    },
    iconcalendar: {
        color: Color.MainBlack,
        marginLeft: 215,
        top: 7,
    },
    iconemail: {
        color: Color.MainBlack,
        top: 8,
        marginLeft: 'auto',
        marginRight: 15,
    },
    textinput: {
        fontSize: 15,
        color: Color.MainBlack,
        marginLeft: 14,
        fontWeight: '500',
        bottom: 4,
    },
    selectedDateText: {
        fontSize: 15,
        color: Color.MainBlack,
        marginLeft: 18,
        fontWeight: '500',
        marginVertical: 12,
    },
    button: {
        marginTop: 18,
        width: 300,
        height: 50,
        backgroundColor: Color.MainBlack,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 5,
    },
    textbutton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainWhite,
    },
    textclose: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    selectcontry: {
        width: 300,
        height: 50,
        backgroundColor: Color.BackGround,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 5,
    },
    placeholderStyle: {
        color: Color.MainBlack,
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 18,
    },
    selectedTextStyle: {
        color: Color.MainBlack,
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 18,
        letterSpacing: 0.5,
    },
    inputSearchStyle: {

    },
    iconStyle: {
        marginRight: 14,
        width: 25,
        height: 25,
        tintColor: Color.MainBlack,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: 300,
        height: 142,
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        marginBottom: 3,
        textAlign: 'center',
        color: Color.MainBlack,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
        width: 280,
        textAlign: 'center',
        color: Color.MainBlack,
        fontWeight: '500',
    },
    line: {
        width: '115%',
        height: 1,
        backgroundColor: Color.MainGray3,
        alignSelf: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        alignItems: 'center',
    },
    linebutton: {
        width: 1,
        height: 42,
        backgroundColor: Color.MainGray3,
        left: 10,
    },
    modalButtonTextBack: {
        color: Color.MainBlue,
        fontSize: 16,
        right: 15,
    },
    modalButtonTextSave: {
        color: Color.MainBlue,
        fontSize: 16,
        left: 25,
    },
});


export default StyleEditProfile;