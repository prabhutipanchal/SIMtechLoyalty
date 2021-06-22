import React, { Component } from 'react';
import { View, Keyboard, Alert, Text } from 'react-native';
import styles from './AddDealersStyle';
import * as AppConstants from '../Helper/AppConstants';
import MyButton from '../../CustomControls/MyButton';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/FontAwesome';
import PasswordLockIcon from 'react-native-vector-icons/Octicons';
import Toast, { DURATION } from 'react-native-easy-toast';
export default class AddDealers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            isLoading: false,
        };
    }

    validateFields() {
        if (this.state.Name.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NONAME,
                DURATION.LENGTH_LONG,
            );
        }
        else if (this.state.Email.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NOEMAIL,
                DURATION.LENGTH_LONG,
            );
        }
        else {
            Alert.alert('All Ok');
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

                <View>

                    <View style={styles.txtInputView}>
                        <TextField
                            style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            keyboardType={'default'}
                            selectTextOnFocus={false}
                            label="Name"
                            value={this.state.Name}
                            tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                            textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS15)}
                            labelFontSize={AppConstants.moderateScale(
                                AppConstants.FONTSIZE.FS15,
                            )}
                            inputContainerStyle={{

                                paddingLeft: AppConstants.getDeviceWidth(10.93),
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
                            onChangeText={Name => this.setState({ Name })}
                            returnKeyType={'go'}
                        />
                        <Icon style={styles.phoneIcon} name="mobile-phone" />
                    </View>
                    <View style={styles.txtInputView}>
                        <TextField
                            style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            keyboardType={'default'}
                            selectTextOnFocus={false}
                            label="Email"
                            value={this.state.Email}
                            tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                            textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS15)}
                            labelFontSize={AppConstants.moderateScale(
                                AppConstants.FONTSIZE.FS15,
                            )}
                            inputContainerStyle={{

                                paddingLeft: AppConstants.getDeviceWidth(10.93),
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
                            onChangeText={Email => this.setState({ Email })}
                            returnKeyType={'go'}
                        />
                        <PasswordLockIcon style={styles.LockIcon} name="lock"  />
                    </View>
                    <View style={styles.txtInputView}>
                        <TextField
                            style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            keyboardType={'default'}
                            selectTextOnFocus={false}
                            label="Name"
                            value={this.state.Name}
                            tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                            textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS15)}
                            labelFontSize={AppConstants.moderateScale(
                                AppConstants.FONTSIZE.FS15,
                            )}
                            inputContainerStyle={{

                                paddingLeft: AppConstants.getDeviceWidth(10.93),
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
                            onChangeText={Name => this.setState({ Name })}
                            returnKeyType={'go'}
                        />
                        <Icon style={styles.phoneIcon} name="mobile-phone" />
                    </View>
                    <View style={styles.txtInputView}>
                        <TextField
                            style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            keyboardType={'default'}
                            selectTextOnFocus={false}
                            label="Email"
                            value={this.state.Email}
                            tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                            textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS15)}
                            labelFontSize={AppConstants.moderateScale(
                                AppConstants.FONTSIZE.FS15,
                            )}
                            inputContainerStyle={{

                                paddingLeft: AppConstants.getDeviceWidth(10.93),
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
                            onChangeText={Email => this.setState({ Email })}
                            returnKeyType={'go'}
                        />
                        <PasswordLockIcon style={styles.LockIcon} name="lock"  />
                    </View>
                    <View style={styles.txtInputView}>
                        <TextField
                            style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            keyboardType={'default'}
                            selectTextOnFocus={false}
                            label="Name"
                            value={this.state.Name}
                            tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                            textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS15)}
                            labelFontSize={AppConstants.moderateScale(
                                AppConstants.FONTSIZE.FS15,
                            )}
                            inputContainerStyle={{

                                paddingLeft: AppConstants.getDeviceWidth(10.93),
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
                            onChangeText={Name => this.setState({ Name })}
                            returnKeyType={'go'}
                        />
                        <Icon style={styles.phoneIcon} name="mobile-phone"  />
                    </View>
                    <View style={styles.txtInputView}>
                        <TextField
                            style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            keyboardType={'default'}
                            selectTextOnFocus={false}
                            label="Email"
                            value={this.state.Email}
                            tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                            textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS15)}
                            labelFontSize={AppConstants.moderateScale(
                                AppConstants.FONTSIZE.FS15,
                            )}
                            inputContainerStyle={{

                                paddingLeft: AppConstants.getDeviceWidth(10.93),
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
                            onChangeText={Email => this.setState({ Email })}
                            returnKeyType={'go'}
                        />
                        <PasswordLockIcon style={styles.LockIcon} name="lock" />
                    </View>

                </View>


                <View style={styles.btnSaveView}>
                    <MyButton
                        Text="SAVE"
                        onPress={this.validateFields.bind(this)}
                    />
                </View>
            </View>
        );
    }
}
