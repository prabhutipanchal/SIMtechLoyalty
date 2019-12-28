import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  txtInputView: {
    width: AppConstants.getDeviceWidth(91.47),
    paddingLeft: AppConstants.getDeviceWidth(4),
  },
  btnDesignPresentationView: {
    marginTop: AppConstants.getDeviceHeight(1),
    marginBottom: AppConstants.getDeviceHeight(1),
    alignSelf: 'center',
  },
  ReportsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: AppConstants.getDeviceHeight(2),
    // backgroundColor: AppConstants.COLORS.REPORTSBG_COLOR,

  },
  txtReports: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    color: AppConstants.COLORS.TEXTCOLOR,
    paddingBottom: AppConstants.getDeviceHeight(1),
  },
  txtDescription: {
    width: AppConstants.getDeviceWidth(67),
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS13),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,

  },
  PayoutReportsCardView: {
    backgroundColor: AppConstants.COLORS.WHITE,
    borderRadius: AppConstants.getDeviceHeight(1),
    shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2,
    paddingTop: AppConstants.getDeviceHeight(2.85),
    paddingBottom: AppConstants.getDeviceHeight(2),
    marginTop: AppConstants.getDeviceHeight(2),
    alignSelf: 'center',
    width: AppConstants.getDeviceWidth(89.33),
    justifyContent: 'space-between',
    paddingHorizontal: AppConstants.getDeviceWidth(3),
    flexDirection: 'row',
    marginBottom: AppConstants.getDeviceHeight(1),
  },
  txtPayoutReports: {
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    marginLeft: AppConstants.getDeviceWidth(4),
  },
  txtProduct: {
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    marginLeft: AppConstants.getDeviceWidth(4),
  },
  txtMarket: {
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    marginLeft: AppConstants.getDeviceWidth(4),
  },
  SaveTemplateButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  SaveTemplateViewCode: {
    marginBottom: AppConstants.getDeviceHeight(3),
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    shadowColor: AppConstants.COLORS.BLACK, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android,
    height: AppConstants.getDeviceHeight(8),
    width: AppConstants.getDeviceWidth(43.2),
    borderRadius: AppConstants.getDeviceWidth(2),
    backgroundColor: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    marginTop: AppConstants.getDeviceHeight(2),
  },
  txtSaveTemplate: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    textAlign: 'center',
    color: AppConstants.COLORS.WHITE,
  },
  GenerateReportViewCode: {
    marginBottom: AppConstants.getDeviceHeight(3),
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    shadowColor: AppConstants.COLORS.BLACK, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android,
    height: AppConstants.getDeviceHeight(8),
    width: AppConstants.getDeviceWidth(43.2),
    borderRadius: AppConstants.getDeviceWidth(2),
    backgroundColor: AppConstants.COLORS.APPTHEME,
    marginTop: AppConstants.getDeviceHeight(2),
  },
  txtGenerateReport: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    textAlign: 'center',
    color: AppConstants.COLORS.WHITE,
  },
  //Add Report Modal Design
  AddReportModalContainerView: {
    backgroundColor: AppConstants.COLORS.MODALBACKGROUNDCOLOR,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  AddReportModalCardView: {
    shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 0,
    alignSelf: 'center',
    width: AppConstants.getDeviceWidth(85.87),
    borderColor: AppConstants.COLORS.BORDERCOLOR,
    backgroundColor: AppConstants.COLORS.WHITE,
    borderRadius: AppConstants.getDeviceHeight(1),
  },
  txtAddReport: {
    color: AppConstants.COLORS.TEXTCOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    marginTop: AppConstants.getDeviceHeight(2),
    paddingBottom: AppConstants.getDeviceHeight(3),
    paddingLeft: AppConstants.getDeviceHeight(3),
  },
  ApplyButton: {
    flexDirection: 'row',
    height: AppConstants.getDeviceHeight(8),
    width: AppConstants.getDeviceWidth(79.73),
    borderRadius: AppConstants.getDeviceHeight(1),
    alignSelf: 'center',
    backgroundColor: AppConstants.COLORS.APPTHEME,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: AppConstants.getDeviceHeight(2),
  },
  txtApplyButton: {
    color: AppConstants.COLORS.WHITE,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
  },

 
//AddReport Popup Design
  AddReportModalView: {
    backgroundColor: AppConstants.COLORS.WHITE,
    borderRadius: AppConstants.getDeviceHeight(1),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: AppConstants.getDeviceWidth(82.87),
  },
  txtTarget: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color: AppConstants.COLORS.TEXTCOLOR,
    paddingBottom: AppConstants.getDeviceHeight(3),
    paddingLeft: AppConstants.getDeviceHeight(2),
  },

  //Add Report Modal close Icon Design
  CloseIcon: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: AppConstants.getDeviceHeight(7),
    position: 'absolute',
    top: AppConstants.getDeviceHeight(-3),
    right: AppConstants.getDeviceWidth(-3),
    height: AppConstants.getDeviceHeight(7),
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  SelectIconView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: AppConstants.getDeviceHeight(5),
    position: 'absolute',
    top: AppConstants.getDeviceHeight(-0.5),
    right: AppConstants.getDeviceWidth(-0.5),
    height: AppConstants.getDeviceHeight(5),
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  //Select Design Layout Modal Design
  SelectDesignModalContainerView: {
    backgroundColor: AppConstants.COLORS.MODALBACKGROUNDCOLOR,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },

  SelectDesignModalCardView: {
    alignSelf: 'center',
    // height: AppConstants.getDeviceHeight(100),
    width: AppConstants.getDeviceWidth(90),
    height: AppConstants.getDeviceHeight(80),
    backgroundColor: '#fff',
    borderColor: AppConstants.COLORS.BORDERCOLOR,
    backgroundColor: AppConstants.COLORS.WHITE,
    borderRadius: AppConstants.getDeviceHeight(1),
  },
  txtselectDesign: {
    color: AppConstants.COLORS.TEXTCOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    marginTop: AppConstants.getDeviceHeight(2),
    paddingLeft: AppConstants.getDeviceHeight(3),
  },
  SelectDesignLayoutsCardView: {
    shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5,
    borderRadius: AppConstants.getDeviceHeight(1),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: AppConstants.getDeviceHeight(2),
    marginBottom: AppConstants.getDeviceHeight(2),
    width: AppConstants.getDeviceWidth(80),
  },
  ApplyButton2: {
    flexDirection: 'row',
    height: AppConstants.getDeviceHeight(8),
    width: AppConstants.getDeviceWidth(86),
    borderRadius: AppConstants.getDeviceHeight(1),
    alignSelf: 'center',
    backgroundColor: AppConstants.COLORS.APPTHEME,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: AppConstants.getDeviceHeight(2),
    marginBottom: AppConstants.getDeviceHeight(2),
  },
  ImageReferEarnStyle: {
    height: AppConstants.getDeviceHeight(18.15),
    width: AppConstants.getDeviceWidth(68),
    flex: 1,
    alignSelf: 'center',
    marginBottom: AppConstants.getDeviceHeight(2),
  }, 
};
