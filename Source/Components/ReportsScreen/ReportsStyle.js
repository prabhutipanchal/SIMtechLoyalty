import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  txtTarget:{
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS24),
    color: AppConstants.COLORS.TEXTCOLOR,
    marginLeft: AppConstants.getDeviceWidth(5),
    marginBottom: AppConstants.getDeviceHeight(5),
  
  }
}