import React , {
  Component,
  PropTypes
}                           from 'react';
import {
  requireNativeComponent,
  processColor
}                           from 'react-native';


const RNAnalogClock = requireNativeComponent(
  'RNAnalogClockSwift',
  AnalogClock
);

class AnalogClock extends Component {
  render() {
    const {
      // PROPERTIES
      hours,
      minutes,
      seconds,
      enableShadows,
      realTime,
      militaryTime,
      currentTime,
      enableDigit,
      setTimeViaTouch,
      enableHub,
      enableGraduations,
      // CLOCK'S FACE CUSTOMIZATION
      borderColor,
      borderWidth,
      faceBackgroundColor,

      ...otherProps
    } = this.props;

    return (
      <RNAnalogClock
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
        borderColor={processColor(borderColor)}
        borderWidth={borderWidth}
        faceBackgroundColor={processColor(faceBackgroundColor)}

        {...otherProps}
      />
    );
  }
}

// self.myClock1.faceBackgroundColor = [UIColor whiteColor];
// self.myClock1.faceBackgroundAlpha = 0.0;
// self.myClock1.digitFont = [UIFont fontWithName:@"HelveticaNeue-Thin" size:17];
// self.myClock1.digitColor = [UIColor whiteColor];

AnalogClock.propTypes = {
  //////////////////////////
  // Read / Write props
  //////////////////////////

  //----- PROPERTIES -----//

  // manualy define hours
  hours: PropTypes.number,
  // manualy define minutes
  minutes: PropTypes.number,
  // manualy define seconds
  seconds: PropTypes.number,
  // If set to true, the clock will be set to the current time on the phone. Prioritized over setting the time manualy. Default value is false.
  currentTime: PropTypes.bool,
  /// If set to true, the clock will be updated in real time (the second hand will move every second, the minute hand every minute...). Default value is NO;
  realTime: PropTypes.bool,
  // If set to true, the clock time can be updated via touch inputs. Default value is false.
  setTimeViaTouch: PropTypes.bool,
  // If set to true, the clock time will suport military time. Default value is false.
  militaryTime: PropTypes.bool,
  // If set to true, the hands will cast a shadow. Default value is true.
  enableShadows: PropTypes.bool,
  // If set to true, the graduation on the clock will be visible. See the methods bellow to costumize the graduations. Default value is true.
  enableGraduations: PropTypes.bool,
  // If set to true, the digits (1-12) will be displayed on the face of the clock. Default value is false.
  enableDigit: PropTypes.bool,
  /// If set to true, a circular hub will be drawn. Default value is false
  enableHub: PropTypes.bool,


  //----- CLOCK'S FACE CUSTOMIZATION -----//
  // The color of the clock's border.
  borderColor: PropTypes.string,
  /// The width of the clock's border.
  borderWidth: PropTypes.number,


  //////////////////////////
  // Read only props
  //////////////////////////
  //If set to true, the clock real time feature is activated. Read only.
  realTimeIsActivated: PropTypes.bool
}

AnalogClock.defaultProps = {
  hours: 12,
  minutes: 0,
  seconds: 0
}

export default AnalogClock;
