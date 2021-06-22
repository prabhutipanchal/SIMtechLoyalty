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
    txtMenAccessories: {
        marginTop: AppConstants.getDeviceHeight(1),
        marginBottom: AppConstants.getDeviceHeight(2.4),
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