import React, { Component } from 'react';
import { View, Text, Keyboard, Image, TouchableOpacity, StatusBar } from 'react-native';
import Styles from './LoginStyle';
import MyTextField from '../../CustomControls/MyTextField';
import Toast, { DURATION } from 'react-native-easy-toast';
import * as AppConstants from '../Helper/AppConstants';
import MobileIcon from 'react-native-vector-icons/FontAwesome';
import PasswordLockIcon from 'react-native-vector-icons/Octicons';
import SplashScreen from 'react-native-splash-screen';
import MyButton from '../../CustomControls/MyButton';
const Images = {
  Logobw: 'smalllogo',
};
export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: () => (
      <View />
    ),
  })

  constructor(props) {
    super(props);
    this.state = {
      MobileNumber: '',
      Password: '',
      showtxtPasswordIcon: 'visibility-off',
      showtxtPassword: true,
    };
  }
  componentDidMount() {
    SplashScreen.hide();
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
      this.props.navigation.replace(AppConstants.SCREENS.BESTPERFORMERS)
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.mainContainer}>
        <StatusBar
          backgroundColor={AppConstants.COLORS.WHITE}
          barStyle="dark-content"
        />
        <Toast
          ref="toast"
          style={AppConstants.CommonStyles.ToastStyle}
          position="top"
          positionValue={AppConstants.getDeviceHeight(0)}
          fadeInDuration={750}
          fadeOutDuration={1000}
          textStyle={AppConstants.CommonStyles.ToastTextStyle}
        />
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
          <MyTextField
            tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
            textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
            baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
            inputContainerStyle={{
              paddingLeft: AppConstants.getDeviceWidth(10.95),
              fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
            }}
            label="Mobile No."
            keyboardType={'phone-pad'}
            value={this.state.MobileNumber}
            maxLength={10}
            blurOnSubmit={true}
            onSubmitEditing={() => {
              this.refs.Password.focus();
            }}
            onChangeText={MobileNumber => this.setState({ MobileNumber })}
            returnKeyType={'next'}
          />
          <MobileIcon
            style={Styles.phoneIcon} name="mobile-phone" />
        </View>
        <View style={Styles.txtInputView}>
          <MyTextField
            secureTextEntry={this.state.showtxtPassword}
            tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
            textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
            baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
            inputContainerStyle={{
              paddingLeft: AppConstants.getDeviceWidth(10.95),
              fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
            }}
            label="Password"
            ref="Password"
            value={this.state.Password}
            maxLength={15}
            blurOnSubmit={true}
            onSubmitEditing={() => {
              Keyboard.dismiss;
              this.validateFields();
            }}
            onChangeText={Password => this.setState({ Password })}
            returnKeyType={'go'}
          />
          <PasswordLockIcon style={Styles.passwordLockIcon} name="lock" />

          <TouchableOpacity onPress={() => this.props.navigation.navigate(AppConstants.SCREENS.FORGOTPASSWORD)} >
            <Text style={Styles.txtForgot}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.btnsigninView}>
          <MyButton
            Text="Sign In"
            // onPress={this.validateFields.bind(this)}
            onPress={this.props.navigation.replace(AppConstants.SCREENS.DASHBOARD)}
          />
        </View>
      </View>

    );
  }
}
