/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, Keyboard, Alert } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import MyButton from '../../CustomControls/MyButton';
import Toast, { DURATION } from 'react-native-easy-toast';
import styles from './CommonAddDealersStyle';
import * as AppConstants from '../Helper/AppConstants';

export default class BankDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AccountName: '',
            AccountNumber: '',
            IFSCCode: '',
            BankName: '',
            Branch: '',
            BranchAddress: '',
        }
    }
    validateIFSC = (IFSCCode) => {
        var re = /^[A-Z]{4}0[A-Z0-9]{6}$/;
        return re.test(IFSCCode)
    };
    validateFields() {
        if (this.state.AccountName.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NONAME,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.AccountNumber.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOACCOUNTNO,
                DURATION.LENGTH_LONG,
            );
        }
        else if (isNaN(this.state.AccountNumber.trim())) {
            this.refs.toast.show(AppConstants.Messages.ACCOUNTNONOTANUMBER, DURATION.LENGTH_LONG);
        }
        else if (this.state.AccountNumber.length != 18) {
            this.refs.toast.show(AppConstants.Messages.ACCOUNTNOLENGTH, DURATION.LENGTH_LONG);
        }
        else if (this.state.IFSCCode.trim() == '' || !this.validateIFSC(this.state.IFSCCode.trim())) {
            this.refs.toast.show(
                AppConstants.Messages.NOIFSCNO,
                DURATION.LENGTH_LONG,
            );
        }
        // else if (this.state.IFSCCode.length != 11) {
        //     this.refs.toast.show(AppConstants.Messages.IFSCNOLENGTH, DURATION.LENGTH_LONG);
        // }
        else if (this.state.BankName.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOBANKNAME,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.Branch.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOBRANCHNAME,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.BranchAddress.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOBRANCHADDRESS,
                DURATION.LENGTH_LONG,
            );
        }

        else {
            this.props.onPageChange(5)
        }
    }
    render() {
        return (
            <View>

                <Text style={styles.txtBusinessDetail}>Bank Details </Text>
                <Toast
                    ref="toast"
                    style={AppConstants.CommonStyles.ToastStyle}
                    position="top"
                    positionValue={AppConstants.getDeviceHeight(12)}
                    fadeInDuration={500}
                    fadeOutDuration={700}
                    textStyle={AppConstants.CommonStyles.ToastTextStyle}
                />
                <View style={styles.txtInputView}>
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="Account Name"
                        value={this.state.AccountName}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
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
                        onChangeText={AccountName => this.setState({ AccountName })}
                        returnKeyType={"next"}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'phone-pad'}
                        selectTextOnFocus={false}
                        label="Account Number"
                        value={this.state.AccountNumber}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
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
                        maxLength={18}
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize="none"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={AccountNumber => this.setState({ AccountNumber })}
                        returnKeyType={"next"}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="IFSC Code"
                        value={this.state.IFSCCode}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
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
                        maxLength={11}
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize='characters'
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={IFSCCode => this.setState({ IFSCCode })}
                        returnKeyType={"next"}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="Bank Name"
                        value={this.state.BankName}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
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
                        autoCapitalize="none"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={BankName => this.setState({ BankName })}
                        returnKeyType={"next"}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="Branch"
                        value={this.state.Branch}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
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
                        maxLength={15}
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize="none"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={Branch => this.setState({ Branch })}
                        returnKeyType={"next"}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="Branch Address"
                        multiline={true}
                        value={this.state.BranchAddress}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
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
                        maxLength={50}
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize="none"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={BranchAddress => this.setState({ BranchAddress })}
                        returnKeyType={"next"}
                    />
                </View>
                <View style={styles.btnAddBillingAddress}>

                    <MyButton
                        Text=" Save & Upload Documents"
                        onPress={ this.validateFields.bind(this)}
                    />

                </View>
            </View>
        )
    }
}
