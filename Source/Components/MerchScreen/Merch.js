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

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.ADDDEALER)}>
            <Text style={Styles.txt}>Add Dealer </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.ADDDEALER2)}>
            <Text style={Styles.txt}>Add Dealer2 </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.ADDDEALER3)}>
            <Text style={Styles.txt}>Add Dealer3 </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.ADDDEALER4)}>
            <Text style={Styles.txt}>Add Dealer4 </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.ADDDEALER5)}>
            <Text style={Styles.txt}>Add Dealer5 </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.ADDDEALER6)}>
            <Text style={Styles.txt}>Add Dealer6 </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    )
  }
}