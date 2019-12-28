import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './MerchandiseProductStyle';
import * as AppConstants from '../Helper/AppConstants';
import MyCard from '../../CustomControls/MyCard';
const Images = {
    Iconcoupon: 'iconcoupon',
    Electronics: 'electronics',
    Iconmenacc: 'iconmenacc',
    Iconwomenacc: 'iconwomenacc',
    Iconstationary: 'iconstationary',
    Iconhealthcare: 'iconhealthcare',

}
export default class MerchandiseProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FlatListItems: [
                {


                    ProductName: "Sony MDR-ZX110A",
                    points: "655 Points",
                    ProductType:"Electronics"
                },
                {


                    ProductName: "Product Name",
                    points: "365 Points",
                    ProductType:"Electronics"
                },
                {


                    ProductName: "Apple iPad",
                    points: "1255 Points",
                    ProductType:"Electronics"
                    
                },
                {

                    ProductName: "GetFit Smart watch",
                    points: "655 Points",
                    ProductType:"Electronics",

                },
                {

                    ProductName: "Smart watch",
                    points: "655 Points",
                    ProductType:"Electronics"
                },
                {

                    ProductName: "Smart watch",
                    points: "655 Points",
                    ProductType:"Electronics"
                },

            ],


        }
    }


    GetFlatListItem(item) {

        Alert.alert(item);

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    numColumns={2}
                    data={this.state.FlatListItems}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) =>
                        <MyCard isflexrow={3}>
                            <View>
                                <TouchableOpacity onPress={() => navigate(AppConstants.SCREENS.PRODUCTDETAIL, { Name:item.ProductName,Type:item.ProductType })}>
                                    <Image resizeMode='contain' source={{ uri: Images.Electronics }} style={styles.Productimg}>
                                    </Image>
                                </TouchableOpacity>

                                <Text style={styles.txtProductName}>{item.ProductName}</Text>
                                <Text style={styles.txtpoints}>{item.points} </Text>
                            </View>
                        </MyCard>
                    }
                />
            </View>
        )
    }
}
