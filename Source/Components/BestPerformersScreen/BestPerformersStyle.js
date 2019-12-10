import * as AppConstants from '../Helper/AppConstants';

export default {
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    cardView: {
        backgroundColor: AppConstants.COLORS.WHITE,
        alignSelf: 'center',
        width: AppConstants.getDeviceWidth(100),
        elevation: 0,
    },
    ImageReferEarnStyle: {
        height: AppConstants.getDeviceHeight(12.78),
        width: AppConstants.getDeviceWidth(58.55),
        alignSelf: 'center',
    },

    mainCardView: {
        backgroundColor: AppConstants.COLORS.WHITE,
        borderRadius: AppConstants.getDeviceHeight(1),
        shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 5,
        paddingTop: AppConstants.getDeviceHeight(2.85),
        marginTop: AppConstants.getDeviceHeight(2),
        alignSelf: 'center',
        width: AppConstants.getDeviceWidth(89.33),
    },
    DistributorView: {
        width: AppConstants.getDeviceWidth(23),
        borderBottomLeftRadius: AppConstants.getDeviceHeight(1),
        borderTopRightRadius: AppConstants.getDeviceHeight(1),
        backgroundColor: AppConstants.COLORS.VIEWCOLOR,
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        position: 'absolute',
        top: AppConstants.getDeviceHeight(0),
        paddingBottom: AppConstants.getDeviceHeight(1),
    },
    txtDistributor: {
        textAlign: 'right',
        color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS12),
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    },
    PersonNameViewstyle: {
        flexDirection: 'row',
        width: AppConstants.getDeviceWidth(78.85),
        alignSelf: 'center',
    },
    txtPersonName: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
        color: AppConstants.COLORS.APPTHEME,

    },
    txtDesignation: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        color: AppConstants.COLORS.TEXTCOLOR,
        marginTop: AppConstants.getDeviceHeight(1.48),
        marginBottom: AppConstants.getDeviceHeight(1.48),

    },
    txtTotalSales: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
        paddingBottom: AppConstants.getDeviceHeight(1.85),

    },
    txtAmount: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        color: AppConstants.COLORS.TEXTCOLOR,
        paddingBottom: AppConstants.getDeviceHeight(1.85),

    },
}