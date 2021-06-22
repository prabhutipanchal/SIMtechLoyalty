/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, Keyboard, } from 'react-native';
import MyTextField from '../../CustomControls/MyTextField';
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
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        label="Account Name"
                        value={this.state.AccountName}
                        maxLength={20}
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={AccountName => this.setState({ AccountName })}
                        returnKeyType={"next"}
                    />
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        keyboardType={'phone-pad'}
                        label="Account Number"
                        value={this.state.AccountNumber}
                        maxLength={18}
                        // autoCapitalize="none"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={AccountNumber => this.setState({ AccountNumber })}
                        returnKeyType={"next"}
                    />
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        label="IFSC Code"
                        value={this.state.IFSCCode}
                        maxLength={11}
                        // autoCapitalize='characters'
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={IFSCCode => this.setState({ IFSCCode })}
                        returnKeyType={"next"}
                    />
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        label="Bank Name"
                        value={this.state.BankName}
                        maxLength={20}
                        // autoCapitalize="none"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={BankName => this.setState({ BankName })}
                        returnKeyType={"next"}
                    />
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        label="Branch"
                        value={this.state.Branch}
                        maxLength={15}
                        // autoCapitalize="none"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={Branch => this.setState({ Branch })}
                        returnKeyType={"next"}
                    />
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        label="Branch Address"
                        multiline={true}
                        value={this.state.BranchAddress}
                        maxLength={50}
                        // autoCapitalize="none"
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
                        onPress={this.validateFields.bind(this)}
                    />

                </View>
            </View>
        )
    }
}
