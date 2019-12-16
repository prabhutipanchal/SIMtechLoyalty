import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    // backgroundColor: '#E4EEFF',
  },
  modalcontainerView: {
    backgroundColor: AppConstants.COLORS.MODALBACKGROUNDCOLOR,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  modalMainView: {
    shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5,
    alignSelf: 'center',
    paddingBottom: AppConstants.getDeviceHeight(4),
    // height: AppConstants.getDeviceHeight(56.87),
    width: AppConstants.getDeviceWidth(89.33),
    borderColor: AppConstants.COLORS.BORDERCOLOR,
    backgroundColor: AppConstants.COLORS.WHITE,
    borderRadius: AppConstants.getDeviceHeight(1),
  },
  searchbarFilterMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: AppConstants.getDeviceWidth(89.33),
    backgroundColor: AppConstants.COLORS.WHITE,
    borderColor: AppConstants.COLORS.VIEWCOLOR,
    borderBottomWidth: AppConstants.getDeviceHeight(0.2),
    borderTopRightRadius: AppConstants.getDeviceHeight(1),
    borderTopLeftRadius: AppConstants.getDeviceHeight(1),
  },

  SearchIconView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: AppConstants.getDeviceWidth(14),
  },
  SearchIconStyle: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS25),
    color: AppConstants.COLORS.LIGHTGRAY,
  },
  txtSearch: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
  },
  SearchCancelIconView: {
    width: AppConstants.getDeviceWidth(12),
    justifyContent: 'center',
    borderRightWidth: AppConstants.getDeviceHeight(0.2),
    borderRightColor: AppConstants.COLORS.VIEWCOLOR,
    marginTop: AppConstants.getDeviceHeight(0.9),
    marginBottom: AppConstants.getDeviceHeight(0.9),
    // paddingBottom: AppConstants.getDeviceHeight(2),
  },
  SearchCancelIconStyle: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS25),
    color: AppConstants.COLORS.GOOGLE_BUTTON,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    paddingRight: AppConstants.getDeviceWidth(3),
  },
  filiterIconStyle: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS22),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
  filiterModalIconStyle: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS22),
    color: AppConstants.COLORS.APPTHEME,
  },
  sliderView: {
    alignSelf: 'center',
    width: AppConstants.getDeviceWidth(78),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: AppConstants.getDeviceHeight(1),
    marginBottom: AppConstants.getDeviceHeight(1),
  },
  txtFiliterProductBy: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTCOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
  },
  NameView: {
    width: AppConstants.getDeviceWidth(80),
    alignSelf: 'center'
  },
  PickerView: {
    alignSelf: 'center',
    width: AppConstants.getDeviceWidth(84),
    borderBottomWidth: AppConstants.getDeviceHeight(0.2),
    borderBottomColor: AppConstants.COLORS.DROPDOWNBORDERBOTTOMCOLOR,
    
  },
  PickerStyle: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },

  txtsliderprice: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
  txtslidervalue: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color: AppConstants.COLORS.TEXTCOLOR,
  },
  txtminvalue: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS12),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
  txtmaxvalue: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS12),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
  FilterButton: {
    flexDirection: 'row',
    height: AppConstants.getDeviceHeight(8),
    width: AppConstants.getDeviceWidth(79.73),
    borderRadius: AppConstants.getDeviceHeight(1),
    alignSelf: 'center',
    backgroundColor: AppConstants.COLORS.APPTHEME,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: AppConstants.getDeviceHeight(3),
  },
  txtFilterButton: {
    color: AppConstants.COLORS.WHITE,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
  },
  searchbarMainView: {
    marginTop: AppConstants.getDeviceHeight(1),
    shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: AppConstants.getDeviceWidth(89.27),
    backgroundColor: AppConstants.COLORS.WHITE,
    borderColor: AppConstants.COLORS.BORDERCOLOR,
    borderRadius: AppConstants.getDeviceHeight(1),
    borderWidth: AppConstants.getDeviceHeight(0.1),
  },
  SearchTextView: {
    justifyContent: 'center',
    width: AppConstants.getDeviceWidth(51.93),
    // paddingLeft: AppConstants.getDeviceWidth(1),
  },
  searchbarView: {
    flexDirection: 'row',
    width: AppConstants.getDeviceWidth(47.93),
  },
  mainCardView: {
    backgroundColor: AppConstants.COLORS.WHITE,
    borderRadius: AppConstants.getDeviceHeight(1),
    shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5,
    paddingTop: AppConstants.getDeviceHeight(2.85),
    marginTop: AppConstants.getDeviceHeight(2),
    alignSelf: 'center',
    width: AppConstants.getDeviceWidth(89.33),
  },
  SalesNoView: {
    width: AppConstants.getDeviceWidth(23),
    paddingBottom: AppConstants.getDeviceHeight(1),
    borderBottomLeftRadius: AppConstants.getDeviceHeight(1),
    borderTopRightRadius: AppConstants.getDeviceHeight(1),
    backgroundColor: AppConstants.COLORS.VIEWCOLOR,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    position: 'absolute',
    top: AppConstants.getDeviceHeight(0),
  },
  txtSalesNo: {
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS12),
  },
  Container: {
    flexDirection: 'row',
    width: AppConstants.getDeviceWidth(77),
    alignSelf: 'center',
  },
  txtproductName: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color: AppConstants.COLORS.APPTHEME,
  },
  txtDescription: {
    color: AppConstants.COLORS.TEXTCOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    marginTop: AppConstants.getDeviceHeight(1.48),
    marginBottom: AppConstants.getDeviceHeight(1.48),

  },
  txtproductType: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    paddingBottom: AppConstants.getDeviceHeight(1.85),
  },
  SalesViewStyle: {
    flexDirection: 'row',
    borderTopColor: AppConstants.COLORS.TOPBORDERCOLOR,
    borderTopWidth: AppConstants.getDeviceWidth(0.3),
  },
  TouchSalesButton: {
    flexDirection: 'row',
    width: AppConstants.getDeviceWidth(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: AppConstants.getDeviceWidth(0.3),
    borderColor: AppConstants.COLORS.TOPBORDERCOLOR,
    marginTop: AppConstants.getDeviceHeight(0.5),
    marginBottom: AppConstants.getDeviceHeight(0.5),
    paddingBottom: AppConstants.getDeviceHeight(1.85),
  },
  txtSales: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
  txtamount: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTCOLOR,
  },
  TouchPriceButton: {
    flexDirection: 'row',
    width: AppConstants.getDeviceWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: AppConstants.getDeviceHeight(0.5),
    marginBottom: AppConstants.getDeviceHeight(0.5),
    paddingBottom: AppConstants.getDeviceHeight(1.85),

  },
  txtPrice: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },

  txtRupees: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTCOLOR,
  },
}
