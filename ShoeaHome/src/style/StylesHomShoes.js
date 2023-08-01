import { StyleSheet } from "react-native";
import { Color } from "../../config/Color";
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";


const StyleHomShoes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveScreenHeight(1),
        // marginHorizontal: 10,
        marginHorizontal: responsiveScreenWidth(2),
    },
    headerboder: {
        marginTop: responsiveScreenHeight(1),
        marginLeft: responsiveScreenWidth(3),
    },
    headerTitle: {
        marginLeft: responsiveScreenWidth(2),
        flexDirection: 'column',
    },
    headerTitleText: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '500',
        color: Color.MainGray2,
        letterSpacing: 0.5,
        marginTop: responsiveScreenHeight(0.5),
    },
    headertext: {
        // fontSize: 19,
        fontSize: responsiveScreenFontSize(2.3),
        fontWeight: 'bold',
        color: Color.MainBlack,
        letterSpacing: 0.5,
    },
    viewicon: {
        flexDirection: 'row',
        // marginLeft: 80,
        marginLeft: responsiveScreenWidth(17),
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: responsiveScreenWidth(2),
    },
    notificationCount: {
        width: responsiveScreenWidth(4.6),
        height: responsiveScreenHeight(2.1),
        borderRadius: 15,
        backgroundColor: Color.MainRed,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: responsiveScreenHeight(0.5),
        left: responsiveScreenWidth(5),
    },
    notificationCountText: {
        color: Color.MainWhite,
        fontWeight: 'bold',
    },
    headerinput: {
        flexDirection: 'row',
        backgroundColor: Color.BackGround,
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(5.5),
        borderRadius: 15,
        marginTop: responsiveScreenHeight(2.5),
        alignSelf: 'center',
    },
    textinput: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '500',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        marginLeft: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(0.5),
        width: responsiveScreenWidth(75),
    },
    viewtextheader: {
        flexDirection: 'row',
        marginTop: responsiveScreenHeight(3),
        justifyContent: 'space-between',
        marginHorizontal: responsiveScreenWidth(6),
    },
    viewtitlecategory: {
        flexDirection: 'row',
        marginTop: responsiveScreenHeight(3),
        justifyContent: 'space-between',
        right: responsiveScreenWidth(2),
    },
    textheader: {
        // fontSize: 17,
        fontSize: responsiveScreenFontSize(2.1),
        fontWeight: 'bold',
        color: Color.MainBlack,
    },
    viewimage: {
        marginTop: responsiveScreenHeight(2.5),
        marginVertical: responsiveScreenHeight(1.5),
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: responsiveScreenWidth(11),
        paddingHorizontal: responsiveScreenWidth(5),
    },
    image: {
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(17),
        borderRadius: 18,
        alignSelf: 'center',
        borderColor: 'red',
        borderWidth: 2,
        resizeMode: 'center',
    },
    viewcontainercatogory: {
        flexDirection: 'column',
        alignSelf: 'center',
        gap: responsiveScreenHeight(5),
    },
    viewcategorty1: {
        flexDirection: 'row',
        marginTop: responsiveScreenHeight(1),
        gap: responsiveScreenWidth(8),
        left: responsiveScreenWidth(0.5),
    },
    viewcategorty2: {
        flexDirection: 'row',
        marginTop: responsiveScreenHeight(1),
        gap: responsiveScreenWidth(8),
        left: responsiveScreenWidth(0.5),
    },
    categoryimage: {
        backgroundColor: Color.White,
        // height: 60,
        // width: 60,
        width: responsiveScreenWidth(15),
        height: responsiveScreenHeight(6.8),
        borderRadius: 35,
    },
    imagecategory: {
        // width: 40,
        // height: 40,
        width: responsiveScreenWidth(8),
        height: responsiveScreenHeight(4),
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2.1)
    },
    imagecategorybalance: {
        width: responsiveScreenWidth(10.8),
        height: responsiveScreenHeight(2.8),
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2.1),
        right: responsiveScreenWidth(0.5),
    },
    imagecategoryconverse: {
        width: responsiveScreenWidth(7),
        height: responsiveScreenHeight(2.8),
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2.1),
    },
    textcategory: {
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '700',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        // marginLeft: 12,
        // marginTop: 18,
        // width: 80,
        marginLeft: responsiveScreenWidth(2),
        marginTop: responsiveScreenHeight(2.3),
    },
    textcategorywidth: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '700',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        // marginLeft: 5,
        // marginTop: 18,
        // width: 80,
        marginLeft: responsiveScreenWidth(1),
        marginTop: responsiveScreenHeight(2.3),
        width: responsiveScreenWidth(14),
    },
    textcategoryreebok: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '700',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        // marginLeft: 2,
        // marginTop: 21,
        // width: 80,
        marginTop: responsiveScreenHeight(2.8),
        width: responsiveScreenWidth(15),
    },
    textcategorybalance: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '700',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        // marginLeft: 2,
        // marginTop: 30,
        // width: 80,
        marginTop: responsiveScreenHeight(3.9),
        width: responsiveScreenWidth(25),
    },
    textcategoryconverse: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '700',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        // marginTop: 30,
        // marginLeft: -2,
        // width: 80,
        right: responsiveScreenWidth(1.5),
        marginTop: responsiveScreenHeight(3.9),
        width: responsiveScreenWidth(19),
    },
    textcategorybalanciga: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '700',
        color: Color.MainBlack,
        letterSpacing: 0.5,
        // marginTop: 30,
        // marginLeft: -2,
        // width: 80,
        marginTop: responsiveScreenHeight(2.8),
        width: responsiveScreenWidth(23),
    },
    viewtabcontainer: {
        flexDirection: 'row',
    },
    viewtab: {
        flexDirection: 'row',
        marginTop: responsiveScreenHeight(4.5),
    },
    tabcontainer: {
        // width: 58,
        // height: 29,
        width: responsiveScreenWidth(15),
        height: responsiveScreenHeight(3.3),
        borderWidth: 2,
        borderRadius: 15,
        // bottom: 19,
        // marginLeft: 20,
        bottom: responsiveScreenHeight(2.5),
        marginLeft: responsiveScreenWidth(6),
        justifyContent: 'center',
    },
    activeTab: {
        backgroundColor: "black",
    },
    tabcontainerother: {
        // width: 72,
        // height: 29,
        width: responsiveScreenWidth(18),
        height: responsiveScreenHeight(3.3),
        borderWidth: 2,
        borderRadius: 15,
        // bottom: 19,
        // marginLeft: 20,
        bottom: responsiveScreenHeight(2.5),
        marginLeft: responsiveScreenWidth(4),
        justifyContent: 'center',
    },
    tabcontainerother1: {
        // width: 110,
        // height: 29,
        width: responsiveScreenWidth(27),
        height: responsiveScreenHeight(3.3),
        borderWidth: 2,
        borderRadius: 15,
        // bottom: 19,
        // marginLeft: 20,
        bottom: responsiveScreenHeight(2.5),
        marginLeft: responsiveScreenWidth(4),
        justifyContent: 'center',
    },
    texttab: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '700',
        color: Color.MainBlack,
        textAlign: 'center',
    },
    activeText: {
        color: Color.MainWhite,
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '700',
        textAlign: 'center',
    },
    viewitemtab: {

    },
    viewtabcontent: {
        // marginHorizontal: 20,
        // marginHorizontal: responsiveScreenWidth(6),
        width: responsiveScreenWidth(96),
        alignSelf: 'center',
        // height: 11500,
        // height: '100%',
        height: responsiveScreenHeight(440),
        left: responsiveScreenWidth(3),
        // backgroundColor: Color.MainWhite,
    },
    viewflash: {
        flex: 1,
        justifyContent: 'space-between',
        // marginHorizontal: 20,
        //  marginHorizontal: 10,
        alignItems: 'center',
        marginBottom: responsiveScreenHeight(2.3),
        gap: responsiveScreenHeight(1.5),
    },
    viewbackground: {
        flexDirection: 'row',
        // backgroundColor: Color.Gray,
        // width: 160,
        // height: 150,
        width: responsiveScreenWidth(36),
        height: responsiveScreenHeight(16),
        borderRadius: 28,
        justifyContent: 'center',
        // elevation: 3,
    },
    viewitemimage: {
        left: responsiveScreenWidth(3),
    },
    imageItem: {
        // width: 135,
        // height: 135,
        width: responsiveScreenWidth(29),
        height: responsiveScreenHeight(11),
        // top: 15,
        top: responsiveScreenHeight(3),
    },
    viewiconheart: {
        backgroundColor: Color.MainBlack,
        // height: 28,
        // width: 28,
        height: responsiveScreenHeight(3.4),
        width: responsiveScreenWidth(7.2),
        borderRadius: 38,
        top: responsiveScreenHeight(1.7),
        right: responsiveScreenWidth(4),
    },
    iconheart: {
        top: responsiveScreenHeight(0.5),
        left: responsiveScreenWidth(1),
    },
    tabContent: {
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(2),
        fontWeight: '700',
        color: Color.MainBlack,
    },
    textname: {
        color: Color.MainBlack,
        // fontSize: 16,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: 'bold',
        // width: 145,
        width: responsiveScreenWidth(40),
        letterSpacing: 0.25,
        // left: 8,
        // top: 5,
        left: responsiveScreenWidth(1.8),
        top: responsiveScreenHeight(0.5),
    },
    texprice: {
        color: Color.MainBlack,
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: 'bold',
        // width: 145,
        width: responsiveScreenWidth(36),
        letterSpacing: 0.25,
    },
    ratingContainer: {
        flexDirection: 'row',
        // gap: 10,
        // right: 2,
        gap: responsiveScreenWidth(2),
        right: responsiveScreenWidth(2),
    },
    viewrating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: responsiveScreenWidth(1),
    },
    starIcon: {
        color: Color.Black,
    },
    ratingText: {
        color: Color.MainBlack,
        // fontSize: 15,
        fontSize: responsiveScreenFontSize(1.9),
        fontWeight: '500',
    },
    viewline: {
        // width: 2,
        // height: 15,
        width: responsiveScreenWidth(0.5),
        height: responsiveScreenHeight(2),
        backgroundColor: Color.MainGray,
        top: responsiveScreenHeight(0.5),
    },
    viewsold: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // gap: 5,
        // width: 80,
        // height: 22,
        width: responsiveScreenWidth(18),
        height: responsiveScreenHeight(2.5),
        backgroundColor: Color.MainGray3,
        borderRadius: 6,
        top: 2,
    },
    viewCountText: {
        color: Color.MainBlack,
        // fontSize: 11,
        fontSize: responsiveScreenFontSize(1.4),
        fontWeight: '500',
    },
    imageAvatar: {
        // width: 55,
        // height: 55,
        width: responsiveScreenWidth(12.9),
        height: responsiveScreenHeight(6),
        borderRadius: 55,
    },
    favoriteCount: {
        // width: 18,
        // height: 18,
        width: responsiveScreenWidth(4.6),
        height: responsiveScreenHeight(2.1),
        borderRadius: 15,
        backgroundColor: Color.MainRed,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        // top: 5,
        // left: 20,
        top: responsiveScreenHeight(0.5),
        left: responsiveScreenWidth(6),
    },
    favoriteCountText: {
        color: Color.MainWhite,
        // fontSize: 12,
        fontWeight: 'bold',
    },
});

export default StyleHomShoes;