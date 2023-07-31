import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveWidth, responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

const StyleSearchShoes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Color.MainBlack,
        borderRadius: 15,
        // marginHorizontal: 25,
        // marginTop: 30,
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(4),
    },
    icon: {
        marginLeft: responsiveWidth(3.5),
    },
    icontune: {
        textAlign: 'right',
        marginLeft: responsiveWidth(18),
    },
    input: {
        // marginLeft: 10,
        left: responsiveWidth(3),
        // fontSize: 16,
        fontSize: responsiveFontSize(1.8),
        width: responsiveWidth(50),
    },
    viewrecentclearall: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 26,
        marginHorizontal: responsiveWidth(7),
        // marginTop: 20,
        top: responsiveHeight(2.5),
    },
    textrecent: {
        // fontSize: 15,
        fontSize: responsiveFontSize(1.9),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textclearall: {
        // fontSize: 15,
        fontSize: responsiveFontSize(1.9),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    viewfound: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 26,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: Color.MainGray3,
        // marginHorizontal: 26,
        marginHorizontal: responsiveWidth(6.8),
        marginTop: responsiveHeight(4),
    },
    viewrecentSearchItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 26,
        marginHorizontal: responsiveWidth(6.9),
        marginTop: responsiveHeight(2),
    },
    recentSearchItem: {
        // fontSize: 16,
        fontSize: responsiveFontSize(1.8),
        fontWeight: '500',
        color: Color.MainGray,
    },
    viewdelete: {
        // width: 28,
        // height: 28,
        borderRadius: 12,
        borderColor: Color.MainGray,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    flatlist: {
    },
    recentSearchesContainer: {
        flex: 1,
    },
    searchResultContainer: {
        // width: '100%',
        // height: '100%',
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        // marginTop: 15,
        marginTop: responsiveHeight(1.9),
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenosearch: {
        // width: 201,
        // height: 197,
        width: responsiveWidth(55),
        height: responsiveHeight(28),
        // marginRight: 25,
        marginRight: responsiveWidth(8),
    },
    noResultText: {
        // fontSize: 20,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: Color.MainBlack,
        // marginTop: 20,
        // marginLeft: 15,
        marginTop: responsiveHeight(2.5),
        marginLeft: responsiveWidth(5),
    },
    noResul: {
        // width: 300,
        width: responsiveWidth(75),
        textAlign: 'center',
        fontSize: 14,
        color: Color.MainBlack,
        marginTop: responsiveHeight(0.5),
        fontWeight: '500',
        left: responsiveWidth(2),
    },
});


export default StyleSearchShoes;