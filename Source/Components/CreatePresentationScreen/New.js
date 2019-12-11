/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View, Keyboard, Alert, Text, TouchableOpacity } from 'react-native'
import styles from './NewStyle';
import * as AppConstants from '../Helper/AppConstants';
import MyButton from '../../CustomControls/MyButton';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import Toast, { DURATION } from 'react-native-easy-toast';

export default class New extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Year: '',
            Quarter: '',
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
        else {
            Alert.alert('All Ok');
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        let data = [{
            value: '2019',
        }, {
            value: '2018',
        }, {
            value: '2017',
        }];
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
                            onChangeText={Name => this.setState({ Name })}
                            returnKeyType={'go'}
                        />

                    </View>
                    <Dropdown
                        label='Year'
                        itemCount={5}
                        animationDuration={5}
                        value={this.state.Year}
                        data={data}
                        tintColor={AppConstants.COLORS.BASECOLOR_1}
                        textColor={AppConstants.COLORS.BASECOLOR_2}
                        baseColor={AppConstants.COLORS.BASECOLOR_1}
                        fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        labelFontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                        autoCorrect={false}
                        autoCapitalize="words"
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        blurOnSubmit={true}
                        onChangeText={(Year) => this.setState({ Year })}
                        returnKeyType={"next"}
                    />
                    <Dropdown
                        label='Select Quarter'
                        itemCount={5}
                        animationDuration={5}
                        value={this.state.Quarter}
                        data={data}
                        tintColor={AppConstants.COLORS.BASECOLOR_1}
                        textColor={AppConstants.COLORS.BASECOLOR_2}
                        baseColor={AppConstants.COLORS.BASECOLOR_1}
                        fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS15)}
                        labelFontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS15)}
                        autoCorrect={false}
                        autoCapitalize="words"
                        labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                        style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                        blurOnSubmit={true}
                        onChangeText={(Quarter) => this.setState({ Quarter })}
                        returnKeyType={"next"}
                    />
                </View>


                <View style={styles.btnDesignPresentationView}>
                    <MyButton
                        Text="Design Presentation Layout"
                        onPress={this.validateFields.bind(this)}
                    />
                </View>
                <View>
                    <Text style={styles.txtReports}>Reports</Text>
                    <Text style={styles.txtDescription}>Select & Arrangereports you wanted in presentation</Text>
                </View>
                <View>
                    
                </View>
            </View>
        );
    }
}