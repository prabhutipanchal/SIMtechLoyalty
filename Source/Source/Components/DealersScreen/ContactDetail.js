/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, Keyboard, } from 'react-native'
import MyTextField from '../../CustomControls/MyTextField';
import MyButton from '../../CustomControls/MyButton';
import Toast, { DURATION } from 'react-native-easy-toast';
import styles from './CommonAddDealersStyle';
import * as AppConstants from '../Helper/AppConstants';

export default class ContactDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            EmailAddress: '',
            Mobile: '',
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
        else {
            this.props.onPageChange(4)
        }
    }
    render() {
        return (
            <View>

                <Text style={styles.txtBusinessDetail}>Contact Detail </Text>


                <View style={styles.txtInputView}>
                    <Toast
                        ref="toast"
                        style={AppConstants.CommonStyles.ToastStyle}
                        position="top"
                        positionValue={AppConstants.getDeviceHeight(0)}
                        fadeInDuration={500}
                        fadeOutDuration={700}
                        textStyle={AppConstants.CommonStyles.ToastTextStyle}
                    />
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        label="Enter Name"
                        value={this.state.Name}
                        maxLength={20}
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={Name => this.setState({ Name })}
                        returnKeyType={"next"}
                    />
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        keyboardType={'email-address'}
                        label="Email Address"
                        value={this.state.EmailAddress}
                        maxLength={20}
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={EmailAddress => this.setState({ EmailAddress })}
                        returnKeyType={'go'}
                    />
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        keyboardType={'phone-pad'}
                        label="Mobile"
                        value={this.state.Mobile}
                        maxLength={10}
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={Mobile => this.setState({ Mobile })}
                        returnKeyType={"next"}
                    />

                </View>
                <View style={styles.btnAddBillingAddress}>

                    <MyButton
                        Text=" Save & Add Bank Detail"
                        onPress={this.validateFields.bind(this)}
                    />

                </View>
            </View>
        )
    }
}
