import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
    backgroundColor: '#E4EEFF',
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  DealerTypeView: {
    width: AppConstants.getDeviceWidth(23),
    borderBottomLeftRadius: AppConstants.getDeviceHeight(1),
    borderTopRightRadius: AppConstants.getDeviceHeight(1),
    backgroundColor: AppConstants.COLORS.TYPECOLOR,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    position: 'absolute',
    top: AppConstants.getDeviceHeight(0),
    paddingBottom: AppConstants.getDeviceHeight(1),
  },
  txtDealerType: {
    textAlign: 'right',
    color: AppConstants.COLORS.WHITE,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS12),
  },
  BusinessViewstyle: {
    flexDirection: 'row',
    width: AppConstants.getDeviceWidth(78),
    alignSelf: 'center',
  },
  txtbusinessName: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color: AppConstants.COLORS.APPTHEME,

  },
  txtPersonName: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color: AppConstants.COLORS.TEXTCOLOR,
    marginTop: AppConstants.getDeviceHeight(1.48),
    marginBottom: AppConstants.getDeviceHeight(1.48),

  },
  LocationView: {
    width: AppConstants.getDeviceWidth(80.5),
    paddingBottom: AppConstants.getDeviceHeight(1.85),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  LocationIconStyle:{
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS20),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
  txtlocation: {
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
  loyaltyViewStyle: {
    flexDirection: 'row',
    width: AppConstants.getDeviceWidth(89.33),
    borderTopColor: AppConstants.COLORS.BORDERCOLOR,
    borderTopWidth: AppConstants.getDeviceWidth(0.5),
  },
  TouchLoyalty: {
    flexDirection: 'row',
    width: AppConstants.getDeviceWidth(33.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: AppConstants.getDeviceWidth(0.5),
    borderColor: AppConstants.COLORS.BORDERCOLOR,
     marginTop: AppConstants.getDeviceHeight(1),
     marginBottom: AppConstants.getDeviceHeight(1),
  },
  txtloyalty: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
  TouchAmount: {
    flexDirection: 'row',
    width: AppConstants.getDeviceWidth(33.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: AppConstants.getDeviceHeight(1),
    marginBottom: AppConstants.getDeviceHeight(1),
  },
  txtamount: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
  txtloyaltyAmount: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
  logoContainer: {
    marginTop: AppConstants.getDeviceHeight(10),
    alignSelf: 'center',
  },
  logo: {
    height: AppConstants.getDeviceHeight(25),
    width: AppConstants.getDeviceWidth(75),
  },
  txtNoDealertitle: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    textAlign: 'center',
  },
  btnAddDealerView: {
    marginTop: AppConstants.getDeviceHeight(3.69),
    alignSelf: 'center',
  },
};
