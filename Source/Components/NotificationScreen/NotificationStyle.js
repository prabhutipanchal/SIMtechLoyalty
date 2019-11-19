import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: AppConstants.getDeviceHeight(2),
  },
  txt: {
    color: AppConstants.COLORS.BASECOLOR_2,
    // fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color:AppConstants.COLORS.APPTHEME,
    textAlign: 'center',
    
  },
  txt1: {
    color: AppConstants.COLORS.BASECOLOR_2,
    // fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color:AppConstants.COLORS.TEXTCOLOR,
    margin: AppConstants.getDeviceHeight(2),
    
  },
  txt2: {
    color: AppConstants.COLORS.BASECOLOR_2,
    // fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color:AppConstants.COLORS.TEXTFIELDBASECOLOR,
    textAlign: 'left',
    margin: AppConstants.getDeviceHeight(0.5),
  },
  mainCardView: {
    marginBottom: AppConstants.getDeviceHeight(2), 
    paddingTop: AppConstants.getDeviceHeight(2.85),
    paddingBottom: AppConstants.getDeviceHeight(5),
    width: AppConstants.getDeviceWidth(95),
    justifyContent: 'center',
  },
};
