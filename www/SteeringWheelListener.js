var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

function SteeringWheelListener() {
    const me = this;
}

SteeringWheelListener.prototype.onButtonInput = function(keyCode) {
    argscheck.checkArgs('off', 'SteeringWheelListener.onButtonInput', arguments);
    exec(null, null, "SteeringWheelListener", "onButtonInput", [keyCode])
};

window.steeringWheelListener = new SteeringWheelListener();
window.plugins = window.plugins || {};
window.plugins.steeringWheelListener = window.steeringWheelListener;