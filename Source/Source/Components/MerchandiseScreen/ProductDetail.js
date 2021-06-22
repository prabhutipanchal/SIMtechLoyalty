import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, StatusBar, ScrollView, } from 'react-native'
import Styles from './ProductDetailStyle';
import * as AppConstants from '../Helper/AppConstants';
import Swiper from '../AppintroScreen/Swiper';
const Images = {
    Dummyillustration: 'dummyillustration',
};

export default class ProductDetail extends Component {
    render() {
        return (
            <View style={Styles.Maincontainer} >
                <ScrollView>
                    <View style={Styles.ProductNameView}>
                        <Text style={Styles.txtProductName}>
                            {this.props.navigation.state.params.Name}
                        </Text>
                        <Text style={Styles.txtProductType}>
                            {this.props.navigation.state.params.Type}
                        </Text>
                    </View>
                    <View style={Styles.SwiperCardContainerView}>
                        <View style={Styles.SwiperCardView}>
                            <Swiper
                                loop={true}
                                // autoplay={true}
                                // showsButtons={true}
                                // paginationStyle={{ bottom: 0, top: 0 }}
                                dotStyle={{ bottom: AppConstants.getDeviceHeight(0) }}
                                activeDotStyle={{ bottom: AppConstants.getDeviceHeight(0) }}>
                                <View style={Styles.ImgContainerView}>
                                    {/* <StatusBar hidden /> */}
                                    <ImageBackground
                                        resizeMode="contain"
                                        source={{ uri: Images.Dummyillustration }}
                                        style={Styles.Imagecontainer}
                                    />
                                </View>
                                <View style={Styles.ImgContainerView}>
                                    {/* <StatusBar hidden /> */}
                                    <ImageBackground
                                        resizeMode="contain"
                                        source={{ uri: Images.Dummyillustration }}
                                        style={Styles.Imagecontainer}
                                    />
                                </View>
                                <View style={Styles.ImgContainerView}>
                                    {/* <StatusBar hidden /> */}
                                    <ImageBackground
                                        resizeMode="contain"
                                        source={{ uri: Images.Dummyillustration }}
                                        style={Styles.Imagecontainer}
                                    />
                                </View>
                                <View style={Styles.ImgContainerView}>
                                    {/* <StatusBar hidden /> */}
                                    <ImageBackground
                                        resizeMode="contain"
                                        source={{ uri: Images.Dummyillustration }}
                                        style={Styles.Imagecontainer}
                                    />
                                </View>
                            </Swiper>
                        </View>
                        <View style={Styles.cardView}>
                            <View style={Styles.AmountLoyaltyPointsView}>
                                <Text style={Styles.txtAmount}>1299</Text>
                                <Text style={Styles.txtLoyaltyPoints}>Loyalty Points</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.9}
                                style={Styles.SelectButtonView} >
                                <Text style={Styles.txtSelect}>Select</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={Styles.DescriptionView}>
                        <Text style={Styles.txtDescription}>Description</Text>
                    </View>


                    <View style={Styles.ProductDescriptionView}>
                        <Text style={Styles.txtproductDescription}> •  10.2-inch Retina display</Text>
                        <Text style={Styles.txtproductDescription}> • 	A10 Fusion chip</Text>
                        <Text style={Styles.txtproductDescription}> • 	Touch ID fingerprint sensor and Apple Pay</Text>
                        <Text style={Styles.txtproductDescription}> • 	8MP back camera, 1.2MP FaceTime HD </Text>
                        <Text style={Styles.txtproductDescription}> • 	Stereo speakers</Text>
                        <Text style={Styles.txtproductDescription}> • 	802.11ac Wi-Fi</Text>
                        <Text style={Styles.txtproductDescription}> • 	Up to 10 hours of battery life</Text>
                    </View>
                    <View style={Styles.ParagraphView}>
                        <Text style={Styles.txtParagraph}>
                            It is an excellent display. A lot of people compare it to the more expensive ipads for the no airgap display. But for yhe size and price it is better than a lot of laptops also. Plus the resolution remains the same as bigger ipads
        sound amazing sounding speakers though only one sided, not a surround sound. But the sound quality is great
         battery life. Lasts for 3 to 4 days without charging for my usage
         ipad os. Makes it super convinient for many things in which u needed a laptop. This is replaced my laptop to the most of extents. Barring a few things

                        </Text>

                    </View>
                </ScrollView>
            </View>
        )

    }
}
