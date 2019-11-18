/* eslint-disable no-fallthrough */
/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable eqeqeq */
// /* eslint-disable no-fallthrough */
// /* eslint-disable react-native/no-inline-styles */
import { View, Platform, TouchableOpacity, Easing, Animated } from 'react-native';
import { createAppContainer } from 'react-navigation';
import drawerContentComponents from './Source/Components/AccountScreen/drawerContentComponents';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import * as AppConstants from './Source/Components/Helper/AppConstants';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import DIcons from "react-native-vector-icons/FontAwesome5";
import SearchIcons from 'react-native-vector-icons/Ionicons';
// import Chat from './Source/Components/ChatScreen/Chat';
// import CalendarIcon from 'react-native-vector-icons/FontAwesome';
import Login from './Source/Components/LoginScreen/Login';
import Changepassword from './Source/Components/ChangePasswordScreen/Changepassword';
import Dashboard from './Source/Components/DashboardScreen/Dashboard';
import Initial from './Source/Components/DashboardScreen/Initial';
// import Account from './Source/Components/AccountScreen/Account';
import Setting from './Source/Components/SettingsScreen/Setting';
import Intro from './Source/Components/AppintroScreen/Intro';
import OTP from './Source/Components/OTPScreen/OTP';
import ForgotPassword from './Source/Components/ForgotPasswordScreen/ForgotPassword';
import Dealers from './Source/Components/DealersScreen/Dealers';
import ReferAndInvite from './Source/Components/ReferAndInviteScreen/ReferAndInvite';
import Product from './Source/Components/ProductScreen/Product';
import Merch from './Source/Components/MerchScreen/Merch';
import Notification from './Source/Components/NotificationScreen/Notification';
import FAQ from './Source/Components/FAQScreen/Faq';
import Analytics from './Source/Components/AnalyticsScreen/Analytics';
import EnableFaceId from './Source/Components/EnableFaceIDScreen/EnableFaceID';
import TermsAndCondition from './Source/Components/TermsAndConditionScreen/TermsAndCondition';
import CreatePresentation from './Source/Components/CreatePresentationScreen/CreatePresentation';
import Logout from './Source/Components/LogoutScreen/Logout';
import AddDealers from './Source/Components/DealersScreen/AddDealers';
import { createDrawerNavigator } from 'react-navigation-drawer';

