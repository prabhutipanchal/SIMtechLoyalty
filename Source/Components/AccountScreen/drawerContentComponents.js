/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { Text, View, TouchableOpacity, Image, } from 'react-native';
import { Avatar } from "react-native-elements";
import styles from './drawerContentComponentsStyle';
import * as AppConstants from '../Helper/AppConstants';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AnalyticsIcons from 'react-native-vector-icons/AntDesign';
import TermsIcons from 'react-native-vector-icons/Feather';
import KeyIcon from 'react-native-vector-icons/FontAwesome5';
import BellIcon from 'react-native-vector-icons/Fontisto';
const Images = {
  Invitefriendsgift: 'icon',
  IconChgPassword: 'iconchgpassword',
  Iconnotification: 'iconnotification',
  Iconfaq: 'iconfaq',
  Iconrefer: 'iconrefer',
  Iconanalytics: 'iconanalytics',
  Iconenablefaceid: 'iconenablefaceid',
  Iconterms: 'iconterms',
  Iconcreatepresentation: 'iconcreatepresentation',
  Iconlogout: 'iconlogout',
};

export default class drawerContentComponents extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'route',

    });
    this.props.navigation.dispatch(navigateAction);
  };
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{
          flex: 1,
        }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.toggleDrawer.bind(this)}>
            </TouchableOpacity>

            <View style={styles.AvatarMainViewStyle}>
              <View style={styles.AvatarViewStyle}>
                <Avatar
                  size={AppConstants.getDeviceWidth(20)}
                  rounded
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  }}
                  activeOpacity={0.7}
                  containerStyle={{
                    borderWidth: AppConstants.getDeviceWidth(0.5),
                    borderColor: AppConstants.COLORS.WHITE,
                  }}
                />
                <Avatar
                  size={AppConstants.getDeviceWidth(5)}
                  rounded
                  activeOpacity={0.7}
                  overlayContainerStyle={{ backgroundColor: AppConstants.COLORS.EDITBUTTON }}
                  containerStyle={{
                    position: 'absolute',
                    bottom: AppConstants.getDeviceHeight(2),
                    right: 0,
                    borderWidth: AppConstants.getDeviceWidth(0.5),
                    borderColor: AppConstants.COLORS.WHITE,
                  }}
                />
              </View>
              <View style={styles.BusinessNameViewStyle}>
                <Text style={styles.txtbusinessName}>Business Name</Text>
                <Text style={styles.txtpersonName}>Nathan Arnold</Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.drawerNavStyle}
              onPress={() =>
                this.props.navigation.navigate(AppConstants.SCREENS.CHANGEPASSWORD)
              }>
              <KeyIcon style={styles.Iconstyle} name="key" />
              <Text style={styles.screentxtcolor}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9} style={styles.drawerNavStyle}
              onPress={() =>
                this.props.navigation.navigate(AppConstants.SCREENS.NOTIFICATION)
              }>
              <BellIcon style={styles.Iconstyle}
                name="bell" />
              <Text style={styles.screentxtcolor}>Notifications</Text>

            </TouchableOpacity>

            {/* <TouchableOpacity activeOpacity={0.9} style={styles.drawerNavStyle}>
              <Icons style={styles.Iconstyle}
                name="calendar-question" />
              <Text style={styles.screentxtcolor}>FAQ</Text>

            </TouchableOpacity> */}

            <TouchableOpacity activeOpacity={0.9} style={styles.drawerNavStyle}
              onPress={() =>
                this.props.navigation.navigate(AppConstants.SCREENS.REFERANDINVITE)
              }>
              <Image
                resizeMode='contain'
                source={{ uri: Images.Iconrefer }}
                style={styles.ReferIconImageStyle} />
              <Text style={styles.screentxtcolor}>Refer Friends</Text>

            </TouchableOpacity>

            {/* <TouchableOpacity activeOpacity={0.9} style={styles.drawerNavStyle}>
              <AnalyticsIcons style={styles.Iconstyle}
                name="piechart" />
              <Text style={styles.screentxtcolor}>Analytics</Text>

            </TouchableOpacity> */}

            {/* <TouchableOpacity activeOpacity={0.9} style={styles.drawerNavStyle}>
              <Image
                resizeMode='contain'
                source={{ uri: Images.Iconenablefaceid }}
                style={styles.EnablefaceImageStyle} />
              <Text style={styles.screentxtcolor}>Enable FaceID</Text>
            </TouchableOpacity> */}

            <TouchableOpacity activeOpacity={0.9} style={styles.drawerNavStyle}
             onPress={() =>
                this.props.navigation.navigate(AppConstants.SCREENS.TERMASANDCONDITION)
              }>
              <TermsIcons style={styles.Iconstyle}
                name="info" />
              <Text style={styles.screentxtcolor}>Terms & Conditions</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity activeOpacity={0.9} style={styles.drawerNavStyle}
              onPress={() =>
                this.props.navigation.navigate(AppConstants.SCREENS.CREATEPRESENTATION)
              }>
              <Icons style={styles.Iconstyle}
                name="file-presentation-box" />
              <Text style={styles.screentxtcolor}>Create Presentation</Text>
            </TouchableOpacity> */}

            <TouchableOpacity activeOpacity={0.9} style={styles.drawerNavStyle}
              onPress={() =>
                this.props.navigation.navigate(AppConstants.SCREENS.LOGIN)
              }>
              <Icons style={styles.Iconstyle}
                name="logout" />
              <Text style={styles.screentxtcolor}>Logout</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

    );
  }
}
