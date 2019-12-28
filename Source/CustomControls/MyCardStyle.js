import * as AppConstants from "../Components/Helper/AppConstants";
export default
    {

        DealersAndProductsCardViewCustom: {
            backgroundColor: AppConstants.COLORS.WHITE,
            borderRadius: AppConstants.getDeviceHeight(1),
            shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 5,
            paddingTop: AppConstants.getDeviceHeight(2.85),
            marginTop: AppConstants.getDeviceHeight(2),
            marginBottom: AppConstants.getDeviceHeight(2),
            alignSelf: 'center',
            width: AppConstants.getDeviceWidth(89.33),
        },
        DashboardCardViewCustom: {
            backgroundColor: AppConstants.COLORS.WHITE,
            borderRadius: AppConstants.getDeviceHeight(1),
            shadowColor: AppConstants.COLORS.TEXTFIELDBASECOLOR, // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 5,
            marginTop: AppConstants.getDeviceHeight(3),
            marginBottom: AppConstants.getDeviceHeight(3),
            paddingTop: AppConstants.getDeviceHeight(1),
            paddingBottom: AppConstants.getDeviceHeight(1.85),
            width: AppConstants.getDeviceWidth(42.13),
            justifyContent: 'center',
        },
        MerchandiseCardViewCustom: {
            backgroundColor: AppConstants.COLORS.WHITE,
            borderRadius: AppConstants.getDeviceHeight(1),
            shadowColor: AppConstants.COLORS.TEXTFIELDBASECOLOR, // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 5,
            paddingTop: AppConstants.getDeviceHeight(2.85),
            paddingBottom: AppConstants.getDeviceHeight(2.85),
            width: AppConstants.getDeviceWidth(41.87),
            justifyContent: 'center',
        },
        ProductDetailCardViewCustom: {
            backgroundColor: AppConstants.COLORS.WHITE,
            borderRadius: AppConstants.getDeviceHeight(1),
            shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 5,
            paddingBottom: AppConstants.getDeviceHeight(2.85),
            marginTop: AppConstants.getDeviceHeight(2),
            marginRight: AppConstants.getDeviceHeight(1),
            marginLeft: AppConstants.getDeviceHeight(2),
            flex: 1,
            flexDirection: 'column',
        },
        NoticationCardViewCustom: {
            backgroundColor: AppConstants.COLORS.WHITE,
            borderRadius: AppConstants.getDeviceHeight(1),
            shadowColor: AppConstants.COLORS.BORDERCOLOR, // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 5,
            paddingTop: AppConstants.getDeviceHeight(2.85),
            paddingBottom: AppConstants.getDeviceHeight(2.85),
            marginTop: AppConstants.getDeviceHeight(1),
            marginBottom: AppConstants.getDeviceHeight(3),
            alignSelf: 'center',
            width: AppConstants.getDeviceWidth(89.33),
        },
    }