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

const MIN_BORDER_WIDTH = 0;
const MAX_BORDER_WIDTH = 20;

const MIN_BORDER_ALPHA = 0.0;
const MAX_BORDER_ALPHA = 1.0;

const MIN_BRIDGE_DIGIT_OFFSET = -20;
const MAX_BRIDGE_DIGIT_OFFSET = 20;

const MIN_FACE_BACKGROUND_ALPHA = 0.0;
const MAX_FACE_BACKGROUND_ALPHA = 1.0;

const MIN_HOUR_HAND_ALPHA = 0.0;
const MAX_HOUR_HAND_ALPHA = 1.0;

const MIN_HOUR_HAND_WIDTH = 0.0;
const MAX_HOUR_HAND_WIDTH = 20.0;

class reactNativeAnalogClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      setTimeViaTouch: true,
      currentTime: true,
      realTime: true,
      militaryTime: true,
      enableShadows: true,
      enableGraduations: true,
      enableDigit: true,
      enableHub: true,
      borderWidth: 0,
      borderColor: 'black',
      borderAlpha: 1.0,
      faceBackgroundColor: '#26A65B',
      faceBackgroundAlpha: 1.0,
      digitColor: '#FFFFFF',
      digitOffset: 5,
      hourHandColor: '#F1F1F1',
      hourHandAlpha: 1.0,
      hourHandWidth: 4.0
    }
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    const { enableShadows, realTime, militaryTime, currentTime, enableDigit, setTimeViaTouch, enableGraduations, enableHub } = this.state;
    const { borderColor, borderWidth, borderAlpha } = this.state;
    const { digitOffset, digitColor } = this.state;
    const { faceBackgroundColor, faceBackgroundAlpha } = this.state;
    const { hourHandColor, hourHandAlpha, hourHandWidth } = this.state;
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
            enableDigit={enableDigit}
            setTimeViaTouch={setTimeViaTouch}
            enableGraduations={enableGraduations}
            enableHub={enableHub}
            // CLOCK'S FACE CUSTOMIZATION
            borderColor={borderColor}
            borderAlpha={borderAlpha}
            borderWidth={borderWidth}
            digitColor={digitColor}
            digitOffset={digitOffset}
            faceBackgroundColor={this.state.faceBackgroundColor}
            faceBackgroundAlpha={this.state.faceBackgroundAlpha}
            // HOURS HAND CUSTOMIZATION
            hourHandColor={hourHandColor}
            hourHandAlpha={hourHandAlpha}
            hourHandWidth={hourHandWidth}
          />
        </View>

        <ScrollView style={styles.commandsPanel}>
          {/* PROPERTIES */}
          <View style={styles.groupCommandTitle}>
            <Text style={styles.groupCommandText}>
              GENERAL PROPERTIES
            </Text>
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              manual set "hours"
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({hours: parseInt(text, 10)%12})}
              value={this.state.hours + ''}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              manual set "minutes"
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({minutes: parseInt(text, 10)%60})}
              value={this.state.minutes + ''}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              manual set "seconds"
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({seconds: parseInt(text, 10)%60})}
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
              currentTime
            </Text>
            <Switch
              onValueChange={(value) => this.setState({currentTime: value})}
              value={this.state.currentTime}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              realTime
            </Text>
            <Switch
              onValueChange={(value) => this.setState({realTime: value})}
              value={this.state.realTime}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              militaryTime
            </Text>
            <Switch
              onValueChange={(value) => this.setState({militaryTime: value})}
              value={this.state.militaryTime}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              enableShadows
            </Text>
            <Switch
              onValueChange={(value) => this.setState({enableShadows: value})}
              value={this.state.enableShadows}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              enableGraduations
            </Text>
            <Switch
              onValueChange={(value) => this.setState({enableGraduations: value})}
              value={this.state.enableGraduations}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              enableHub
            </Text>
            <Switch
              onValueChange={(value) => this.setState({enableHub: value})}
              value={this.state.enableHub}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              enableDigit
            </Text>
            <Switch
              onValueChange={(value) => this.setState({enableDigit: value})}
              value={this.state.enableDigit}
            />
          </View>

          {/* CLOCK'S FACE CUSTOMIZATION */}
          <View style={styles.groupCommandTitle}>
            <Text style={styles.groupCommandText}>
              CLOCKS'S FACE CUSTOMIZATION
            </Text>
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              digitOffset ({(digitOffset + '').slice(0, 6)})
            </Text>
            <Text>
              {MIN_BRIDGE_DIGIT_OFFSET}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_BRIDGE_DIGIT_OFFSET}
              maximumValue={MAX_BRIDGE_DIGIT_OFFSET}
              onValueChange={(value) => this.setState({digitOffset: value })}
              value={this.state.digitOffset}
            />
            <Text>
              {MAX_BRIDGE_DIGIT_OFFSET}
            </Text>
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              digitColor
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({digitColor: text})}
              value={this.state.digitColor}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              borderWidth ({(borderWidth + '').slice(0, 6)})
            </Text>
            <Text>
              {MIN_BORDER_WIDTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_BORDER_WIDTH}
              maximumValue={MAX_BORDER_WIDTH}
              onValueChange={(value) => this.setState({borderWidth: value })}
              value={this.state.borderWidth}
            />
            <Text>
              {MAX_BORDER_WIDTH}
            </Text>
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              borderColor
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({borderColor: text})}
              value={this.state.borderColor}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              borderAlpha ({(borderAlpha + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_BORDER_ALPHA}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_BORDER_ALPHA}
              maximumValue={MAX_BORDER_ALPHA}
              onValueChange={(value) => this.setState({borderAlpha: value })}
              value={this.state.borderAlpha}
            />
            <Text>
              {MAX_BORDER_ALPHA}
            </Text>
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

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              faceBackgroundAlpha ({(faceBackgroundAlpha + '').slice(0,4)})
            </Text>
            <Text>
              {MIN_FACE_BACKGROUND_ALPHA}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_FACE_BACKGROUND_ALPHA}
              maximumValue={MAX_FACE_BACKGROUND_ALPHA}
              onValueChange={(value) => this.setState({faceBackgroundAlpha: value })}
              value={this.state.faceBackgroundAlpha}
            />
            <Text>
              {MAX_FACE_BACKGROUND_ALPHA}
            </Text>
          </View>

          {/* HOURS HAND CUSTOMIZATION */}

          <View style={styles.groupCommandTitle}>
            <Text style={styles.groupCommandText}>
              HOURS HAND CUSTOMIZATION
            </Text>
          </View>
          {/* hourHandColor */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hourHandColor
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({hourHandColor: text})}
              value={this.state.hourHandColor}
            />
          </View>

          {/* hourHandAlpha */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hourHandAlpha ({(hourHandAlpha + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_HOUR_HAND_ALPHA}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_HOUR_HAND_ALPHA}
              maximumValue={MAX_HOUR_HAND_ALPHA}
              onValueChange={(value) => this.setState({hourHandAlpha: value })}
              value={this.state.hourHandAlpha}
            />
            <Text>
              {MAX_HOUR_HAND_ALPHA}
            </Text>
          </View>

          {/* hourHandWidth */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hourHandWidth ({(hourHandWidth + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_HOUR_HAND_WIDTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_HOUR_HAND_WIDTH}
              maximumValue={MAX_HOUR_HAND_WIDTH}
              onValueChange={(value) => this.setState({hourHandWidth: value })}
              value={this.state.hourHandWidth}
            />
            <Text>
              {MAX_HOUR_HAND_WIDTH}
            </Text>
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
  groupCommandTitle: {
    marginTop: 15,
    marginLeft: 10
  },
  groupCommandText: {
    fontWeight: '800'
  },
  command: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cmdInfo: {
    flex: 2,
    fontSize: 12,
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
    flex: 1
    // width: width * 0.4
  }
});


AppRegistry.registerComponent(
  'reactNativeAnalogClock',
  () => reactNativeAnalogClock
);
