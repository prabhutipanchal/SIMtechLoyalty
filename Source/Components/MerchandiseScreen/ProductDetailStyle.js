import * as AppConstants from '../Helper/AppConstants';
export default {
  Maincontainer: {
    flex: 1,
  },
  ProductNameView: {
    width: AppConstants.getDeviceWidth(88),
    alignSelf: 'center',
  },
  txtProductName: {
    color: AppConstants.COLORS.TEXTCOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    paddingBottom: AppConstants.getDeviceHeight(1),
  },
  txtProductType: {
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
  },
  SwiperCardContainerView: {
    borderBottomRightRadius: AppConstants.getDeviceHeight(3),
    borderBottomLeftRadius: AppConstants.getDeviceHeight(3),
    backgroundColor: AppConstants.COLORS.APPTHEME,
  },
  SwiperCardView: {
    alignSelf: 'center',
    elevation: 0,
    width: AppConstants.getDeviceWidth(100),
    height: AppConstants.getDeviceHeight(40),
    backgroundColor: AppConstants.COLORS.WHITE,
    borderBottomRightRadius: AppConstants.getDeviceHeight(3),
    borderBottomLeftRadius: AppConstants.getDeviceHeight(3),
  },
  ImgContainerView: {
    alignItems: 'center',
  },
  Imagecontainer: {
    width: AppConstants.getDeviceWidth(60),
    height: AppConstants.getDeviceWidth(50),
    marginTop: AppConstants.getDeviceHeight(2),
  },
  cardView: {
    backgroundColor: AppConstants.COLORS.APPTHEME,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomRightRadius: AppConstants.getDeviceHeight(3),
    borderBottomLeftRadius: AppConstants.getDeviceHeight(3),
    alignSelf: 'center',
    width: AppConstants.getDeviceWidth(100),
    paddingTop: AppConstants.getDeviceHeight(2.34),
  },
  AmountLoyaltyPointsView: {
    width: AppConstants.getDeviceWidth(30),
    alignSelf: 'center'
  },
  txtAmount: {
    color: AppConstants.COLORS.WHITE,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS24),
  },
  txtLoyaltyPoints: {
    color: AppConstants.COLORS.WHITE,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    paddingBottom: AppConstants.getDeviceHeight(2.71),
  },
  SelectButtonView: {
    alignSelf: 'center',
    shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    // elevation: 5, // Android,
    height: AppConstants.getDeviceHeight(7.5),
    width: AppConstants.getDeviceWidth(32.27),
    borderRadius: AppConstants.getDeviceWidth(2),
    backgroundColor: AppConstants.COLORS.WHITE,
    marginBottom: AppConstants.getDeviceHeight(2),
  },
  txtSelect: {
    color: AppConstants.COLORS.TEXTCOLOR,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    alignSelf: 'center',
    paddingTop: AppConstants.getDeviceHeight(2),
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
  },
  DescriptionView:{
    width: AppConstants.getDeviceWidth(90),
    marginTop: AppConstants.getDeviceHeight(3.2), 
    alignSelf: 'center'
  },
  txtDescription: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    color: AppConstants.COLORS.TEXTCOLOR,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS24),
  },
  ProductDescriptionView:{
    margin: AppConstants.getDeviceHeight(2), 
    alignSelf: 'center'
  },
  txtproductDescription:{
    color: AppConstants.COLORS.TEXTCOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
  },
  ParagraphView:{
    margin: AppConstants.getDeviceHeight(3),
    alignSelf: 'center' 
  },
  txtParagraph:{
    color: AppConstants.COLORS.TEXTCOLOR,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
  }
};
