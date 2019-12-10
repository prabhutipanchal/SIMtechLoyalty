import * as AppConstants from '../Helper/AppConstants';
export default {
  Maincontainer: {
    flex: 1,
  },
  ToptextcontainerView: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    right: AppConstants.getDeviceWidth(5),
    top: AppConstants.getDeviceHeight(5),
  },
  skipView: {
    right: 0,
  },
  bottomDoneButton: {
    position: 'absolute',
    right: 0,
    bottom: AppConstants.getDeviceHeight(0),
    marginBottom: AppConstants.getDeviceHeight(0.8),
  },
  Imagecontainer: {
    flex: 1,
  },
  toptitletext: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS20),
    color: AppConstants.COLORS.APPTHEME,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  topskiptext: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS17),
    color: AppConstants.COLORS.APPTHEME,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
    // textAlign: 'center',
  },
  nextButtonView: {
    width: AppConstants.getDeviceWidth(20.27),
    backgroundColor: AppConstants.COLORS.WHITE,
    height: AppConstants.getDeviceWidth(14.04),
    borderTopLeftRadius: AppConstants.getDeviceWidth(24),
    borderBottomLeftRadius: AppConstants.getDeviceWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: AppConstants.getDeviceHeight(2),
  },
  backButtonView: {
    width: AppConstants.getDeviceWidth(20.27),
    backgroundColor: AppConstants.COLORS.WHITE,
    height: AppConstants.getDeviceWidth(14.04),
    borderTopRightRadius: AppConstants.getDeviceWidth(24),
    borderBottomRightRadius: AppConstants.getDeviceWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: AppConstants.getDeviceHeight(2),
  },
  bottomButtonText: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
    textAlign: 'center',
  },
};
