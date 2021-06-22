import * as AppConstants from '../Helper/AppConstants';
export default {
    container: {
        flex: 1,

    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        marginLeft: AppConstants.getDeviceWidth(4),
    },
    txt: {
        width: AppConstants.getDeviceWidth(85),
        height: AppConstants.getDeviceHeight(9),
        color: AppConstants.COLORS.DARKGRAY,
        fontFamily: AppConstants.FONTFAMILY.fontFamily_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.TEXTVIEWTEXT),
        marginLeft: AppConstants.getDeviceWidth(2.13),
    },
    unreadCount: {
        color: AppConstants.COLORS.BASECOLOR_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS15),
        textAlign: 'center',
        fontWeight: 'bold'
    },
    username: {
        color: AppConstants.COLORS.TEXT_2,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        textAlign: 'center',
        marginLeft: AppConstants.getDeviceWidth(2),
    },
    backgroundImage: {
        flex: 1,
    },
    backImage: {
        marginLeft: AppConstants.getDeviceWidth(4),
        height: AppConstants.getDeviceHeight(2.65),
        width: AppConstants.getDeviceHeight(2.65),
    },
    sendbutton: {
        // height: AppConstants.getDeviceHeight(8),
        width: AppConstants.getDeviceHeight(9),
        top:0,
        aspectRatio:1,
    },
    attcheimage: {
        height: AppConstants.getDeviceHeight(3),
        width: AppConstants.getDeviceHeight(3),
    },
    addAttachmentImage: {
        height: AppConstants.getDeviceHeight(2.6),
        width: AppConstants.getDeviceHeight(2.6),
    },
    modifyFuzzyImage: {
        marginLeft: AppConstants.getDeviceWidth(4),
        height: AppConstants.getDeviceHeight(3.65),
        width: AppConstants.getDeviceHeight(3.65),
    },
    txtProfileName: {
        marginLeft: AppConstants.getDeviceWidth(2.4),
        width: AppConstants.getDeviceWidth(54.13),
        color: AppConstants.COLORS.TEXT_2,
        fontFamily: AppConstants.FONTFAMILY.fontFamily_2,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS15),
    },
    imageprofiel: {
        marginLeft: AppConstants.getDeviceWidth(1.58),
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
    },
    buttonContainer: {
        backgroundColor: AppConstants.COLORS.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
        height: AppConstants.getDeviceHeight(7),
        marginTop: AppConstants.getDeviceHeight(5)
    },
    mainContainer: {
        flex: 1,
        backgroundColor: AppConstants.COLORS.WHITE,
    },
    inputBar: {
        // alignSelf: 'flex-end',
        flexDirection: 'row',
        position: 'absolute',
        // justifyContent: 'space-between',
        height: AppConstants.getDeviceHeight(8),
        width: AppConstants.getDeviceWidth(100),
        bottom: AppConstants.getDeviceHeight(0),
        // elevation: 1,
        backgroundColor: AppConstants.SHADOWCOLORS.STATUSBAR,


        aspectRatio: 1,
        backgroundColor: AppConstants.COLORS.WHITE,
        shadowColor: AppConstants.SHADOWCOLORS.TEXT_SHADOW,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        //elevation: AppConstants.getDeviceWidth(1),
        shadowRadius: AppConstants.getDeviceWidth(1),

        borderColor: AppConstants.COLORS.SETPHOTO_BORDERCOLOR,
        borderWidth: 0.1,
    },
    textBox: {
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        height: AppConstants.getDeviceHeight(9),
        flex: 1,
        marginLeft: AppConstants.getDeviceWidth(7),
        padding: 0
    },
    sendBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginLeft: 5
    },
    enabledBtn: {
        backgroundColor: AppConstants.COLORS.chatenable
    },
    disabledBtn: {
        backgroundColor: AppConstants.COLORS.disablebutton
    },
    messageContainer: {
        marginTop: AppConstants.getDeviceHeight(1)
    },
    timestampcontainer: {
        flexDirection: 'row',
        right: AppConstants.getDeviceWidth(0),
        bottom: AppConstants.getDeviceHeight(1),
        position: 'absolute'
    },
    sentat: {
        marginRight: AppConstants.getDeviceHeight(0.5),
        marginLeft: AppConstants.getDeviceHeight(0.5),
    },
    Time: {
        fontSize: AppConstants.moderateScale(10),
        marginTop: AppConstants.getDeviceHeight(0.3),
        fontFamily: AppConstants.FONTFAMILY.fontFamily_2,
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        borderRadius: 5,
        // paddingHoriztonal: 10,
    },
    textContainerLeft: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    textContainerRight: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    flatlist: {
        marginBottom: AppConstants.getDeviceHeight(10)
    },
    message: {
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        fontFamily: AppConstants.FONTFAMILY.fontFamily_1,
        color: AppConstants.COLORS.WHITE,
        margin: AppConstants.getDeviceHeight(0.5),
        marginBottom: AppConstants.getDeviceHeight(2)
    },
    imagemessage: {
        width: AppConstants.getDeviceWidth(30),
        height: AppConstants.getDeviceHeight(20),

    },
    message1: {
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS15),
        fontFamily: AppConstants.FONTFAMILY.fontFamily_1,
        color: AppConstants.COLORS.WHITE,
        margin: AppConstants.getDeviceHeight(0.5),
        marginBottom: AppConstants.getDeviceHeight(2)
    },
    gradientSender: {
        backgroundColor: AppConstants.COLORS.MODALBACKGROUNDCOLOR2,
        // width:AppConstants.getDeviceWidth(100),
        borderTopRightRadius: AppConstants.getDeviceWidth(0),
        borderTopLeftRadius: AppConstants.getDeviceWidth(3),
        borderBottomLeftRadius: AppConstants.getDeviceWidth(3),
        borderBottomRightRadius: AppConstants.getDeviceWidth(0),
        overflow: 'hidden',
        padding: AppConstants.getDeviceWidth(3),
        marginLeft: AppConstants.getDeviceWidth(5),
    },
    gradientReceiver: {
        backgroundColor: AppConstants.COLORS.MODALBACKGROUNDCOLOR,
        // width:AppConstants.getDeviceWidth(80),
        borderTopRightRadius: AppConstants.getDeviceWidth(3),
        borderTopLeftRadius: AppConstants.getDeviceWidth(0),
        borderBottomLeftRadius: AppConstants.getDeviceWidth(0),
        borderBottomRightRadius: AppConstants.getDeviceWidth(3),
        overflow: 'hidden',
        padding: AppConstants.getDeviceWidth(3),
        marginRight: AppConstants.getDeviceWidth(5),
    },
    sender: {
        paddingRight: 10
    },
    modalRenderView: {
        flex: 1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center"
    },


    // **************** ChatImage *************

    fullimageshow: {
        width: AppConstants.getDeviceWidth(100),
        height: AppConstants.getDeviceHeight(60),
        resizeMode:'contain',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    imagechtaview: {
        
    }
}
