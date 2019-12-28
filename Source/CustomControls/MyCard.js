import * as AppConstants from "../Components/Helper/AppConstants";
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Styles from './MyCardStyle';
import assign from 'assign-deep';

//-------------------------------Source Code for CardView --------------------------
// Any =CustomStyle
// 1=FlexDirection Row
// 0=flexDirectionColumn

export default class MyCard extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create(assign({}, Styles, props.customStyles));
    }
    render() {
        const { ...props } = this.props;
        return (
            <View
                {...props}
                style={this.props.isflexrow == 1 ? [this.styles.DealersAndProductsCardViewCustom, this.props.style] : 
                this.props.isflexrow == 0 ? [this.styles.DashboardCardViewCustom, this.props.style] : 
                this.props.isflexrow == 2 ?[this.styles.MerchandiseCardViewCustom,this.props.style] :
                this.props.isflexrow == 3 ?[this.styles.ProductDetailCardViewCustom,this.props.style]:
                this.props.isflexrow == 4 ?[this.styles.NoticationCardViewCustom,this.props.style]:
                this.props.style}
               
                >
            </View>)
    }
}
MyCard.defaultProps = {
    isflexrow: 1,
}
