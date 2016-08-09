//
//  RNAnalogClockManager.swift
//  reactNativeAnalogClock
//
//  Created by MacKentoch on 06/08/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation

@objc(RNAnalogClockSwift)
class RNAnalogClockManager: RCTViewManager {
  
  var _RNAnalogClockView: RNAnalogClockView!
  
  override func view() -> UIView! {
    _RNAnalogClockView = RNAnalogClockView()
    return _RNAnalogClockView
  }
  
  func startRealTimeClock() {
    guard let _ = _RNAnalogClockView else { return }
    self._RNAnalogClockView.startRealTimeClock();
  }
  
  func stopRealTimeClock() {
    guard let _ = _RNAnalogClockView else { return }
    self._RNAnalogClockView.stopRealTimeClock();
  }
  
  func reloadRealTimeClock() {
    guard let _ = _RNAnalogClockView else { return }
    self._RNAnalogClockView.reloadRealTimeClock();
  }
}
