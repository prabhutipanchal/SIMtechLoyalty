import * as AppConstants from "../Components/Helper/AppConstants";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Styles from './MyTextFieldStyle'
import assign from 'assign-deep';

//-------------------------------Source Code for My Text Input --------------------------

// isbordershow==true border is show
// isbordershow==false border is not show

export default class MyTextInput extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create(assign({}, Styles, props.customStyles));
    }
    focus() {
        this.refs.TextField.focus();
    }
    render() {
        const { ...props } = this.props;
        return (
            <TextField
                {...props}
                selectTextOnFocus={false}
                // tintColor={AppConstants.COLORS.BASECOLOR_1}
                // textColor={AppConstants.COLORS.BASECOLOR_2}
                // baseColor={AppConstants.COLORS.BASECOLOR_1}
                fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                labelFontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                autoCorrect={false}
                autoCapitalize="words"
                keyboardType={this.props.keyboardType}
                editable={this.props.editable}
                selectTextOnFocus={this.props.selectTextOnFocus}
                secureTextEntry={this.props.secureTextEntry}
                label={this.props.label}
                style={this.props.isbordershow == true ? [this.styles.Common, this.props.style] : this.props.isbordershow == false ? [this.styles.Common1, this.props.style] : this.props.style}
                maxLength={this.props.maxLength}
                minLength={this.props.minLength}
                // ref={'textInput'}
                blurOnSubmit={this.props.blurOnSubmit}
                returnKeyType={this.props.returnKeyType}
                onSubmitEditing={this.props.onSubmitEditing}
                onChange={this.props.onChange}
                onTouchStart={this.props.onTouchStart}
                value={this.props.value}
            />
        )
    }
}
MyTextInput.defaultProps = {
    isbordershow: false,
}
