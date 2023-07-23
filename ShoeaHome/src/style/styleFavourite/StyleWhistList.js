import { StyleSheet } from "react-native";
import { Color } from "../../../config/Color";


const StyleWhistList = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MainWhite,
    },
    header: {
        marginTop: 25,
    },
    headerbar: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconback: {
        marginLeft: 18,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        color: Color.MainBlack,
    },
    iconsearch: {
        marginLeft: 'auto',
        marginRight: 20,
    },
    viewflashlit: {
        // width: '100%',
        // height: '100%',
        marginTop: 40,
    },
    viewbody: {
        marginTop: 20,
        marginHorizontal: 20,
        width: '100%',
        alignSelf: 'center',
    },
    viewtab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        gap: 15,
        marginLeft: 10,
    },
    tabcontainer: {
        width: 60,
        height: 30,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    tabcontainerother: {
        width: 79,
        height: 30,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    tabcontainerother1: {
        width: 110,
        height: 30,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.MainBlack,
    },
    texttab: {
        textAlign: 'center',
        paddingVertical: 2,
        fontSize: 15,
        fontWeight: '600',
        color: Color.MainBlack,
    },
    activeTab: {
        backgroundColor: Color.MainBlack,
    },
    activeText: {
        color: Color.MainWhite,
    },
    viewactivetab: {
    },
    viewtabcontent: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        height: '100%',
    },
    viewflash: {
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 20,
        gap: 10,
        
    },
    viewbackground: {
        flexDirection: 'row',
        backgroundColor: Color.Gray,
        width: 160,
        height: 150,
        borderRadius: 28,
        justifyContent: 'center',
    },
    viewitemimage: {
        marginLeft: 25,
    },
    imageItem: {
        width: 150,
        height: 150,
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
    textname: {
        color: Color.MainBlack,
        fontSize: 16,
        fontWeight: 'bold',
        width: 145,
        letterSpacing: 0.25,
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


});

export default StyleWhistList;