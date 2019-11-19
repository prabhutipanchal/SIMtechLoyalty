import React from 'react';
import {
  Dimensions,
  Platform,
  StatusBar,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
// const tracker = firebase.analytics();
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
// var Fabric = require('react-native-fabric');
// var {Crashlytics} = Fabric;
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export {scale, verticalScale, moderateScale};

// export const FIREBASEPASSWORD = '123456';
// export const DeviceID = DeviceInfo.getUniqueID();
// export const DeviceName = DeviceInfo.getDeviceName();
export const ID = 'UserID';
export const USERNAME = 'UserName';
export const SRNO = 'sequenceno';
export const Name = 'studentname';
export const AppName = 'Medakrt';
export const ProfilePicPathPrefix = Platform.OS == 'ios' ? '' : 'file:///';
export const ProfilePicPath =
  RNFetchBlob.fs.dirs.DocumentDir + '/ProfilePics/' + global.userid + '.jpg';
export const CheckLogin = '0';
export const SCREENS = {
  //---------------TabBar Screens------------
  ACCOUNT: 'Account',
  MERCH:'Merch',
  DASHBOARD: 'Dashboard',
  EVENTS: 'Events',
  PRODUCT: 'Product',
  //---------------TABBAR SCREENS-------------

  //-------------Stack Navigation Screens----
  INTRO: 'Intro',
  CART: 'Cart',
  SPLASH: 'Splash',
  SETTING: 'Setting',
  LOGIN: 'Login',
  REFERANDINVITE: 'ReferAndInvite',
  FORGOTPASSWORD: 'ForgotPassword',
  OTP: 'OTP',
  CHANGEPASSWORD: 'Changepassword',
  NOTIFICATION:'Notification',
  FAQ:'Faq',
  ANALYTICS:'Analytics',
  ENABLEFACEID:'EnableFaceID',
  TERMASANDCONDITION:'TermsAndCondition',
  CREATEPRESENTATION:'CreatePresentation',
  ADDDEALERS:'AddDealers',
  LOGOUT:'Logout'


  //------------STACK NAVIGATION SCREENS----
};
export const Messages = {
  NOINTERNET: 'No active Internet found',
  NOMOBILENO: 'Please enter Mobile Number',
  ADDEDTOCART: 'Medicine Updated in Cart',
  OTPNOTNUMBER: 'OTP should be Number',
  NOEMAILINVALIDEMAILADDRESS: 'Email Address should be Valid',
  NOPASSWORD: 'Please enter Password',
  NOADDITIONALDETAILS: 'Please write Message',
  NOISSUEIMAGE: 'Please set Atlest One Image',
  PASSWORDNOLENGTH: 'Password length it should be 4 to 20 characters',
  NOUSERNAME: 'Please Enter Username',
  NONEWPASSWORD: 'Please enter New Password',
  NOCONFIRMPASSWORD: 'Please enter Confirm Password',
  PASSWORDSHOULDMATCH: 'New and Confirm Password should match',
  PASSWORDCHANGESUCCESS: 'Password Change Successfully',
  NOOTP: 'Please enter OTP',
  MOBILENOLENGTH: 'Mobile Number should be 10 Digits',
  MOBILENONOTANUMBER: 'Mobile Number should be Digits',
  OTPLENGTH: 'OTP should be 4 Digits',
  OTPNOTANUMBER: 'OTP should be Digits',
  APIERROR: 'Error Processing Data. Please try again',
  EMPTYCART: 'No Medicines added to Cart',
  ERRORSAVINGINDB: 'Error Saving data. Please try again',
  ERRORFETCHINGFROMDB: 'Error Fetching data. Please try again',
  NODATEOFBIRTH: 'Please select Date of Birth',
  NODELIVERYADDRESS: 'Please select Delivery Address',
  NOPATIENT: 'Please select Patient',
  NOHEIGHT: 'Please select Height',
  NOPATIENTNAME: 'Please enter Patient Name',
  NONAME: 'Please enter Name',
  NODATAFORRIFILL: 'Please Select Refill Interval Or Next Delivery Date',
  NOFIRSTNAME: 'Please enter First Name',
  NOLASTNAME: 'Please enter Last Name',
  NOEMAIL: 'Please enter Email Address',
  NORELATIONWITHPATIENT: 'Please enter relation with Patient',
  NOBLOODGROUP: 'Please enter blood group',
  NOWEIGHT: 'Please enter Weight',
  NOMEDICALCONDITIONS: 'Please enter medical condition',
  NOALLERGIES: 'Please enter allergies',
  NOMEDICATIONS: 'Please enter medications',
  NOPROFILEPHOTO: 'Please Choose a Profile Pic',
  NOPRISCRIPTION: 'Please Upload a Prescription',
  GENDAR: 'Please Select Gendar',
  NOFLATNO: 'Please enter Address Line 1',
  NOSTREETNAME: 'Please enter Address Line 2',
  NOCITY: 'Please enter City',
  NOPINCODE: 'Please enter Pincode',
  PINCODELENGTH: 'Pincode should be 6 Digits',
  PINCODENOTANUMBER: 'Pin Code should be Digits',
  SENDMESSAGE: 'Please enter message',
  INVALIDEMAILADDRESS: 'Please enter correct Email Address',
  NOTEARMSCONDITION: 'Please Agree Terms and Conditions',
  SELECTMEDICIINE: 'Please select Medicine',
  SELECTANYONEREMINDER: 'Please set any one Reminder',
  NODOCTORNAME: 'Please enter Doctor Name',
  COPYREFERRALCODE: 'Your Referral Code Copied',
  NOTVALIDDOCTORNAME: 'Please enter valid Doctor Name',
  // NOPROMOCODE:'Please enter Promocode', commented beacuse it's optional...
};
export const COLORS = {
  APP_BG: '#FFF',
  APPTHEME:'#0F58D6',
  RED: '#E00201',
  WHITE: '#FFFFFF',
  BORDERBOTTOMCOLOR:'#144498',
  LIGHTWHITE: '#E9E8E8',
  BLACK: '#000000',
  DARKPINK: '#DD0241',
  INDIGO: '#423B5D',
  PURPLE: '#4A00E0',
  BASECOLOR_1: '#0F58D6',
  TEXTFIELDTEXT:'#0F58D6',
  TEXTFIELDBASECOLOR:'#9CA2AD',
  BASECOLOR_2: '#4A4A4A',
  GOOGLE_BUTTON: '#F05522',
  FACEBOOK_BUTTON: '#2672CB',
  ORANGE: '#F5A623',
  CANCEL: '#AE2B00',
  SKYBLUE: '#4A90E2',
  BORDER_COLOR: '#E7E7E7',
  YELLOW: '#FFF100',
  FORGOTTEXT:'#9CA2AD',
  EDITBUTTON:'#14D60F',
  HOMEICON:'#578AE2',
  TEXTCOLOR:'#4F545C',
 
};
export const SHADOWCOLORS = {
  LOGO_SHADOW: 'rgba(0,0,0,0.3)',
  STATUSBAR: 'rgba(100, 100, 100, 0.0)',
  SIDEMENU_UNDERLINE: 'rgba(0,0,0,0.28)',
  CARD_SHADOW: 'rgba(0,0,0,0.09)',
};
export const FONTSIZE = {
  FS8: 8,
  FS10: 10,
  FS11: 11,
  FS12: 12,
  FS13: 13,
  FS14: 14,
  FS15: 15,
  FS16: 16,
  FS17: 17,
  FS18: 18,
  FS19: 19,
  FS20: 20,
  FS21: 21,
  FS22: 22,
  FS24: 24,
  FS25: 25,
  FS26: 26,
  FS30: 30,
  FS36: 36,
  FS40: 40,
  FS45: 45,
  FS90: 100,
};
export const WEIGHT = {
  FONTWEIGHT: '700',
  FONTWEIGHT_900: '900',
  FONTWEIGHT_500: '500',
};
export const LEBALPEDDING = {
  LEBALPEDDING10: 20,
};
export const LINEHEIGHT = {
  LINEHEIGHT_13: 13,
  LINEHEIGHT_18: 18,
  LINEHEIGHT_21: 21,
  LINEHEIGHT_22: 22,
  LINEHEIGHT_34: 34,
};
export const SHADOWRADIUS = {
  BUTTON_SHADOWRADIUS: 13,
  TEXT_SHADOWRADIUS: 9,
  BUTTON_SHADOWRADIUS_1: 0,
  ELEVATION: 2,
};
export const BORDERRADIUS = {
  BUTTON_BORDERRADIUS: 23,
  CARD_BORDERRADIUS: 11,
  CARD_TOP_BORDERRADIUS: 14,
  IMAGE_BORDERRADIUS: 64,
  ACTIVEBAR_BORDERRADIUS: 21,
  PLAN_BORDERRADIUS: 34,
  DELETE_POPUPRADIUS: 10,
  SLIDER_BORDERRADIUS: 20,
  IMAGE_BORDERRADIUSPROFILEPHOTO: 400,
};
export const RADIUS = {
  TEXTBOXRADIUS: 23,
  BUTTONRADIUS: 11,
  TEXTSHADOW: 9,
  BUTTONSHADOW: 13,
};
export const FONTFAMILY = {
  FONT_FAMILY_1: 'Gotham-Book',
  FONT_FAMILY_1_BOLD: 'Gotham-Bold',
  FONT_FAMILY_2: 'Gotham-Book',
  FONT_FAMILY_2_BOLD: 'Gotham-Bold',
  FONT_FAMILY_3: 'Gotham-Book',
  FONT_FAMILY_3_BOLD: 'Gotham-Bold',
  FONT_FAMILY_4: 'Gotham-Book',
  FONT_FAMILY_4_BOLD: 'Gotham-Bold',
};
export const LETTERSPACING = {
  TOPTEXT: -0.41,
};
export const SHADOWOFFSET = {
  BUTTON_SHADOWOFFSET: {
    wigth: 0,
    height: 5,
  },
  TEXT_SHADOWOFFSET: {
    wigth: 0,
    height: 2,
  },
};

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};

