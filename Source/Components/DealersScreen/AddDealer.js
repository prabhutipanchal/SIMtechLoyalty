import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import MyButton from '../../CustomControls/MyButton';
import styles from './AddDealerStyle';
import * as AppConstants from '../Helper/AppConstants';
import StepIndicator from 'react-native-step-indicator';
const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
  }

export default class AddDealer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0,
        };
      }
    
    render() {
        return (
            <View  style={styles.mainContainer}>
                <Text style={styles.txtBusinessDetail}> Business Detail </Text>
            </View>
           
                    
        )
    }
}
