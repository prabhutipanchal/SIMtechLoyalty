
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
            width: AppConstants.getDeviceWidth(80),
        },
        txtForgot: {
            fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS12),
            // fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
            color: AppConstants.COLORS.FORGOTTEXT,
            alignSelf: 'center',
            marginTop: AppConstants.getDeviceHeight(2),
            // marginBottom: AppConstants.getDeviceHeight(2),
            left:  AppConstants.getDeviceHeight(17),
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
            right:  AppConstants.getDeviceHeight(12),
          },
        icon: {
            position: 'absolute',
            top: 33,
            right: 0
        },
        phoneIcon: {
            position: 'absolute',
            top: 33,
            left:  AppConstants.getDeviceHeight(1),
        
          },
          btnsigninView: {
            marginTop: AppConstants.getDeviceHeight(3.69),
            alignSelf: 'center',
          },
    }