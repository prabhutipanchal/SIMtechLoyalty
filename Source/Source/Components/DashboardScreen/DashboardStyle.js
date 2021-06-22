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
  txtPayoutSalesAnalysisCommon: {
    marginTop: AppConstants.getDeviceHeight(1),
    marginBottom: AppConstants.getDeviceHeight(2.4),
    color: AppConstants.COLORS.TEXTCOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    textAlign: 'center'
  },











  
};
