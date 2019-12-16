import React, { Component } from 'react'
import { Text, View, Alert, Keyboard } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import MyButton from '../../CustomControls/MyButton';
import Toast, { DURATION } from 'react-native-easy-toast';
import styles from './CommonAddDealersStyle';
import * as AppConstants from '../Helper/AppConstants';
import BillingDetail from './BillingDetail';
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
        else if (this.state.GstNumber.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOGSTNUMBER,
                DURATION.LENGTH_LONG,
            );
        }

        else if (this.state.PanNumber.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOPANNUMBER,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.PartnerType.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOPARTNERTYPE,
                DURATION.LENGTH_LONG,
            );
        }
        else {
            Alert.alert('All Ok');
            // this.props.navigation.navigate('BillingDetail')
        }
    }

    render() {

        let data = [{
            value: '2019',
        }, {
            value: '2018',
        }, {
            value: '2017',
        }];
        // const { navigate } = this.props.navigation;
        return (
            <View>

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
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="Legal Name"
                        value={this.state.LegalName}
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
                        onChangeText={LegalName => this.setState({ LegalName })}
                        returnKeyType={"next"}
                    />
                    <Dropdown
                        label='Type of firm'
                        itemCount={5}
                        animationDuration={5}
                        value={this.state.FirmType}
                        data={data}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        labelFontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        autoCorrect={false}
                        autoCapitalize="words"
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        blurOnSubmit={true}
                        onChangeText={(FirmType) => this.setState({ FirmType })}
                        returnKeyType={"next"}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="GST Number"
                        value={this.state.GstNumber}
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
                        onChangeText={GstNumber => this.setState({ GstNumber })}
                        returnKeyType={'go'}
                    />
                    <TextField
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        keyboardType={'default'}
                        selectTextOnFocus={false}
                        label="PAN Number"
                        value={this.state.PanNumber}
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
                        onChangeText={PanNumber => this.setState({ PanNumber })}
                        returnKeyType={'go'}
                    />
                    <Dropdown
                        label='Partner Type'
                        itemCount={5}
                        animationDuration={5}
                        value={this.state.PartnerType}
                        data={data}
                        tintColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                        textColor={AppConstants.COLORS.TEXTCOLOR}
                        baseColor={AppConstants.COLORS.TEXTCOLOR}
                        fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        labelFontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        autoCorrect={false}
                        autoCapitalize="words"
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        blurOnSubmit={true}
                        onChangeText={(PartnerType) => this.setState({ PartnerType })}
                        returnKeyType={"next"}
                    />
                </View>
                <View style={styles.btnAddBillingAddress}>

                    <MyButton
                        Text="Add Billing Address"
                        onPress={this.props.onPageChange(1)}
                    // onPress={() => navigate(AppConstants.SCREENS.MERCHANDISEPRODUCT)}
                    // onPress={this.validateFields.bind(this)}
                    // onPress={() => this.validateFields.bind(this.props.navigation.navigate('BillingDetail'))}
                    />

                </View>
            </View>
        )
    }
}
