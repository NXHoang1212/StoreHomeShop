import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

const styleModalOptionSearch = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        top: 50,
        height: '100%',
        padding: 20,
    },
    viewbar: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: Color.MainBlack,
        textAlign: 'center',
    },
    line: {
        height: 1,
        backgroundColor: '#ccc',
        marginTop: 10,
        width: 330,
        alignSelf: 'center',
    },
    line2:{
        height: 1,
        backgroundColor: '#ccc',
        width: 330,
        alignSelf: 'center',
        bottom: 15,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    viewcategory: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 15,
        height: 50,
    },
    viewcategoryitem: {
        width: 58,
        height: 29,
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        marginLeft: 10,
    },
    activeTab: {
        color: Color.MainBlack,
    },
    viewcategoryitem1: {
        width: 68,
        height: 29,
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        marginLeft: 10,
    },
    viewcategoryitem2: {
        width: 105,
        height: 29,
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        marginLeft: 8,
    },
    viewstar: {
        width: 70,
        height: 30,
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        flexDirection: 'row',
        gap: 5,
    },
    textcategory: {
        marginTop: 19,
        marginBottom: 5,
        color: Color.MainBlack,
        fontWeight: '600',
        fontSize: 17,
        marginLeft: 10,
    },
    textsortby:{
        marginTop: 35,
        marginBottom: 5,
        color: Color.MainBlack,
        fontWeight: '600',
        fontSize: 17,
        marginLeft: 12,
    },
    textcategoryitem: {
        color: Color.MainBlack,
        fontWeight: '600',
        textAlign: 'center',
    },
    textstar:{
        color: Color.MainBlack,
        fontWeight: '600',
        textAlign: 'center',
    },
    viewgender: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 15,
    },
    viewfilter: {
        flex: 10,
        flexDirection: 'column',
        marginTop: 20,
        bottom: 50,
    },
    slider1: {
        width: 300,
        height: 40,
        alignSelf: 'center',
        marginTop: 10,
    },
    sliderContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    slider: {
        width: '100%',
    },
    sliderText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    viewprice:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
    },
    textprice: {
        fontSize: 16,
        fontWeight: 'bold',
        width: 65,
        height: 30,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Color.MainGray,
        color: Color.MainBlack,
        paddingTop: 4,
    },
    Icon:{
        bottom: 14,
        color: Color.Black,
    },
    Iconstar:{
        color: Color.MainBlack,
    },
    viewrating: {
        bottom: 30,
    },
    containercheckout:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 15,
    },
    viewcheckout:{
        width: 150,
        height: 50,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.MainGray3,
    },
    viewcheckout2:{
        width: 150,
        height: 50,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.MainBlack,
    },
    textcheckout:{
        color: Color.MainBlack,
        fontWeight: '500',
        fontSize: 16,
    },
    textcheckout2:{
        color: Color.MainWhite,
        fontWeight: '500',
        fontSize: 16,
    },
});

export default styleModalOptionSearch;