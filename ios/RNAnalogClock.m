//
//  RNAnalogClock.m
//  reactNativeAnalogClock
//
//  Created by MacKentoch on 06/08/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RNAnalogClock.h"
#import "RCTViewManager.h"

@interface RCT_EXTERN_MODULE(RNAnalogClockSwift, RCTViewManager)

  RCT_EXPORT_VIEW_PROPERTY(hours, NSInteger);
  RCT_EXPORT_VIEW_PROPERTY(minutes, NSInteger);
  RCT_EXPORT_VIEW_PROPERTY(seconds, NSInteger);

@end

@implementation RNAnalogClock

@end
