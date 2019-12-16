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
  },
  radioView1: {
    width: AppConstants.getDeviceWidth(88),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: AppConstants.getDeviceHeight(2.85),
    paddingBottom: AppConstants.getDeviceHeight(5),
},
txtAllValueVolume: {
  fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
  fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
  color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
},
}