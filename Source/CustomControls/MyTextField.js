import {TextField} from 'react-native-material-textfield';
import React, {Component} from 'react';
import * as AppConstants from '../Components/Helper/AppConstants';

//-------------------------------Source Code for My Text Input --------------------------
export default class MyTextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {...rest} = this.props;
    return (
      <TextField
        {...rest}
        keyboardType={this.props.keyboardType}
        editable={this.props.editable}
        selectTextOnFocus={this.props.selectTextOnFocus}
        secureTextEntry={this.props.secureTextEntry}
        label={this.props.label}
        tintColor={this.props.tintColor}
        textColor={this.props.textColor}
        baseColor={this.props.baseColor}
        fontSize={this.props.fontSize}
        labelFontSize={this.props.labelFontSize}
        maxLength={this.props.maxLength}
        minLength={this.props.minLength}
        auto-correction={this.props.autoCorrection}
        auto-capitalization={this.props.autoCapitalization}
        labelPadding={this.props.labelPadding}
        blurOnSubmit={this.props.blurOnSubmit}
        returnKeyType={this.props.returnKeyType}
        onSubmitEditing={this.props.onSubmitEditing}
        onChange={this.props.onChange}
        onTouchStart={this.props.onTouchStart}
        value={this.props.value}
      />
    );
  }
}

MyTextInput.defaultProps = {
  editable: true,
  selectTextOnFocus: false,
  secureTextEntry: false,
  label: '',
  tintColor: AppConstants.COLORS.BASECOLOR_1,
  textColor: AppConstants.COLORS.BASECOLOR_2,
  baseColor: AppConstants.COLORS.BASECOLOR_1,
  fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS15),
  labelFontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS15),
  maxLength: 100,
  minLength: 0,
  autoCorrection: false,
  autoCapitalization: true,
  labelPadding: 1,
  blurOnSubmit: true,
  returnKeyType: 'go',
  keyboardType: 'default',
  onSubmitEditing: () => {},
  onChangeText: () => {},
  onTouchStart: () => {},
  value: '',
};
