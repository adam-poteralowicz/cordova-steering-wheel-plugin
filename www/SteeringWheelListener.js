var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

function SteeringWheelListener() {
    const me = this;
}

SteeringWheelListener.prototype.onKeyDispatched = function(keyCode) {
    argscheck.checkArgs('off', 'SteeringWheelListener.onKeyDispatched', arguments);
    exec(null, null, "SteeringWheelListener", "onKeyDispatched", [keyCode])
};

window.steeringWheelListener = new SteeringWheelListener();
window.plugins = window.plugins || {};
window.plugins.steeringWheelListener = window.steeringWheelListener;