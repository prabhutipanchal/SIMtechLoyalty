/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import * as AppConstants from '../Helper/AppConstants';
import Styles from './DashboardStyle';
import SplashScreen from 'react-native-splash-screen';
const Images = {
  Iconcoupon: 'iconcoupon',
  Iconelectronics: 'iconelectronics',
  Iconmenacc: 'iconmenacc',
  Iconwomenacc: 'iconwomenacc',
  Iconstationary: 'iconstationary',
  Iconhealthcare: 'iconhealthcare',
  Iconfoodcoupon: 'iconfoodcoupon',
  Iconsubscription: 'iconsubscription',
}
export default class Dashboard extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.mainContainer}>
        <StatusBar
          backgroundColor={AppConstants.COLORS.WHITE}
          barStyle="dark-content"
        />
        <View style={Styles.Container}>

          <TouchableOpacity style={Styles.mainCardView} activeOpacity={0.9}>
            <Image resizeMode='contain' source={{ uri: Images.Iconcoupon }} style={Styles.ImgCommonStyle}></Image>
            <Text style={Styles.txtTitleCommonStyle}>Target V/S Achivements </Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.mainCardView} activeOpacity={0.9}>
            <Image resizeMode='contain' source={{ uri: Images.Iconelectronics }} style={Styles.ImgCommonStyle}></Image>
            <Text style={Styles.txtTitleCommonStyle}> Payout Reports </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.Container}>

          <TouchableOpacity style={Styles.mainCardView} activeOpacity={0.9}>
            <Image resizeMode='contain' source={{ uri: Images.Iconcoupon }} style={Styles.ImgCommonStyle}></Image>
            <Text style={Styles.txtTitleCommonStyle}>Scheme Performance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.mainCardView} activeOpacity={0.9}>
            <Image resizeMode='contain' source={{ uri: Images.Iconelectronics }} style={Styles.ImgCommonStyle}></Image>
            <Text style={Styles.txtTitleCommonStyle}> Product Performance</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.Container}>

          <TouchableOpacity style={Styles.mainCardView} activeOpacity={0.9}>
            <Image resizeMode='contain' source={{ uri: Images.Iconcoupon }} style={Styles.ImgCommonStyle}></Image>
            <Text style={Styles.txtTitleCommonStyle}> Distribution Activity</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.mainCardView} activeOpacity={0.9}>
            <Image resizeMode='contain' source={{ uri: Images.Iconelectronics }} style={Styles.ImgCommonStyle}></Image>
            <Text style={Styles.txtTitleCommonStyle}>Business Dev.Activity </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.Container}>

          <TouchableOpacity style={Styles.mainCardView} activeOpacity={0.9}>
            <Image resizeMode='contain' source={{ uri: Images.Iconcoupon }} style={Styles.ImgCommonStyle}></Image>
            <Text style={Styles.txtTitleCommonStyle}> Sales Analysis  </Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.mainCardView} activeOpacity={0.9}>
            <Image resizeMode='contain' source={{ uri: Images.Iconelectronics }} style={Styles.ImgCommonStyle}></Image>
            <Text style={Styles.txtTitleCommonStyle}>Market Penetration </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
