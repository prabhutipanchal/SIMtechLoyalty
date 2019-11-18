import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppConstants.COLORS.APP_BG,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txt: {
    color: AppConstants.COLORS.BASECOLOR_2,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS15),
    textAlign: 'center',
  },
  Headertxt: {
    color: AppConstants.COLORS.WHITE,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS20),
    marginLeft: AppConstants.getDeviceHeight(3),
  },
  HeaderView: {
    width: AppConstants.getDeviceWidth(100),
    height: AppConstants.getDeviceHeight(5.5),
    borderBottomLeftRadius: AppConstants.getDeviceHeight(1.5),
    borderBottomRightRadius: AppConstants.getDeviceHeight(1.5),
    backgroundColor: AppConstants.COLORS.APPTHEME,
  },
  mainCardView: {
    marginTop: AppConstants.getDeviceHeight(1),
    marginBottom: AppConstants.getDeviceHeight(1),
    backgroundColor: AppConstants.COLORS.WHITE,
    borderColor: AppConstants.COLORS.APPTHEME,
    borderWidth: AppConstants.getDeviceHeight(0.1),
    paddingTop: AppConstants.getDeviceHeight(2.85),
    paddingBottom: AppConstants.getDeviceHeight(2.85),
    width: AppConstants.getDeviceWidth(95),
    justifyContent: 'center',
  },
};
