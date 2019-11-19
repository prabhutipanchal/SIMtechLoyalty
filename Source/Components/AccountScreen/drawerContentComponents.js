/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Avatar} from "react-native-elements";
import styles from './drawerContentComponentsStyle';
import * as AppConstants from '../Helper/AppConstants';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AnalyticsIcons from 'react-native-vector-icons/AntDesign';
import TCIcons from 'react-native-vector-icons/Feather';
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
      routeName: route,
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

            <View style={{
              flexDirection: 'row',
              marginTop: AppConstants.getDeviceHeight(5),
              marginBottom: AppConstants.getDeviceHeight(2),
            }}>
              <TouchableOpacity style={{ flexDirection: 'row', marginLeft: AppConstants.getDeviceWidth(5) }}>
                <Avatar
                  size={AppConstants.getDeviceWidth(25)}
                  rounded
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
              </TouchableOpacity>
              <View style={{ marginLeft: AppConstants.getDeviceWidth(5), marginTop: AppConstants.getDeviceHeight(5) }}>
                <Text style={styles.txtbusinessName}>Business Name</Text>
                <Text style={styles.txtpersonName}>Nathan Arnold</Text>
              </View>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>

              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.drawerNavStyle}
                onPress={() =>
                  this.props.navigation.navigate(AppConstants.SCREENS.CHANGEPASSWORD)
                }>
                <KeyIcon style={styles.Iconstyle} name="key"
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
                <Text style={styles.screentxtcolor}>Change password</Text>
              </TouchableOpacity>

              <TouchableOpacity 
               activeOpacity={0.9} style={styles.drawerNavStyle}
                onPress={() =>
                  this.props.navigation.navigate(AppConstants.SCREENS.NOTIFICATION)
                }>
                <BellIcon style={styles.Iconstyle}
                  name="bell"
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
                <Text style={styles.screentxtcolor}>Notification</Text>

              </TouchableOpacity>

              <TouchableOpacity   activeOpacity={0.9} style={styles.drawerNavStyle}
                onPress={() =>
                  this.props.navigation.navigate(AppConstants.SCREENS.FAQ)
                }>
                <Icons style={styles.Iconstyle}
                  name="calendar-question"
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
                <Text style={styles.screentxtcolor}>FAQ</Text>

              </TouchableOpacity>

              <TouchableOpacity  activeOpacity={0.9} style={styles.drawerNavStyle}
                onPress={() =>
                  this.props.navigation.navigate(AppConstants.SCREENS.REFERANDINVITE)
                }>
                <Image
                  resizeMode='contain'
                  source={{ uri: Images.Iconrefer }}
                  style={{
                    width: AppConstants.getDeviceWidth(5),
                    height: AppConstants.getDeviceHeight(10),
                    marginLeft: AppConstants.getDeviceWidth(5),
                  }} />
                {/* <Icons style={{
                  fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS15),
                  marginLeft: AppConstants.getDeviceWidth(3),
                }}
                  name="calendar-question"
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" /> */}
                <Text style={styles.screentxtcolor}>Refer & invite</Text>

              </TouchableOpacity>

              <TouchableOpacity  activeOpacity={0.9}  style={styles.drawerNavStyle}
                onPress={() =>
                  this.props.navigation.navigate(AppConstants.SCREENS.ANALYTICS)
                }>
                <AnalyticsIcons style={styles.Iconstyle}
                  name="piechart"
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
                <Text style={styles.screentxtcolor}>Analytics</Text>

              </TouchableOpacity>

              <TouchableOpacity  activeOpacity={0.9} style={styles.drawerNavStyle}
                onPress={() =>
                  this.props.navigation.navigate(AppConstants.SCREENS.CHAT)
                }>
                <Image
                  resizeMode='contain'
                  source={{ uri: Images.Iconenablefaceid }}
                  style={{
                    width: AppConstants.getDeviceWidth(5),
                    height: AppConstants.getDeviceHeight(5),
                    marginLeft: AppConstants.getDeviceWidth(5),
                  }} />
                {/* <AnalyticsIcons style={{
                  fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS15),
                  marginLeft: AppConstants.getDeviceWidth(3),
                }}
                  name="piechart"
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" /> */}
                <Text style={styles.screentxtcolor}>Enable FaceID</Text>

              </TouchableOpacity>

              <TouchableOpacity  activeOpacity={0.9} style={styles.drawerNavStyle}
                onPress={() =>
                  this.props.navigation.navigate(AppConstants.SCREENS.CHAT)
                }>
                <TCIcons style={styles.Iconstyle}
                  name="info"
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
                <Text style={styles.screentxtcolor}>Terms & Contidion</Text>

              </TouchableOpacity>

              <TouchableOpacity  activeOpacity={0.9} style={styles.drawerNavStyle}
                onPress={() =>
                  this.props.navigation.navigate(AppConstants.SCREENS.CHAT)
                }>
                <Icons style={styles.Iconstyle}
                  name="file-presentation-box"
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
                <Text style={styles.screentxtcolor}>Create Presentation</Text>

              </TouchableOpacity>

              <TouchableOpacity  activeOpacity={0.9} style={styles.drawerNavStyle}
                onPress={() =>
                  this.props.navigation.navigate(AppConstants.SCREENS.CHAT)
                }>
                <Icons style={styles.Iconstyle}
                  name="logout"
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
                <Text style={styles.screentxtcolor}>Logout</Text>

              </TouchableOpacity>

            </View>
          </ScrollView>
        </View>
      </View>

    );
  }
}
