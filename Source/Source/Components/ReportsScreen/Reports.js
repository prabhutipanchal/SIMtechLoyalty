/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Platform } from 'react-native'
import PureChart from 'react-native-pure-chart';
import styles from './ReportsStyle';
import * as AppConstants from '../Helper/AppConstants';
import Uncheck from "react-native-vector-icons/MaterialCommunityIcons";
import Check from "react-native-vector-icons/FontAwesome";

export default class Reports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { seriesName0: 'series1', data: [30, 200, 170, 250, 10], color: AppConstants.COLORS.PIEBARCOLOR },
                { seriesName: 'series2', data: [40, 250, 110, 290, 14], color: AppConstants.COLORS.APPTHEME }
            ],
            ReportType: '1',
        }
    }

    render() {
        var sampleData = [
            {
                seriesName: 'series1',
                data: [
                    { x: '2018-02-01', y: 30 },
                    { x: '2018-02-02', y: 200 },
                    { x: '2018-02-03', y: 170 },
                    { x: '2018-02-04', y: 250 },
                    { x: '2018-02-05', y: 10 }
                ],
                color: AppConstants.COLORS.PIEBARCOLOR,
            },
            {
                seriesName: 'series2',
                data: [
                    { x: '2018-02-01', y: 20 },
                    { x: '2018-02-02', y: 100 },
                    { x: '2018-02-03', y: 140 },
                    { x: '2018-02-04', y: 300 },
                    { x: '2018-02-05', y: 40 },
                ],
                color: AppConstants.COLORS.APPTHEME,
            }
        ]
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.txtTarget}>Target V/S Achivements</Text>
                <View style={styles.radioView1}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => { this.setState({ ReportType: 1 }) }} >
                        {this.state.ReportType == 1 ?
                            <Check name="dot-circle-o" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS24)}
                                color={AppConstants.COLORS.APPTHEME} /> :
                            <Uncheck name="circle-outline" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS24)}
                                color={AppConstants.COLORS.TEXTFIELDBASECOLOR} />}

                    </TouchableOpacity><Text style={styles.txtAllValueVolume}>All</Text>

                    <TouchableOpacity activeOpacity={0.9} onPress={() => { this.setState({ ReportType: 2 }) }} >
                        {this.state.ReportType == 2 ?
                            <Check name="dot-circle-o" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS24)}
                                color={AppConstants.COLORS.APPTHEME} /> :
                            <Uncheck name="circle-outline" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS24)}
                                color={AppConstants.COLORS.TEXTFIELDBASECOLOR} />}

                    </TouchableOpacity><Text style={styles.txtAllValueVolume}>Value</Text>

                    <TouchableOpacity activeOpacity={0.9} onPress={() => { this.setState({ ReportType: 3 }) }} >
                        {this.state.ReportType == 3 ?
                            <Check name="dot-circle-o" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS24)}
                                color={AppConstants.COLORS.APPTHEME} /> :
                            <Uncheck name="circle-outline" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS24)}
                                color={AppConstants.COLORS.TEXTFIELDBASECOLOR} />}

                    </TouchableOpacity><Text style={styles.txtAllValueVolume}>Volume</Text>

                    <TouchableOpacity activeOpacity={0.9} onPress={() => { this.setState({ ReportType: 4 }) }} >
                        {this.state.ReportType == 4 ?
                            <Check name="dot-circle-o" size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS24)}
                                color={AppConstants.COLORS.APPTHEME} /> :
                            <Uncheck name="circle-outline"
                                size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS24)}
                                color={AppConstants.COLORS.TEXTFIELDBASECOLOR} />}

                    </TouchableOpacity><Text style={styles.txtAllValueVolume}>Quantity</Text>
                </View>
                <PureChart data={sampleData}
                    width={AppConstants.getDeviceWidth(92.27)}
                    height={AppConstants.getDeviceHeight(43.6)}
                    numberOfYAxisGuideLine={'10'}
                    // xAxisGridLineColor={'red'}
                    // yAxisGridLineColor={'red'}
                    // xAxisColor={'red'}
                    // yAxisColor={'red'}
                    // labelColor={'red'}
                    type='bar' />

            </View>
        )
    }
}
