import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
  },
  NotificationViewstyle: {
    flexDirection: 'row',
    width: AppConstants.getDeviceWidth(82.93),
    alignSelf: 'center',
  },
  ThumbIconstyle: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS20),
    color: AppConstants.COLORS.APPTHEME,
  },
  txttitle: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    marginLeft: AppConstants.getDeviceWidth(3.47),
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color: AppConstants.COLORS.APPTHEME,
    textAlign: 'center',
  },
  txtdescription: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color: AppConstants.COLORS.TEXTCOLOR,
    marginTop: AppConstants.getDeviceHeight(1.48),
    marginBottom: AppConstants.getDeviceHeight(1.48),
  },
  txttime: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
};
