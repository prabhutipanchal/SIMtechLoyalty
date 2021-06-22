//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Styles from './ScanBarcodeStyle';

// create a component
class ScanBarcode extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ScanBarcode</Text>
        <View style={Styles.BarcodeCamera}>
          <QRCodeScanner
            reactivate={true}
            showMarker={true}
            fadeIn={false}
            cameraProps={{captureAudio: false}}
            // onRead={this.onSuccess.bind(this)}
            bottomContent={
              <TouchableOpacity
                style={Styles.btnOk}
                // onPress={() => {
                //   this.setState({ScannerVisible: false});
                // }}
                >
                <Text style={Styles.txtSavebtn}>Cancel</Text>
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default ScanBarcode;
