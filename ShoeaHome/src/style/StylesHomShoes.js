import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StyleHomShoes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
        width: windowWidth,
        height: windowHeight,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        marginHorizontal: 10,
    },
    headerboder: {
        marginTop: 5,
        marginLeft: 12,
    },
    headerTitle: {
        marginLeft: 8,
    },
    headerTitleText: {
        fontSize: 15,
        fontWeight: '500',
        color: Color.MainGray2,
        letterSpacing: 0.5,
    },
    headertext: {
        fontSize: 19,
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    viewicon: {
        flexDirection: 'row',
        // marginLeft: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        left: windowWidth / 15,
        gap: 8,
    },
    notificationCount: {
        width: 18,
        height: 18,
        borderRadius: 15,
        backgroundColor: Color.MainRed,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 5,
        left: 19,
    },
    notificationCountText: {
        color: Color.MainWhite,
    },
    headerinput: {
        flexDirection: 'row',
        backgroundColor: Color.BackGround,
        height: 50,
        width: 350,
        borderRadius: 15,
        marginTop: 30,
        alignSelf: 'center',
    },
    textinput: {
        fontSize: 15,
        fontWeight: '500',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        marginLeft: 8,
        marginTop: 0,
        width: 300,
    },
    viewtextheader: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        marginHorizontal: 25,
    },
    textheader: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    viewimage: {
        marginTop: 20,
        marginVertical: 16,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 55,
        paddingHorizontal: 25,
    },
    image: {
        width: 340,
        height: 148,
        borderRadius: 18,
        alignSelf: 'center',
        borderColor: 'red',
        borderWidth: 2,
        resizeMode: 'center',
    },
    viewcontainercatogory: {
        flexDirection: 'column',
        alignSelf: 'center',
        gap: 35,
    },
    viewcategorty1: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 17,
        gap: 20,
    },
    viewcategorty2: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 17,
        gap: 20,
    },
    categoryimage: {
        backgroundColor: Color.White,
        height: 60,
        width: 60,
        borderRadius: 35,
        marginTop: 5,
        marginLeft: 12,
    },
    imagecategory: {
        width: 40,
        height: 40,
        marginTop: 10,
        marginLeft: 10,
    },
    imagecategorybalance: {
        width: 40,
        height: 20,
        marginTop: 20,
        marginLeft: 10,
    },
    imagecategoryconverse: {
        width: 40,
        height: 20,
        marginTop: 20,
        marginLeft: 10,
    },
    textcategory: {
        fontSize: 15,
        fontWeight: '700',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        marginLeft: 12,
        marginTop: 18,
        width: 80,
    },
    textcategorywidth: {
        fontSize: 15,
        fontWeight: '700',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        marginLeft: 5,
        marginTop: 18,
        width: 80,
    },
    textcategoryreebok: {
        fontSize: 15,
        fontWeight: '700',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        marginLeft: 2,
        marginTop: 21,
        width: 80,
    },
    textcategorybalance: {
        fontSize: 15,
        fontWeight: '700',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        marginLeft: 2,
        marginTop: 30,
        width: 80,
    },
    textcategoryconverse: {
        fontSize: 15,
        fontWeight: '700',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        marginTop: 30,
        marginLeft: -2,
        width: 80,
    },
    viewtabcontainer: {
        flexDirection: 'row',
    },
    viewtab: {
        flexDirection: 'row',
        marginTop: 29,
    },
    tabcontainer: {
        width: 58,
        height: 29,
        borderWidth: 2,
        borderRadius: 15,
        bottom: 19,
        marginLeft: 20,
        justifyContent: 'center',
    },
    activeTab: {
        backgroundColor: "black",
    },
    tabcontainerother: {
        width: 72,
        height: 29,
        borderWidth: 2,
        borderRadius: 15,
        bottom: 19,
        marginLeft: 20,
        justifyContent: 'center',
    },
    tabcontainerother1: {
        width: 110,
        height: 29,
        borderWidth: 2,
        borderRadius: 15,
        bottom: 19,
        marginLeft: 20,
        justifyContent: 'center',
    },
    texttab: {
        fontSize: 15,
        fontWeight: '700',
        color: Color.MainBlack,
        textAlign: 'center',
    },
    activeText: {
        color: Color.MainWhite,
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
    },
    viewitemtab: {

    },
    viewtabcontent: {
        marginHorizontal: 20,
        // height: 11500,
        height: '100%',
        backgroundColor: Color.MainWhite,
    },
    viewflash: {
        flex: 1,
        justifyContent: 'space-between',
        // marginHorizontal: 20,
        //  marginHorizontal: 10,
        alignItems: 'center',
        marginBottom: 20,
        gap: 10,
    },
    viewbackground: {
        flexDirection: 'row',
        // backgroundColor: Color.Gray,
        width: 160,
        height: 150,
        borderRadius: 28,
        justifyContent: 'center',
        // elevation: 3,
    },
    viewitemimage: {
        marginLeft: 25,
    },
    imageItem: {
        width: 135,
        height: 135,
        top: 15,
    },
    viewiconheart: {
        backgroundColor: Color.MainBlack,
        height: 28,
        width: 28,
        borderRadius: 35,
        marginTop: 20,
        right: 35,
    },
    iconheart: {
        marginTop: 4,
        marginLeft: 4,
    },
    tabContent: {
        fontSize: 15,
        fontWeight: '700',
        color: Color.MainBlack,
    },
    //style for tabcontent
    viewtabcontent1: {
    },
    viewtabcontent2: {
    },
    imageproduct: {

    },
    viewitemcontainer: {

    },
    listitemcontainer: {

    },
    viewitemflash: {

    },
    textname: {
        color: Color.MainBlack,
        fontSize: 16,
        fontWeight: 'bold',
        width: 145,
        letterSpacing: 0.25,
        left: 8,
        top: 5,
    },
    texprice: {
        color: Color.MainBlack,
        fontSize: 15,
        fontWeight: 'bold',
        width: 145,
        letterSpacing: 0.25,
    },
    ratingContainer: {
        flexDirection: 'row',
        gap: 10,
        right: 2,
    },
    viewrating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    starIcon: {
        color: Color.Black,
    },
    ratingText: {
        color: Color.MainBlack,
        fontSize: 15,
        fontWeight: '500',
    },
    viewline: {
        width: 2,
        height: 15,
        backgroundColor: Color.MainGray,
        marginTop: 5,
    },
    viewsold: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        width: 80,
        height: 22,
        backgroundColor: Color.MainGray3,
        borderRadius: 6,
        top: 2,
    },
    viewCountText: {
        color: Color.MainBlack,
        fontSize: 11,
        fontWeight: '500',
    },
    imageAvatar: {
        width: 55,
        height: 55,
        borderRadius: 45,
    },
    favoriteCount: {
        width: 18,
        height: 18,
        borderRadius: 15,
        backgroundColor: Color.MainRed,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 5,
        left: 20,
    },
    favoriteCountText: {
        color: Color.MainWhite,
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default StyleHomShoes;