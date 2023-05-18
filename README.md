# Android X support
- For Android X Support please use version >= [2.x.x](https://www.npmjs.com/package/com-darryncampbell-cordova-plugin-intent/v/2.0.0) 
- For Android Support Library please use version [1.3.x](https://www.npmjs.com/package/com-darryncampbell-cordova-plugin-intent/v/1.3.0)

## SteeringWheelListener
This plugin defines a `window.plugins.steeringWheelListener` object which provides an observer for steering wheel physical buttons' click events.

## Installation

### Cordova Version < 7
    cordova plugin add https://github.com/adam-poteralowicz/cordova-steering-wheel-plugin.git

### Cordova Version >= 7
    cordova plugin add steering-wheel-plugin

## Supported Platforms
- Android

## steeringWheelListener.onButtonInput
Listen for any directional pad / steering wheel physical buttons clicked' events and return the latest clicked button. 
An Observer needs to be set up on the JS side.