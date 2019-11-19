import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './DealersStyle';
import * as AppConstants from '../Helper/AppConstants';
import MyButton from '../../CustomControls/MyButton';
const Images = {
    Logo: 'nodealerfound',
};

export default class Dealers extends Component {
    render() {
        return (


            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        resizeMode="contain"
                        source={{ uri: Images.Logo}}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.txtNoDealertitle}> No Dealers Found </Text>
                <View style={styles.btnAddDealerView}>
                    <MyButton
                        Text="Add Dealer"
                    // onPress={this.validateFields.bind(this)}
                    />
                </View>
            </View>
        )
    }
}
