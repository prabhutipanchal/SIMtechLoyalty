import * as AppConstants from "../Components/Helper/AppConstants";
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Styles from './CardViewStyle'
import assign from 'assign-deep';

//-------------------------------Source Code for CardView --------------------------
// Any =CustomStyle
// 1=FlexDirection Row
// 0=flexDirectionColumn

export default class CardView extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create(assign({}, Styles, props.customStyles));
    }
    render() {
        const { ...props } = this.props;
        return (
            <View
                {...props}
                style={this.props.isflexrow == 1 ? [this.styles.CardViewRow, this.props.style] : this.props.isflexrow == 0 ? [this.styles.CardViewColumn, this.props.style] : this.props.style}>
            </View>)
    }
}
CardView.defaultProps = {
    isflexrow: 1,
}
