import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
  },
  Container: {
    // marginTop: AppConstants.getDeviceHeight(4.93),
    width: AppConstants.getDeviceWidth(91.47),
    alignSelf: 'center',
  },
  lockiconview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppConstants.COLORS.WHITE,
  },
  txtInputView1: {
    width: AppConstants.getDeviceWidth(91.47),
    alignSelf: 'center',
  },
  lockIcon: {
    position: 'absolute',
    top: AppConstants.getDeviceHeight(5),
    left: AppConstants.getDeviceHeight(1),
    color: AppConstants.COLORS.APPTHEME,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS22),
  },
  EyeIconStyle: {
    position: 'absolute',
    borderLeftWidth: AppConstants.getDeviceWidth(0.2),
    paddingLeft: AppConstants.getDeviceWidth(2.50),
    borderLeftColor: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    top: AppConstants.getDeviceHeight(3.67),
    right: AppConstants.getDeviceWidth(2.67),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS20),
  },
  txtInputView2: {
    width: AppConstants.getDeviceWidth(91.47),
    alignSelf: 'center',
  },
  btnSignupView: {
    marginTop: AppConstants.getDeviceHeight(3.69),
    alignSelf: 'center',
  },
};
