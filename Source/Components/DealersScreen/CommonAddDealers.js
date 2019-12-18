/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import styles from './CommonAddDealersStyle';
import MyButton from '../../CustomControls/MyButton';
import * as AppConstants from '../Helper/AppConstants';
import StepIndicator from 'react-native-step-indicator';
import BusinessDetail from './BusinessDetail';
import BillingDetail from './BillingDetail';
import WarehouseDetail from './WarehouseDetail';
import ContactDetail from './ContactDetail';
import BankDetail from './BankDetail';
import UploadDetails from './UploadDetails';


const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 5,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: AppConstants.COLORS.APPTHEME,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: AppConstants.COLORS.APPTHEME,
    stepStrokeUnFinishedColor: AppConstants.COLORS.APPTHEME,
    separatorFinishedColor: AppConstants.COLORS.VIEWCOLOR,
    separatorUnFinishedColor: AppConstants.COLORS.VIEWCOLOR,
    stepIndicatorFinishedColor: AppConstants.COLORS.APPTHEME,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: AppConstants.COLORS.APPTHEME,
    // stepIndicatorLabelFinishedColor: '#ffffff',
    // stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    // labelColor: '#999999',
    labelSize: 13,
    // currentStepLabelColor: '#fe7013'
}
export default class CommonAddDealers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0
        };
    }
    getStepContent = (step) => {
        switch (step) {
            case 0:
                return <BusinessDetail onPageChange={this.onPageChange.bind(this)}></BusinessDetail>
            case 1:
                return <BillingDetail onPageChange={this.onPageChange.bind(this)}></BillingDetail>
            case 2:
                return <WarehouseDetail onPageChange={this.onPageChange.bind(this)}></WarehouseDetail>
            case 3:
                return <ContactDetail onPageChange={this.onPageChange.bind(this)}></ContactDetail>
            case 4:
                return <BankDetail onPageChange={this.onPageChange.bind(this)}></BankDetail>
            case 5:
                return <UploadDetails onPageChange={this.onPageChange.bind(this)}></UploadDetails>
            

        }
    }
    onPageChange = (position) => {
        this.setState({ currentPosition: position });
    }
    render() {

        return (
            <View style={styles.mainContainer}>
                <StatusBar
                    backgroundColor={AppConstants.COLORS.WHITE}
                    barStyle="dark-content"
                />

                <StepIndicator
                    stepCount={6}
                    // onPress={() => this.onPageChange(this.state.currentPosition + 1)}
                    customStyles={customStyles}
                    currentPosition={this.state.currentPosition}
                />
                <ScrollView>
                    <View style={styles.mainContainer}>
                        {this.getStepContent(this.state.currentPosition)}
                        {
                            this.state.currentPosition == 5 ? <View style={styles.btnAddBillingAddress}><MyButton
                                Text="Onboard Dealer"
                                style={{ marginBottom: 10 }}
                                onPress={() => this.props.navigation.navigate(AppConstants.SCREENS.DEALERS)}
                            /></View>
                                : <View />
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}
