import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
  },
  Container: {
    marginTop: AppConstants.getDeviceHeight(4.93),
    width: AppConstants.getDeviceWidth(91.47),
    alignSelf: 'center',
  },

  logoContainer: {
    marginTop: AppConstants.getDeviceHeight(8),
    height: AppConstants.getDeviceHeight(7.2),
    width: AppConstants.getDeviceWidth(61.33),
    alignItems: 'center',
  },
  logo: {
    height: AppConstants.getDeviceHeight(7.2),
    width: AppConstants.getDeviceWidth(61.33),
    right:  AppConstants.getDeviceHeight(10),
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
    marginTop: AppConstants.getDeviceHeight(8),
    width: AppConstants.getDeviceWidth(80),
    height: AppConstants.getDeviceHeight(11.09),
    alignSelf: 'center',
  },
  phoneViewstyle: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // marginTop: AppConstants.getDeviceHeight(3.3),

  },
  phoneIcon: {
    position: 'absolute',
    top: 33,
    left:  AppConstants.getDeviceHeight(1),

  },
  btnResetPwdView: {
    marginTop: AppConstants.getDeviceHeight(3.69),
    alignSelf: 'center',
  },
  btnLoginView: {
    marginTop: AppConstants.getDeviceHeight(2.62),
    width: AppConstants.getDeviceWidth(80),
    height: AppConstants.getDeviceHeight(7.35),
    alignSelf: 'center',
  },
};
