import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
  },
  logoContainer: {
    marginTop: AppConstants.getDeviceHeight(11.84),
    height: AppConstants.getDeviceHeight(7.2),
    width: AppConstants.getDeviceWidth(61.33),
    alignSelf: 'center',
  },
  logo: {
    height: AppConstants.getDeviceHeight(7.2),
    width: AppConstants.getDeviceWidth(61.33),
  },
  txtOTPView: {
    marginTop: AppConstants.getDeviceHeight(7.95),
    width: AppConstants.getDeviceWidth(80),
    height: AppConstants.getDeviceHeight(6.75),
    alignSelf: 'center',
  },
  txtSentOTPMobile: {
    color: AppConstants.COLORS.APPTHEME,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS17),
  },
  otpContainerView: {
    width: AppConstants.getDeviceWidth(30),
    height: AppConstants.getDeviceHeight(20),
    alignSelf: 'center',
  },
  otpInputContainerView: {
    backgroundColor: AppConstants.COLORS.RED,
    borderRadius: AppConstants.getDeviceWidth(20),
    height: AppConstants.getDeviceHeight(7.35),
    width: AppConstants.getDeviceWidth(18),
    alignItems: 'center',
  },
  otpInputsContainerView: {
    alignSelf: 'center',
  },
  btnVerifyOTPView: {
    alignSelf: 'center',
  },
  btnResendOTPView: {
    marginTop: AppConstants.getDeviceHeight(2.62),
    alignSelf: 'center',
  },
};
