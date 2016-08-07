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
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame);

    self.frame = frame;
    self.delegate = self;
    
  }
  
  @objc func setCustomBorderColor(value: NSNumber) {
    self.borderColor = RCTConvert.UIColor(value)
  }
  
  @objc func setCustomFaceBackgroundColor(value: NSNumber) {
    self.faceBackgroundColor = RCTConvert.UIColor(value)
  }
  
  @objc func currentTimeOnClock(clock: BEMAnalogClockView!, hours: NSString!, minutes: NSString!, seconds: NSString!) {
    print("\nDEBUG; Current time: \(hours):\(minutes)\(seconds)")
  }
  
//  @objc func currentTimeOnClock(hours: NSString!, minutes: NSString!, seconds: NSString!) {
//    print("\nDEBUG; Current time: \(hours):\(minutes)\(seconds)")
//  }
}