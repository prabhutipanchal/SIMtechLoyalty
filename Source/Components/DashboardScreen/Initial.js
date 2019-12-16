import React, {Component} from 'react';
import {View, YellowBox} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class Initial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
    console.disableYellowBox = true;

  }
  componentDidMount() {
    AsyncStorage.getItem('IntroScreen').then(Data => {
      if (Data == null) {
        console.log("intro")
        this.props.navigation.replace('Intro');
      } else {
        
        this.props.navigation.replace('Dashboard');
      }
    });
  }
  render() {
    return <View />;
  }
}
