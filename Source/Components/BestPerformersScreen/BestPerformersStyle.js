import * as AppConstants from '../Helper/AppConstants';

export default {
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    cardView: {
        alignSelf: 'center',
        width: AppConstants.getDeviceWidth(100),
        elevation: 0,
    },
    ImgBestPerformStyle: {
        height: AppConstants.getDeviceHeight(14),
        width: AppConstants.getDeviceWidth(58),
        alignSelf: 'center',
        marginBottom: AppConstants.getDeviceHeight(2),
    },
    ImagePhotoView:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: AppConstants.getDeviceWidth(23),
        borderBottomLeftRadius: AppConstants.getDeviceHeight(1),
        borderTopRightRadius: AppConstants.getDeviceHeight(1),
        borderTopLeftRadius: AppConstants.getDeviceHeight(1),
        borderBottomRightRadius: AppConstants.getDeviceHeight(1),
        marginBottom: AppConstants.getDeviceHeight(1),
        marginLeft: AppConstants.getDeviceHeight(1.13),
        marginTop: AppConstants.getDeviceHeight(2),
    },
    ImagePhotoStyle: {
        height: AppConstants.getDeviceHeight(11.58),
        width: AppConstants.getDeviceWidth(25.07),
        alignSelf: 'center',  
    },
    DistributorView: {
        width: AppConstants.getDeviceWidth(23),
        borderBottomLeftRadius: AppConstants.getDeviceHeight(1),
        borderTopRightRadius: AppConstants.getDeviceHeight(1),
        backgroundColor: AppConstants.COLORS.VIEWCOLOR,
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        position: 'absolute',
        top: AppConstants.getDeviceHeight(0),
        paddingBottom: AppConstants.getDeviceHeight(1),
    },
    txtDistributor: {
        textAlign: 'right',
        color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS12),
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    },
    PersonNameViewstyle: {
        flexDirection: 'row',
        width: AppConstants.getDeviceWidth(78.85),
        alignSelf: 'center',
        marginLeft: AppConstants.getDeviceHeight(28),
    },
    txtPersonName: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
        color: AppConstants.COLORS.APPTHEME,
    },
    txtDesignation: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        color: AppConstants.COLORS.TEXTCOLOR,
        marginTop: AppConstants.getDeviceHeight(1.48),
        marginBottom: AppConstants.getDeviceHeight(1.48),
    },
    txtTotalSales: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
        paddingBottom: AppConstants.getDeviceHeight(1.85),
    },
    txtAmount: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS14),
        color: AppConstants.COLORS.TEXTCOLOR,
        paddingBottom: AppConstants.getDeviceHeight(1.85),       
    },
    btnsigninView: {
        alignSelf: 'center',
      },
    
}