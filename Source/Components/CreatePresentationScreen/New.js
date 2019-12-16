/* eslint-disable react/no-string-refs */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View, Keyboard, Alert, Text, TouchableOpacity, ScrollView, Modal, FlatList, Image } from 'react-native'
import styles from './NewStyle';
import * as AppConstants from '../Helper/AppConstants';
import MyButton from '../../CustomControls/MyButton';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import Toast, { DURATION } from 'react-native-easy-toast';
import Icon from 'react-native-vector-icons/AntDesign';
import CloseIcon from 'react-native-vector-icons/Entypo';
import RadioButtonIcon from 'react-native-vector-icons/Ionicons';
import CloseIcon1 from 'react-native-vector-icons/FontAwesome';
const Images = {
    Imgreferearn: 'imgreferearn'
};
export default class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            modalVisible1: false,
            Name: '',
            Year: '',
            Quarter: '',
            isLoading: false,
            selectedItem: -1,
            iconFill: false,
            data: '1',
            FlatListItems: [

                {
                    id: '1',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Target V/S Achivements",
                    icon1: <RadioButtonIcon name="md-radio-button-on" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} onpress={{}}
                        color={AppConstants.COLORS.RADIOBUTTONCOLOR}
                    />,
                },
                {
                    id: '2',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Payout Reports",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },

                {
                    id: '3',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Scheme Performance",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },
                {
                    id: '4',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Product Performance",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },
                {
                    id: '5',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Distribution Activity",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },
                {
                    id: '6',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Business Dev. Activity",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },
                {
                    id: '7',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Sales Analysis",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} onpress={{}}
                        color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },

                {
                    id: '8',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Market Penetration",
                    icon1: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,
                },

            ],
            FlatListItemsReport: [

                {
                    id: '1',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Target V/S Achivements",
                    icon1: <RadioButtonIcon name="md-radio-button-on" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} onpress={{}}
                        color={AppConstants.COLORS.RADIOBUTTONCOLOR}
                    />,
                },
                {
                    id: '2',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Payout Reports",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },

                {
                    id: '3',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Scheme Performance",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },
                {
                    id: '4',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Product Performance",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },
                {
                    id: '5',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Distribution Activity",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },
                {
                    id: '6',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Business Dev. Activity",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },
                {
                    id: '7',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Sales Analysis",
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} onpress={{}}
                        color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,

                },

                {
                    id: '8',
                    image: <Image
                        resizeMode={'cover'}
                        source={{ uri: Images.Imgreferearn }}
                        style={styles.ImageReferEarnStyle}
                    />,
                    TargetAchivements: "Market Penetration",
                    icon1: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,
                    icon: <RadioButtonIcon name="md-radio-button-off" size={AppConstants.getDeviceWidth(10)} color={AppConstants.COLORS.RADIOBUTTONCOLOR} />,
                },

            ],
        };
        this.onPressList = this.onPressList.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    validateFields() {
        if (this.state.Name.trim() == '') {
            this.refs.toast.show(
                AppConstants.Messages.NONAME,
                DURATION.LENGTH_LONG,
            );
        }
        else {
            Alert.alert('All Ok');
        }
    }
    onPressList(index, id) {
        console.log('index', index)
        this.setState({ selectedItem: id });
    }
    componentDidMount() {
        this.lists = [
            this.props.navigation.addListener('didFocus', () => { this.renderItem })
        ];
    }
    renderItem({ item, index }) {
        const value = this.state.selectedItem == index ? 'check-circle' : 'circle-outline'
        return (
            <View style={styles.mainCardView} >
                <Text style={styles.txtTarget}>{item.TargetAchivements}</Text>
                <TouchableOpacity onpress={() => this.onPressList(index, item.id)} >
                    <CloseIcon1 name={value}
                        size={AppConstants.getDeviceWidth(6)} color={AppConstants.COLORS.EDITBUTTON}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        const { navigate } = this.props.navigation;

        let data = [{
            value: '2019',
        }, {
            value: '2018',
        }, {
            value: '2017',
        }];
        if (this.state.isLoading) {
            return AppConstants.ShowActivityIndicator();
        }
        return (
            <View style={styles.mainContainer}>

                <Modal visible={this.state.modalVisible}
                    transparent={false}
                    presentationStyle={'overFullScreen'}>
                    <View style={styles.modalcontainerView}>

                        <View style={styles.modalMainView}>
                            <TouchableOpacity onPress={() => this.setState({ modalVisible: false })} style={styles.CloseView}>
                                <CloseIcon name="cross"
                                    size={AppConstants.getDeviceWidth(12)} color={AppConstants.COLORS.TEXTCOLOR}
                                    onPress={() => this.setState({ modalVisible: false })} />
                            </TouchableOpacity>

                            <Text style={styles.txtAddReport}>Add Report</Text>
                            <FlatList
                                data={this.state.FlatListItemsReport}
                                keyExtractor={(item, index) => index.toString()}
                                // ItemSeparatorComponent={this.FlatListItemSeparator}
                                renderItem={this.renderItem}
                                extraData={this.state.selectedItem}
                            />
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={styles.ApplyButton}
                                onPress={() => this.setState({ modalVisible: false })}
                            >
                                <Text style={styles.txtApplyButton}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <ScrollView>
                    <Toast
                        ref="toast"
                        style={AppConstants.CommonStyles.ToastStyle}
                        position="top"
                        positionValue={AppConstants.getDeviceHeight(0)}
                        fadeInDuration={750}
                        fadeOutDuration={100}
                        textStyle={AppConstants.CommonStyles.ToastTextStyle}
                    />
                    <View style={styles.txtInputView}>
                        <TextField
                            style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            keyboardType={'default'}
                            selectTextOnFocus={false}
                            label="Name"
                            value={this.state.Name}
                            tintColor={AppConstants.COLORS.TEXTFIELDTEXT}
                            textColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            baseColor={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                            fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS15)}
                            labelFontSize={AppConstants.moderateScale(
                                AppConstants.FONTSIZE.FS15,
                            )}
                            inputContainerStyle={{
                                // paddingLeft: AppConstants.getDeviceWidth(10.93),
                                fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2,
                            }}
                            maxLength={20}
                            labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            // labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                            autoCorrect={false}
                            autoCapitalize="none"
                            blurOnSubmit={true}
                            onSubmitEditing={() => {
                                Keyboard.dismiss;
                                this.validateFields();
                            }}
                            onChangeText={Name => this.setState({ Name })}
                            returnKeyType={'go'}
                        />
                        <Dropdown
                            label='Year'
                            itemCount={5}
                            animationDuration={5}
                            value={this.state.Year}
                            data={data}
                            tintColor={AppConstants.COLORS.BASECOLOR_1}
                            textColor={AppConstants.COLORS.BASECOLOR_2}
                            baseColor={AppConstants.COLORS.BASECOLOR_1}
                            fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                            labelFontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                            autoCorrect={false}
                            autoCapitalize="words"
                            labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                            style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            blurOnSubmit={true}
                            onChangeText={(Year) => this.setState({ Year })}
                            returnKeyType={"next"}
                        />
                        <Dropdown
                            label='Select Quarter'
                            itemCount={5}
                            animationDuration={5}
                            value={this.state.Quarter}
                            data={data}
                            tintColor={AppConstants.COLORS.BASECOLOR_1}
                            textColor={AppConstants.COLORS.BASECOLOR_2}
                            baseColor={AppConstants.COLORS.BASECOLOR_1}
                            fontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                            labelFontSize={AppConstants.moderateScale(AppConstants.FONTSIZE.FS16)}
                            autoCorrect={false}
                            autoCapitalize="words"
                            labelTextStyle={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            labelPadding={AppConstants.LEBALPEDDING.LEBALPEDDING10}
                            style={{ fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_2 }}
                            blurOnSubmit={true}
                            onChangeText={(Quarter) => this.setState({ Quarter })}
                            returnKeyType={"next"}
                        />
                    </View>
                    <View style={styles.btnDesignPresentationView}>
                        <Modal visible={this.state.modalVisible1}
                            transparent={false}
                            presentationStyle={'overFullScreen'}>
                            <View style={styles.SecondmodalcontainerView}>

                                <View style={styles.SecondmodalMainView}>
                                    <Text style={styles.txtselectDesign}>Select Design Layouts</Text>
                                    <FlatList
                                        data={this.state.FlatListItems}
                                        ItemSeparatorComponent={this.FlatListItemSeparator}
                                        renderItem={({ item }) =>
                                            <View style={styles.SecondFlatListView}>
                                                {item.image}
                                                <View style={styles.SelectView}>
                                                    {item.icon}
                                                </View>
                                            </View>

                                        }
                                    />
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        style={styles.ApplyButton2}
                                        onPress={() => this.setState({ modalVisible1: false })}
                                    >
                                        <Text style={styles.txtApplyButton}>Apply</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                        <MyButton
                            Text="Design Presentation Layout"
                            onPress={() => this.setState({ modalVisible1: true })}
                        // onPress={this.validateFields.bind(this)}
                        />
                    </View>
                    <View style={styles.ReportsView}>
                        <View style={{}}>
                            <Text style={styles.txtReports}>Reports</Text>
                            <Text style={styles.txtDescription}>Select & Arrange Reports you wanted in presentation</Text>
                        </View>

                        <TouchableOpacity activeOpacity={0.9} onPress={() => this.setState({ modalVisible: true })}>
                            <Icon name="pluscircle" size={AppConstants.getDeviceWidth(15)} color={AppConstants.COLORS.APPTHEME} />
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity
                        style={styles.CardView}
                        activeOpacity={0.9}>

                        <Text style={styles.txtPayout}>Payout Reports </Text>
                        <Icon name="closecircle"
                            size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                        // onPress={this.addImage.bind(this)}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.CardView}
                        activeOpacity={0.9}>
                        <Text style={styles.txtProduct}>Product Performance </Text>
                        <Icon name="closecircle"
                            size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                        // onPress={this.addImage.bind(this)}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.CardView}
                        activeOpacity={0.9}>
                        <Text style={styles.txtMarket}>Market Penetration </Text>
                        <Icon name="closecircle"
                            size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                        // onPress={this.addImage.bind(this)}
                        />
                    </TouchableOpacity>

                    <View style={styles.ButtonView}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.SaveTemplateViewCode}>
                            <Text style={styles.txtSaveTemplate}>Save Template</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.GenerateReportViewCode}>
                            <Text style={styles.txtGenerateReport}>Generate Report</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}