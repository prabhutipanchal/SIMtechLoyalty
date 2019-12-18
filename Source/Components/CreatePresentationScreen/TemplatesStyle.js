import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
  },
  mainCardView: {
    backgroundColor: AppConstants.COLORS.WHITE,
    borderColor: AppConstants.COLORS.EDITBUTTON,
    borderRadius: AppConstants.getDeviceHeight(1),
    shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5,
    paddingTop: AppConstants.getDeviceHeight(2.85),
    paddingBottom: AppConstants.getDeviceHeight(2.85),
    marginTop: AppConstants.getDeviceHeight(1),
    marginBottom: AppConstants.getDeviceHeight(3),
    alignSelf: 'center',
    width: AppConstants.getDeviceWidth(89.33),
  },
  NotificationViewstyle: {
    flexDirection: 'row',
    // width: AppConstants.getDeviceWidth(82.93),
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
