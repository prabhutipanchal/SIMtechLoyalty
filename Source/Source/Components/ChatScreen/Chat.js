import React, {Component} from 'react';
import {
  View,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  Keyboard,
  Alert,
  Platform,
  Modal,
  Permissions,
} from 'react-native';
import * as AppConstants from '../Helper/AppConstants';
import styles from './ChatStyle';
import {KeyboardAwareView} from 'react-native-keyboard-aware-view';
// import * as ChatHub from './ChatHub';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
// var uuid = require('react-native-uuid');
// import * as DBMethods from '../../../DB/DBMethods';
// import ChatModal from "../../Components/Chat/Chatmodal";
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import ImagePicker from 'react-native-image-picker';
import Toast, {DURATION} from 'react-native-easy-toast';
// import ImageViewer from 'react-native-image-zoom-viewer';
const Images = {
  Iconreducefuzz: 'iconreducefuzz',
  Iconaddattachment: 'iconaddattachment',
  Iconattach: 'iconattach',
  Iconenter: 'iconenter',
  Trueicon: 'trueicon',
  BackIcon: 'backgray',
};
const options = {
  quality: 0.3,
  mediaType: 'photo',
  cameraType: 'front',
  maxWidth: 1024,
  maxHeight: 1024,
  storageOptions: {
    skipBackup: true,
  },
};
const flatlistdata = [
  {
    img: {uri: Images.Join},
    Name: 'Dr.Jayesh P',
    message: 'Cost Cutting Ideas For Your Wedding',
    time: '6 hrs',
  },
  {
    img: {uri: Images.Join},
    Name: 'Dr.Jayesh P',
    message: 'Cost Cutting Ideas For Your Wedding',
    time: '6 hrs',
  },
  {
    img: {uri: Images.Join},
    Name: 'Dr.Jayesh P',
    message: 'Cost Cutting Ideas For Your Wedding',
    time: '6 hrs',
  },
  {
    img: {uri: Images.Join},
    Name: 'Dr.Jayesh P',
    message: 'Cost Cutting Ideas For Your Wedding',
    time: '6 hrs',
  },
  {
    img: {uri: Images.Join},
    Name: 'Dr.Jayesh P',
    message: 'Cost Cutting Ideas For Your Wedding',
    time: '6 hrs',
  },
  {
    img: {uri: Images.Join},
    Name: 'Dr.Jayesh P',
    message: 'Cost Cutting Ideas For Your Wedding',
    time: '6 hrs',
  },
];
var userid = '',
  username = '';
var unreadmessage = -1,
  showUnreadMessageView = null,
  showDateView = 0;

