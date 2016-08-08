/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
  Slider,
  TextInput
}                           from 'react-native';
import AnalogClock          from './AnalogClock';

const { width, height } = Dimensions.get('window');

class reactNativeAnalogClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,

      setTimeViaTouch: true,
      faceBackgroundColor: '#26A65B'
    }
  }

  render() {
    const { hours, minutes, seconds } = this.state;
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
            enableShadows={true}
            realTime={true}
            militaryTime={true}
            currentTime={true}
            enableDigit={true}
            setTimeViaTouch={true}
            enableGraduations={true}
            enableHub={true}
            // CLOCK'S FACE CUSTOMIZATION
            borderColor={'black'}
            borderAlpha={1}
            borderWidth={0}
            faceBackgroundColor={this.state.faceBackgroundColor}
            faceBackgroundAlpha={0.3}
          />
        </View>

        <ScrollView style={styles.commandsPanel}>
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hours
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({hours: parseInt(text, 10) ? parseInt(text, 10)%12 : 0})}
              value={this.state.hours + ''}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              minutes
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({minutes: parseInt(text, 10) ? parseInt(text, 10)%60 : 0})}
              value={this.state.minutes + ''}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              seconds
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({seconds: parseInt(text, 10) ? parseInt(text, 10)%60 : 0})}
              value={this.state.seconds + ''}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              setTimeViaTouch
            </Text>
            <Switch
              onValueChange={(value) => this.setState({setTimeViaTouch: value})}
              value={this.state.setTimeViaTouch}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              faceBackgroundColor
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({faceBackgroundColor: text})}
              value={this.state.faceBackgroundColor}
            />
          </View>
        </ScrollView>
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
    height: 220,
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
    marginBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cmdInfo: {
    flex: 2,
    fontSize: 14,
    fontWeight: '600'
  },
  cmdInput: {
    flex: 1
  },
  textInput: {
    padding: 2,
    height: 40,
    borderColor: '#4A4A4A',
    borderWidth: 1
  },
  sliders: {
    width: width * 0.4
  }
});


AppRegistry.registerComponent(
  'reactNativeAnalogClock',
  () => reactNativeAnalogClock
);
