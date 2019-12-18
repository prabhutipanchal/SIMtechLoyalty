/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import MyButton from '../../CustomControls/MyButton';
import Toast, { DURATION } from 'react-native-easy-toast';
import styles from './CommonAddDealersStyle';
import * as AppConstants from '../Helper/AppConstants';
import ImagePicker from "react-native-image-picker";
import CloseIcon from 'react-native-vector-icons/FontAwesome';

const options = {
    quality: 0.3,
    maxHeight: 1024,
    maxWidth: 768,
    mediaType: 'photo',
    cameraType: 'front',
};
export default class UploadDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addIcon: true,
            DeleteIcon: false,
        }
    }
    addImage() {
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {

            } else if (response.error) {
                Alert.alert(
                    "Please allow Permissions to access Camera from Settings -> Apps -> SimTech -> Camera"
                );
            } else if (response.customButton) {
            } else {
                this.setState({
                    ImageSource: response.uri + '?' + response.timestamp,
                    addIcon: false,
                    Base: response.data,
                });
            }
        });
    }
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View>
                <Toast
                    ref="toast"
                    style={AppConstants.CommonStyles.ToastStyle}
                    position="top"
                    positionValue={AppConstants.getDeviceHeight(0)}
                    fadeInDuration={500}
                    fadeOutDuration={700}
                    textStyle={AppConstants.CommonStyles.ToastTextStyle}
                />
                <Text style={styles.txtBusinessDetail}>Upload Documents </Text>
                <View style={styles.LegalandStoreCommonView}>
                    <Text style={styles.txtLegalDocumentsStyle}>Legal Documents</Text>
                </View>
                <View style={styles.LegalCardView} >
                    <Text style={styles.txtLegalCommonStyle}>{this.state.addIcon == false ? 'Document upload Success' : 'Legal Name'}  </Text>
                    {
                        this.state.addIcon == true
                            ?
                            <View>
                                <CloseIcon name="plus-circle"
                                    size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                                    onPress={this.addImage.bind(this)} />
                            </View>
                            :
                            <View style={{ flexDirection: 'row', width: AppConstants.getDeviceWidth(12), justifyContent: 'space-between' }}>
                                <CloseIcon name="check-circle"
                                    size={AppConstants.getDeviceWidth(6)} color={AppConstants.COLORS.EDITBUTTON}
                                />
                                <CloseIcon name="trash-o"
                                    onPress={() => this.setState({ addIcon: true })}
                                    size={AppConstants.getDeviceWidth(6)} color={AppConstants.COLORS.TEXTFIELDBASECOLOR}
                                />
                            </View>
                    }
                </View>

                <TouchableOpacity
                    style={styles.LegalCardView}
                    activeOpacity={0.9} onPress={this.addImage.bind(this)}>
                    <Text style={styles.txtLegalCommonStyle}> GST Certificate </Text>
                    <CloseIcon name="plus-circle"
                        size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.LegalCardView}
                    activeOpacity={0.9} onPress={this.addImage.bind(this)}>
                    <Text style={styles.txtLegalCommonStyle}> PAN Card </Text>
                    <CloseIcon name="plus-circle"
                        size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                    />

                </TouchableOpacity>

                <View style={styles.LegalandStoreCommonView}>
                    <Text style={styles.txtLegalDocumentsStyle}>Store Documents</Text>
                </View>
                <TouchableOpacity
                    style={styles.LegalCardView}
                    activeOpacity={0.9} onPress={this.addImage.bind(this)}>
                    <Text style={styles.txtLegalCommonStyle}> Front Pic</Text>
                    <CloseIcon name="plus-circle"
                        size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.LegalCardView}
                    activeOpacity={0.9} onPress={this.addImage.bind(this)}>
                    <Text style={styles.txtLegalCommonStyle}> Sitting are </Text>
                    <CloseIcon name="plus-circle"
                        size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.LegalCardView}
                    activeOpacity={0.9} onPress={this.addImage.bind(this)}>
                    <Text style={styles.txtLegalCommonStyle}> Conference Room </Text>
                    <CloseIcon name="plus-circle"
                        size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.LegalCardView}
                    activeOpacity={0.9} onPress={this.addImage.bind(this)}>
                    <Text style={styles.txtLegalCommonStyle}> Store 1 </Text>
                    <CloseIcon name="plus-circle"
                        size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.LegalCardView}
                    activeOpacity={0.9} onPress={this.addImage.bind(this)}>
                    <Text style={styles.txtLegalCommonStyle}> Store 2 </Text>
                    <CloseIcon name="plus-circle"
                        size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.LegalCardView}
                    activeOpacity={0.9}
                    onPress={this.addImage.bind(this)}
                >
                    <Text style={styles.txtLegalCommonStyle}> Store 3 </Text>
                    <CloseIcon name="plus-circle"
                        size={AppConstants.getDeviceWidth(5)} color={AppConstants.COLORS.RED}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
