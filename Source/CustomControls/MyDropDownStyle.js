import * as AppConstants from "../Components/Helper/AppConstants";
export default
    {
        CommonwithBorder: {
            borderColor: AppConstants.COLORS.LINEARGRADIENT_1,
            borderRadius: AppConstants.getDeviceHeight(1),
            borderWidth: AppConstants.getDeviceHeight(0.2),
            paddingHorizontal: AppConstants.getDeviceWidth(2),
            width: AppConstants.getDeviceWidth(90),
            marginTop: AppConstants.getDeviceHeight(2),
            alignSelf: 'center',
            justifyContent: 'center',
        },
        CommonwithoutBorder: {
            paddingHorizontal: AppConstants.getDeviceWidth(2),
            width: AppConstants.getDeviceWidth(91.47),
            marginTop: AppConstants.getDeviceHeight(1),
            alignSelf: 'center',
            justifyContent: 'center', 
        },
        commonpickerStyle: {
            width: AppConstants.getDeviceWidth(80),
            alignSelf: 'center',
            justifyContent: 'center',
            marginLeft: AppConstants.getDeviceHeight(5),
        },
    }