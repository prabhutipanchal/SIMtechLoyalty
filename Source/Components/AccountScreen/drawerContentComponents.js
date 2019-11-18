/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './drawerContentComponentsStyle';
import * as AppConstants from '../Helper/AppConstants';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import KeyIcon from 'react-native-vector-icons/FontAwesome5';
import BellIcon from 'react-native-vector-icons/Fontisto';
const Images = {
  Invitefriendsgift: 'icon',
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
        <View style={styles.headerContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.toggleDrawer.bind(this)}>
            <Icons
              name="menu"
              style={{ marginLeft: AppConstants.getDeviceWidth(3.5) }}
              size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS30)}
              color={AppConstants.COLORS.WHITE}
            />
          </TouchableOpacity>
          <Image
            source={{ uri: Images.Invitefriendsgift }}
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
            }}
          />
          <Text style={styles.headerText}>Header Portion</Text>
        </View>
        <View style={styles.screenContainer}>
          <TouchableOpacity
            style={styles.drawerNavStyle}
            onPress={() =>
              this.props.navigation.navigate(AppConstants.SCREENS.CHANGEPASSWORD)
            }>
             
            <Text style={styles.screentxtcolor}>Change password</Text>
            <KeyIcon style={styles.KeyIcon} name="key" 
             size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerNavStyle}
            onPress={() =>
              this.props.navigation.navigate(AppConstants.SCREENS.NOTIFICATION)
            }>
            <Text style={styles.screentxtcolor}>Notification</Text>
            <BellIcon style={styles.KeyIcon} name="bell" 
             size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerNavStyle}
            onPress={() =>
              this.props.navigation.navigate(AppConstants.SCREENS.FAQ)
            }>
            <Text style={styles.screentxtcolor}>FAQ</Text>
            <BellIcon style={styles.KeyIcon} name="bell" 
             size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerNavStyle}
            onPress={() =>
              this.props.navigation.navigate(AppConstants.SCREENS.REFERANDINVITE)
            }>
            <Text style={styles.screentxtcolor}>Refer & invite</Text>
            <BellIcon style={styles.KeyIcon} name="bell" 
             size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerNavStyle}
            onPress={() =>
              this.props.navigation.navigate(AppConstants.SCREENS.ANALYTICS)
            }>
            <Text style={styles.screentxtcolor}>Analytics</Text>
            <BellIcon style={styles.KeyIcon} name="bell" 
             size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerNavStyle}
            onPress={() =>
              this.props.navigation.navigate(AppConstants.SCREENS.CHAT)
            }>
            <Text style={styles.screentxtcolor}>Enable FaceID</Text>
            <BellIcon style={styles.KeyIcon} name="bell" 
             size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerNavStyle}
            onPress={() =>
              this.props.navigation.navigate(AppConstants.SCREENS.CHAT)
            }>
            <Text style={styles.screentxtcolor}>Terms & Contidion</Text>
            <BellIcon style={styles.KeyIcon} name="bell" 
             size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.drawerNavStyle}
            onPress={() =>
              this.props.navigation.navigate(AppConstants.SCREENS.CHAT)
            }>
            <Text style={styles.screentxtcolor}>Create Presentation</Text>
            <BellIcon style={styles.KeyIcon} name="bell" 
             size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerNavStyle}
            onPress={() =>
              this.props.navigation.navigate(AppConstants.SCREENS.CHAT)
            }>
            <Text style={styles.screentxtcolor}>Logout</Text>
            <BellIcon style={styles.KeyIcon} name="bell" 
             size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color="#FFFF" />
          </TouchableOpacity>
        
        </View>
      </View>
    );
  }
}
