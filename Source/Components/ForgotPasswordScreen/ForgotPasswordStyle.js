import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  Container: {
    marginTop: AppConstants.getDeviceHeight(4.93),
    width: AppConstants.getDeviceWidth(91.47),
    alignSelf: 'center',
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
    right: AppConstants.getDeviceHeight(15),
  },
  txtResetpwdtitle: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS24),
    color: AppConstants.COLORS.TEXTCOLOR1,
  },
  txtsignintitle: {
    marginTop: AppConstants.getDeviceHeight(2),
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    color: AppConstants.COLORS.TEXTCOLOR2,
  },
  txtInputView: {
    width: AppConstants.getDeviceWidth(91.47),
  },
  phoneIcon: {
    position: 'absolute',
    top: AppConstants.getDeviceHeight(5),
    left: AppConstants.getDeviceHeight(1),

  },
  btnResetPwdView: {
    marginTop: AppConstants.getDeviceHeight(3.69),
    alignSelf: 'center',
  },

};
