import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Modal, Picker, TextInput, Keyboard } from 'react-native'
import styles from './ProductsStyle';
import FilterIcon from 'react-native-vector-icons/AntDesign';
import { TextField } from 'react-native-material-textfield';
import MyCard from '../../CustomControls/MyCard';
import * as AppConstants from '../Helper/AppConstants';
import Slider from '@react-native-community/slider';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default class Products extends Component {
    constructor() {
        super();

        this.state = {
            modalVisible: false,
            sliderminimumval: 0,
            slidermaximumval: 50,
            sliderval: 0.0,
            Name: '',
            category: '',

            FlatListItems: [
                {
                    Productname: "Product Name",
                    Description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    ProductType: "Medicine - Ayurvedic"
                },
                {
                    Productname: "Product Name",
                    Description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    ProductType: "Medicine - Ayurvedic"
                },
                {
                    Productname: "Product Name",
                    Description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    ProductType: "Medicine - Ayurvedic"
                },
                {
                    Productname: "Product Name",
                    Description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                    ProductType: "Medicine - Ayurvedic"
                }

            ],


        }
    }
    updateCategory = (category) => {
        this.setState({ category: category })

    }
    GetFlatListItem(item) {

        Alert.alert(item);

    }
    searchClick(value) {
        this.setState({ searchBarFocused: value });
    }

    clearText() {
        this.setState({ searchBarFocused: false, datasource: this.arrayholder, text: '' });
        Keyboard.dismiss();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            /*Inside Modal Style*/
            <View style={styles.mainContainer}>
                <Modal visible={this.state.modalVisible}
                    transparent={true}
                    presentationStyle={'overFullScreen'}>
                    <View style={styles.InsideSearchModalPopupView}>
                        <View style={styles.SearchModalPopupInsideView}>
                            <View style={styles.SearchbarFilterPopupView}>
                                <View style={styles.BothSearchbarView}>
                                    <View style={styles.BothSearchIconView}>
                                        <MaterialIcons name="search"
                                            style={styles.BothSearchIconStyle} />
                                    </View>
                                    <View style={styles.BothSearchProductTextView}>
                                        <TextInput
                                            value={this.state.text}
                                            placeholder="Search Product"
                                            style={styles.txtSearchProduct}
                                            onChangeText={(text) => {
                                                this.setState({ text })
                                            }}
                                            onKeyPress={() => this.searchClick(true)} />
                                    </View>
                                    <View style={styles.BothSearchCancelIconView}>
                                        {
                                            this.state.searchBarFocused && this.state.text != '' ?
                                                <TouchableOpacity activeOpacity={0.9} onPress={() => this.clearText()}>
                                                    <MaterialIcons name="close"
                                                        style={styles.BothSearchCancelIconStyle} /></TouchableOpacity> : null
                                        }
                                    </View>
                                </View>
                                <View style={styles.BothFilterIconView}>
                                    <FilterIcon name="filter"
                                        style={styles.InsideFiliterModalIconStyle} />
                                </View>
                            </View>
                            <View style={styles.FilterProductByView}>
                                <Text style={styles.txtFiliterProductBy}>Filter Product by</Text>
                            </View>
                            <View style={styles.NameView}>
                                <TextField
                                    label="Name"
                                    value={this.state.Name}
                                    tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                                    textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                                    baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                                    fontSize={AppConstants.moderateScale(
                                        AppConstants.FONTSIZE.FS16,
                                    )}
                                    labelFontSize={AppConstants.moderateScale(
                                        AppConstants.FONTSIZE.FS16,
                                    )}
                                    maxLength={15}
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    labelTextStyle={{
                                        fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
                                    }}
                                    labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                                    style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                                    onSubmitEditing={() => {
                                        Keyboard.dismiss;
                                    }}
                                    onChangeText={Name => this.setState({ Name })}
                                    returnKeyType={'next'}
                                />
                            </View>
                            <View style={styles.CategoryPickerView}>
                                <Picker
                                    style={styles.CategoryPickerStyle}
                                    selectedValue={this.state.category} onValueChange={this.updateCategory}>
                                    <Picker.Item label="Category" value="Category" />
                                    <Picker.Item label="Category1" value="Category1" />
                                    <Picker.Item label="Category2" value="Category2" />

                                </Picker>
                            </View>
                            <View style={styles.PriceSliderView}>
                                <Text style={styles.txtsliderprice}>Price</Text>
                                <Text style={styles.txtslidervalue}>{'\u20B9'}{parseInt(this.state.sliderval)}</Text>
                            </View>
                            <Slider
                                style={{ width: AppConstants.getDeviceWidth(87), }}
                                minimumValue={this.state.sliderminimumval}
                                maximumValue={this.state.slidermaximumval}
                                minimumTrackTintColor={AppConstants.COLORS.APPTHEME}
                                maximumTrackTintColor={AppConstants.COLORS.VIEWCOLOR}
                                onValueChange={(val) => this.setState({ sliderval: val })}
                                thumbTintColor={AppConstants.COLORS.APPTHEME}
                            />

                            <View style={styles.PriceSliderView}>
                                <Text style={styles.txtminvalue}>{this.state.sliderminimumval}</Text>
                                <Text style={styles.txtmaxvalue}>{this.state.slidermaximumval}</Text>
                            </View>

                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={styles.FilterButton} onPress={() => this.setState({ modalVisible: false })}>
                                <Text style={styles.txtFilterButton}>Filter Products</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={styles.OutsideSearchbarView}>
                    <View style={styles.BothSearchbarView}>
                        <View style={styles.BothSearchIconView}>
                            <MaterialIcons name="search"
                                style={styles.BothSearchIconStyle} />
                        </View>
                        <View style={styles.BothSearchProductTextView}>
                            <TextInput
                                value={this.state.text}
                                placeholder="Search Products"
                                onChangeText={(text) => {
                                    this.setState({ text })
                                }}
                                onKeyPress={() => this.searchClick(true)} />
                        </View>
                        <View style={styles.BothSearchCancelIconView}>
                            {
                                this.state.searchBarFocused && this.state.text != '' ?
                                    <TouchableOpacity activeOpacity={0.9} onPress={() => this.clearText()}>
                                        <MaterialIcons name="close"
                                            style={styles.BothSearchCancelIconStyle} />
                                    </TouchableOpacity> : null
                            }
                        </View>
                    </View>
                    <View style={styles.BothFilterIconView}>
                        <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
                            <FilterIcon name="filter"
                                style={styles.OutsideFiliterIconStyle} />
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={this.state.FlatListItems}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) =>

                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => this.props.navigation.navigate(AppConstants.SCREENS.PRODUCTDETAIL,
                                { Name: item.Productname })}
                        >
                            <MyCard>
                                <View style={styles.SalesNoView}>
                                    <Text style={styles.txtSalesNo}>SKU#4255</Text>
                                </View>

                                <View style={styles.ProductAndDescriptionView}>
                                    <Text style={styles.txtproductName}>{item.Productname}</Text>
                                </View>

                                <View style={styles.ProductAndDescriptionView}>
                                    <Text style={styles.txtDescription}>{item.Description}</Text>
                                </View>

                                <View style={styles.ProductTypeView}>
                                    <Text style={styles.txtProductType}>{item.ProductType} </Text>
                                </View>

                                <View style={styles.SalesView}>
                                    <TouchableOpacity activeOpacity={0.9} style={styles.TouchSalesButton}>
                                        <Text style={styles.txtSales}>Sales </Text>
                                        <Text style={styles.txtamount}>12,655</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.9} style={styles.TouchPriceButton}>
                                        <Text style={styles.txtPrice}>Price </Text>
                                        <Text style={styles.txtRupees}> {'\u20B9'}699</Text>
                                    </TouchableOpacity>
                                </View>
                            </MyCard>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}
