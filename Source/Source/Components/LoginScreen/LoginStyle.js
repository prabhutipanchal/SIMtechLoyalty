/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import * as AppConstants from '../Helper/AppConstants';
export default
  {
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: AppConstants.COLORS.APP_BG,
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
    txtLogintitle: {
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS24),
      fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
      color: AppConstants.COLORS.TEXTCOLOR, 
    },
    txtsignintitle: {
      marginTop: AppConstants.getDeviceHeight(2),
      fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
      color: AppConstants.COLORS.TEXTFIELDBASECOLOR, 
    },
    txtInputView: {
      width: AppConstants.getDeviceWidth(91.47),
    },
    phoneIcon: {
      position: 'absolute',
      top: AppConstants.getDeviceHeight(6),
      left: AppConstants.getDeviceHeight(1.5),
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS22),
      color: AppConstants.COLORS.APPTHEME,
    },
    passwordLockIcon: {
      position: 'absolute',
      top: AppConstants.getDeviceHeight(6),
      left: AppConstants.getDeviceHeight(1.5),
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS22),
      color: AppConstants.COLORS.APPTHEME,
    },
    txtForgot: {
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS12),
      color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
      marginTop: AppConstants.getDeviceHeight(1.97),
      textAlign:'right',
    },
    btnsigninView: {
      marginTop: AppConstants.getDeviceHeight(3.69),
      alignSelf: 'center',
    },
  }