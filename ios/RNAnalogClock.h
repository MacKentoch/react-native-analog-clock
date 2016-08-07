//
//  RNAnalogClock.h
//  reactNativeAnalogClock
//
//  Created by MacKentoch on 06/08/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RCTView.h"

@interface RNAnalogClock : RCTView
  /// setting the time manualy
  @property (nonatomic, assign) NSInteger *hours;
  @property (nonatomic, assign) NSInteger *minutes;
  @property (nonatomic, assign) NSInteger *seconds;

  /// If set to YES, the clock will be set to the current time on the phone. Prioritized over setting the time manualy. Default value is NO.
  @property (nonatomic, assign) BOOL currentTime;

  /// If set to YES, the clock will be updated in real time (the second hand will move every second, the minute hand every minute...). Default value is NO;
  @property (nonatomic, assign) BOOL realTime;

  /// If set to YES, the clock time can be updated via touch inputs. Default value is NO.
  @property (nonatomic, assign) BOOL setTimeViaTouch;

  /// If set to YES, the clock time will suport military time. Default value is NO.
  @property (nonatomic, assign) BOOL militaryTime;

  /// If set to YES, the hands will cast a shadow. Default value is YES.
  @property (nonatomic, assign) BOOL enableShadows;

  /// If set to YES, the graduation on the clock will be visible. See the methods bellow to costumize the graduations. Default value is YES.
  @property (nonatomic, assign) BOOL enableGraduations;

  /// If set to YES, the digits (1-12) will be displayed on the face of the clock. Default value is NO.
  @property (nonatomic, assign) BOOL enableDigit;

  /// If set to YES, a circular hub will be drawn. Default value is NO;
  @property (nonatomic, assign) BOOL enableHub;

//  @property (strong, nonatomic) UIColor *borderColor;

  ////////////////////////////////////
  /// READONLY PROPS
  ////////////////////////////////////

  /// If set to YES, the clock real time feature is activated. Read only.
  @property (readonly, nonatomic) BOOL realTimeIsActivated;



//  @property (nonatomic, assign) NSString* customBorderColor;

@end
