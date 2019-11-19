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
    Container: {
      marginTop: AppConstants.getDeviceHeight(4.93),
      width: AppConstants.getDeviceWidth(91.47),
      alignSelf: 'center',
    },
    txtLogintitle: {
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS24),
    },
    txtsignintitle: {
      marginTop: AppConstants.getDeviceHeight(2),
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    },
    txtInputView: {
      width: AppConstants.getDeviceWidth(91.47),
    },
    txtForgot: {
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS12),
      color: AppConstants.COLORS.FORGOTTEXT,
      marginTop: AppConstants.getDeviceHeight(1.97),
      textAlign:'right',
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
    phoneIcon: {
      position: 'absolute',
      top: AppConstants.getDeviceHeight(5),
      left: AppConstants.getDeviceHeight(1),

    },
    btnsigninView: {
      marginTop: AppConstants.getDeviceHeight(3.69),
      alignSelf: 'center',
    },
  }