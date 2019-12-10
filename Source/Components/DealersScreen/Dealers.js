import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './DealersStyle';
import LocationIcon from 'react-native-vector-icons/EvilIcons';
import * as AppConstants from '../Helper/AppConstants';
import MyButton from '../../CustomControls/MyButton';
const Images = {
    Logo: 'nodealerfound',
};
export default class Dealers extends Component {
    constructor() {
        super();

        this.state = {
            FlatListItems: [
                {
                    Businessname: "Business Name",
                    PersonName: "Isaac Dennis",
                    location: "Cross square mart, New Orliance"
                },
                {
                    Businessname: "Business Name",
                    PersonName: "Isaac Dennis",
                    location: "Cross square mart, New Orliance"
                },
                {
                    Businessname: "Business Name",
                    PersonName: "Isaac Dennis",
                    location: "Cross square mart, New Orliance"
                },
                {
                    Businessname: "Business Name",
                    PersonName: "Isaac Dennis",
                    location: "Cross square mart, New Orliance"
                }

            ],
        }
    }

    GetFlatListItem(item) {

        Alert.alert(item);

    }

    renderItem({ item, index }) {
        return (
            <View style={styles.mainCardView}>
                <View style={styles.DealerTypeView}>
                    <Text style={styles.txtDealerType}>Dealer Type</Text>
                </View>
                <View style={styles.BusinessViewstyle}>
                    <Text style={styles.txtbusinessName}>{item.Businessname}</Text>
                </View>
                <View style={styles.BusinessViewstyle}>
                    <Text style={styles.txtPersonName}>{item.PersonName}</Text>
                </View>

                <View style={styles.LocationView}>
                    <LocationIcon style={styles.LocationIconStyle} name="location" />
                    <Text style={styles.txtlocation}>{item.location} </Text>
                </View>
                <View style={styles.loyaltyViewStyle}>
                    <View style={styles.TouchLoyalty}>
                        <Text style={styles.txtloyalty}>Loyalty </Text>
                        <Text style={styles.txtloyaltyAmount}>566</Text>
                    </View>
                    <View style={styles.TouchAmount}>
                        <Text style={styles.txtamount}>Amount </Text>
                        <Text style={styles.txtloyaltyAmount}> {'\u20B9'}699</Text>
                    </View>

                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.state.FlatListItems.length == 0 ?
                    <View>
                        <View style={styles.logoContainer}>
                            <Image
                                resizeMode="contain"
                                source={{ uri: Images.Logo }}
                                style={styles.logo}
                            />
                        </View>
                        <Text style={styles.txtNoDealertitle}> No Dealers Found </Text>
                        <View style={styles.btnAddDealerView}>
                            <MyButton
                                Text="Add Dealer"
                                onPress={() => this.props.navigation.navigate(AppConstants.SCREENS.ADDDEALERS)}
                            />
                        </View>
                    </View>
                    :
                    <FlatList
                        data={this.state.FlatListItems}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state.lastsyncstatus}
                        renderItem={this.renderItem}
                    />
                }
            </View>
        )
    }
}
