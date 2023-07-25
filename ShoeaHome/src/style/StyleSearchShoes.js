import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";

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
        marginHorizontal: 25,
        marginTop: 30,
    },
    icon: {
        marginLeft: 10,
    },
    icontune: {
        textAlign: 'right',
        marginLeft: 55,
    },
    input: {
        marginLeft: 10,
        fontSize: 16,
        width: 200,
    },
    viewrecentclearall: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 26,
        marginTop: 20,
    },
    textrecent: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    textclearall: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    viewfound: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 26,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: Color.MainGray3,
        marginHorizontal: 26,
        marginTop: 22,
    },
    viewrecentSearchItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 26,
        marginTop: 20,
    },
    recentSearchItem: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.MainGray,
    },
    viewdelete: {
        width: 28,
        height: 28,
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
        width: '100%',
        height: '100%',
        marginTop: 15,
    },
    productImage: {
        width: 150,
        height: 150,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenosearch: {
        width: 201,
        height: 197,
        marginRight: 25,
    },
    noResultText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.MainBlack,
        marginTop: 20,
        marginLeft: 15,
    },
    noResul: {
        width: 300,
        textAlign: 'center',
        fontSize: 14,
        color: Color.MainBlack,
        marginTop: 5,
        fontWeight: '500',

    },
});


export default StyleSearchShoes;