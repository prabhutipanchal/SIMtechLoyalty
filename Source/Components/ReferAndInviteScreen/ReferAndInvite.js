/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Share, TouchableOpacity, Text, Clipboard, Image, } from 'react-native';
import styles from './ReferAndInviteStyle';
import * as AppConstants from '../Helper/AppConstants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toast, { DURATION } from 'react-native-easy-toast';
import MyButton from '../../CustomControls/MyButton';

const Images = {
  Imgreferearn: 'imgreferearn'
};

export default class ReferAndInvite extends Component {
  static navigationOptions = ({ navigation }) => ({
    // headerStyle: ()=>(backgroundColor={AppConstants.COLORS.BLACK}),

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
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }
  shareCode = () => {
    Share.share({
      message: 'welcome',
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
  };
  copyReferralCode = () => {
    Clipboard.setString('welcome');
    this.refs.toast.show(
      AppConstants.Messages.COPYREFERRALCODE,
      DURATION.LENGTH_LONG,
    );
  };
  render() {
    if (this.state.isLoading) {
      return AppConstants.ShowActivityIndicator();
    }
    return (
      <View style={styles.mainContainer}>
        <Toast
          ref="toast"
          style={[
            AppConstants.CommonStyles.ToastStyle,
            { justifyContent: 'flex-end' },
          ]}
          position="top"
          positionValue={AppConstants.getDeviceHeight(0)}
          fadeInDuration={750}
          fadeOutDuration={100}
          textStyle={AppConstants.CommonStyles.ToastTextStyle}
        />
        <View style={styles.cardView}>
          <Text style={styles.txtReferEarn}>Refer & Earn</Text>
          <View>
            <Image
              resizeMode={'contain'}
              source={{ uri: Images.Imgreferearn }}
              style={styles.ImageReferEarnStyle}
            />
          </View>
          <Text style={styles.txtInviteFriend}>
            Invite your friend and earn 50 loyalty points for free for every sign ups.</Text>

          <TouchableOpacity>
            <Text style={styles.txtKnowMore}>Know More</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.txtCopyShare}>
          Copy and share your referral code with your friends to join with, on succssful sign up you will be rewarded
        </Text>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.DummyReferralViewCode}
        // onPress={() => {this.copyReferralCode();}}
        >
          <Text style={styles.txtDummyReferralCode}>dummyreferral50%code</Text>
        </TouchableOpacity>
        <MyButton
          Text="Copy and Share"
        // onPress={() => this.shareCode()}
        />
      </View>
    );
  }
}
