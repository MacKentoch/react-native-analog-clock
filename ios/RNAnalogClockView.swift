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
  
  
  @objc func setBridgeBorderColor(value: NSNumber) {
    self.borderColor = RCTConvert.UIColor(value)
    self.reloadClock()
  }
  
  @objc func setBridgeFaceBackgroundColor(value: NSNumber) {
    self.faceBackgroundColor = RCTConvert.UIColor(value)
    self.reloadClock()
  }
  
  @objc func setBridgeSetTimeViaTouch(value: Bool) {
    self.setTimeViaTouch = value
    self.reloadClock()
  }
  
  @objc func currentTimeOnClock(clock: BEMAnalogClockView!, hours: NSString!, minutes: NSString!, seconds: NSString!) {
    print("\nDEBUG; Current time: \(hours):\(minutes)\(seconds)")
  }
  
//  @objc func currentTimeOnClock(hours: NSString!, minutes: NSString!, seconds: NSString!) {
//    print("\nDEBUG; Current time: \(hours):\(minutes)\(seconds)")
//  }
}