import React, { Component } from 'react';
import { View, Text, ScrollView, Alert, Keyboard, Image, TouchableOpacity } from 'react-native';
import Styles from './LoginStyle';
import { TextField } from 'react-native-material-textfield';
import Toast, { DURATION } from 'react-native-easy-toast';
import PLIcon from 'react-native-vector-icons/Octicons';
import * as AppConstants from '../Helper/AppConstants';
import MIcon from 'react-native-vector-icons/FontAwesome';
import MyButton from '../../CustomControls/MyButton';
const Images = {
  Logobw: 'smalllogo',
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MobileNumber: '',
      Password: '',
      showtxtPasswordIcon: 'visibility-off',
      showtxtPassword: true,
    };
  }
  validateFields() {
    if (this.state.MobileNumber.trim() == '') {
      this.refs.toast.show(
        AppConstants.Messages.NOMOBILENO,
        DURATION.LENGTH_LONG,
      );
    } else if (isNaN(this.state.MobileNumber.trim())) {
      this.refs.toast.show(
        AppConstants.Messages.MOBILENONOTANUMBER,
        DURATION.LENGTH_LONG,
      );
    } else if (this.state.MobileNumber.length != 10) {
      this.refs.toast.show(
        AppConstants.Messages.MOBILENOLENGTH,
        DURATION.LENGTH_LONG,
      );
    }
    else if (this.state.Password.trim() == '') {
      this.refs.toast.show(
        AppConstants.Messages.NOPASSWORD,
        DURATION.LENGTH_LONG,
      );
    }
    else {
      Alert.alert('All Ok');
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.mainContainer}>
        <Toast
          ref="toast"
          style={AppConstants.CommonStyles.ToastStyle}
          position="top"
          positionValue={AppConstants.getDeviceHeight(0)}
          fadeInDuration={750}
          fadeOutDuration={1000}
          textStyle={AppConstants.CommonStyles.ToastTextStyle}
        />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={Styles.logoContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: Images.Logobw }}
              style={Styles.logo}
            />
          </View>
          <View style={Styles.Container}>
            <Text style={Styles.txtLogintitle}>Login</Text>
            <Text style={Styles.txtsignintitle}>Sign in to access your account.</Text>
          </View>
          <View style={Styles.txtInputView}>
            <TextField
              style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
              keyboardType={'phone-pad'}
              selectTextOnFocus={false}
              label="Mobile No."
              value={this.state.MobileNumber}
              tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
              textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
              baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
              fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS15)}
              labelFontSize={AppConstants.moderateScale(
                AppConstants.FONTSIZE.FS15,
              )}
              inputContainerStyle={{
                paddingLeft: AppConstants.getDeviceWidth(10.93),
                fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
              }}
              maxLength={10}
              autoCorrect={false}
              autoCapitalize="words"
              labelTextStyle={{
                fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
              }}
              labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
              style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
              blurOnSubmit={true}
              onSubmitEditing={() => {
                this.refs.Password.focus();
              }}
              onChangeText={MobileNumber => this.setState({ MobileNumber })}
              returnKeyType={'next'}
            />
            <MIcon style={Styles.phoneIcon} name="mobile-phone"
              size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS22)} color="#0F58D6" />
          </View>
          <View style={Styles.txtInputView}>
            <TextField
              style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
              secureTextEntry={this.state.showtxtPassword}
              label="Password"
              value={this.state.Password}
              tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
              textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
              baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
              fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS15)}
              labelFontSize={AppConstants.moderateScale(
                AppConstants.FONTSIZE.FS15,
              )}
              inputContainerStyle={{
                paddingLeft: AppConstants.getDeviceWidth(10.93),
                fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
              }}
              maxLength={15}
              autoCorrect={false}
              autoCapitalize="none"
              labelTextStyle={{
                fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
              }}
              labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
              blurOnSubmit={true}
              ref="Password"
              onSubmitEditing={() => {
                Keyboard.dismiss;
                this.validateFields();
              }}
              onChangeText={Password => this.setState({ Password })}
              returnKeyType={'go'}
            />
            <PLIcon style={Styles.phoneIcon} name="lock"
              size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS22)} color="#0F58D6" />

            <TouchableOpacity >
              <Text style={Styles.txtForgot}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.btnsigninView}>
            <MyButton
              Text="Sign in"
              onPress={this.validateFields.bind(this)}
            />
          </View>
        </ScrollView>
      </View>

    );
  }
}
