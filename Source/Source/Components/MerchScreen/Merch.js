import React, { Component } from 'react'
import { Text, View, TouchableOpacity,ScrollView } from 'react-native'
import * as AppConstants from '../Helper/AppConstants';
import Styles from './MerchStyle';

export default class Merch extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.mainContainer}>
      <ScrollView>
        {/* <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.MERCHANDISEPRODUCT)}>
            <Text style={Styles.txt}> Merchandise Product </Text>
          </TouchableOpacity>
        </View> */}

        {/* <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.BESTPERFORMERS)}>
            <Text style={Styles.txt}>Best Performers </Text>
          </TouchableOpacity>
        </View> */}

        {/* <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.BUSINESSDETAIL)}>
            <Text style={Styles.txt}>Reports</Text>
          </TouchableOpacity>
        </View> */}
        </ScrollView>
      </View>
    )
  }
}