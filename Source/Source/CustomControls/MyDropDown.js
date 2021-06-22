
import * as AppConstants from "../Components/Helper/AppConstants";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Styles from './MyDropDownStyle'
import assign from 'assign-deep';
//-------------------------------Source Code for My Text Input --------------------------
// isbordershow==true border is show
// isbordershow==false border is not show

export default class MyDropDown extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create(assign({}, Styles, props.customStyles));
    }
    focus() {
        this.refs.Dropdown.focus();
    }
    render() {
        const { ...rest } = this.props;
        return (
            <Dropdown
                {...rest}
                itemCount={5}
                // Opacity={0.9}
                animationDuration={5}
                fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                labelFontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                autoCorrect={false}
                autoCapitalize="words"
                labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                // containerStyle={Styles.Common}
                containerStyle={this.props.isborderShow ==true? [this.styles.CommonwithBorder, this.props.style] : this.props.isborderShow == false ? [this.styles.CommonwithoutBorder, this.props.style] : this.props.style}
                pickerStyle={Styles.commonpickerStyle}
                ref={'Dropdown'}
                blurOnSubmit={false}
                returnKeyType={this.props.returnKeyType}
                onSubmitEditing={this.props.onSubmitEditing}
                onChange={this.props.onChange}
            />

        )
    }
}
MyDropDown.defaultProps = {
    isborderShow: true,
}