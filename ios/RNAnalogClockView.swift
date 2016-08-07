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
  
//  var customBorderColor: NSNumber = 0 {
//    didSet {
//      self.borderColor = RCTConvert.UIColor(customBorderColor)
//    }
//  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame);
    
    self.frame = frame;
    self.delegate = self;
    
  }
  
  
//  @objc func setClockFaceBorderStyle(color: String, alpha: String, width: NSNumber) -> Void {
//    NSLog("%@ %@ %S", name, location, date);
//  }
  
//  @objc func setClockFaceBorderColor(color: String) {
//    self.borderColor = RCTConvert.UIColor(color)
//  }
 
}