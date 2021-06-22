import React, { Component } from 'react'
import { Text, View, Keyboard } from 'react-native'
import MyTextField from '../../CustomControls/MyTextField';
import MyDropDown from '../../CustomControls/MyDropDown';
import MyButton from '../../CustomControls/MyButton';
import Toast, { DURATION } from 'react-native-easy-toast';
import styles from './CommonAddDealersStyle';
import * as AppConstants from '../Helper/AppConstants';
export default class BusinessDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LegalName: '',
            FirmType: '',
            GstNumber: '',
            PanNumber: '',
            PartnerType: '',
        }
    }
    /*
    (0[0-9]|1[1-9]|2[0-9]|3[0-7]) // matches the first two digits. This needs to be within the 01-37 range
     [A-Z]{3}                      // first three letters of the PAN Card
     [CPHFATBLJG]{1}               // PAN limited set control character
     [A-Z]{1}                      // PAN non-limited set control character
     \d{4}                         // PAN Identity numbers 
      [A-Z]{1}                     // PAN non-limited set control character
      \d{1}                        // GST control number
     [A-Z0-9]{2}                   // GST non-limited control characters
     $/g
*/
    validateGST = (GstNumber) => {
        var re = /(0[0-9]|1[1-9]|2[0-9]|3[0-7])[A-Z]{3}[CPHFATBLJG]{1}[A-Z]{1}\d{4}[A-Z]{1}\d{1}[A-Z0-9]{2}/g;
        return re.test(GstNumber)
    };
    validatePAN = (PanNumber) => {
        var re = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        return re.test(PanNumber)
    };

    validateFields() {
        if (this.state.LegalName.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NONAME,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.FirmType.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOFIRMTYPE,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.GstNumber.trim() == '' || !this.validateGST(this.state.GstNumber.trim())) {
            this.refs.toast.show(AppConstants.Messages.NOGSTNUMBER, DURATION.LENGTH_LONG);
        }
        else if (this.state.PanNumber.trim() == '' || !this.validatePAN(this.state.PanNumber.trim())) {
            this.refs.toast.show(AppConstants.Messages.NOPANNUMBER, DURATION.LENGTH_LONG);
        }

        else if (this.state.PartnerType.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOPARTNERTYPE,
                DURATION.LENGTH_LONG,
            );
        }
        else {
            this.props.onPageChange(1)
        }
    }

    render() {

        let firmType = [
            {
                value: 'Proprietor',
            },
            {
                value: 'Partnership',
            },
            {
                value: ' Limited',
            },
            {
                value: ' LLP',
            },
        ];
        let partnerType = [

            {
                value: 'Wholeseller',
            },
            {
                value: 'Dealer',
            },
            {
                value: 'Distributor',
            },
            {
                value: 'Retailer',
            },
        ];
        return (
            <View style={styles.mainContainer}>

                <Text style={styles.txtBusinessDetail}>Business Detail </Text>
                <Toast
                    ref="toast"
                    style={AppConstants.CommonStyles.ToastStyle}
                    position="top"
                    positionValue={AppConstants.getDeviceHeight(10)}
                    fadeInDuration={500}
                    fadeOutDuration={700}
                    textStyle={AppConstants.CommonStyles.ToastTextStyle}
                />
                <View style={styles.txtInputView}>
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        label="Legal Name"
                        value={this.state.LegalName}
                        maxLength={20}
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={LegalName => this.setState({ LegalName })}
                        returnKeyType={"next"}
                    />
                    <MyDropDown
                        isborderShow={false}
                        label='Type of firm'
                        data={firmType}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        value={this.state.FirmType}
                        onChangeText={(FirmType) => this.setState({ FirmType })}
                        returnKeyType={"next"} />
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        label="GST Number"
                        value={this.state.GstNumber}
                        maxLength={15}
                        // autoCapitalize='characters'
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={GstNumber => this.setState({ GstNumber })}
                        returnKeyType={'next'}
                    />
                    <MyTextField
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        label="PAN Number"
                        value={this.state.PanNumber}
                        maxLength={10}
                        // autoCapitalize='characters'
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={PanNumber => this.setState({ PanNumber })}
                        returnKeyType={'next'}
                    />

                    <MyDropDown
                        isborderShow={false}
                        label='Partner Type'
                        data={partnerType}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        value={this.state.PartnerType}
                        onChangeText={(PartnerType) => this.setState({ PartnerType })}
                        returnKeyType={"next"} />

                </View>
                <View style={styles.btnAddBillingAddress}>

                    <MyButton
                        Text=" Save & Add Billing Address"
                        onPress={this.validateFields.bind(this)}
                    />
                </View>
            </View>
        )
    }
}
