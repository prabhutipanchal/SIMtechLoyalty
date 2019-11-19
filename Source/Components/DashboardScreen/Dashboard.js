/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as AppConstants from '../Helper/AppConstants';
import Styles from './DashboardStyle';
import SplashScreen from 'react-native-splash-screen';
import MyButton from '../../CustomControls/MyButton';
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
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.mainContainer}>
        <StatusBar
          backgroundColor={AppConstants.COLORS.APPTHEME}
          barStyle="light-content"
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          {/* <View style={Styles.mainView}>
            <TouchableOpacity
              style={Styles.mainCardView}
              activeOpacity={0.9}
              onPress={() => navigate(AppConstants.SCREENS.OTP)}>
              <Text style={Styles.txt}> OTP </Text>
            </TouchableOpacity>
          </View> */}
          <View style={Styles.mainView}>
            <TouchableOpacity
              style={Styles.mainCardView}
              activeOpacity={0.9}
              onPress={() => navigate(AppConstants.SCREENS.FORGOTPASSWORD)}>
              <Text style={Styles.txt}> ForgotPassword </Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.mainView}>
            <TouchableOpacity
              style={Styles.mainCardView}
              activeOpacity={0.9}
              onPress={() => navigate(AppConstants.SCREENS.CHANGEPASSWORD)}>
              <Text style={Styles.txt}> Changepassword </Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.mainView}>
            <TouchableOpacity
              style={Styles.mainCardView}
              activeOpacity={0.9}
              onPress={() => navigate(AppConstants.SCREENS.NOTIFICATION)}>
              <Text style={Styles.txt}> Notification </Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.mainView}>
            <TouchableOpacity
              style={Styles.mainCardView}
              activeOpacity={0.9}
              onPress={() => navigate(AppConstants.SCREENS.LOGIN)}>
              <Text style={Styles.txt}> Login </Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.mainView}>
            <TouchableOpacity
              style={Styles.mainCardView}
              activeOpacity={0.9}
              onPress={() => navigate(AppConstants.SCREENS.ADDDEALERS)}>
              <Text style={Styles.txt}>Add Dealers </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={Styles.mainView}>
            <TouchableOpacity
              style={Styles.mainCardView}
              activeOpacity={0.9}
              onPress={() => navigate('Setting')}>
              <Text style={Styles.txt}> Profile </Text>
            </TouchableOpacity>
          </View> */}
          {/* <View style={Styles.mainView}>
            <TouchableOpacity
              style={Styles.mainCardView}
              activeOpacity={0.9}
              onPress={() => navigate('Setting')}>
              <Text style={Styles.txt}> Profile </Text>
            </TouchableOpacity>
          </View> */}
          {/* <View style={Styles.mainView}>
            <TouchableOpacity
              style={Styles.mainCardView}
              activeOpacity={0.9}
              onPress={() => navigate('Setting')}>
              <Text style={Styles.txt}> Profile </Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
        {/* <View>
          <MyButton
            onPress={() => {
              this.props.navigation.navigate('Setting');
            }}
            Text="Next"
            isRoundedCorners={false}
          />
        </View> */}
      </View>
    );
  }
}
