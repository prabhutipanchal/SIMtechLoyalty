import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native';
import ThumbIcon from 'react-native-vector-icons/FontAwesome';
import MyCard from '../../CustomControls/MyCard';
import * as AppConstants from '../Helper/AppConstants';
import Styles from './NotificationStyle';

export default class Notification extends Component {
    constructor() {
        super();

        this.state = {

            FlatListItems: [
                {
                    name: "You have 2x more point alloted!",
                    description: "Hi, we are happy to inform you that you have great sales last month...",
                    time: "10 Min ago"
                },
                {
                    name: "You have 2x more point alloted!",
                    description: "Hi, we are happy to inform you that you have great sales last month...",
                    time: "10 Min ago"
                },
                {
                    name: "You have 2x more point alloted!",
                    description: "Hi, we are happy to inform you that you have great sales last month...",
                    time: "10 Min ago"
                },
                {
                    name: "You have 2x more point alloted!",
                    description: "Hi, we are happy to inform you that you have great sales last month...",
                    time: "10 Min ago"
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

                        <MyCard isflexrow={4}>
                            <View style={Styles.NotificationViewstyle}>
                                <ThumbIcon style={Styles.ThumbIconstyle} name="thumbs-up" />
                                <Text style={Styles.txttitle}>{item.name}</Text>
                            </View>

                            <View style={Styles.NotificationViewstyle}>
                                <Text style={Styles.txtdescription}>{item.description}</Text>
                            </View>

                            <View style={Styles.NotificationViewstyle}>
                                <Text style={Styles.txttime}>{item.time} </Text>
                            </View>

                        </MyCard>
                    }
                />
            </View>
        )
    }
}
