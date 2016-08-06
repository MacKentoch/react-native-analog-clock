/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AnalogClock from './AnalogClock';

class reactNativeAnalogClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 12,
      minutes: 0,
      seconds: 0
    };
  }
  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>


        <Text style={styles.instructions}>
          {hours ? hours : '--'}
          :
          {minutes ? minutes : '--'}
          :
          {seconds ? seconds : '--'}
        </Text>
        <AnalogClock
          style={{
            height: 180,
            width: 180
          }}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  clockContainer: {
    height: 200,
    width: 200,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('reactNativeAnalogClock', () => reactNativeAnalogClock);
