import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import MyButton from '../../CustomControls/MyButton';
import styles from './AddDealerStyle';
import * as AppConstants from '../Helper/AppConstants';

export default class AddDealer extends Component {
    render() {
        return (
            <View  style={styles.mainContainer}>
                <Text style={styles.txtBusinessDetail}> Business Detail </Text>
            </View>
           
                    
        )
    }
}