class HamburgerIcon extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={this.toggleDrawer.bind(this)}>
          <Icons
            name="menu"
            style={{ marginLeft: AppConstants.getDeviceWidth(3.5) }}
            size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS30)}
            color={AppConstants.COLORS.WHITE}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 200,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
        extrapolate: 'clamp',
      });

      return {
        transform: [{ translateX }],
      };
    },
  };
};
export const Tab_1 = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarLabel: 'Reports',
        tabBarIcon: ({ focused }) => (
          <Icons
            name="file-table-outline"
            size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS20)}
            color={
              focused
                ? AppConstants.COLORS.APPTHEME
                : AppConstants.COLORS.BASECOLOR_2
            }
          />
        ),
      },
    },
    Dealers: {
      screen: Dealers,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: 'Dealers',
          tabBarIcon: ({ focused }) => (
            <DIcons
              name="users"
              size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS20)}
              color={
                focused
                  ? AppConstants.COLORS.APPTHEME
                  : AppConstants.COLORS.BASECOLOR_2
              }
            />
          ),
        };
      },
    },
    Event: {
      screen: Dealers,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: ' ',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: AppConstants.getDeviceHeight(10),
                width: AppConstants.getDeviceHeight(10),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: AppConstants.COLORS.APPTHEME,
                borderRadius: AppConstants.getDeviceHeight(10),
                marginBottom: AppConstants.getDeviceHeight(1),
              }}>
              <Icons
                name="home"
                size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS36)}
                color={
                  focused
                    ? AppConstants.COLORS.APPTHEME
                    : AppConstants.COLORS.BASECOLOR_2
                }
              />
            </View>
          ),
        };
      },
    },
    Product: {
      screen: Product,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarOnPress: ({ }) => {
            AppConstants.CheckLogin = '1';
            AppConstants.checkForUserLogin() == true
              ? navigation.navigate(AppConstants.SCREENS.PRODUCT)
              : navigation.navigate(AppConstants.SCREENS.LOGIN);
          },
          tabBarLabel: 'Products',
          tabBarIcon: ({ focused }) => (
            <Icons
              name="inbox"
              size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS20)}
              color={
                focused
                  ? AppConstants.COLORS.APPTHEME
                  : AppConstants.COLORS.BASECOLOR_2
              }
            />
          ),
        };
      },
    },
    Merch: {
      screen: Merch,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarOnPress: ({ }) => {
            AppConstants.CheckLogin = '1';
            AppConstants.checkForUserLogin() == true
              ? navigation.navigate(AppConstants.SCREENS.MERCH)
              : navigation.navigate(AppConstants.SCREENS.LOGIN);
          },
          tabBarLabel: 'Merch',
          tabBarIcon: ({ focused }) => (
            <Icons
              name="check-decagram"
              size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS20)}
              color={
                focused
                  ? AppConstants.COLORS.APPTHEME
                  : AppConstants.COLORS.BASECOLOR_2
              }
            />
          ),
        };
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        //navigation.state.index == 0 ? '' :
      };
    },
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: AppConstants.COLORS.APPTHEME,
      inactiveTintColor: AppConstants.COLORS.BASECOLOR_2,
      labelStyle: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS10),
      },
    },
  },
);
const RootStack = createStackNavigator(
  {
    Dashboard: {
      screen: Tab_1,
      params: {
        isBack: 1,
      },
    },
    Initial: {
      screen: Initial,
      navigationOptions: {
        header: null,
      },
    },
    Intro: {
      screen: Intro,
      navigationOptions: {
        header: null,
      },
    },

    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        title: 'ForgotPassword',
      },
    },
    OTP: {
      screen: OTP,
      navigationOptions: {
        title: 'OTP',
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        // title: 'Login',
      },
      params: {
        isBack: true,
      },
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        title: 'Settings',
      },
    },
    Changepassword: {
      screen: Changepassword,
      navigationOptions: {
        title: 'Settings',
      },
      params: {
        showWhiteBackground: true,
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        title: 'Notification',
      },
      params: {
        showWhiteBackground: true,
      },
    },
    FAQ: {
      screen: FAQ,
      navigationOptions: {
        title: 'FAQ',
      },
      params: {
        showWhiteBackground: true,
      },
    },
    ReferAndInvite: {
      screen: ReferAndInvite,
      navigationOptions: {
        title: 'ReferAndInvite',
      },
      params: {
        showWhiteBackground: true,
      },
    },
    Analytics: {
      screen: Analytics,
      navigationOptions: {
        title: 'Analytics',
      },
      params: {
        showWhiteBackground: true,
      },
    },
    EnableFaceID: {
      screen: EnableFaceId,
      navigationOptions: {
        title: 'EnableFaceID',
      },
      params: {
        showWhiteBackground: true,
      },
    },
    TermsAndCondition: {
      screen: TermsAndCondition,
      navigationOptions: {
        title: 'TermsAndCondition',
      },
      params: {
        showWhiteBackground: true,
      },
    },
    CreatePresentation: {
      screen: CreatePresentation,
      navigationOptions: {
        title: 'CreatePresentation',
      },
      params: {
        showWhiteBackground: true,
      },
    },
    AddDealers: {
      screen: AddDealers,
      navigationOptions: {
        title: 'AddDealers',
      },
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        title: 'Logout',
      },
      params: {
        showWhiteBackground: true,
      },
    },
  },
  {
    transitionConfig,
    initialRouteName: 'Initial',
    mode: 'card',
    headerMode: 'screen',
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: getHeaderLeft(navigation),
      headerBackground: getHeaderBackground(navigation),
      headerStyle: { elevation: 0, borderBottomWidth: 0 },
      headerTitleContainerStyle: {
        ...Platform.select({
          android: {
            justifyContent: 'center',
          },
        }),
      },
      headerTitleStyle: {
        color: getControlColour(navigation),
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS18),
        ...Platform.select({
          android: {
            justifyContent: 'center',
            alignSelf: 'center',
            textAlign: 'center',
            width: AppConstants.getDeviceWidth(65),
          },
        }),
        textAlign: 'center',
      },
      headerRight: getRightIcons(navigation),
    }),
  },
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: RootStack,
    },
    Setting: {
      screen: Setting,
    },
    OTP: {
      screen: OTP,
    },
    // dashboard: {
    //   screen: RootStack,
    // },
  },
  {
    contentComponent: drawerContentComponents,
  },
  // {
  //   contentOptions: {
  //     borderWidth: 10,
  //     borderRadius: 10,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     marginTop: 100,
  //     height: 100,

  //     activeTintColor: '#e91e63',
  //     inactiveTintColor: '#FFF',
  //   },
  //   drawerType: 'slide',
  //   hideStatusBar: true,
  //   drawerLockMode: 'locked-open',
  //   drawerBackgroundColor: AppConstants.COLORS.APPTHEME,
  // },
);
export default createAppContainer(MyDrawerNavigator);
function getHeaderLeft(navigation) {
  if (navigation.getParam('isBack') == undefined) {
    return AppConstants.BackButton(navigation);
  } else if (navigation.getParam('isBack') == 1) {
    return <HamburgerIcon navigationProps={navigation} />;
  } else {
    // temporary solution header title center
    return (
      <Icons
        name="arrow-left"
        style={{ marginLeft: AppConstants.getDeviceWidth(4), opacity: 0 }}
        size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS25)}
        color={AppConstants.COLORS.APPTHEME}
      />
    );
  }
}

