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
    print("setBridgeEnableHub: \(active)")
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


  @objc func currentTimeOnClock(clock: BEMAnalogClockView!, hours: NSString!, minutes: NSString!, seconds: NSString!) {
    print("\nDEBUG; Current time: \(hours):\(minutes)\(seconds)")
  }
  
}