import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './TermsAndConditionStyle';
import * as AppConstants from '../Helper/AppConstants';

export default class TermsAndCondition extends Component {
    render() {
        return (

            <WebView
                source={{
                    uri:
                        'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint'
                }}
            />

        )
    }
}
