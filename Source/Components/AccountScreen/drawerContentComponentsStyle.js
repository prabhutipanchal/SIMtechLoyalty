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
  AvatarMainViewStyle: {
    flexDirection: 'row',
    marginTop: AppConstants.getDeviceHeight(2),
    marginBottom: AppConstants.getDeviceHeight(2),
  },
  AvatarViewStyle: {
    flexDirection: 'row',
    marginLeft: AppConstants.getDeviceWidth(3),
  },
  BusinessNameViewStyle: {
    marginLeft: AppConstants.getDeviceWidth(3),
    marginTop: AppConstants.getDeviceHeight(2)
  },
  txtbusinessName: {
    color: AppConstants.COLORS.WHITE,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
  },
  txtpersonName: {
    color: AppConstants.COLORS.WHITE,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
  },
  drawerNavStyle: {
    flexDirection: 'row',
    // height: AppConstants.getDeviceHeight(9),
    marginTop: AppConstants.getDeviceHeight(2),
    paddingBottom: AppConstants.getDeviceHeight(2),
    // width: AppConstants.getDeviceWidth(77.7),
    borderBottomWidth: AppConstants.getDeviceWidth(0.5),
    borderBottomColor: AppConstants.COLORS.BORDERBOTTOMCOLOR,
    alignItems: 'center',
  },
  Iconstyle: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS20),
    marginLeft: AppConstants.getDeviceWidth(5),
    color: AppConstants.COLORS.WHITE,
  },
  screentxtcolor: {
    color: AppConstants.COLORS.WHITE,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    marginLeft: AppConstants.getDeviceWidth(5),
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
  },
  ReferIconImageStyle: {
    width: AppConstants.getDeviceWidth(5),
    height: AppConstants.getDeviceHeight(4),
    marginLeft: AppConstants.getDeviceWidth(5),
  },
  EnablefaceImageStyle: {
    width: AppConstants.getDeviceWidth(5),
    height: AppConstants.getDeviceHeight(4),
    marginLeft: AppConstants.getDeviceWidth(5),
  },
  
 
}