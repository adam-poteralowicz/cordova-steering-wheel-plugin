var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

function SteeringWheelListener() {
    const me = this;
}

SteeringWheelListener.prototype.onKeyDispatched = function(keyCode) {
    argscheck.checkArgs('n', 'SteeringWheelListener.onKeyDispatched', arguments);
    exec(null, null, "SteeringWheelListener", "onKeyDispatched", [keyCode]);
};

SteeringWheelListener.prototype.onDirectionalPadClicked = function(event) {
    argscheck.checkArgs('o', 'SteeringWheelListener.onDirectionalPadClicked', arguments);
    exec(null, null, "SteeringWheelListener", "onDirectionalPadClicked", [event]);
};

window.steeringWheelListener = new SteeringWheelListener();
window.plugins = window.plugins || {};
window.plugins.steeringWheelListener = window.steeringWheelListener;