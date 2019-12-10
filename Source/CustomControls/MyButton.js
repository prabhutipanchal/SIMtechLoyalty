import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as AppConstants from '../Components/Helper/AppConstants';
import assign from 'assign-deep';

//-------------------------------Source Code for My Button --------------------------
export default class MyButton extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create(
      assign({}, defaultButtonStyles, props.customStyles),
    );
  }

  render() {
    const {children} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={this.props.onPress}
        style={
          this.props.isRoundedCorners
            ? this.styles.buttonStyle
            : this.styles.buttonStyleWithoutRadius
        }>
        {children}
        <Text style={this.styles.textStyle}>{this.props.Text}</Text>
      </TouchableOpacity>
    );
  }
}

const defaultButtonStyles = {
  buttonStyle: {
    flexDirection: 'row',
    shadowColor: AppConstants.COLORS.BLACK, // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android,
    // paddingTop:AppConstants.getDeviceHeight(5.67),
    height: AppConstants.getDeviceHeight(8),
    width: AppConstants.getDeviceWidth(91.47),
    borderRadius: AppConstants.getDeviceWidth(2),
    backgroundColor: AppConstants.COLORS.APPTHEME,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 0,
  },
  buttonStyleWithoutRadius: {
    flexDirection: 'row',
    height: AppConstants.getDeviceHeight(9),
    width: AppConstants.getDeviceWidth(100),
    borderRadius: 0,
    backgroundColor: AppConstants.COLORS.APPTHEME,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: AppConstants.COLORS.WHITE,
    fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
    fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
    letterSpacing: 1.2,
    
  },
};

MyButton.defaultProps = {
  Text: '',
  isRoundedCorners: true,
  onPress: () => {},
};
