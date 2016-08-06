import React , { Component, PropTypes } from 'react';
import { requireNativeComponent, processColor } from 'react-native';

const RNAnalogClock = requireNativeComponent(
  'RNAnalogClockSwift',
  AnalogClock
);

class AnalogClock extends Component {
  render() {
    const { hours, minutes, seconds, ...otherProps } = this.props;
    return (
      <RNAnalogClock
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        {...otherProps}
      />
    );
  }
}

AnalogClock.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number
}

AnalogClock.defaultProps = {
  hours: 12,
  minutes: 0,
  seconds: 0
}

export default AnalogClock;
