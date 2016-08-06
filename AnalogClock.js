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
        enableShadows={true}
        realTime={true}
        militaryTime={true}
        currentTime={true}
        enableDigit={true}
        setTimeViaTouch={true}
        {...otherProps}
      />
    );
  }
}

// self.myClock1.borderColor = [UIColor whiteColor];
// self.myClock1.borderWidth = 3;
// self.myClock1.faceBackgroundColor = [UIColor whiteColor];
// self.myClock1.faceBackgroundAlpha = 0.0;
// self.myClock1.digitFont = [UIFont fontWithName:@"HelveticaNeue-Thin" size:17];
// self.myClock1.digitColor = [UIColor whiteColor];


// hours={hours}
// minutes={minutes}
// seconds={seconds}

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
