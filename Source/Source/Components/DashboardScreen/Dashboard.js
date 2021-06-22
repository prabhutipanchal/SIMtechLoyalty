/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import * as AppConstants from '../Helper/AppConstants';
import Styles from './DashboardStyle';
import MyCard from '../../CustomControls/MyCard';
// import SplashScreen from 'react-native-splash-screen';
const Images = {
  Target: 'target',
  PayoutReport: 'payoutreport',
  Scheme: 'scheme',
  ProductPerformance: 'productperformance',
  Distribution: 'distribution',
  Business: 'business',
  SalesAnalysis: 'salesanalysis',
  MarketPen: 'marketpen',
}
export default class Dashboard extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() {
  //   SplashScreen.hide();
  // }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.mainContainer}>
        <StatusBar
          backgroundColor={AppConstants.COLORS.WHITE}
          barStyle="dark-content"
        />
        <View style={Styles.Container}>

          <TouchableOpacity
            activeOpacity={0.9} onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
            <MyCard isflexrow={0}>
              <Image resizeMode='contain' source={{ uri: Images.Target }} style={Styles.ImgCommonStyle}></Image>
              <Text style={Styles.txtTitleCommonStyle}>Target V/S Achivements </Text>
            </MyCard>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9} onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
            <MyCard isflexrow={0}>
              <Image resizeMode='contain' source={{ uri: Images.PayoutReport }} style={Styles.ImgCommonStyle}></Image>
              <Text style={Styles.txtPayoutSalesAnalysisCommon}>Payout Reports </Text>
            </MyCard>
          </TouchableOpacity>
        </View>

        <View style={Styles.Container}>

          <TouchableOpacity
            activeOpacity={0.9} onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
            <MyCard isflexrow={0}>
              <Image resizeMode='contain' source={{ uri: Images.Scheme }} style={Styles.ImgCommonStyle}></Image>
              <Text style={Styles.txtTitleCommonStyle}>Scheme Performance</Text>
            </MyCard>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9} onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
            <MyCard isflexrow={0}>
              <Image resizeMode='contain' source={{ uri: Images.ProductPerformance }} style={Styles.ImgCommonStyle}></Image>
              <Text style={Styles.txtTitleCommonStyle}> Product Performance</Text>
            </MyCard>
          </TouchableOpacity>
        </View>

        <View style={Styles.Container}>

          <TouchableOpacity
            activeOpacity={0.9} onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
            <MyCard isflexrow={0}>
              <Image resizeMode='contain' source={{ uri: Images.Distribution }} style={Styles.ImgCommonStyle}></Image>
              <Text style={Styles.txtTitleCommonStyle}> Distribution Activity</Text>
            </MyCard>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9} onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
            <MyCard isflexrow={0}>
              <Image resizeMode='contain' source={{ uri: Images.Business }} style={Styles.ImgCommonStyle}></Image>
              <Text style={Styles.txtTitleCommonStyle}>Business Dev.Activity </Text>
            </MyCard>
          </TouchableOpacity>
        </View>

        <View style={Styles.Container}>
          <TouchableOpacity activeOpacity={0.9} onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
            <MyCard isflexrow={0}>
              <Image resizeMode='contain' source={{ uri: Images.SalesAnalysis }} style={Styles.ImgCommonStyle}></Image>
              <Text style={Styles.txtPayoutSalesAnalysisCommon}> Sales Analysis  </Text>
            </MyCard>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.9} onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
            <MyCard isflexrow={0}>
              <Image resizeMode='contain' source={{ uri: Images.MarketPen }} style={Styles.ImgCommonStyle}></Image>
              <Text style={Styles.txtTitleCommonStyle}>Market Penetration </Text>
            </MyCard>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
