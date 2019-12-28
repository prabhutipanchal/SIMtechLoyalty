import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    // backgroundColor: '#E4EEFF',
  },
  Productimg: {
    height: AppConstants.getDeviceHeight(20),
    width: AppConstants.getDeviceWidth(30),
    alignSelf: 'center',
  },
  
  txtProductName: {
    marginTop: AppConstants.getDeviceHeight(1),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    textAlign: 'center'
  },
  txtpoints: {
    marginTop: AppConstants.getDeviceHeight(1),
    color: AppConstants.COLORS.TEXTCOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    textAlign: 'center'
  },


}
