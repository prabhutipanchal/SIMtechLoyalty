import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    backgroundColor: AppConstants.COLORS.APPTHEME,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: AppConstants.COLORS.APPTHEME,
  },
  txtbusinessName: {
    color: AppConstants.COLORS.WHITE,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
  },
  txtpersonName: {
    color: AppConstants.COLORS.WHITE,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
  },
  drawerNavStyle: {
    flexDirection: 'row',
    height: AppConstants.getDeviceHeight(10),
    width: AppConstants.getDeviceWidth(80),
    borderBottomWidth: AppConstants.getDeviceWidth(0.5),
    borderBottomColor: AppConstants.COLORS.BORDERBOTTOMCOLOR,
    alignItems: 'center',
  },
  screentxtcolor: {
    color: AppConstants.COLORS.WHITE,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    marginLeft: AppConstants.getDeviceWidth(5),
  },
  Iconstyle: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS20),
    marginLeft: AppConstants.getDeviceWidth(5),
  }
}