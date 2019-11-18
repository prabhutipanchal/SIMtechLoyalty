import * as AppConstants from '../Helper/AppConstants';
export default {
    mainContainer: {
      flex: 1,
    },
    logoContainer: {
        marginTop: AppConstants.getDeviceHeight(12),
        height: AppConstants.getDeviceHeight(7.2),
        width: AppConstants.getDeviceWidth(61.33),
        alignSelf: 'center',
      },
      logo: {
        height: AppConstants.getDeviceHeight(7.2),
        width: AppConstants.getDeviceWidth(61.33),
      },
      txtNoDealertitle: {
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
        color: AppConstants.COLORS.TEXTCOLOR1,
        textAlign:'center',
      },
      btnAddDealerView: {
        marginTop: AppConstants.getDeviceHeight(3.69),
        alignSelf: 'center',
      },
}