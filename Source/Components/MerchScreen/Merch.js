import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import * as AppConstants from '../Helper/AppConstants';
import Styles from './MerchStyle';

export default class Merch extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.MERCHANDISEPRODUCT)}>
            <Text style={Styles.txt}> Merchandise Product </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.DEALERDETAIL)}>
            <Text style={Styles.txt}>Dealer Detail </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.BESTPERFORMERS)}>
            <Text style={Styles.txt}>Best Performers </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}