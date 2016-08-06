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

  /// setting the time manualy
  RCT_EXPORT_VIEW_PROPERTY(hours, NSInteger);
  RCT_EXPORT_VIEW_PROPERTY(minutes, NSInteger);
  RCT_EXPORT_VIEW_PROPERTY(seconds, NSInteger);

  /// If set to YES, the clock will be set to the current time on the phone. Prioritized over setting the time manualy. Default value is NO.
  RCT_EXPORT_VIEW_PROPERTY(currentTime, BOOL);

  /// If set to YES, the clock will be updated in real time (the second hand will move every second, the minute hand every minute...). Default value is NO;
  RCT_EXPORT_VIEW_PROPERTY(realTime, BOOL);

  /// If set to YES, the clock time can be updated via touch inputs. Default value is NO.
  RCT_EXPORT_VIEW_PROPERTY(setTimeViaTouch, BOOL);

  // If set to YES, the clock time will suport military time. Default value is NO.
  RCT_EXPORT_VIEW_PROPERTY(militaryTime, BOOL);

  /// If set to YES, the clock real time feature is activated. Read only.
  RCT_EXPORT_VIEW_PROPERTY(realTimeIsActivated, BOOL)

  /// If set to YES, the hands will cast a shadow. Default value is YES.
  RCT_EXPORT_VIEW_PROPERTY(enableShadows, BOOL);

  /// If set to YES, the graduation on the clock will be visible. See the methods bellow to costumize the graduations. Default value is YES.
  RCT_EXPORT_VIEW_PROPERTY(enableGraduations, BOOL);

  /// If set to YES, the digits (1-12) will be displayed on the face of the clock. Default value is NO.
  RCT_EXPORT_VIEW_PROPERTY(enableDigit, BOOL)

@end

@implementation RNAnalogClock

@end


// NOTE:
//  "RNAnalogClock.h"
//  AND
//  "RNAnalogClock.h"
//
//  ->  is where we will tell React Native about what we need
//      and what to call our stuff in the JavaScript world.
