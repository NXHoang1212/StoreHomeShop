import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";


const styleShoeSDetail = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        width: '100%',
        height: 325,
        backgroundColor: Color.Gray,
    },
    iconback: {
        marginLeft: 15,
        marginTop: 25,
    },
    image: {
        width: 330,
        height: 175,
        alignSelf: 'center',
    },
    viewbody: {

    },
    namebody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 18,
        marginLeft: 15,
        marginRight: 15,
    },
    name: {
        fontSize: 23,
        fontWeight: '700',
        color: Color.MainBlack,
        fontFamily: 'Roboto-BlackItalic',
        fontStyle: 'italic',
    },
    iconheart: {

    },
    viewrating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        marginLeft: 12,
        marginRight: 15,
    },
    views: {
        fontSize: 14,
        color: Color.MainBlack,
        fontWeight: '500',
        width: 100,
        height: 28,
        backgroundColor: Color.Gray,
        borderRadius: 10,
        justifyContent: 'center',
    },
    textviews: {
        fontSize: 14,
        color: Color.MainBlack,
        fontWeight: '600',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    ratingreviews: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        gap: 5,
    },
    starIcon: {

    },
    rating: {
        fontSize: 15,
        color: Color.MainBlack,
        fontStyle: 'italic',
    },
    line: {
        width: 360,
        height: 1.5,
        backgroundColor: Color.MainGray3,
        marginTop: 18,
        alignSelf: 'center',
    },
    viewdescription: {
        marginTop: 18,
        marginLeft: 16,
    },
    titledescription: {
        fontSize: 18,
        color: Color.MainBlack,
        fontWeight: '600',
    },
    description: {
        fontSize: 15,
        color: Color.MainBlack,
        marginTop: 5,
        textAlign: 'justify',
        width: 362,
        lineHeight: 22,
    },
    viewmore: {
        fontSize: 15,
        color: Color.MainBlue,
        fontWeight: '600',
        marginLeft: 2,
        top: 5,
    },
    viewless: {
        fontSize: 15,
        top: 5,
        color: Color.MainRed,
        fontWeight: '600',
        marginLeft: 2,
    },
    viewsize: {
        marginTop: 5,
        marginLeft: 16,
        flexDirection: 'row',
    },
    titlesize: {
        fontSize: 18,
        color: Color.MainBlack,
        fontWeight: '600',
    },
    titlecolor: {
        fontSize: 18,
        color: Color.MainBlack,
        fontWeight: '600',
        marginLeft: 125,
    },
    viewitemrender: {
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
    },
    itemsize: {
        marginLeft: 15,
        flexDirection: 'row',
        gap: 10,
    },
    itemColor: {
        marginLeft: 30,
        flexDirection: 'row',
        gap: 5,
    },
    viewquantity: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
    },
    titlequantity: {
        fontSize: 18,
        color: Color.MainBlack,
        fontWeight: '600',
    },
    viewbuttonquantity: {
        flexDirection: 'row',
        marginLeft: 40,
        width: 100,
        height: 33,
        bottom: 2,
        backgroundColor: Color.MainGray3,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconminus: {
        marginLeft: 10,
    },
    quantity: {
        fontSize: 16,
        color: Color.MainBlack,
        fontWeight: '800',
    },
    iconplus: {
        marginRight: 10,
    },
    viewtotalpriceAddcart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 33,
        marginLeft: 15,
    },
    viewtotalprice: {
        marginTop: 1,
    },
    titleprice: {
        fontSize: 14,
        color: Color.MainGray,
        fontWeight: '600',
    },
    price: {
        fontSize: 20,
        color: Color.MainBlack,
        fontWeight: '800',
    },
    addtocart: {
        flexDirection: 'row',
        width: 240,
        height: 50,
        backgroundColor: Color.MainBlack,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginRight: 15,
        elevation: 5,
        gap: 15,
    },
    textaddcart: {
        fontSize: 18,
        color: Color.MainWhite,
        fontWeight: '700',
        marginRight: 10,
    },
});



export default styleShoeSDetail;