import * as AppConstants from '../Helper/AppConstants';
export default{
    mainContainer: {
        flex: 1,
        alignItems: 'center',
      },
      headerContainer: {
        backgroundColor: AppConstants.COLORS.APPTHEME,
        // marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30%',
      }, 
      drawerNavStyle: {
        width: '100%',
        height: 50,
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderBottomColor: AppConstants.COLORS.BORDERBOTTOMCOLOR,
        // alignItems: 'center',
        justifyContent: 'center',
      },
    
      headerText: {
        color: AppConstants.COLORS.WHITE,
      },
      screentxtcolor:{
        color: AppConstants.COLORS.WHITE,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
        left:  AppConstants.getDeviceHeight(5),
      },
      screenContainer: {
        // paddingTop: 20,
        backgroundColor: AppConstants.COLORS.APPTHEME,
        width: '100%',
        height: '100%',
      },
      screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      },
      screenTextStyle: {
        fontSize: 20,
        marginLeft: 20,
        textAlign: 'center',
      },
      selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff',
      },
      activeBackgroundColor: {
        backgroundColor: 'grey',
      },
      KeyIcon: {
        position: 'absolute',
        top: 15,
        left:  AppConstants.getDeviceHeight(1),
    
      },
    }