[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/MacKentoch/rn-analog-clock)
# react-native-analog-clock


*__IMPORTANT__* : **Work in progress** (*at early stage*), stay tuned!


##### React native analog clock as a nice alternative to traditional timepicker.

This component is a bridge over `native`  [BEMAnalogClock](https://github.com/Boris-Em/BEMAnalogClock)
- Adjust the time on the clock via touch (or disable it)
- customizable
- native behind

> NOTE: this native bridge is an `Swift` bridge. An `Objective-C` bridge version — *__published__* — **is available [here](https://github.com/MacKentoch/react-native-analog-clock)**

<img src="https://raw.githubusercontent.com/MacKentoch/rn-analog-clock/master/images/previewFromExample.gif" alt="preview" width="320px"></img>

## Getting started

[Follow instruction from the npm published version](https://github.com/MacKentoch/rn-analog-clock#getting-started)

## Why this Swift version when the published one is in Objective-C

> I just wanted to experiment `native component bridge` in both `Objective-C` and `Swift`.

Despite I prefer Swift in native projects, I realized it is a better bet to bridge in Objective-C:
- the first choice of React Native team
- MACROS
- can target static libraries
- *Bridging in Swift* finally *adds more complexity* than in Objective-C (*more files* since Swift was added later in React Native)
