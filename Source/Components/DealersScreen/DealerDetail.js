import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './DealerDetailStyle';
import * as AppConstants from '../Helper/AppConstants';
import PhoneIcon from 'react-native-vector-icons/SimpleLineIcons';
import EmailIcon from 'react-native-vector-icons/Entypo';
import LocationIcon from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default class DealerDetail extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: () => (
            <TouchableOpacity activeOpacity={0.9} style={{ marginLeft: AppConstants.getDeviceWidth(3) }}
                onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={25} color={AppConstants.COLORS.WHITE} />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <View />
        ),
    })
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.mainContainer}>

                <View style={styles.QuarterView}>

                    <View style={styles.BusinessView}>

                        <Text style={styles.txtBusinessName}>Business Name</Text>
                        <Text style={styles.txtMedicineWholesaler}>Medicine wholesaler</Text>

                        <View style={styles.borderContainer} />

                        <View style={styles.InformationView}>
                            <PhoneIcon style={styles.PhoneIconstyle} name="phone"
                                size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color={AppConstants.COLORS.WHITE} />
                            <Text style={styles.textCommonStyle}>+01 123 456 7890</Text>

                        </View>
                        <View style={styles.InformationView} >
                            <EmailIcon style={styles.EmailIconstyle} name="email"
                                size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color={AppConstants.COLORS.WHITE} />
                            <Text style={styles.textCommonStyle}>info@businessname.com</Text>
                        </View>
                        <View style={styles.InformationView}>
                            <LocationIcon style={styles.LocationIconstyle} name="location"
                                size={AppConstants.moderateScale(AppConstants.FONTSIZE.FS13)} color={AppConstants.COLORS.WHITE} />
                            <Text style={styles.textCommonStyle}>K-22, Sector 2, Industrial area phase 1,
                            Mohali,
                        Punjab, India</Text>
                        </View>

                    </View>
                    <View style={styles.QuarterCardContainView}>

                        <TouchableOpacity
                            style={styles.QuarterCard}
                            activeOpacity={0.9}
                            onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
                            <Text style={styles.txtQuarter}>Qtr 1 </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.QuarterCard}
                            activeOpacity={0.9}
                            onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
                            <Text style={styles.txtQuarter}>Qtr 2 </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.QuarterCard}
                            activeOpacity={0.9}
                            onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
                            <Text style={styles.txtQuarter}>Qtr 3 </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.QuarterCard}
                            activeOpacity={0.9}
                            onPress={() => navigate(AppConstants.SCREENS.REPORTS)}>
                            <Text style={styles.txtQuarter}>Qtr 4 </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}
