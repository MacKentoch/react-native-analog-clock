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
      enableGraduations,
      enableHub,
      // CLOCK'S FACE CUSTOMIZATION
      borderColor,
      borderAlpha,
      borderWidth,
      digitColor,
      digitOffset,
      faceBackgroundColor,
      faceBackgroundAlpha,
      // HOURS HAND CUSTOMIZATION
      hourHandColor,
      hourHandAlpha,
      hourHandWidth,
      hourHandLength,
      hourHandOffsideLength,

      ...otherProps
    } = this.props;

    return (
      <RNAnalogClock
        // PROPERTIES
        bridgeHours={parseInt(hours, 10) ? parseInt(hours, 10)%12 : 0}
        bridgeMinutes={parseInt(minutes, 10) ? parseInt(minutes, 10)%60 : 0}
        bridgeSeconds={parseInt(seconds, 10) ? parseInt(seconds, 10)%60 : 0}
        bridgeSetTimeViaTouch={setTimeViaTouch}
        bridgeEnableShadows={enableShadows}
        bridgeRealTime={realTime}
        bridgeMilitaryTime={militaryTime}
        bridgeCurrentTime={currentTime}
        bridgeEnableDigit={enableDigit}
        bridgeEnableGraduations={enableGraduations}
        bridgeEnableHub={enableHub}
        // CLOCK'S FACE CUSTOMIZATION
        bridgeDigitColor={processColor(digitColor)}
        bridgeDigitOffset={parseFloat(digitOffset) ? parseFloat(digitOffset) : 0}
        bridgeBorderColor={processColor(borderColor)}
        bridgeBorderAlpha={parseFloat(borderAlpha) ? parseFloat(borderAlpha) : 0}
        bridgeBorderWidth={parseFloat(borderWidth) ? parseFloat(borderWidth) : 0}
        bridgeFaceBackgroundColor={processColor(faceBackgroundColor)}
        bridgeFaceBackgroundAlpha={parseFloat(faceBackgroundAlpha) ? parseFloat(faceBackgroundAlpha) : 0}
        // HOURS HAND CUSTOMIZATION
        bridgeHourHandColor={processColor(hourHandColor)}
        bridgeHourHandAlpha={parseFloat(hourHandAlpha) ? parseFloat(hourHandAlpha) : 1.0}
        bridgeHourHandWidth={parseFloat(hourHandWidth) ? parseFloat(hourHandWidth) : 4.0}
        bridgeHourHandLength={parseFloat(hourHandLength) ? parseFloat(hourHandLength) : 30}
        bridgeHourHandOffsideLength={parseFloat(hourHandOffsideLength) ? parseFloat(hourHandOffsideLength) : 10}
        {...otherProps}
      />
    );
  }
}

// self.myClock1.digitFont = [UIFont fontWithName:@"HelveticaNeue-Thin" size:17];
// self.myClock1.digitColor = [UIColor whiteColor];

AnalogClock.propTypes = {
  //////////////////////////
  //----- PROPERTIES -----//
  //////////////////////////
  // manualy define hours
  hours: PropTypes.number,
  // manualy define minutes
  minutes: PropTypes.number,
  // manualy define seconds
  seconds: PropTypes.number,
  // If set to true, the hands will cast a shadow. Default value is true.
  enableShadows: PropTypes.bool,
  /// If set to true, the clock will be updated in real time (the second hand will move every second, the minute hand every minute...). Default value is NO;
  realTime: PropTypes.bool,
  // If set to true, the clock time will suport military time. Default value is false.
  militaryTime: PropTypes.bool,
  // If set to true, the clock will be set to the current time on the phone. Prioritized over setting the time manualy. Default value is false.
  currentTime: PropTypes.bool,
  // If set to true, the digits (1-12) will be displayed on the face of the clock. Default value is false.
  enableDigit: PropTypes.bool,
  // If set to true, the clock time can be updated via touch inputs. Default value is false.
  setTimeViaTouch: PropTypes.bool,
  // If set to true, the graduation on the clock will be visible. See the methods bellow to costumize the graduations. Default value is true.
  enableGraduations: PropTypes.bool,
  /// If set to true, a circular hub will be drawn. Default value is false
  enableHub: PropTypes.bool,
  //////////////////////////////////////////
  //----- CLOCK'S FACE CUSTOMIZATION -----//
  //////////////////////////////////////////
  // The color of the clock's border.
  borderColor: PropTypes.string,
  /// The alpha of the clock's border.
  borderAlpha: PropTypes.number,
  /// The width of the clock's border.
  borderWidth: PropTypes.number,
  /// The color of the digits appearing inside the clock
  digitColor: PropTypes.string,
  /// The offset for the position of the digits on the clock's face. A value >0 will make the digits appear further away from the center of the clock. A valut <0 will make them closer to the center of the clock. Default value is 0.0.
  digitOffset: PropTypes.number,
  /// The background color of the clock's face.
  faceBackgroundColor: PropTypes.string,
  /// The alpha of the clock's face.
  faceBackgroundAlpha: PropTypes.number,
  ////////////////////////////////////////
  //----- HOURS HAND CUSTOMIZATION -----//
  ////////////////////////////////////////
  /// The color of the clock's hour hand. Default value is whiteColor.
  hourHandColor: PropTypes.string,
  /// The alpha of the clock's hour hand. Default value is 1.0.
  hourHandAlpha: PropTypes.number,
  /// The width of the clock's hour hand. Default value is 4.0.
  hourHandWidth: PropTypes.number,
  /// The length of the clock's hour hand. Default value is 30.
  hourHandLength: PropTypes.number,
  /// The length of the offside part of the clock's hour hand. Default value is 10.
  hourHandOffsideLength: PropTypes.number,

  //////////////////////////
  // Read only props (so no need to bridge native one)
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
