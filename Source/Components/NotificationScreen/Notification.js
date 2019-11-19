import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { Avatar } from "react-native-elements";
import CardView from 'react-native-cardview'
import * as AppConstants from '../Helper/AppConstants';
import Styles from './NotificationStyle';

export default class Notification extends Component {
    constructor() {
        super();

        this.state = {

            FlatListItems: [
                {
                    belongsToPruduct: "You have 2x more point alloted!",
                    name: "Hi, we are happy to inform you that you have great sales last month...",
                    time: "10 Min ago"
                },
                {
                    belongsToPruduct: "You have 2x more point alloted!",
                    name: "Hi, we are happy to inform you that you have great sales last month...",
                    time: "10 Min ago"
                },
                {
                    belongsToPruduct: "You have 2x more point alloted!",
                    name: "Hi, we are happy to inform you that you have great sales last month...",
                    time: "10 Min ago"
                },
                {
                    belongsToPruduct: "You have 2x more point alloted!",
                    name: "Hi, we are happy to inform you that you have great sales last month...",
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
                        <View style={Styles.mainView}>
                            <CardView
                                style={Styles.mainCardView}
                                cardElevation={5}
                                cardMaxElevation={2}
                                cornerRadius={5}>
                                <View style={{ flexDirection: 'row', 
                                justifyContent: 'space-evenly' }}>
                                    <Avatar
                                        rounded
                                        icon={{ name: 'thumbs-up', type: 'font-awesome' }}
                                        // onPress={() => console.log("Works!")}
                                        activeOpacity={0.7}
                                    />
                                    <Text style={Styles.txt}>{item.belongsToPruduct}</Text>
                                </View>
                                <Text style={Styles.txt1}>{item.name}
                                </Text>
                                <Text style={Styles.txt2}>{item.time} </Text>
                            </CardView>
                        </View>
                    }
                />
            </View>
        )
    }
}
