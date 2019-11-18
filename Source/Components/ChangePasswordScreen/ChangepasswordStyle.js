import * as AppConstants from '../Helper/AppConstants';
export default {
  mainContainer: {
    flex: 1,
  },
  Container: {
    marginTop: AppConstants.getDeviceHeight(4.93),
    width: AppConstants.getDeviceWidth(91.47),
    alignSelf: 'center',
  },
  txtchangepwdtitle:{
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS24),
    color: AppConstants.COLORS.TEXTCOLOR1,
  },
  txtsignintitle:{
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
    color: AppConstants.COLORS.TEXTCOLOR2,
  },
  lockiconview: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:AppConstants.COLORS.WHITE,
    // marginTop: AppConstants.getDeviceHeight(3.3),

},
  txtInputView1: {
  
    // marginTop: AppConstants.getDeviceHeight(3.3),
    width: AppConstants.getDeviceWidth(91.47),
    alignSelf: 'center',
  },
  txtInputView2: {
    width: AppConstants.getDeviceWidth(91.47),
    alignSelf: 'center',
  },
  icon: {
    position: 'absolute',
    borderLeftWidth: 1,
    paddingLeft: AppConstants.getDeviceWidth(2.50),
    borderLeftColor: AppConstants.COLORS.TEXTFIELDBASECOLOR,
    top: AppConstants.getDeviceHeight(3.67),
    right: AppConstants.getDeviceWidth(2.67),
    color:AppConstants.COLORS. TEXTFIELDBASECOLOR,

  
  },
  btnSignupView: {
    marginTop: AppConstants.getDeviceHeight(3.69),
    alignSelf: 'center',
  },
  
lockIcon: {

  position: 'absolute',
  top: 33,
  left:  AppConstants.getDeviceHeight(1),
   
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    
   
},
};
