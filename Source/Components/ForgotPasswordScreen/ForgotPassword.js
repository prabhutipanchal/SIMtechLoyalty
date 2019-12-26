import React, { Component } from 'react';
import { View, Image, Keyboard, Alert, Text, TouchableOpacity } from 'react-native';
import styles from './ForgotPasswordStyle';
import * as AppConstants from '../Helper/AppConstants';
import MyButton from '../../CustomControls/MyButton';
import MyTextField from '../../CustomControls/MyTextField';
import PhoneIcon from 'react-native-vector-icons/FontAwesome';
import Toast, { DURATION } from 'react-native-easy-toast';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Images = {
  Logobw: 'smalllogo',
};

export default class ForgotPassword extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: () => (
        <TouchableOpacity activeOpacity={0.9} style={{ marginLeft: AppConstants.getDeviceWidth(3) }}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={25} color={AppConstants.COLORS.BLACK} />
        </TouchableOpacity>
      ),
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      MobileNumber: '',
      isLoading: false,
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
    else {
      this.props.navigation.navigate(AppConstants.SCREENS.LOGIN)
    }
  }

  render() {
    const { navigate } = this.props.navigation;
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
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            source={{ uri: Images.Logobw }}
            style={styles.logo}
          />
        </View>
        <View style={styles.Container}>
          <Text style={styles.txtsignintitle}>Sign in to access your account.</Text>
        </View>

        <View>

          <View style={styles.txtInputView}>
            <MyTextField
              label="Mobile No."
              keyboardType={'phone-pad'}
              tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
              textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
              baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
              inputContainerStyle={{
                paddingLeft: AppConstants.getDeviceWidth(10.95),
                fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
              }}
              value={this.state.MobileNumber}
              maxLength={10}
              blurOnSubmit={true}
              onSubmitEditing={() => {
                Keyboard.dismiss;
                this.validateFields();
              }}
              onChangeText={MobileNumber => this.setState({ MobileNumber })}
              returnKeyType={'go'}
            />
            <PhoneIcon style={styles.phoneIcon} name="mobile-phone" />
          </View>
        </View>

        <View style={styles.btnResetPwdView}>
          <MyButton
            Text="Reset Password"
            onPress={this.validateFields.bind(this)}
          />
        </View>

      </View>
    );
  }
}
