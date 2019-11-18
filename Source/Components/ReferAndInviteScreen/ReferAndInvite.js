/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  View,
  Share,
  TouchableOpacity,
  Text,
  Clipboard,
  Image,
  Alert,
} from 'react-native';
import styles from './ReferAndInviteStyle';
import * as AppConstants from '../Helper/AppConstants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toast, {DURATION} from 'react-native-easy-toast';

const Images = {
  Invitefriendsgift: 'icon',
};

export default class ReferAndInvite extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: () => <Text style={styles.txtHowGood}>InviteFriends</Text>,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <MaterialIcons name="share" size={25} color="white" />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {isLoading: false};
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
            {justifyContent: 'flex-end'},
          ]}
          position="top"
          positionValue={AppConstants.getDeviceHeight(0)}
          fadeInDuration={750}
          fadeOutDuration={100}
          textStyle={AppConstants.CommonStyles.ToastTextStyle}
        />
        <View style={styles.cardView}>
          <View style={styles.LinerGradentView}>
            <Text style={styles.txtHowGood}>How good a Friend are you?</Text>
          </View>
          <View>
            <Image
              source={{uri: Images.Invitefriendsgift}}
              style={styles.inviteFriendsImage}
            />
          </View>
          <Text style={styles.txtYourReferral}> YOUR REFERRAL CODE </Text>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.viewReferralcode}
            onPress={() => {
              this.copyReferralCode();
            }}>
            <Text style={styles.txtreferralcode}>BE52FE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.buttonView}
            onPress={() => {
              this.shareCode();
            }}>
            <MaterialIcons name="share" size={25} />
            <Text style={styles.txtCopyTrack}> SHARE </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
