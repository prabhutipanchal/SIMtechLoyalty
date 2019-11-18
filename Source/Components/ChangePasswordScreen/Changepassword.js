import React, { Component } from 'react';
import { View, ScrollView, Keyboard, Alert, Text, TextInput } from 'react-native';
import styles from './ChangepasswordStyle';
import * as AppConstants from '../Helper/AppConstants';
import PwdIcon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '../../CustomControls/MyButton';
import { TextField } from 'react-native-material-textfield';
import Toast, { DURATION } from 'react-native-easy-toast';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OldPassword: '',
      NewPassword: '',
      ConfirmPassword: '',
      showtxtPassword: true,
      showtxtPasswordIcon: 'visibility-off',
      showtxtNewPassword: true,
      showtxtNewPasswordIcon: 'visibility-off',
      showtxtNewConfirmPassword: true,
      showtxtNewConfirmPasswordIcon: 'visibility-off',
      isLoading: false,
    };
  }

  validateFields() {
    if (this.state.OldPassword == '') {
      this.refs.toast.show(
        AppConstants.Messages.NOPASSWORD,
        DURATION.LENGTH_LONG,
      );
    } else if (this.state.NewPassword == '') {
      this.refs.toast.show(
        AppConstants.Messages.NONEWPASSWORD,
        DURATION.LENGTH_LONG,
      );
    } else if (this.state.ConfirmPassword == '') {
      this.refs.toast.show(
        AppConstants.Messages.NOCONFIRMPASSWORD,
        DURATION.LENGTH_LONG,
      );
    } else if (this.state.ConfirmPassword != this.state.NewPassword) {
      this.refs.toast.show(
        AppConstants.Messages.PASSWORDSHOULDMATCH,
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
          fadeInDuration={500}
          fadeOutDuration={700}
          textStyle={AppConstants.CommonStyles.ToastTextStyle}
        />
        <KeyboardAwareView doNotForceDismissKeyboardWhenLayoutChanges={true}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.Container}>
              <Text style={styles.txtchangepwdtitle}>Change Password</Text>
              <Text style={styles.txtsignintitle}>Sign in to access your account.</Text>
            </View>


            <View style={styles.lockiconview}>

              <View style={styles.txtInputView1}>

                <TextField
                  selectTextOnFocus={false}
                  secureTextEntry={this.state.showtxtPassword}
                  label="Enter Old Password"
                  tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                  textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                  baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                  fontSize={AppConstants.moderateScale(
                    AppConstants.FONTSIZE.FS15,
                  )}

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

                    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
                  }}
                  labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                  style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                  onSubmitEditing={() => {
                    this.refs.newPwd.focus();
                  }}

                  onChangeText={OldPassword => this.setState({ OldPassword })}
                  returnKeyType={'next'}
                />
                <PwdIcon style={styles.lockIcon} name="lock-outline" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS22)} color="#0F58D6" />
                <PwdIcon
                  style={styles.icon}
                  name={this.state.showtxtPasswordIcon}
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS20)}
                  onPress={() => {
                    this.setState({
                      showtxtPasswordIcon: this.state.showtxtPassword
                        ? 'visibility'
                        : 'visibility-off',
                      showtxtPassword: !this.state.showtxtPassword,
                    });
                  }}
                />

              </View>
            </View>
            <View style={styles.lockiconview}>

              <View style={styles.txtInputView2}>

                <TextField
                  selectTextOnFocus={false}
                  secureTextEntry={this.state.showtxtNewPassword}
                  label="Enter New Password"
                  tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                  textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                  baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                  fontSize={AppConstants.moderateScale(
                    AppConstants.FONTSIZE.FS15,
                  )}
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
                    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
                  }}
                  labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                  style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                  ref="newPwd"
                  onSubmitEditing={() => {
                    this.refs.confirmPwd.focus();
                  }}
                  onChangeText={NewPassword => this.setState({ NewPassword })}
                  returnKeyType={'next'}
                />
                <PwdIcon style={styles.lockIcon} name="lock-outline" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS22)} color="#0F58D6" />
                <PwdIcon
                  style={styles.icon}
                  name={this.state.showtxtNewPasswordIcon}
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS20)}
                  onPress={() => {
                    this.setState({
                      showtxtNewPasswordIcon: this.state.showtxtNewPassword
                        ? 'visibility'
                        : 'visibility-off',
                      showtxtNewPassword: !this.state.showtxtNewPassword,
                    });
                  }}
                />
              </View>

            </View>

            <View style={styles.lockiconview}>

              <View style={styles.txtInputView2}>
                <TextField
                  selectTextOnFocus={false}
                  secureTextEntry={this.state.showtxtNewConfirmPassword}
                  label="Confirm Password"
                  tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                  textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                  baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                  fontSize={AppConstants.moderateScale(
                    AppConstants.FONTSIZE.FS15,
                  )}
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
                    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
                  }}
                  labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                  style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                  blurOnSubmit={true}
                  ref="confirmPwd"
                  onSubmitEditing={() => {
                    Keyboard.dismiss;
                    this.validateFields();
                  }}
                  returnKeyType={'send'}
                  onChangeText={ConfirmPassword =>
                    this.setState({ ConfirmPassword })
                  }
                />
                <PwdIcon style={styles.lockIcon} name="lock-outline" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS22)} color="#0F58D6" />
               
                <PwdIcon
                  style={styles.icon}
                  name={this.state.showtxtNewConfirmPasswordIcon}
                  size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS20)}
                  onPress={() => {
                    this.setState({
                      showtxtNewConfirmPasswordIcon: this.state
                        .showtxtNewConfirmPassword
                        ? 'visibility'
                        : 'visibility-off',
                      showtxtNewConfirmPassword: !this.state
                        .showtxtNewConfirmPassword,
                    });
                  }}
                />
                
              </View>
              {/* <View style={styles.searchSection}>
                  <PwdIcon style={styles.searchIcon} name="lock-outline" size={20} color="#000" />

                  <TextInput
                    style={styles.input}
                    placeholder="User Nickname"
                    underlineColorAndroid="transparent"
                  />
                  <PwdIcon
                    style={styles.icon}
                    name={this.state.showtxtNewPasswordIcon}
                    size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS25)}
                    onPress={() => {
                      this.setState({
                        showtxtNewPasswordIcon: this.state.showtxtNewPassword
                          ? 'visibility'
                          : 'visibility-off',
                        showtxtNewPassword: !this.state.showtxtNewPassword,
                      });
                    }}
                  />
                </View> */}
            </View>
            <View style={styles.btnSignupView}>
              <MyButton
                Text="Reset Password"
                onPress={this.validateFields.bind(this)}
              />

            </View>
          </ScrollView>
        </KeyboardAwareView>

      </View>
    );
  }
}
