//
//  RNAnalogClock.m
//  reactNativeAnalogClock
//
//  Created by MacKentoch on 06/08/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//


// NOTE:
//  "RNAnalogClock.h"
//  AND
//  "RNAnalogClock.h"
//
//  ->  is where we will tell React Native about what we need
//      and what to call our stuff in the JavaScript world.

#import "RNAnalogClock.h"
#import "RCTViewManager.h"

@interface RCT_EXTERN_MODULE(RNAnalogClockSwift, RCTViewManager)

  /// READ ONLY : If set to YES, the clock real time feature is activated.
  RCT_EXPORT_VIEW_PROPERTY(realTimeIsActivated, BOOL)


  //////////////////////////
  //----- PROPERTIES -----//
  //////////////////////////

  /// setting the time manualy
  RCT_EXPORT_VIEW_PROPERTY(bridgeHours, NSInteger);
  RCT_EXPORT_VIEW_PROPERTY(bridgeMinutes, NSInteger);
  RCT_EXPORT_VIEW_PROPERTY(bridgeSeconds, NSInteger);
  /// If set to YES, the clock time can be updated via touch inputs. Default value is NO.
  RCT_EXPORT_VIEW_PROPERTY(bridgeSetTimeViaTouch, BOOL);
  /// If set to YES, the clock will be set to the current time on the phone. Prioritized over setting the time manualy. Default value is NO.
  RCT_EXPORT_VIEW_PROPERTY(bridgeCurrentTime, BOOL);
  /// If set to YES, the clock will be updated in real time (the second hand will move every second, the minute hand every minute...). Default value is NO;
  RCT_EXPORT_VIEW_PROPERTY(bridgeRealTime, BOOL);
  // If set to YES, the clock time will suport military time. Default value is NO.
  RCT_EXPORT_VIEW_PROPERTY(bridgeMilitaryTime, BOOL);
  /// If set to YES, the hands will cast a shadow. Default value is YES.
  RCT_EXPORT_VIEW_PROPERTY(bridgeEnableShadows, BOOL);
  /// If set to YES, the graduation on the clock will be visible. See the methods bellow to costumize the graduations. Default value is YES.
  RCT_EXPORT_VIEW_PROPERTY(bridgeEnableGraduations, BOOL);
  /// If set to YES, the digits (1-12) will be displayed on the face of the clock. Default value is NO.
  RCT_EXPORT_VIEW_PROPERTY(bridgeEnableDigit, BOOL);
  /// If set to YES, a circular hub will be drawn. Default value is NO;
  RCT_EXPORT_VIEW_PROPERTY(bridgeEnableHub, BOOL);


  //////////////////////////////////////////
  //----- CLOCK'S FACE CUSTOMIZATION -----//
  //////////////////////////////////////////
  // The width of the clock's border.
  RCT_EXPORT_VIEW_PROPERTY(bridgeBorderWidth, CGFloat);
  // The color of the clock's border.
  RCT_EXPORT_VIEW_PROPERTY(bridgeBorderColor, NSNumber);
  /// The alpha of the clock's border.
  RCT_EXPORT_VIEW_PROPERTY(bridgeBorderAlpha, CGFloat)
  // The background color of the clock's face.
  RCT_EXPORT_VIEW_PROPERTY(bridgeFaceBackgroundColor, NSNumber);
  /// The alpha of the clock's face.
  RCT_EXPORT_VIEW_PROPERTY(bridgeFaceBackgroundAlpha, CGFloat);
  /// The color of the digits appearing inside the clock
  RCT_EXPORT_VIEW_PROPERTY(bridgeDigitColor, NSNumber);
  // The offset for the position of the digits on the clock's face. A value >0 will make the digits appear further away from the center of the clock. A valut <0 will make them closer to the center of the clock. Default value is 0.0.
RCT_EXPORT_VIEW_PROPERTY(bridgeDigitOffset, CGFloat);






//  RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

@end


