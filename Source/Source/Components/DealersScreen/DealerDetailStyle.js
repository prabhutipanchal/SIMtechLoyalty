import * as AppConstants from '../Helper/AppConstants';
export default {
    mainContainer: {
        flex: 1,
    },
    QuarterView: {
        width: AppConstants.getDeviceWidth(100),
        height: AppConstants.getDeviceHeight(45),
        backgroundColor: AppConstants.COLORS.VIEWCOLOR,
        borderRadius: AppConstants.getDeviceHeight(2.5),
        elevation: 0,
    },
    BusinessView:{
        width:  AppConstants.getDeviceWidth(100),
        height: AppConstants.getDeviceHeight(34),
        backgroundColor: AppConstants.COLORS.APPTHEME,
        borderBottomEndRadius: AppConstants.getDeviceHeight(2.5),
        borderBottomStartRadius: AppConstants.getDeviceHeight(2.5),
    },
    txtBusinessName: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS24),
        color: AppConstants.COLORS.WHITE,
        marginLeft: AppConstants.getDeviceWidth(5.33),
    },
    txtMedicineWholesaler: {
        color: AppConstants.COLORS.MEDICINETEXTCOLOR,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
        marginLeft: AppConstants.getDeviceWidth(5.33),
        marginTop: AppConstants.getDeviceHeight(1),
    },
    borderContainer: {
        width: AppConstants.getDeviceWidth(88.10),
        marginTop: AppConstants.getDeviceHeight(2),
        alignSelf: 'center',
        borderWidth: AppConstants.getDeviceWidth(0.5),
        borderRadius: AppConstants.getDeviceHeight(5),
        borderStyle: 'dashed',
        borderColor: AppConstants.COLORS.DEALERDETAILBORDERBOTTOMCOLOR,
    },
    InformationView: {
        flexDirection: 'row',
        marginTop: AppConstants.getDeviceHeight(2),
        marginLeft: AppConstants.getDeviceWidth(5.33),
        alignItems: 'center',
    },
    textCommonStyle: {
        color: AppConstants.COLORS.WHITE,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        marginLeft: AppConstants.getDeviceWidth(5),
        alignSelf: 'center',
    },
    PhoneIconstyle: {
        marginBottom: AppConstants.getDeviceHeight(0),
    },
    EmailIconstyle: {
        marginBottom: AppConstants.getDeviceHeight(0),
    },
    LocationIconstyle: {
        marginBottom: AppConstants.getDeviceHeight(2),
    },
    QuarterCardContainView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: AppConstants.getDeviceHeight(2),
    },

    QuarterCard: {
        shadowColor: AppConstants.COLORS.BLACK, // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android,
        height: AppConstants.getDeviceHeight(6),
        width: AppConstants.getDeviceWidth(15),
        borderRadius: AppConstants.getDeviceWidth(2),
        backgroundColor: AppConstants.COLORS.WHITE,
        paddingTop: AppConstants.getDeviceHeight(1),
    },
    txtQuarter: {
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        textAlign: 'center',
        color: AppConstants.COLORS.TEXTCOLOR,   
    },


}
