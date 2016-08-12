//
//  RNAnalogClockView.swift
//  reactNativeAnalogClock
//
//  Created by MacKentoch on 06/08/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation

@objc(RNAnalogClockView)
class RNAnalogClockView : BEMAnalogClockView, BEMAnalogClockDelegate {
  
  let animated: Bool = true
  // current time callback to JS (see currentTimeOnClock method below)
  var onClockTick: RCTBubblingEventBlock?
  // currentTime values (see currentTimeOnClock method below)
  var currentHours: Int = 0;
  var currentMinutes: Int = 0;
  var currentSeconds: Int = 0;
  // properties to customize graduations
  var smallGraduationLength: CGFloat! = 5.0
  var highGraduationLength: CGFloat! = 10.0
  var smallGraduationWidth: CGFloat! = 1.0
  var highGraduationWidth: CGFloat! = 2.0
  var smallGraduationColor: UIColor! = UIColor(red: 241.0,
                                               green: 241.0,
                                               blue: 241.0,
                                               alpha: 1.0)
  var highGraduationColor: UIColor! = UIColor(red: 241.0,
                                              green: 241.0,
                                              blue: 241.0,
                                              alpha: 1.0)
  
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame);

    self.frame = frame;
    self.delegate = self;
    
  }

  //////////////////////////////////
  //----- PROPERTIES SETTERS -----//
  //////////////////////////////////
  @objc func setBridgeHours(hours: Int) {
    self.hours = hours
    self.updateTimeAnimated(animated)
  }

  @objc func setBridgeMinutes(minutes: Int) {
    self.minutes = minutes
    self.updateTimeAnimated(animated)
  }
  
  @objc func setBridgeSeconds(seconds: Int) {
    self.seconds = seconds
    self.updateTimeAnimated(animated)
  }
  
  @objc func setBridgeSetTimeViaTouch(active: Bool) {
    self.setTimeViaTouch = active
    self.reloadClock()
  }
  
  @objc func setBridgeCurrentTime(active: Bool) {
    self.currentTime = active
    self.reloadClock()
  }
  
  @objc func setBridgeRealTime(active: Bool) {
    self.realTime = active
    self.reloadClock()
  }
  
  @objc func setBridgeMilitaryTime(active: Bool) {
    self.militaryTime = active
    self.reloadClock()
  }
  
  @objc func setBridgeEnableShadows(active: Bool) {
    self.enableShadows = active
    self.reloadClock()
  }
  
  @objc func setBridgeEnableGraduations(active: Bool) {
    self.enableGraduations = active
    self.reloadClock()
  }
  
  @objc func setBridgeEnableDigit(active: Bool) {
    self.enableDigit = active
    self.reloadClock()
  }

  @objc func setBridgeEnableHub(active: Bool) {
    self.enableHub = active
    self.reloadClock()
  }

  
  //////////////////////////////////////////////////
  //----- CLOCK'S FACE CUSTOMIZATION SETTERS -----//
  //////////////////////////////////////////////////
  @objc func setBridgeBorderWidth(width: CGFloat) {
    self.borderWidth = width
    self.reloadClock()
  }
  
  @objc func setBridgeDigitColor(color: NSNumber) {
    self.digitColor = RCTConvert.UIColor(color)
    self.reloadClock()
  }

  
  @objc func setBridgeDigitOffset(offset: CGFloat) {
    self.digitOffset = offset
    self.reloadClock()
  }
  
  @objc func setBridgeBorderColor(color: NSNumber) {
    self.borderColor = RCTConvert.UIColor(color)
    self.reloadClock()
  }
  
  @objc func setBridgeFaceBackgroundColor(color: NSNumber) {
    self.faceBackgroundColor = RCTConvert.UIColor(color)
    self.reloadClock()
  }
  
  @objc func setBridgeFaceBackgroundAlpha(alpha: CGFloat) {
    self.faceBackgroundAlpha = alpha
    self.reloadClock()
  }

  @objc func setBridgeBorderAlpha(alpha: CGFloat) {
    self.borderAlpha = alpha
    self.reloadClock()
  }
  
  ////////////////////////////////////////
  //----- HOURS HAND CUSTOMIZATION -----//
  ////////////////////////////////////////
  @objc func setBridgeHourHandColor(color: NSNumber) {
    self.hourHandColor = RCTConvert.UIColor(color)
    self.reloadClock()
  }
  
  @objc func setBridgeHourHandAlpha(alpha: CGFloat) {
    self.hourHandAlpha = alpha
    self.reloadClock()
  }

  @objc func setBridgeHourHandWidth(width: CGFloat) {
    self.hourHandWidth = width
    self.reloadClock()
  }

  @objc func setBridgeHourHandLength(length: CGFloat) {
    self.hourHandLength = length
    self.reloadClock()
  }

  @objc func setBridgeHourHandOffsideLength(offsideLength: CGFloat) {
    self.hourHandOffsideLength = offsideLength
    self.reloadClock()
  }
  

  //////////////////////////////////////////
  //----- MINUTES HAND CUSTOMIZATION -----//
  //////////////////////////////////////////
  @objc func setBridgeMinuteHandColor(color: NSNumber) {
    self.minuteHandColor = RCTConvert.UIColor(color)
    self.reloadClock()
  }
  
  @objc func setBridgeMinuteHandAlpha(alpha: CGFloat) {
    self.minuteHandAlpha = alpha
    self.reloadClock()
  }
  
  @objc func setBridgeMinuteHandWidth(width: CGFloat) {
    self.minuteHandWidth = width
    self.reloadClock()
  }
  
  @objc func setBridgeMinuteHandLength(length: CGFloat) {
    self.minuteHandLength = length
    self.reloadClock()
  }
  
  @objc func setBridgeMinuteHandOffsideLength(offsideLength: CGFloat) {
    self.minuteHandOffsideLength = offsideLength
    self.reloadClock()
  }
  
  //////////////////////////////////////////
  //----- SECONDS HAND CUSTOMIZATION -----//
  //////////////////////////////////////////
  @objc func setBridgeSecondHandColor(color: NSNumber) {
    self.secondHandColor = RCTConvert.UIColor(color)
    self.reloadClock()
  }
  
  @objc func setBridgeSecondHandAlpha(alpha: CGFloat) {
    self.secondHandAlpha = alpha
    self.reloadClock()
  }
  
  @objc func setBridgeSecondHandWidth(width: CGFloat) {
    self.secondHandWidth = width
    self.reloadClock()
  }
  
  @objc func setBridgeSecondHandLength(length: CGFloat) {
    self.secondHandLength = length
    self.reloadClock()
  }
  
  @objc func setBridgeSecondHandOffsideLength(offsideLength: CGFloat) {
    self.secondHandOffsideLength = offsideLength
    self.reloadClock()
  }
  
  /////////////////////////////////
  //----- HUB CUSTOMIZATION -----//
  /////////////////////////////////
  @objc func setBridgeHubColor(color: NSNumber) {
    self.hubColor = RCTConvert.UIColor(color)
    self.reloadClock()
  }
  
  @objc func setBridgeHubAlpha(alpha: CGFloat) {
    self.hubAlpha = alpha
    self.reloadClock()
  }
  
  @objc func setBridgeHubRadius(width: CGFloat) {
    self.hubRadius = width
    self.reloadClock()
  }
  
  ///////////////////////////////////////
  //----- methods accessible in JS-----//
  ///////////////////////////////////////
  // (in RNAnalogClock.m) RCT_EXTERN_METHOD -> see RNAnalogClockManager.swift
  @objc func startRealTimeClock() -> Void {
    self.startRealTime()
  }

  @objc func stopRealTimeClock() -> Void {
    self.stopRealTime()
  }
  
  @objc func reloadRealTimeClock() -> Void {
    if self.realTimeIsActivated == true {
      self.setClockToCurrentTimeAnimated(true)
    }
    self.startRealTime()
  }
  
  
  ////////////////////////////////////
  //----- CLOCK CUSTOMIZATIONS -----//
  ////////////////////////////////////
  
  @objc func analogClock(clock: BEMAnalogClockView!, graduationLengthForIndex index: Int) -> CGFloat {
    let modulo5: Int = (index + 1) % 5 //highGraduationLength every 5 graduations
    if modulo5 == 1 {
      return self.highGraduationLength
    } else {
      return self.smallGraduationLength
    }
  }
  
  @objc func analogClock(clock: BEMAnalogClockView!, graduationWidthForIndex index: Int) -> CGFloat {
    let modulo5: Int = (index + 1) % 5
    if modulo5 == 1 {
      return self.highGraduationWidth
    } else {
      return self.smallGraduationWidth
    }
  }
  
  //  - (UIColor *)analogClock:(BEMAnalogClockView *)clock graduationColorForIndex:(NSInteger)index {
  //  bool modulo15 = index % 15;
  //  if ((!modulo15 == 1)) { // Every 15 graduation will be blue.
  //  return [UIColor brownColor];
  //  } else {
  //  return [UIColor whiteColor];
  //  }
  //  }
  
  ////////////////////////////
  //----- CLOCK EVENTS -----//
  ////////////////////////////
  @objc func clockDidBeginLoading(clock: BEMAnalogClockView!) {
    // print("clockDidBeginLoading")
  }

  @objc func clockDidFinishLoading(clock: BEMAnalogClockView!) {
    // print("clockDidFinishLoading")
  }
  
  /////////////////////////////////
  //----- CURRENT TIME TICK -----//
  /////////////////////////////////
  @objc(currentTimeOnClock:Hours:Minutes:Seconds:)
  func currentTimeOnClock(clock: BEMAnalogClockView!, hours: String!, minutes: String!, seconds: String!) {
    self.currentHours =  Int(hours)!
    self.currentMinutes = Int(minutes)!
    self.currentSeconds = Int(seconds)!
    
    if let _ =  self.onClockTick {
      self.onClockTick!(
        [
          "hours": hours,
          "minutes": minutes,
          "seconds": seconds
        ]
      )
    }
  }
}