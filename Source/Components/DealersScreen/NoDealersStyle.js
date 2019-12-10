import * as AppConstants from '../Helper/AppConstants';
export default {
    mainContainer: {
      flex: 1,
    },
    logoContainer: {
        marginTop: AppConstants.getDeviceHeight(10),
        // height: AppConstants.getDeviceHeight(7.2),
        // width: AppConstants.getDeviceWidth(61.33),
        alignSelf: 'center',
      },
      logo: {
        height: AppConstants.getDeviceHeight(25),
        width: AppConstants.getDeviceWidth(75),
      },
      txtNoDealertitle: {
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
        color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
        textAlign:'center',
      },
      btnAddDealerView: {
        marginTop: AppConstants.getDeviceHeight(3.69),
        alignSelf: 'center',
      },
}