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
  override func view() -> UIView! {
    return RNAnalogClockView();
  }
}
