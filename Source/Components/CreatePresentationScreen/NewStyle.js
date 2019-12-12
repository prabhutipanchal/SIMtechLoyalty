import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  txtInputView: {
    width: AppConstants.getDeviceWidth(91.47),
    margin: AppConstants.getDeviceWidth(3),
  },
  btnDesignPresentationView: {
    marginTop: AppConstants.getDeviceHeight(1),
    marginBottom: AppConstants.getDeviceHeight(1),
    alignSelf: 'center',
  },
  ReportsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight: AppConstants.getDeviceWidth(6),
    paddingLeft: AppConstants.getDeviceWidth(6.5),
    paddingBottom: AppConstants.getDeviceHeight(1),
    marginTop: AppConstants.getDeviceHeight(3),
  },
  txtReports: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    color: AppConstants.COLORS.TEXTCOLOR,
    paddingBottom: AppConstants.getDeviceHeight(1),
  },
  txtDescription: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS13),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,

  },
  PayoutView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  CardView: {
    marginTop: AppConstants.getDeviceHeight(1),
    marginBottom: AppConstants.getDeviceHeight(1),
    backgroundColor: AppConstants.COLORS.WHITE,
    borderColor: AppConstants.COLORS.REPORTSBORDERCOLOR,
    borderWidth: AppConstants.getDeviceHeight(0.1),
    paddingTop: AppConstants.getDeviceHeight(2.85),
    paddingBottom: AppConstants.getDeviceHeight(2.85),
    width: AppConstants.getDeviceWidth(91.47),
    justifyContent: 'center',
  },
  txtPayout: {
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),

  },
  txtProduct: {
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
  },
  txtMarket: {
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),

  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  SaveTemplateViewCode: {
    marginBottom: AppConstants.getDeviceHeight(2.63),
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
    marginBottom: AppConstants.getDeviceHeight(2.63),
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
  //modal
  modalcontainerView: {
    backgroundColor: AppConstants.COLORS.MODALBACKGROUNDCOLOR,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  modalMainView: {
    // shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
    // shadowOffset: { height: 1, width: 1 }, // IOS
    // shadowOpacity: 1, // IOS
    // shadowRadius: 1, //IOS
    // elevation: 5,
    alignSelf: 'center',
    // height: AppConstants.getDeviceHeight(86),
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

  //FlatList Design

  mainCardView: {
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
    marginTop: AppConstants.getDeviceHeight(3),
    paddingBottom: AppConstants.getDeviceHeight(2),
    paddingLeft: AppConstants.getDeviceHeight(2),

  },

  //close Design
  CloseView: {
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
  SelectView: {
    // borderWidth: 1,
    // borderColor: 'rgba(0,0,0,0.2)',
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
  //Modal2 Design
  SecondmodalcontainerView: {
    backgroundColor: AppConstants.COLORS.MODALBACKGROUNDCOLOR,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },

  SecondmodalMainView: {
    alignSelf: 'center',
    height: AppConstants.getDeviceHeight(100),
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
    marginTop: AppConstants.getDeviceHeight(5),
    paddingLeft: AppConstants.getDeviceHeight(3),
  },
  SecondFlatListView: {
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
    marginTop: 10,
    marginBottom: 10,
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
    marginBottom: AppConstants.getDeviceHeight(1),
  },
  ImageReferEarnStyle: {
    height: AppConstants.getDeviceHeight(18.15),
    width: AppConstants.getDeviceWidth(68),
    flex: 1,
    alignSelf: 'center',
    marginBottom: AppConstants.getDeviceHeight(2),
  },
};
