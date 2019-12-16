
import * as AppConstants from '../Helper/AppConstants';
export default
  {
    mainContainer: {
      flex: 1,
    },
    txtBusinessDetail: {
      fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS24),
      color: AppConstants.COLORS.TEXTCOLOR,
      marginTop: AppConstants.getDeviceHeight(2),
      paddingLeft: AppConstants.getDeviceWidth(4),
    },
    txtInputView: {
      width: AppConstants.getDeviceWidth(91.47),
      paddingLeft: AppConstants.getDeviceWidth(4),
    },
    btnAddBillingAddress: {
      marginTop: AppConstants.getDeviceHeight(3.69),
      marginBottom: AppConstants.getDeviceHeight(3.69),
      alignSelf: 'center',
    },
    txtContactCommonStyle: {
      fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
      color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
      marginTop: AppConstants.getDeviceHeight(2),
    },
    LegalandStoreCommonView: {
      marginTop: AppConstants.getDeviceHeight(3),
      paddingLeft: AppConstants.getDeviceWidth(4),
      paddingBottom: AppConstants.getDeviceHeight(2),
    },
    txtLegalDocumentsStyle: {
      fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
      color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    },
    LegalCardView: {
      backgroundColor: AppConstants.COLORS.WHITE,
      borderRadius: AppConstants.getDeviceHeight(1),
      shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      elevation: 5,
      paddingTop: AppConstants.getDeviceHeight(2.85),
      paddingBottom: AppConstants.getDeviceHeight(2.85),
      marginTop: AppConstants.getDeviceHeight(2),
      alignSelf: 'center',
      width: AppConstants.getDeviceWidth(89.33),
      justifyContent: 'space-between',
      paddingHorizontal: AppConstants.getDeviceWidth(3),
      flexDirection: 'row',
    },
    txtLegalCommonStyle: {
      color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
      fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
      fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    },
  }