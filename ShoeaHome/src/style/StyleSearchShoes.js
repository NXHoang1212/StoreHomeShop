import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";

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
        marginHorizontal: responsiveScreenWidth(5),
        marginTop: responsiveScreenHeight(3),
    },
    icon: {
        marginLeft: responsiveScreenWidth(3.5),
    },
    icontune: {
        textAlign: 'right',
        marginLeft: responsiveScreenWidth(18),
    },
    input: {
        // marginLeft: 10,
        left: responsiveScreenWidth(3),
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.8),
        width: responsiveScreenWidth(50),
    },
    viewrecentclearall: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 26,
        marginHorizontal: responsiveScreenWidth(7),
        // marginTop: 20,
        top: responsiveScreenHeight(2.5),
    },
    textrecent: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textclearall: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(1.9),
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
        marginHorizontal: responsiveScreenWidth(6.8),
        marginTop: responsiveScreenHeight(4),
    },
    viewrecentSearchItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 26,
        marginHorizontal: responsiveScreenWidth(6.9),
        marginTop: responsiveScreenHeight(2),
    },
    recentSearchItem: {
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.8),
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
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
        // marginTop: 15,
        marginTop: responsiveScreenHeight(1.9),
        left: responsiveScreenWidth(2.5),
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenosearch: {
        // width: 201,
        // height: 197,
        width: responsiveScreenWidth(55),
        height: responsiveScreenHeight(28),
        // marginRight: 25,
        marginRight: responsiveScreenWidth(8),
    },
    noResultText: {
        // fontSize: 20,
        fontSize: responsiveScreenFontSize(2.5),
        fontWeight: 'bold',
        color: Color.MainBlack,
        // marginTop: 20,
        // marginLeft: 15,
        marginTop: responsiveScreenHeight(2.5),
        marginLeft: responsiveScreenWidth(5),
    },
    noResul: {
        // width: 300,
        width: responsiveScreenWidth(75),
        textAlign: 'center',
        fontSize: 14,
        color: Color.MainBlack,
        marginTop: responsiveScreenHeight(0.5),
        fontWeight: '500',
        left: responsiveScreenWidth(2),
    },
});


export default StyleSearchShoes;