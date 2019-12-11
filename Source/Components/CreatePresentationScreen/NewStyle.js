import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  txtInputView: {
    width: AppConstants.getDeviceWidth(91.47),
  },
  
  btnDesignPresentationView: {
    marginTop: AppConstants.getDeviceHeight(3.69),
    alignSelf: 'center',
  },
  txtReports:{
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    color: AppConstants.COLORS.TEXTCOLOR,
  },
  txtDescription:{
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS13),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },

};
