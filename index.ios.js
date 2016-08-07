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
      setTimeViaTouch: false,
      borderWidth: 3
    };
    this.handlesEnableShadowsChange = this.handlesEnableShadowsChange.bind(this);
    this.handlesRealTimeChange = this.handlesRealTimeChange.bind(this);
    this.handlesMilitaryTimeChange = this.handlesMilitaryTimeChange.bind(this);
    this.handlesSetCurrentTimeChange = this.handlesSetCurrentTimeChange.bind(this);
    this.handlesSetTimeViaTouchChange = this.handlesSetTimeViaTouchChange.bind(this);
    this.handlesBorderWidthChange = this.handlesBorderWidthChange.bind(this);
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
            setTimeViaTouch={setTimeViaTouch}
            enableGraduations={true}
            enableHub={true}
            // CLOCK'S FACE CUSTOMIZATION
            borderColor={'grey'}
            borderWidth={borderWidth}
            faceBackgroundColor={'red'}
          />
        </View>
        <ScrollView style={styles.commandsPanel}>
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              Set to current time:
            </Text>
            <Switch
              value={currentTime}
              onValueChange={this.handlesSetCurrentTimeChange}
            />
          </View>
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              Enable shadows:
            </Text>
            <Switch
              value={enableShadows}
              onValueChange={this.handlesEnableShadowsChange}
            />
          </View>
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              Set to the current time
            </Text>
            <Switch
              value={realTime}
              onValueChange={this.handlesRealTimeChange}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              Can be updated via touch inputs:
            </Text>
            <Switch
              value={setTimeViaTouch}
              onValueChange={this.handlesSetTimeViaTouchChange}
            />
          </View>
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              Military time:
            </Text>
            <Switch
              value={militaryTime}
              onValueChange={this.handlesMilitaryTimeChange}
            />
          </View>
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              border width ({borderWidth}):
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={borderWidth}
              onValueChange={this.handlesBorderWidthChange}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  handlesEnableShadowsChange(newValue) {
    this.setState({enableShadows: newValue});
  }

  handlesRealTimeChange(newValue) {
    this.setState({realTime: newValue});
  }

  handlesMilitaryTimeChange(newValue) {
    this.setState({militaryTime: newValue});
  }
  handlesSetCurrentTimeChange(newValue) {
    this.setState({currentTime: newValue});
  }

  handlesSetTimeViaTouchChange(newValue) {
    this.setState({setTimeViaTouch: newValue});
  }

  handlesBorderWidthChange(newValue) {
    this.setState({borderWidth: parseInt(newValue, 10)});
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
    height: 220,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  currentTime: {
    fontSize: 16,
    textAlign: 'center'
  },
  clock: {
    height: 180,
    width: 180,
    marginTop: 15,
    marginBottom: 15
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
