/* eslint-disable no-fallthrough */
/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable eqeqeq */
// /* eslint-disable no-fallthrough */
// /* eslint-disable react-native/no-inline-styles */
import { View, Platform, TouchableOpacity, Easing, Animated, BackHandler, Alert,Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import drawerContentComponents from './Source/Components/AccountScreen/drawerContentComponents';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import * as AppConstants from './Source/Components/Helper/AppConstants';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import DealersIcons from "react-native-vector-icons/FontAwesome5";
import SearchIcons from 'react-native-vector-icons/Ionicons';
import Login from './Source/Components/LoginScreen/Login';
import Changepassword from './Source/Components/ChangePasswordScreen/Changepassword';
import Dashboard from './Source/Components/DashboardScreen/Dashboard';
import Initial from './Source/Components/DashboardScreen/Initial';
import Intro from './Source/Components/AppintroScreen/Intro';
import ForgotPassword from './Source/Components/ForgotPasswordScreen/ForgotPassword';
import Dealers from './Source/Components/DealersScreen/Dealers';
import ReferAndInvite from './Source/Components/ReferAndInviteScreen/ReferAndInvite';
import Products from './Source/Components/ProductsScreen/Products';
import Merch from './Source/Components/MerchScreen/Merch';
import Notification from './Source/Components/NotificationScreen/Notification';
import FAQ from './Source/Components/FAQScreen/Faq';
import Analytics from './Source/Components/AnalyticsScreen/Analytics';
import EnableFaceId from './Source/Components/EnableFaceIDScreen/EnableFaceID';
import TermsAndCondition from './Source/Components/TermsAndConditionScreen/TermsAndCondition';
import CreatePresentation from './Source/Components/CreatePresentationScreen/CreatePresentation';
import Logout from './Source/Components/LogoutScreen/Logout';
import AddDealers from './Source/Components/DealersScreen/AddDealers';
import Merchandise from './Source/Components/MerchandiseScreen/Merchandise';
import { createDrawerNavigator } from 'react-navigation-drawer';
import NoDealers from './Source/Components/DealersScreen/NoDealers';
import MerchandiseProduct from './Source/Components/MerchandiseScreen/MerchandiseProduct';
import DealerDetail from './Source/Components/DealersScreen/DealerDetail';
import ProductDetail from './Source/Components/MerchandiseScreen/ProductDetail';
import BestPerformers from './Source/Components/BestPerformersScreen/BestPerformers';
import BusinessDetail from './Source/Components/DealersScreen/BusinessDetail';
import BillingDetail from './Source/Components/DealersScreen/BillingDetail';
import WarehouseDetail from './Source/Components/DealersScreen/WarehouseDetail';
import ContactDetail from './Source/Components/DealersScreen/ContactDetail';
import BankDetail from './Source/Components/DealersScreen/BankDetail';
import UploadDetails from './Source/Components/DealersScreen/UploadDetails';
import CommonAddDealers from './Source/Components/DealersScreen/CommonAddDealers'
import Reports from './Source/Components/ReportsScreen/Reports';

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
            color={AppConstants.COLORS.BLACK}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
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
    Dealers: {
      screen: Dealers,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: 'Dealers',
          tabBarIcon: ({ focused }) => (
            <DealersIcons
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
    Products: {
      screen: Products,
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
    Dashboard: {
      screen: Dashboard,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: ' ',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: AppConstants.getDeviceHeight(11),
                width: AppConstants.getDeviceHeight(11),
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
                    ? AppConstants.COLORS.HOMEICON
                    : AppConstants.COLORS.WHITE
                }
              />
            </View>
          ),
        };
      },
    },
    CreatePresentation: {
      screen: CreatePresentation,
      navigationOptions: {
        tabBarLabel: 'Presentations',
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



    Merch: {
      screen: Merchandise,
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
        headerRight:navigation.state.index==0? <TouchableOpacity
        activeOpacity={0.9}
        onPress={()=>navigation.navigate(AppConstants.SCREENS.COMMONADDDEALERS)}>
        <Icons
          name="plus-circle"
          style={{ marginRight: AppConstants.getDeviceWidth(3.5) }}
          size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS30)}
          color={AppConstants.COLORS.APPTHEME}
        />
      </TouchableOpacity>:<View/>
        //navigation.state.index == 0 ? '' :
      };
    },
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: AppConstants.COLORS.APPTHEME,
      inactiveTintColor: AppConstants.COLORS.BASECOLOR_2,

      labelStyle: {
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS13),
        color: AppConstants.COLORS.TEXTFIELDBASECOLOR,
      },
      style: {
        backgroundColor: AppConstants.COLORS.TABBAR_BG_COLOR,
        padding: AppConstants.getDeviceHeight(1),
        height: AppConstants.getDeviceHeight(10.22),
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
    Dealers: {
      screen: Dealers,
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
      // navigationOptions: {
      //   // gesturesEnabled: false,
      //   // drawerLockMode: 'closeDrawer',
      //   // drawerLabel: <Login />,
      // },
      //   navigationOptions: {
      //     drawerLockMode: "locked-close",
      //     disableGestures: true
      // },
    },

    Login: {
      screen: Login,
      navigationOptions: {
        gesturesEnabled: false,
      },
      // navigationOptions: ({ navigation })=> ({
      //   drawerLockMode: navigation.state.index > 0 ? 'locked-closed' : 'unlocked',
      // }),
    },
    Merchandise: {
      screen: Merchandise,
      navigationOptions: {
        title: 'Merchandise',
      },
    },
    MerchandiseProduct: {
      screen: MerchandiseProduct,
      navigationOptions: {
        title: 'Electronics',
      },
    },
    DealerDetail: {
      screen: DealerDetail,
    },
    ProductDetail: {
      screen: ProductDetail,
    },
    Changepassword: {
      screen: Changepassword,
      navigationOptions: {
        title: 'Change Password',
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        title: 'Notifications',
      },
    },
    FAQ: {
      screen: FAQ,
      navigationOptions: {
        title: 'FAQ',
      },

    },
    ReferAndInvite: {
      screen: ReferAndInvite,
    },
    Analytics: {
      screen: Analytics,
      navigationOptions: {
        title: 'Analytics',
      },

    },
    EnableFaceID: {
      screen: EnableFaceId,
      navigationOptions: {
        title: 'EnableFaceID',
      },

    },
    TermsAndCondition: {
      screen: TermsAndCondition,
      navigationOptions: {
        title: 'Terms and Conditions',
      },

    },
    CreatePresentation: {
      screen: CreatePresentation,
      navigationOptions: {
        title: 'Presentations',
      },

    },
    NoDealers: {
      screen: NoDealers,
      navigationOptions: {
        title: 'AddDealers',
      },
    },
    AddDealers: {
      screen: AddDealers,
      navigationOptions: {
        title: 'AddDealers',
      },
    },
    BestPerformers: {
      screen: BestPerformers,
      navigationOptions: {
        title: 'Best Performers',
      },
      params: {
        isBack: 0,
      },
    },
    BusinessDetail: {
      screen: BusinessDetail,
      navigationOptions: {
        title: 'Add Dealer',
      },
    },
    BillingDetail: {
      screen: BillingDetail,
      navigationOptions: {
        title: 'Add Dealer',
      },
    },
    WarehouseDetail: {
      screen: WarehouseDetail,
      navigationOptions: {
        title: 'Add Dealer',
      },
    },
    ContactDetail: {
      screen: ContactDetail,
      navigationOptions: {
        title: 'Add Dealer',
      },
    },
    BankDetail: {
      screen: BankDetail,
      navigationOptions: {
        title: 'Add Dealer',
      },
    },
    UploadDetails: {
      screen: UploadDetails,
      navigationOptions: {
        title: 'Add Dealer',
      },
    },

    CommonAddDealers: {
      screen: CommonAddDealers,
      navigationOptions: {
        title: 'Add Dealer',
      },
    },
    Reports: {
      screen: Reports,
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        title: 'Logout',
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
        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
        fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS20),
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
  },
  {
    contentComponent: drawerContentComponents,

  },

);
const AppContainer = createAppContainer(MyDrawerNavigator);
// export default createAppContainer(MyDrawerNavigator);


