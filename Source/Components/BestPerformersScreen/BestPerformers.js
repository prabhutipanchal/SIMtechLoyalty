import React, { Component } from 'react'
import { Text, View, Image,FlatList, StatusBar } from 'react-native'
import styles from './BestPerformersStyle';
import * as AppConstants from '../Helper/AppConstants';
import SplashScreen from 'react-native-splash-screen';
import MyButton from '../../CustomControls/MyButton';
const Images = {
    BestPerform: 'bestperfomimg',
};

export default class BestPerformers extends Component {
    constructor() {
        super();

        this.state = {
            FlatListItems: [
                {
                    PersonName: "Carole Chimako",
                    Designation: "Sales Representative",
                    TotalSales: "Total Sales",
                    Region: "Region"
                },
                {
                    PersonName: "Chinelo Chyke",
                    Designation: "Sales Representative",
                    TotalSales: "Total Sales",
                    Region: "Distributor"
                },
                {
                    PersonName: "Gopichand Sana",
                    Designation: "Sales Representative",
                    TotalSales: "Total Sales",
                    Region: "Sales"
                },


            ],
        }
    }
    componentDidMount() {
        SplashScreen.hide();
    }

    GetFlatListItem(item) {

        Alert.alert(item);

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <StatusBar
                    backgroundColor={AppConstants.COLORS.WHITE}
                    barStyle="dark-content"
                />
                <View style={styles.cardView}>
                    <Image
                        resizeMode={'contain'}
                        source={{ uri: Images.BestPerform }}
                        style={styles.ImgBestPerformStyle}
                    />
                    <FlatList
                        data={this.state.FlatListItems}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        renderItem={({ item }) =>
                            <View
                                // onPress={() => this.props.navigation.replace(AppConstants.SCREENS.DASHBOARD)} 
                                style={styles.mainCardView}>
                                <View style={styles.ImagePhotoView}>
                                    <Image
                                        resizeMode={'contain'}
                                        source={{
                                            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                        }}
                                        style={styles.ImagePhotoStyle}
                                    />
                                </View>
                                <View style={styles.DistributorView}>
                                    <Text style={styles.txtDistributor}>{item.Region}</Text>
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
                    <View style={styles.btnsigninView}>
                        <MyButton
                            Text="Continue to Dashboard"
                            onPress={() => navigate(AppConstants.SCREENS.DASHBOARD)}
                        />
                    </View>
                </View>
            </View>


        )
    }
}
