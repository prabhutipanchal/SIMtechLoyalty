import React, {Component} from 'react';
import {View, Text, ScrollView, Image, Keyboard, Alert} from 'react-native';
import styles from './OTPStyle';
import * as AppConstants from '../Helper/AppConstants';
import MyButton from '../../CustomControls/MyButton';
import Toast, {DURATION} from 'react-native-easy-toast';
import {TextField} from 'react-native-material-textfield';
const Images = {
  Logobw: 'icon',
};

export default class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OTP: '',
      isLoading: false,
    };
  }

  validateFields() {
    if (this.state.OTP == '') {
      this.refs.toast.show(AppConstants.Messages.NOOTP, DURATION.LENGTH_LONG);
    } else if (isNaN(this.state.OTP.trim())) {
      this.refs.toast.show(
        AppConstants.Messages.OTPNOTANUMBER,
        DURATION.LENGTH_LONG,
      );
    } else if (this.state.OTP.length != 4) {
      this.refs.toast.show(
        AppConstants.Messages.OTPLENGTH,
        DURATION.LENGTH_LONG,
      );
    } else {
      Alert.alert('All Ok');
    }
  }

  render() {
    if (this.state.isLoading) {
      return AppConstants.ShowActivityIndicator();
    }
    return (
      <View style={styles.mainContainer}>
        <Toast
          ref="toast"
          style={AppConstants.CommonStyles.ToastStyle}
          position="top"
          positionValue={AppConstants.getDeviceHeight(0)}
          fadeInDuration={750}
          fadeOutDuration={100}
          textStyle={AppConstants.CommonStyles.ToastTextStyle}
        />

        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              source={{uri: Images.Logobw}}
              style={styles.logo}
            />
          </View>
          <View style={styles.txtOTPView}>
            <Text style={styles.txtSentOTP}>OTP Sent on </Text>
            <Text style={styles.txtSentOTPMobile}>9998098250</Text>
          </View>
          <View style={styles.otpContainerView}>
            <TextField
              secureTextEntry
              style={{
                fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1_BOLD,
                textAlign: 'center',
              }}
              placeholder={'Enter OTP'}
              tintColor={AppConstants.COLORS.BASECOLOR_1}
              textColor={AppConstants.COLORS.BASECOLOR_2}
              baseColor={AppConstants.COLORS.BASECOLOR_1}
              fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS20)}
              keyboardType={'number-pad'}
              maxLength={4}
              autoCorrect={false}
              autoCapitalize="none"
              blurOnSubmit={true}
              onSubmitEditing={() => {
                Keyboard.dismiss;
                this.validateFields();
              }}
              onChangeText={OTP => this.setState({OTP})}
              returnKeyType={'go'}
            />
          </View>
          <View style={styles.btnVerifyOTPView}>
            <MyButton
              Text="VERIFY OTP"
              onPress={() => {
                this.validateFields();
              }}
            />
          </View>
          <View style={styles.btnResendOTPView}>
            <MyButton onPress={() => this.validateFields()} Text="RESEND OTP" />
          </View>
        </ScrollView>
      </View>
    );
  }
}
