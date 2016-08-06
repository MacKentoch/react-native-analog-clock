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
  
  let rectMin = CGRect(
    x: 0.0,
    y: 0.0,
    width: 100.0,
    height: 100.0
  )
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame);
    self.frame = frame;
    self.delegate = self;
    
    self.debugFrame(frame: frame)
  }
  
  func debugFrame(frame frame: CGRect) {
    print("RNAnalogClockView init")
    print("frame height: \(frame.height), width: \(frame.width)")
  }
  
  
//  func setHours(hours: NSInteger) {
//    self.hours = hours;
//  }
//  
//  func setMinutes(colors: NSInteger) {
//    self.minutes = minutes;
//  }
//
//  func setSecinds(colors: NSInteger) {
//    self.seconds = seconds;
//  }
  
}