function getHeaderLeft(navigation) {
  if (navigation.getParam('isBack') == undefined) {
    return AppConstants.BackButton(navigation);
  } else if (navigation.getParam('isBack') == 1) {
    return <HamburgerIcon navigationProps={navigation} />;
  } else if (navigation.getParam('isBack') == 0) {
    return <View></View>;
  }
  // temporary solution header title center
  return (
    <Icons
      name="arrow-left"
      style={{ marginLeft: AppConstants.getDeviceWidth(4), opacity: 0 }}
      size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS25)}
      color={AppConstants.COLORS.WHITE}
    />
  );
}


function getControlColour(navigation) {
  switch (navigation.state.routeName) {
    // case 'Notification':
    // case 'AddDealers':
    // case 'Changepassword':
    // case 'MerchandiseProduct':
    // case 'Dashboard':
    case 'DealerDetail':
      return AppConstants.COLORS.WHITE;
    default:
      return AppConstants.COLORS.TEXTCOLOR;
  }
}

function getHeaderBackground(navigation) {
  switch (navigation.state.routeName) {
    case 'Login':
    case 'Changepassword':
    case 'MerchandiseProduct':
    case 'Dashboard':
      return null;
    case 'ReferAndInvite':
    case 'DealerDetail':
      return (
        <View
          style={{
            backgroundColor: AppConstants.COLORS.APPTHEME,
            flex: 1,
          }}
        />
      );
    default:
      return (
        <View
          style={{
            backgroundColor: AppConstants.COLORS.WHITE,
            flex: 1,
          }}
        />
      );
  }
}

function getRightIcons(navigation) {
  switch (navigation.state.routeName) {
    // case 'Changepassword':
    case 'Dealers':
      return (
        <View
          style={{
            flexDirection: 'row',
            marginRight: AppConstants.getDeviceWidth(3),
          }}>
          <SearchIcons
            onPress={() => navigation.navigate('Setting')}
            name="md-settings"
            style={{ marginRight: AppConstants.getDeviceWidth(3) }}
            size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS22)}
            color={AppConstants.COLORS.BLACK}
          />
        </View>
      );

    case 'Dashboard':
    case 'ForgotPassword':
    case 'Notification':
      return (
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            flexDirection: 'row',
            marginRight: AppConstants.getDeviceWidth(3),
            zIndex: 1,
          }}
        />
      );

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
            style={{ marginRight: AppConstants.getDeviceWidth(3) }}
            size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS22)}
            color={getControlColour(navigation)}
          />
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            activeOpacity={0.9}
            onPress={() => {
              AppConstants.CheckLogin = '1';
              AppConstants.checkForUserLogin() == true
                ? navigation.navigate(AppConstants.SCREENS.CART)
                : navigation.navigate(AppConstants.SCREENS.LOGIN);
            }}
          /> */}
        </View>
      );
  }
}

export default class App extends Component {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton = () => {
    Alert.alert(
      'Exit Application',
      'Do you want to Exit App?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  render() {
    return <AppContainer />;
  }
}
