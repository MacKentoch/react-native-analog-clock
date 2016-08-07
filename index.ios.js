/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  Switch,
  Slider
}                           from 'react-native';
import AnalogClock          from './AnalogClock';

const { width, height } = Dimensions.get('window');

class reactNativeAnalogClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 12,
      minutes: 0,
      seconds: 0,
      enableShadows: true,
      realTime: true,
      militaryTime: true,
      currentTime: true,
      setTimeViaTouch: true,
      borderWidth: 3
    };
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    const {
      enableShadows,
      realTime,
      militaryTime,
      currentTime,
      setTimeViaTouch,
      borderWidth
    } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native Analog Clock
        </Text>
        <View style={styles.clockContainer}>
          <Text style={styles.currentTime}>
            current time:
            &nbsp;
            {hours ? hours : '--'}
            :
            {minutes ? minutes : '--'}
            :
            {seconds ? seconds : '--'}
          </Text>
          <AnalogClock
            style={styles.clock}
            // PROPERTIES
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            enableShadows={enableShadows}
            realTime={realTime}
            militaryTime={militaryTime}
            currentTime={currentTime}
            enableDigit={true}
            customSetTimeViaTouch={setTimeViaTouch}
            setTimeViaTouch={setTimeViaTouch}
            enableGraduations={true}
            enableHub={true}
            // CLOCK'S FACE CUSTOMIZATION
            borderColor={'grey'}
            borderAlpha={0.5}
            borderWidth={borderWidth}
            faceBackgroundColor={'red'}
            faceBackgroundAlpha={0.3}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#F1F1F1',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  clockContainer: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  currentTime: {
    fontSize: 16,
    textAlign: 'center'
  },
  clock: {
    // minimum style suggested
    height: 180,
    width: 180,
    backgroundColor: 'transparent',

    marginTop: 15,
    marginBottom: 15,
  },
  commandsPanel: {
    backgroundColor: '#FFF'
  },
  command: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cmdInfo: {
    fontSize: 14,
    fontWeight: '600'
  },
  sliders: {
    width: width * 0.4
  }
});


AppRegistry.registerComponent(
  'reactNativeAnalogClock',
  () => reactNativeAnalogClock
);
