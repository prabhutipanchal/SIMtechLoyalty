import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: AppConstants.getDeviceHeight(2),
    height: AppConstants.getDeviceHeight(9),
    width: AppConstants.getDeviceWidth(80),
    alignItems: 'center',
  },
  logo: {
    height: AppConstants.getDeviceHeight(12),
    width: AppConstants.getDeviceWidth(61.33),
    right: AppConstants.getDeviceHeight(12),
  },
  Container: {
    marginTop: AppConstants.getDeviceHeight(4.93),
    width: AppConstants.getDeviceWidth(91.47),
    alignSelf: 'center',
  },
  txtsignintitle: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR, 
  },
  txtInputView: {
    width: AppConstants.getDeviceWidth(91.47),
  },
  phoneIcon: {
    position: 'absolute',
    top: AppConstants.getDeviceHeight(5),
    left: AppConstants.getDeviceHeight(1),
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS22),
    color: AppConstants.COLORS.APPTHEME,
  },
  btnResetPwdView: {
    marginTop: AppConstants.getDeviceHeight(3.69),
    alignSelf: 'center',
  },

};
