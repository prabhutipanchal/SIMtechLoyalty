import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from './BestPerformersStyle';
import * as AppConstants from '../Helper/AppConstants';
const Images = {
    Imgreferearn: 'imgreferearn'
};

export default class BestPerformers extends Component {
    constructor() {
        super();

        this.state = {
            FlatListItems: [
                {
                    PersonName: "Carole Chimako",
                    Designation: "Sales Representative",
                    TotalSales: "Total Sales"
                },
                {
                    PersonName: "Chinelo Chyke",
                    Designation: "Sales Representative",
                    TotalSales: "Total Sales"
                },
                {
                    PersonName: "Gopichand Sana",
                    Designation: "Sales Representative",
                    TotalSales: "Total Sales"
                },
                {
                    PersonName: "Nguyễn Diệp Chi",
                    Designation: "Sales Representative",
                    TotalSales: "Total Sales"
                }

            ],
        }
    }
    GetFlatListItem(item) {

        Alert.alert(item);

    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.cardView}>
                    <Image
                        resizeMode={'contain'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />
                    <FlatList
                        data={this.state.FlatListItems}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        renderItem={({ item }) =>


                            <View style={styles.mainCardView}>
                                <Image
                                    resizeMode={'contain'}
                                    source={{ uri: Images.Imgreferearn }}
                                    style={styles.ImageReferEarnStyle}
                                />
                                <View style={styles.DistributorView}>
                                    <Text style={styles.txtDistributor}>Distributor</Text>
                                </View>


                                <View style={styles.PersonNameViewstyle}>
                                    <Text style={styles.txtPersonName}>{item.PersonName}</Text>
                                </View>

                                <View style={styles.PersonNameViewstyle}>
                                    <Text style={styles.txtDesignation}>{item.Designation}</Text>
                                </View>

                                <View style={styles.PersonNameViewstyle}>
                                    <Text style={styles.txtTotalSales}>{item.TotalSales} </Text>
                                    <Text style={styles.txtAmount}>12,655</Text>
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>


        )
    }
}
