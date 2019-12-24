import * as AppConstants from '../Helper/AppConstants';

export default {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cardView: {
    backgroundColor: AppConstants.COLORS.APPTHEME,
    borderBottomRightRadius: AppConstants.getDeviceHeight(3),
    borderBottomLeftRadius: AppConstants.getDeviceHeight(3),
    alignSelf: 'center',
    width: AppConstants.getDeviceWidth(100),
    elevation: 0,
  },
  txtReferEarn: {
    textAlign: 'center',
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS24),
    color: AppConstants.COLORS.WHITE,
  },
  ImageReferEarnStyle: {
    height: AppConstants.getDeviceHeight(17.79),
    width: AppConstants.getDeviceWidth(63.94),
    alignSelf: 'center',
  },
  txtInviteFriend: {
    textAlign: 'center',
    width: AppConstants.getDeviceWidth(82.93),
    alignSelf: 'center',
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    marginTop: AppConstants.getDeviceHeight(1.97),
    color: AppConstants.COLORS.WHITE,
    marginBottom: AppConstants.getDeviceHeight(2.5),
  },
  txtCopyShare: {
    paddingTop: AppConstants.getDeviceHeight(4.43),
    paddingBottom: AppConstants.getDeviceHeight(2.83),
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    textAlign: 'center',
    width: AppConstants.getDeviceWidth(82.93),
    marginTop: AppConstants.getDeviceHeight(1.97),
    color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
  },
  DummyReferralViewCode: {
    marginBottom: AppConstants.getDeviceHeight(2.63),
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    shadowColor: AppConstants.COLORS.BLACK, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android,
    height: AppConstants.getDeviceHeight(8),
    width: AppConstants.getDeviceWidth(91.47),
    borderRadius: AppConstants.getDeviceWidth(2),
    backgroundColor: AppConstants.COLORS.VIEWCOLOR,
  },
  txtDummyReferralCode: {
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    textAlign: 'center',
    color: AppConstants.COLORS.TEXTCOLOR,
  },
};
