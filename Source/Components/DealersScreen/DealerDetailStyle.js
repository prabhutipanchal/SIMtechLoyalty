import * as AppConstants from '../Helper/AppConstants';
export default {
    mainContainer: {
        flex: 1,
    },
    cardView: {
        backgroundColor: AppConstants.COLORS.APPTHEME,
        borderColor: AppConstants.COLORS.APPTHEME,
        borderBottomRightRadius: AppConstants.getDeviceHeight(3),
        borderBottomLeftRadius: AppConstants.getDeviceHeight(3),
        alignSelf: 'center',
        width: AppConstants.getDeviceWidth(100),
        height: AppConstants.getDeviceHeight(38.3),
        elevation: 0,
    },
    txtBusinessName: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS24),
        color: AppConstants.COLORS.WHITE,
        marginLeft: AppConstants.getDeviceWidth(5.33),
        // marginTop: AppConstants.getDeviceHeight(2)
    },
    txtMedicineWholesaler: {
        color: AppConstants.COLORS.MEDICINETEXTCOLOR,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
        marginLeft: AppConstants.getDeviceWidth(5.33),
        marginTop: AppConstants.getDeviceHeight(1),
    },
    borderContainer: {
        width: AppConstants.getDeviceWidth(88.10),
         // borderBottomWidth: AppConstants.getDeviceWidth(1),
         // borderBottomColor: AppConstants.COLORS.DEALERDETAILBORDERBOTTOMCOLOR,
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
    textCommonStyle:{
        color: AppConstants.COLORS.WHITE,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        marginLeft: AppConstants.getDeviceWidth(5),
        alignSelf: 'center',
    },
    PhoneIconstyle: {
        marginBottom:  AppConstants.getDeviceHeight(0),
      },
      EmailIconstyle: {
        marginBottom:  AppConstants.getDeviceHeight(0),
      },
    LocationIconstyle: {
        marginBottom:  AppConstants.getDeviceHeight(2),
      },
      QuartercardView: {
        marginBottom: AppConstants.getDeviceHeight(3),
        // alignSelf: 'center',
        justifyContent: 'space-evenly',
        shadowColor: AppConstants.COLORS.BLACK, // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 5, // Android,
        height: AppConstants.getDeviceHeight(8),
        width: AppConstants.getDeviceWidth(15),
        borderRadius: AppConstants.getDeviceWidth(2),
        backgroundColor: AppConstants.COLORS.WHITE,
        marginTop: AppConstants.getDeviceHeight(2),
        
    },
    txtSaveTemplate: {
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        textAlign: 'center',
        color: AppConstants.COLORS.TEXTCOLOR,
      },

}