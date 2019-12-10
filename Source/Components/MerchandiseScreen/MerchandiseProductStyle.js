import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    // backgroundColor: '#E4EEFF',
  },
  mainCardView: {
    backgroundColor: AppConstants.COLORS.WHITE,
    borderColor: AppConstants.COLORS.BORDERCOLOR,
    borderRadius: AppConstants.getDeviceHeight(1),
    shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5,
    paddingBottom: AppConstants.getDeviceHeight(2.85),
    marginTop: AppConstants.getDeviceHeight(2),
    marginRight: AppConstants.getDeviceHeight(1),
    marginLeft: AppConstants.getDeviceHeight(2),
    flex: 1,
    flexDirection: 'column',
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
