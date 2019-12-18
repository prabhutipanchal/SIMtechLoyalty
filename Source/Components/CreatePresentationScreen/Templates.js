import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'
import ThumbIcon from 'react-native-vector-icons/FontAwesome';
import * as AppConstants from '../Helper/AppConstants';
import Styles from './TemplatesStyle';

export default class Templates extends Component {
    constructor() {
        super();

        this.state = {

            FlatListItems: [
                {
                    name: "Sales Person",
                    Year: "2018-19",
                    Reports: "5 Reports"
                },
                {
                    name: "Sales Person",
                    Year: "2018-19",
                    Reports: "5 Reports"
                },
                {
                    name: "Sales Person",
                    Year: "2018-19",
                    Reports: "5 Reports"
                },
                {
                    name: "Sales Person",
                    Year: "2018-19",
                    Reports: "5 Reports"
                }

            ],


        }
    }

    GetFlatListItem(item) {

        Alert.alert(item);

    }

    render() {
        return (
            <View style={Styles.mainContainer}>
                <FlatList
                    data={this.state.FlatListItems}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) =>

                        <View style={Styles.mainCardView}>
                            <View style={Styles.NotificationViewstyle}>
                                {/* <ThumbIcon style={Styles.ThumbIconstyle} name="thumbs-up" /> */}
                                <Text style={Styles.txttitle}>{item.name}</Text>
                            </View>

                            <View style={Styles.NotificationViewstyle}>
                                <Text style={Styles.txtdescription}>{item.Year}</Text>
                            </View>

                            <View style={Styles.NotificationViewstyle}>
                                <Text style={Styles.txttime}>{item.Reports} </Text>
                            </View>

                        </View>
                    }
                />
            </View>
        )
    }
}
