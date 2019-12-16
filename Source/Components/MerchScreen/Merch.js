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

        {/* <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.BUSINESSDETAIL)}>
            <Text style={Styles.txt}>Business Detail </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.BILLINGDETAIL)}>
            <Text style={Styles.txt}>Billing Detail </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.WAREHOUSEDETAIL)}>
            <Text style={Styles.txt}>Warehouse Detail </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.CONTACTDETAIL)}>
            <Text style={Styles.txt}>Contact Detail </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.BANKDETAIL)}>
            <Text style={Styles.txt}>Bank Detail </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.UPLOADDETAILS)}>
            <Text style={Styles.txt}>Upload Documents Detail </Text>
          </TouchableOpacity>
        </View> */}

        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.COMMONADDDEALERS)}>
            <Text style={Styles.txt}>Common Add Dealers </Text>
          </TouchableOpacity>
        </View>


        <View style={Styles.mainView}>
          <TouchableOpacity
            style={Styles.mainCardView}
            activeOpacity={0.9}
            onPress={() => navigate(AppConstants.SCREENS.BUSINESSDETAIL)}>
            <Text style={Styles.txt}>Reports</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    )
  }
}