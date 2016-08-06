//
//  RNAnalogClock.h
//  reactNativeAnalogClock
//
//  Created by MacKentoch on 06/08/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RCTView.h"

@interface RNAnalogClock : RCTView

  @property (nonatomic, assign) NSInteger *hours;
  @property (nonatomic, assign) NSInteger *minutes;
  @property (nonatomic, assign) NSInteger *seconds;

@end
