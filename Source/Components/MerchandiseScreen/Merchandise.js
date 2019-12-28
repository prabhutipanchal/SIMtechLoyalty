import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import * as AppConstants from '../Helper/AppConstants';
import MyCard from '../../CustomControls/MyCard';
import styles from './MerchandiseStyle';
const Images = {
    Coupon: 'coupon',
    Electronics: 'electronics',
    MenAccessories: 'menaccessories',
    WomenAccessories: 'womenaccessories',
    Stationary: 'stationary',
    Healthcare: 'healthcare',
    FoodCoupon: 'foodcoupon',
    Subscription: 'subscription',
}

export default class Merchandise extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <View style={styles.Container}>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigate(AppConstants.SCREENS.MERCHANDISEPRODUCT)}>
                        <MyCard isflexrow={2}>
                            <Image resizeMode='contain' source={{ uri: Images.Coupon }} style={styles.ImgCommonStyle}></Image>
                            <Text style={styles.txtTitleCommonStyle}> Coupon Code </Text>
                        </MyCard>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9}
                        onPress={() => navigate(AppConstants.SCREENS.MERCHANDISEPRODUCT)}>
                        <MyCard isflexrow={2}>
                            <Image resizeMode='contain' source={{ uri: Images.Electronics }} style={styles.ImgCommonStyle}></Image>
                            <Text style={styles.txtTitleCommonStyle}> Electronics </Text>
                        </MyCard>
                    </TouchableOpacity>

                </View>

                <View style={styles.Container}>
                    <TouchableOpacity activeOpacity={0.9}
                        onPress={() => navigate(AppConstants.SCREENS.MERCHANDISEPRODUCT)}>
                        <MyCard isflexrow={2}>
                            <View style={styles.NewView}>
                                <Text style={styles.txtNew}>New</Text>
                            </View>
                            <Image resizeMode='contain' source={{ uri: Images.MenAccessories }} style={styles.ImgCommonStyle}></Image>
                            <Text style={styles.txtMenAccessories}> Men’s Accessories </Text>
                        </MyCard>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9}
                        onPress={() => navigate(AppConstants.SCREENS.MERCHANDISEPRODUCT)}>
                        <MyCard isflexrow={2}>
                            <Image resizeMode='contain' source={{ uri: Images.WomenAccessories }} style={styles.ImgCommonStyle}></Image>
                            <Text style={styles.txtTitleCommonStyle}> Women’s Accessories </Text>
                        </MyCard>
                    </TouchableOpacity>
                </View>

                <View style={styles.Container}>
                    <TouchableOpacity activeOpacity={0.9}
                        onPress={() => navigate(AppConstants.SCREENS.MERCHANDISEPRODUCT)}>
                        <MyCard isflexrow={2}>
                            <Image resizeMode='contain' source={{ uri: Images.Stationary }} style={styles.ImgCommonStyle}></Image>
                            <Text style={styles.txtTitleCommonStyle}> Stationary </Text>
                        </MyCard>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainCardView} activeOpacity={0.9}
                        onPress={() => navigate(AppConstants.SCREENS.MERCHANDISEPRODUCT)}>
                        <MyCard isflexrow={2}>
                            <Image resizeMode='contain' source={{ uri: Images.Healthcare }} style={styles.ImgCommonStyle}></Image>
                            <Text style={styles.txtTitleCommonStyle}> Healthcare </Text>
                        </MyCard>
                    </TouchableOpacity>
                </View>

                <View style={styles.Container}>
                    <TouchableOpacity activeOpacity={0.9}
                        onPress={() => navigate(AppConstants.SCREENS.MERCHANDISEPRODUCT)}>
                        <MyCard isflexrow={2}>
                            <Image resizeMode='contain' source={{ uri: Images.FoodCoupon }} style={styles.ImgCommonStyle}></Image>
                            <Text style={styles.txtTitleCommonStyle}> Food Coupons </Text>
                        </MyCard>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9}
                        onPress={() => navigate(AppConstants.SCREENS.MERCHANDISEPRODUCT)}>
                        <MyCard isflexrow={2}>
                            <Image resizeMode='contain' source={{ uri: Images.Subscription }} style={styles.ImgCommonStyle}></Image>
                            <Text style={styles.txtTitleCommonStyle}> Subscriptions </Text>
                        </MyCard>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
