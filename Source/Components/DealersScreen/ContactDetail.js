import React, { Component } from 'react'
import { Text, View, Keyboard, Alert } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import MyButton from '../../CustomControls/MyButton';
import Toast, { DURATION } from 'react-native-easy-toast';
import styles from './CommonAddDealersStyle';
import * as AppConstants from '../Helper/AppConstants';

export default class ContactDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name1: '',
            EmailAddress1: '',
            Mobile1: '',
            Name2: '',
            EmailAddress2: '',
            Mobile2: '',
        }
    }
    validateEmail = (EmailAddress1) => {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(EmailAddress1);
    };
    validateEmail2 = (EmailAddress2) => {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(EmailAddress2);
    };


    validateFields() {
        if (this.state.Name1.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NONAME,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.EmailAddress1.trim() == '' || !this.validateEmail(this.state.EmailAddress1.trim())) {
            this.refs.toast.show(AppConstants.Messages.INVALIDEMAILADDRESS, DURATION.LENGTH_LONG);
        }

        else if (this.state.Mobile1.trim() == '') {
            this.refs.toast.show(AppConstants.Messages.NOMOBILENO, DURATION.LENGTH_LONG);
        }
        else if (isNaN(this.state.Mobile1.trim())) {
            this.refs.toast.show(AppConstants.Messages.MOBILENONOTANUMBER, DURATION.LENGTH_LONG);
        }
        else if (this.state.Mobile1.length != 10) {
            this.refs.toast.show(AppConstants.Messages.MOBILENOLENGTH, DURATION.LENGTH_LONG);
        }
        else if (this.state.Name2.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NONAME,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.EmailAddress2.trim() == '' || !this.validateEmail2(this.state.EmailAddress2.trim())) {
            this.refs.toast.show(AppConstants.Messages.INVALIDEMAILADDRESS, DURATION.LENGTH_LONG);
        }
        else if (this.state.Mobile2.trim() == '') {
            this.refs.toast.show(AppConstants.Messages.NOMOBILENO1, DURATION.LENGTH_LONG);
        }
        else if (isNaN(this.state.Mobile2.trim())) {
            this.refs.toast.show(AppConstants.Messages.MOBILENONOTANUMBER, DURATION.LENGTH_LONG);
        }
        else if (this.state.Mobile2.length != 10) {
            this.refs.toast.show(AppConstants.Messages.MOBILENOLENGTH, DURATION.LENGTH_LONG);
        }
        else {
            Alert.alert('All Ok');
        }
    }
    render() {
        return (
            <View>

                <Text style={styles.txtBusinessDetail}>Contact Detail </Text>


                <View style={styles.txtInputView}>
                    <Text style={styles.txtContactCommonStyle}>Contact 1</Text>
                    <Toast
                        ref="toast"
                        style={AppConstants.CommonStyles.ToastStyle}
                        position="top"
                        positionValue={AppConstants.getDeviceHeight(15)}
                        fadeInDuration={500}
                        fadeOutDuration={700}
                        textStyle={AppConstants.CommonStyles.ToastTextStyle}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="Enter Name"
                        value={this.state.Name1}
                        tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        labelFontSize={AppConstants.moderateScale(
                            AppConstants.FONTSIZE.FS16,
                        )}
                        inputContainerStyle={{

                            // paddingLeft: AppConstants.getDeviceWidth(10.93),
                            fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
                        }}
                        maxLength={20}
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize="words"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={Name1 => this.setState({ Name1 })}
                        returnKeyType={"next"}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'email-address'}
                        selectTextOnFocus={false}
                        label="Email Address"
                        value={this.state.EmailAddress1}
                        tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        labelFontSize={AppConstants.moderateScale(
                            AppConstants.FONTSIZE.FS16,
                        )}
                        inputContainerStyle={{

                            // paddingLeft: AppConstants.getDeviceWidth(10.93),
                            fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
                        }}
                        // maxLength={20}
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize="none"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={EmailAddress1 => this.setState({ EmailAddress1 })}
                        returnKeyType={'go'}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'phone-pad'}
                        selectTextOnFocus={false}
                        label="Mobile"
                        value={this.state.Mobile1}
                        tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        labelFontSize={AppConstants.moderateScale(
                            AppConstants.FONTSIZE.FS16,
                        )}
                        inputContainerStyle={{

                            // paddingLeft: AppConstants.getDeviceWidth(10.93),
                            fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
                        }}
                        maxLength={10}
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize="words"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={Mobile1 => this.setState({ Mobile1 })}
                        returnKeyType={"next"}
                    />
                    <Text style={styles.txtContactCommonStyle}>Contact 2</Text>
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="Enter Name"
                        value={this.state.Name2}
                        tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        labelFontSize={AppConstants.moderateScale(
                            AppConstants.FONTSIZE.FS16,
                        )}
                        inputContainerStyle={{

                            // paddingLeft: AppConstants.getDeviceWidth(10.93),
                            fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
                        }}
                        maxLength={20}
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize="words"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={Name2 => this.setState({ Name2 })}
                        returnKeyType={"next"}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'email-address'}
                        selectTextOnFocus={false}
                        label="Email Address"
                        value={this.state.EmailAddress2}
                        tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        labelFontSize={AppConstants.moderateScale(
                            AppConstants.FONTSIZE.FS16,
                        )}
                        inputContainerStyle={{
                            // paddingLeft: AppConstants.getDeviceWidth(10.93),
                            fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
                        }}
                        // maxLength={20}
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize="none"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={EmailAddress2 => this.setState({ EmailAddress2 })}
                        returnKeyType={'go'}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'phone-pad'}
                        selectTextOnFocus={false}
                        label="Mobile"
                        value={this.state.Mobile2}
                        tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        labelFontSize={AppConstants.moderateScale(
                            AppConstants.FONTSIZE.FS16,
                        )}
                        inputContainerStyle={{

                            // paddingLeft: AppConstants.getDeviceWidth(10.93),
                            fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
                        }}
                        maxLength={10}
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize="words"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={Mobile2 => this.setState({ Mobile2 })}
                        returnKeyType={"next"}
                    />
                </View>
                <View style={styles.btnAddBillingAddress}>

                    <MyButton
                        Text="Add Bank Detail"
                        onPress={this.validateFields.bind(this)}
                    />

                </View>
            </View>
        )
    }
}
