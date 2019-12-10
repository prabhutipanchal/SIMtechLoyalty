import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import * as AppConstants from '../Helper/AppConstants';
import styles from './MerchandiseStyle';
const Images = {
    Iconcoupon: 'iconcoupon',
    Iconelectronics:'iconelectronics',
    Iconmenacc: 'iconmenacc',
    Iconwomenacc: 'iconwomenacc',
    Iconstationary: 'iconstationary',
    Iconhealthcare: 'iconhealthcare',
    Iconfoodcoupon: 'iconfoodcoupon',
    Iconsubscription: 'iconsubscription',
}

export default class Merchandise extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.Container}>

                    <TouchableOpacity style={styles.mainCardView} activeOpacity={0.9}>
                        <Image resizeMode='contain' source={{ uri: Images.Iconcoupon }} style={styles.ImgCommonStyle}></Image>
                        <Text style={styles.txtTitleCommonStyle}> Coupon Code </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.mainCardView} activeOpacity={0.9}>
                        <Image resizeMode='contain' source={{ uri: Images.Iconelectronics }} style={styles.ImgCommonStyle}></Image>
                        <Text style={styles.txtTitleCommonStyle}> Electronics </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Container}>
                    <TouchableOpacity style={styles.mainCardView} activeOpacity={0.9}>

                        <View style={styles.NewView}>
                            <Text style={styles.txtNew}>New</Text>
                        </View>
                        <Image resizeMode='contain' source={{ uri: Images.Iconmenacc }} style={styles.ImgCommonStyle}></Image>
                        <Text style={styles.txtTitleCommonStyle}> Men’s Accessories </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.mainCardView} activeOpacity={0.9}>
                        <Image resizeMode='contain' source={{ uri: Images.Iconwomenacc }} style={styles.ImgCommonStyle}></Image>
                        <Text style={styles.txtTitleCommonStyle}> Women’s Accessories </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Container}>
                    <TouchableOpacity style={styles.mainCardView} activeOpacity={0.9}>
                        <Image resizeMode='contain' source={{ uri: Images.Iconstationary }} style={styles.ImgCommonStyle}></Image>
                        <Text style={styles.txtTitleCommonStyle}> Stationary </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainCardView} activeOpacity={0.9}>
                        <Image resizeMode='contain' source={{ uri: Images.Iconhealthcare }} style={styles.ImgCommonStyle}></Image>
                        <Text style={styles.txtTitleCommonStyle}> Healthcare </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Container}>
                    <TouchableOpacity style={styles.mainCardView} activeOpacity={0.9}>
                        <Image resizeMode='contain' source={{ uri: Images.Iconfoodcoupon }} style={styles.ImgCommonStyle}></Image>
                        <Text style={styles.txtTitleCommonStyle}> Food Coupons </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainCardView} activeOpacity={0.9}>
                        <Image resizeMode='contain' source={{ uri: Images.Iconsubscription }} style={styles.ImgCommonStyle}></Image>
                        <Text style={styles.txtTitleCommonStyle}> Subscriptions </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
