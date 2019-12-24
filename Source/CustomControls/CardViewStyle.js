import * as AppConstants from "../Helper/AppConstants";
export default
    {
        CardViewColumn: {
            backgroundColor: AppConstants.COLORS.WHITE,
            borderColor: AppConstants.COLORS.LINEARGRADIENT_1,
            borderRadius: AppConstants.getDeviceHeight(1),
            borderWidth: AppConstants.getDeviceHeight(0.2),
            paddingVertical: AppConstants.getDeviceHeight(2),
            paddingHorizontal: AppConstants.getDeviceWidth(2),
            width: AppConstants.getDeviceWidth(90),
            marginTop: AppConstants.getDeviceHeight(2),
            alignSelf: 'center',
            justifyContent: 'center',
        },
        CardViewRow: {
            flexDirection: 'row',
            backgroundColor: AppConstants.COLORS.WHITE,
            borderColor: AppConstants.COLORS.LINEARGRADIENT_1,
            borderRadius: AppConstants.getDeviceHeight(1),
            borderWidth: AppConstants.getDeviceHeight(0.2),
            paddingVertical: AppConstants.getDeviceHeight(2),
            paddingHorizontal: AppConstants.getDeviceWidth(2),
            width: AppConstants.getDeviceWidth(90),
            marginTop: AppConstants.getDeviceHeight(2),
            alignSelf: 'center',
            alignItems: 'center',
        },
        CardViewCustom:{
            // backgroundColor:props.backgroundColor,
            // borderColor: AppConstants.COLORS.LINEARGRADIENT_1,
            // borderRadius: AppConstants.getDeviceHeight(1),
            // borderWidth: AppConstants.getDeviceHeight(0.2),
            paddingVertical: AppConstants.getDeviceHeight(2),
            paddingHorizontal: AppConstants.getDeviceWidth(2),
            width: AppConstants.getDeviceWidth(90),
            marginTop: AppConstants.getDeviceHeight(2),
            alignSelf: 'center',
            alignItems: 'center',
        }
    }