const deviceHeight =
  (Dimensions.get('window').height === 812
    ? 812
    : Dimensions.get('window').height) * 0.01;
const deviceWidth = Dimensions.get('window').width * 0.01;
const statusBarHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height === 812
      ? 40
      : 20
    : StatusBar.currentHeight;

export function getDeviceHeight(heightInPercentage, includeStatusbar) {
  return includeStatusbar
    ? statusBarHeight + deviceHeight * heightInPercentage
    : deviceHeight * heightInPercentage;
}
export function getDeviceWidth(widthInPercentage) {
  return deviceWidth * widthInPercentage;
}

export function isiPhoneX() {
  return Dimensions.get('window').height === 812 ? true : false;
}

//Checking for user is logedin or not
export function checkForUserLogin() {
  return global.userid != '' ? true : false;
}

// export function setScreenName(navigation) {
//   tracker.setCurrentScreen(navigation.state.routeName);
// }

export function logError(error) {
  let Message = '';
  if (typeof error == 'string') {
    Message = error;
  } else {
    Message = error.name ? 'Name : ' + error.name + '\n' : '';
    Message = error.message ? 'Message : ' + error.message + '\n' : '';
    Message = error.stack ? 'Staci : ' + error.stack : '';
  }
  Platform.OS === 'ios'
    ? Crashlytics.recordError(Message)
    : Crashlytics.logException(Message);
}

