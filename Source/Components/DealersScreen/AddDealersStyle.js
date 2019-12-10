
import * as AppConstants from '../Helper/AppConstants';
export default
  {
    mainContainer: {
      flex: 1,
      alignItems: 'center',
    },
    txtInputView: {
      width: AppConstants.getDeviceWidth(89),
    },
    phoneIcon: {
      position: 'absolute',
      top: 33,
      left: AppConstants.getDeviceHeight(1),
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS22),
      color: AppConstants.COLORS.APPTHEME,
    },
    LockIcon: {
      position: 'absolute',
      top: 33,
      left: AppConstants.getDeviceHeight(1),
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS22),
      color: AppConstants.COLORS.APPTHEME,
    },
    btnSaveView: {
      marginTop: AppConstants.getDeviceHeight(3.69),
      alignSelf: 'center',
    },
  }