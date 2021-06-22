import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
  },
  tBarcodeCamera: {
    flex: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppConstants.COLORS.WHITE,
  },
  btnOk: {
    ...Platform.select({
      ios: {
        bottom: AppConstants.getDeviceHeight(10),
      },
      android: {
        bottom: AppConstants.getDeviceHeight(10),
      },
    }),
    width: AppConstants.getDeviceWidth(100),
    height: AppConstants.getDeviceHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppConstants.COLORS.TABACTIVE,
    position: 'absolute',
  },
  txtSavebtn: {
    textAlign: 'center',
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    color: AppConstants.COLORS.WHITE,
    fontFamily: AppConstants.FONTFAMILY.fontFamily_5,
  },
};
