/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, Keyboard, Alert } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import MyDropDown from '../../CustomControls/MyDropDown';
import MyButton from '../../CustomControls/MyButton';
import Toast, { DURATION } from 'react-native-easy-toast';
import styles from './CommonAddDealersStyle';
import * as AppConstants from '../Helper/AppConstants';

export default class BillingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AddressLine1: '',
            AddressLine2: '',
            Area: '',
            State: '',
            City: '',
            Postcode: '',
        }
    }
    validateFields() {
        if (this.state.AddressLine1.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOADDRESS,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.AddressLine2.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOADDRESS2,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.Area.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.AREA,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.State.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.STATE,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.City.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.CITY,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.Postcode.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOPOSTCODE,
                DURATION.LENGTH_LONG,
            );
        }
        else if (isNaN(this.state.Postcode.trim())) {
            this.refs.toast.show(AppConstants.Messages.PINCODENOTANUMBER, DURATION.LENGTH_LONG);
        }
        else if (this.state.Postcode.length != 6) {
            this.refs.toast.show(AppConstants.Messages.PINCODELENGTH, DURATION.LENGTH_LONG);
        }

        else {
            this.props.onPageChange(2)
        }
    }
    render() {
        let state = [{
            value: 'Gujarat',
        },
        {
            value: 'Maharastra',
        },
        {
            value: 'Rajsthan',
        },
        {
            value: 'Kerala',
        }
        ];

        let city = [{
            value: 'Ahmedabad',
        },
        {
            value: 'Palanpur',
        },
        {
            value: 'Surat',
        },
        {
            value: 'Mehsana',
        }
        ];

        return (

            <View>

                <Text style={styles.txtBusinessDetail}>Billing Address </Text>
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
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="Address line 1"
                        multiline={true}
                        value={this.state.AddressLine1}
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
                        autoCapitalize="words"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={AddressLine1 => this.setState({ AddressLine1 })}
                        returnKeyType={"next"}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="Address line 2"
                        multiline={true}
                        value={this.state.AddressLine2}
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
                        autoCapitalize="words"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={AddressLine2 => this.setState({ AddressLine2 })}
                        returnKeyType={"next"}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="Area"
                        maxLength={25}
                        value={this.state.Area}
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

                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize="words"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={Area => this.setState({ Area })}
                        returnKeyType={"next"}
                    />
                    <MyDropDown
                        isborderShow={false}
                        label='State'
                        data={state}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        value={this.state.State}
                        onChangeText={(State) => this.setState({ State })}
                        returnKeyType={"next"} />

                    <MyDropDown
                        isborderShow={false}
                        label='City'
                        data={city}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        value={this.state.City}
                        onChangeText={(City) => this.setState({ City })}
                        returnKeyType={"next"} />


                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'number-pad'}
                        selectTextOnFocus={false}
                        label="Post Code"
                        value={this.state.Postcode}
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
                        maxLength={6}
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        autoCorrect={false}
                        autoCapitalize="words"
                        blurOnSubmit={true}
                        onSubmitEditing={() => {
                            Keyboard.dismiss;
                            this.validateFields();
                        }}
                        onChangeText={Postcode => this.setState({ Postcode })}
                        returnKeyType={'go'}
                    />

                </View>
                <View style={styles.btnAddBillingAddress}>

                    <MyButton
                        Text=" Save & Add Warehouse Address"
                        onPress={this.validateFields.bind(this)}
                    />

                </View>

            </View>
        )
    }
}
