import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#E4EEFF',
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  mainCardView: {
    backgroundColor: AppConstants.COLORS.WHITE,
    borderRadius: AppConstants.getDeviceHeight(1),
    shadowColor: AppConstants.COLORS.TEXTFIELDBASECOLOR, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5,
    paddingTop: AppConstants.getDeviceHeight(1.85),
    paddingBottom: AppConstants.getDeviceHeight(1.85),
    width: AppConstants.getDeviceWidth(42.13),
    justifyContent: 'center',
  },

  ImgCommonStyle: {
    height: AppConstants.getDeviceHeight(7),
    width: AppConstants.getDeviceWidth(12),
    alignSelf: 'center',
  },
  txtTitleCommonStyle: {
    marginTop: AppConstants.getDeviceHeight(1),
    color: AppConstants.COLORS.TEXTCOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    textAlign: 'center'
  },











  
};
