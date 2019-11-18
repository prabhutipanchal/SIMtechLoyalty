import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Swiper from './Swiper/';
import Styles from './IntroStyle';
import * as AppConstants from '../Helper/AppConstants';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
const Images = {
  Intro_1_bg: 'intro',
  Intro_2_bg: 'intro1bg',
};

export default class Intro extends PureComponent {
  componentDidMount() {
    SplashScreen.hide();
  }

  ToDashboard() {
    AsyncStorage.setItem('IntroScreen', '1');
    this.props.navigation.replace('Dashboard');
  }

  render() {
    return (
      <Swiper
        loop={false}
        showsButtons={true}
        dotStyle={{bottom: AppConstants.getDeviceHeight(8)}}
        activeDotStyle={{bottom: AppConstants.getDeviceHeight(8)}}>
        <View style={Styles.Maincontainer}>
          <StatusBar hidden />
          <ImageBackground
            resizeMode="contain"
            source={{uri: Images.Intro_1_bg}}
            style={Styles.Imagecontainer}
          />
          <View style={Styles.ToptextcontainerView}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={Styles.skipView}
              onPress={() => this.ToDashboard()}>
              <Text style={Styles.topskiptext}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.Maincontainer}>
          <StatusBar hidden />
          <ImageBackground
            resizeMode="contain"
            source={{uri: Images.Intro_2_bg}}
            style={Styles.Imagecontainer}
          />
          <View style={Styles.ToptextcontainerView}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={Styles.skipView}
              onPress={() => this.ToDashboard()}>
              <Text style={Styles.topskiptext}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.Maincontainer}>
          <StatusBar hidden />
          <ImageBackground
            resizeMode="contain"
            source={{uri: Images.Intro_1_bg}}
            style={Styles.Imagecontainer}
          />
          <View style={Styles.ToptextcontainerView}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={Styles.skipView}
              onPress={() => this.ToDashboard()}>
              <Text style={Styles.topskiptext}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.Maincontainer}>
          <StatusBar hidden />
          <ImageBackground
            resizeMode="contain"
            source={{uri: Images.Intro_1_bg}}
            style={Styles.Imagecontainer}
          />
          <View style={Styles.ToptextcontainerView}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={Styles.skipView}
              onPress={() => this.ToDashboard()}>
              <Text style={Styles.topskiptext}>Skip</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.bottomDoneButton}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.ToDashboard()}
              style={Styles.nextButtonView}>
              <Text style={Styles.bottomButtonText}>HOME</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    );
  }
}
