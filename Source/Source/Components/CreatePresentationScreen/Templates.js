import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import MyCard from '../../CustomControls/MyCard';
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
                        // <View style={Styles.mainCardView}>
                        <MyCard>
                            <View style={Styles.TemplateViewstyle}>
                                <Text style={Styles.txtname}>{item.name}</Text>
                            </View>

                            <View style={Styles.TemplateViewstyle}>
                                <Text style={Styles.txtYear}>{item.Year}</Text>
                            </View>

                            <View style={Styles.TemplateViewstyle}>
                                <Text style={Styles.txtReports}>{item.Reports} </Text>
                            </View>
                            {/* </View> */}
                        </MyCard>

                    }
                />
            </View>
        )
    }
}
