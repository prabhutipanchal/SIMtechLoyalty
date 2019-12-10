import * as AppConstants from "../Helper/AppConstants";
export default {
    mainContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },
   Container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    mainCardView: {
        backgroundColor: AppConstants.COLORS.WHITE,
        borderColor: AppConstants.COLORS.TEXTFIELDBASECOLOR,
        borderRadius: AppConstants.getDeviceHeight(1),
        shadowColor: AppConstants.COLORS.TEXTFIELDBASECOLOR, // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 5,
        paddingTop: AppConstants.getDeviceHeight(2.85),
        paddingBottom: AppConstants.getDeviceHeight(2.85),
        width: AppConstants.getDeviceWidth(41.87),
        justifyContent: 'center',
    },
    ImgCommonStyle: {
        height: AppConstants.getDeviceHeight(7),
        width: AppConstants.getDeviceWidth(12),
        alignSelf: 'center',
    },
    txtTitleCommonStyle: {
        marginTop: AppConstants.getDeviceHeight(1),
        color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        textAlign: 'center'
    },
    NewView: {
        width: AppConstants.getDeviceWidth(12),
        borderBottomLeftRadius:  AppConstants.getDeviceHeight(1),
        borderTopRightRadius: AppConstants.getDeviceHeight(1),
        backgroundColor: AppConstants.COLORS.VIEWCOLOR,
        justifyContent: 'center',
        alignItems: 'center',
        right:0,
        position:'absolute',
        top: AppConstants.getDeviceHeight(0),
        paddingBottom: AppConstants.getDeviceHeight(0.5),
    },
    txtNew: {
        color: AppConstants.COLORS.APPTHEME,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS13),
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    },
}