function getControlColour(navigation) {
  switch (navigation.state.routeName) {
    case 'Signup':
    case 'Login':
    // case 'ForgotPassword':
    // case 'OTP':
    case 'Changepassword':
      return AppConstants.COLORS.BLACK;
    default:
      return AppConstants.COLORS.WHITE;
  }
}

function getHeaderBackground(navigation) {
  switch (navigation.state.routeName) {
    case 'Signup':
    case 'Login':
    case 'Changepassword':
      return null;
    default:
      return (
        <View
          style={{
            backgroundColor: AppConstants.COLORS.APPTHEME,
            flex: 1,
          }}
        />
      );
  }
}

function getRightIcons(navigation) {
  switch (navigation.state.routeName) {
    case 'Signup':
    case 'ChangePassword':
    case 'EditProfile':
    case 'OffersDetails':
    case 'Account':
    case 'Notification':
    case 'Cart':
      return (
        <View
          style={{
            flexDirection: 'row',
            marginRight: AppConstants.getDeviceWidth(3),
          }}>
          {/* <SearchIcons
            onPress={() => navigation.navigate('Setting')}
            name="md-settings"
            style={{marginRight: AppConstants.getDeviceWidth(3)}}
            size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS22)}
            color={getControlColour(navigation)}
          /> */}
        </View>
      );
    case 'Login':
    case 'OTP':
    case 'Dashboard':
    case 'Search':
      // case 'ForgotPassword':
      return (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            AppConstants.CheckLogin = '1';
            AppConstants.checkForUserLogin() == true
              ? navigation.navigate(AppConstants.SCREENS.CART)
              : navigation.navigate(AppConstants.SCREENS.LOGIN);
          }}
          style={{
            flexDirection: 'row',
            marginRight: AppConstants.getDeviceWidth(3),
            zIndex: 1,
          }}
        />
      );
    case 'ReferAndInvite':
    case 'PrivacyPolicy':
      return <View style={{ flexDirection: 'row' }} />;
    default:
      return (
        <View
          style={{
            flexDirection: 'row',
            marginRight: AppConstants.getDeviceWidth(3),
            zIndex: 1,
          }}>
          {/* <SearchIcons
            onPress={() => navigation.navigate('Setting')}
            name="md-settings"
            style={{marginRight: AppConstants.getDeviceWidth(3)}}
            size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS22)}
            color={getControlColour(navigation)}
          /> */}
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            activeOpacity={0.9}
            onPress={() => {
              AppConstants.CheckLogin = '1';
              AppConstants.checkForUserLogin() == true
                ? navigation.navigate(AppConstants.SCREENS.CART)
                : navigation.navigate(AppConstants.SCREENS.LOGIN);
            }}
          />
        </View>
      );
  }
}

// export default class App extends Component {
//   componentWillMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
//   }
//   handleBackButton = () => {
//     Alert.alert(
//       'Exit App',
//       'Are u sure to exit?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'OK',
//           onPress: () => BackHandler.exitApp(),
//         },
//       ],
//       {
//         cancelable: false,
//       },
//     );
//     return true;
//   };

//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
//   }
//   render() {
//     return <AppContainer />;
//   }
// }