export function CheckUserProfilePic() {
  // RNFetchBlob.fs.exists(ProfilePicPathPrefix + ProfilePicPath).then((exists) => {
  //     return exists;
  // })
}

export const DownloadProfilePic = URL =>
  new Promise((resolve, reject) => {
    RNFetchBlob.config({
      path: ProfilePicPath,
    })
      .fetch('GET', URL, {})
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });

export function BackButton(navigation) {
  return (
    <Iconss
      onPress={() => navigation.goBack()}
      name="arrow-left"
      style={{
        marginLeft: getDeviceWidth(4),
        marginTop: getDeviceHeight(
          navigation.getParam('header') != null &&
            !navigation.getParam('header')
            ? 5.8
            : 0,
        ),
      }}
      size={moderateScale(FONTSIZE.FS25)}
      color={
        navigation.getParam('showWhiteBackground') ? COLORS.BLACK : COLORS.WHITE
      }
    />
  );
}

export function ShowActivityIndicator() {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="small" color={COLORS.APPTHEME} />
    </View>
  );
}
export const CommonStyles = StyleSheet.create({
  ToastStyle: {
    backgroundColor: COLORS.BLACK,
    width: getDeviceWidth(100),
    height: getDeviceHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },

  ToastTextStyle: {
    color: COLORS.WHITE,
    textAlign: 'center',
    letterSpacing: getDeviceWidth(0.2),
    fontFamily: FONTFAMILY.FONT_FAMILY_1_BOLD,
    fontSize: moderateScale(FONTSIZE.FS12),
  },
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.MEDKARTBACKGROUND,
  },
});