export default class Chat extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      elevation: 0,
      ...Platform.select({
        android: {
          height: AppConstants.getDeviceHeight(9),
          marginTop: AppConstants.getDeviceHeight(2),
        },
      }),
    },
    cardStyle: {},

    headerLeft: (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Iconss
              onPress={() => {
                navigation.goBack();
              }}
              name="chevron-left"
              style={{marginTop: AppConstants.getDeviceHeight(0.4), left: 5}}
              size={AppConstants.FONTSIZE.FS30}
              color={AppConstants.COLORS.BASECOLOR_1}
            />
            <Text style={styles.unreadCount}>
              {navigation.state.params != null &&
              navigation.state.params.unreadChatSummary
                ? navigation.state.params.unreadChatSummary
                : ''}
            </Text>
          </View>
        </TouchableOpacity>
        {navigation.state.params != null ? (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={navigation.state.params.navigatepage}>
            <Image
              blurRadius={navigation.state.params.bluer}
              style={styles.image}
              source={{uri: navigation.getParam('profile')}}
            />
          </TouchableOpacity>
        ) : null}
        <Text style={styles.username}>{navigation.getParam('name')}</Text>
      </View>
    ),
    headerRight: (
      <View
        style={{
          marginRight: AppConstants.getDeviceWidth(5),
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {navigation.state.params != null ? (
          <Iconss
            name="plus"
            onPress={navigation.state.params.saveData}
            style={{marginRight: AppConstants.getDeviceWidth(2)}}
            size={AppConstants.FONTSIZE.FS22}
          />
        ) : null}
        {navigation.state.params != null ? (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.attcheimage}
            onPress={navigation.state.params.navigatepagefuzy}>
            <Image
              style={styles.attcheimage}
              source={{uri: Images.Iconreducefuzz}}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    ),
  });
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      disabled: true,
      matchuserid: '',
      proxy: null,
      dataSource: [],
      refreshing: false,
      dataUpdatedAt: null,
      modal: '0',
      ImageSource: '',
      Base: '',
      MessageId: '',
      page: 0,
      slicevalue: -10,
      Imagepopup: false,
      ImagepopupUrl: '',
    };

    this.chatObject = {
      appid: '',
      id: 0,
      orderno: 0,
      swipeid: '',
      message: '',
      messagebyid: '',
      messageat: '',
      sentat: '',
      sentattime: '',
      deliveredat: '',
      seenat: '',
      lastsyncstatus: 2,
      messagetoid: '',
      unread: 0,
      messagetypeid: 1,
      imagename: '',
      imageurl: '',
    };
    this._renderItem = this._renderItem.bind(this);
  }

  load_chat = () => {};

  componentWillUnmount() {}

  onSendBtnPressed() {}
  Imagesend() {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
        Permissions.check('camera').then(response => {
          if (response == 'denied') {
            Permissions.request('camera').then(response => {
              if (response == 'denied') {
                Alert.alert(
                  'Please allow Permissions to access Camera from Settings -> Apps -> Fuzzy -> Camera',
                );
              }
            });
          }
        });
      } else if (response.customButton) {
      } else {
        if (response.data != null) {
          this.setState({
            Base: response.data,
          });
          this.chatObject.imageurl = response.uri;
          this.chatObject.message = '#FBImage#';
          this.chatObject.messagetypeid = 2;
          //   this.chatObject.imagename = uuid.v4() + '.png';
          this.onSendBtnPressed();
        }
      }
    });
  }
  _renderItem = ({item, index}) => {
    // for unread message seprater
    showUnreadMessageView =
      index == unreadmessage ? (
        <View
          style={{
            height: AppConstants.getDeviceHeight(4),
            width: AppConstants.getDeviceWidth(100),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: AppConstants.getDeviceWidth(50),
              height: AppConstants.getDeviceHeight(3),
              borderWidth: AppConstants.getDeviceHeight(0.2),
              borderColor: AppConstants.COLORS.BASECOLOR_3,
              borderRadius: AppConstants.getDeviceHeight(4),
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: AppConstants.getDeviceHeight(0.1),
              fontFamily: AppConstants.FONTFAMILY.fontFamily_1,
            }}>
            <Text>Unread Messages</Text>
          </View>
        </View>
      ) : null;
    // ------------------------for reset unreadcount------------
    // if (this.state.dataSource.length - 1 == index) {
    // ------------------------------------
    const isMyMessage = 1 == 1;
    const textContainerExtra = isMyMessage
      ? styles.textContainerRight
      : styles.textContainerLeft;
    const gradientMsg = isMyMessage
      ? styles.gradientSender
      : styles.gradientReceiver;
    const linearBG1 = isMyMessage
      ? AppConstants.COLORS.HEADER_BG_DARK
      : AppConstants.COLORS.HEADER_BG_LIGHT;
    const linearBG2 = isMyMessage
      ? AppConstants.COLORS.HEADER_BG_LIGHT
      : AppConstants.COLORS.HEADER_BG_DARK;
    const textmessage = isMyMessage ? styles.message : styles.message1;
    const image = 2 == 2 ? true : false;
    // if (index == 0) {
    //   showDateView = 1;
    // } else if (AppConstants.GetCurrentDateOnlyUKFormat(this.state.dataSource[index].sentat) != AppConstants.GetCurrentDateOnlyUKFormat(this.state.dataSource[index - 1].sentat)) {
    //   showDateView = 1;
    // } else {
    //   showDateView = 0;
    // }
    return (
      <View>
        {showDateView ? (
          <View
            style={{
              height: AppConstants.getDeviceHeight(3),
              borderRadius: 10,
              backgroundColor: AppConstants.COLORS.BASECOLOR_3,
              fontFamily: AppConstants.FONTFAMILY.fontFamily_1,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: AppConstants.COLORS.WHITE,
                paddingLeft: AppConstants.getDeviceWidth(5),
                paddingRight: AppConstants.getDeviceWidth(5),
              }}>
              {AppConstants.GetReferenceDate(
                this.state.dataSource[index].sentat,
              )}
            </Text>
          </View>
        ) : null}
        {showUnreadMessageView}
        <View style={styles.messageContainer}>
          <View style={styles.textContainerRight}>
            <View style={styles.gradientSender}>
              {<Text style={styles.message}>Hello Sender</Text>}
            </View>
            <View style={styles.timestampcontainer}>
              <Text style={styles.Time}>12:00PM</Text>
              {isMyMessage ? (
                <View style={styles.sentat}>
                  <Iconss
                    name={item.deliveredat ? 'check-all' : 'check'}
                    color={item.id == 0 ? 'red' : 'blue'}
                    size={AppConstants.FONTSIZE.FS17}
                  />
                </View>
              ) : null}
            </View>
          </View>

          <View style={styles.textContainerLeft}>
            <View style={styles.gradientReceiver}>
              {<Text style={styles.message1}>Hello Receiver</Text>}
              <View style={styles.timestampcontainer}>
                <Text style={styles.Time}>12:00PM</Text>
                {isMyMessage ? (
                  <View style={styles.sentat}>
                    <Iconss
                      name={item.deliveredat ? 'check-all' : 'check'}
                      color={item.id == 0 ? 'red' : 'blue'}
                      size={AppConstants.FONTSIZE.FS17}
                    />
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  openImagePopup(data) {
    this.setState({
      ImagepopupUrl: data,
      Imagepopup: true,
    });
  }

  render() {
    if (this.state.refreshing) {
      return AppConstants.ShowActivityIndicator();
    }
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <KeyboardAwareView doNotForceDismissKeyboardWhenLayoutChanges={true}>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={AppConstants.SHADOWCOLORS.STATUSBAR}
            animated={true}
          />
          <Toast
            ref="toast"
            style={[
              AppConstants.CommonStyles.ToastStyle,
              {
                justifyContent: 'center',
                height: AppConstants.getDeviceHeight(4),
              },
            ]}
            position="top"
            positionValue={AppConstants.getDeviceHeight(0)}
            fadeInDuration={100}
            fadeOutDuration={100}
            textStyle={AppConstants.CommonStyles.ToastTextStyle}
          />
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatlist}
              // data={this.state.dataSource}
              data={flatlistdata}
              //------for 10 record Loadfirst and +loadmore 15 reacord------------
              refreshing={this.state.refreshing}
              placeholderTextColor={AppConstants.COLORS.TEXT_3}
              onRefresh={this.load_chat}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this._renderItem.bind(this)}
            />
          </View>
          <View style={styles.inputBar}>
            <AutoGrowingTextInput
              secureTextEntry={false}
              ref={input => {
                this.textInput = input;
              }}
              style={[styles.txt, styles.textBox]}
              value={this.state.text}
              placeholder={'Type your messsage'}
              blurOnSubmit={false}
              onChangeText={text => {
                this.setState({text});
                this.chatObject.message = text;
              }}
            />
            <TouchableOpacity
              activeOpacity={0.9}
              alignItems={'center'}
              onPress={() => {
                this.onSendBtnPressed('1');
              }}>
              <Iconss
                name={'send'}
                color={'gray'}
                size={30}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAwareView>
      </View>
    );
  }
}
