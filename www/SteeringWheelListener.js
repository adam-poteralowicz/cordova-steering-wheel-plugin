var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec'),

function SteeringWheelListener() {
    const me = this;
}

SteeringWheelListener.prototype.onButtonInput = function(params) {
    argscheck.checkArgs('off', 'SteeringWheelListener.onButtonInput', arguments);
    exec(null, null, "SteeringWheelListener", "onButtonInput", [params])
}

SteeringWheelListener.prototype.startActivity = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'SteeringWheelListener.startActivity', arguments);
    exec(successCallback, errorCallback, "SteeringWheelListener", "startActivity", [params]);
};

SteeringWheelListener.prototype.startActivityForResult = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'SteeringWheelListener.startActivityForResult', arguments);
    exec(successCallback, errorCallback, "SteeringWheelListener", "startActivityForResult", [params]);
};

SteeringWheelListener.prototype.sendBroadcast = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'SteeringWheelListener.sendBroadcast', arguments);
    exec(successCallback, errorCallback, "SteeringWheelListener", "sendBroadcast", [params]);
};

SteeringWheelListener.prototype.startService = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'SteeringWheelListener.startService', arguments);
    exec(successCallback, errorCallback, "SteeringWheelListener", "startService", [params]);
};

SteeringWheelListener.prototype.registerBroadcastReceiver = function (params, callback) {
    argscheck.checkArgs('of', 'SteeringWheelListener.registerBroadcastReceiver', arguments);
    exec(callback, null, "SteeringWheelListener", "registerBroadcastReceiver", [params]);
};

SteeringWheelListener.prototype.unregisterBroadcastReceiver = function () {
    argscheck.checkArgs('', 'SteeringWheelListener.unregisterBroadcastReceiver', arguments);
    exec(null, null, "SteeringWheelListener", "unregisterBroadcastReceiver", []);
};

SteeringWheelListener.prototype.onIntent = function (callback) {
    argscheck.checkArgs('f', 'SteeringWheelListener.onIntent', arguments);
    exec(callback, null, "SteeringWheelListener", "onIntent", [callback]);
};

SteeringWheelListener.prototype.onActivityResult = function (callback) {
    argscheck.checkArgs('f', 'SteeringWheelListener.onActivityResult', arguments);
    exec(callback, null, "SteeringWheelListener", "onActivityResult", [callback]);
};

SteeringWheelListener.prototype.getIntent = function (successCallback, failureCallback) {
    argscheck.checkArgs('ff', 'SteeringWheelListener.getIntent', arguments);
    exec(successCallback, failureCallback, "SteeringWheelListener", "getIntent", []);
};

SteeringWheelListener.prototype.sendResult = function (params, callback) {
    argscheck.checkArgs('of', 'SteeringWheelListener.sendResult', arguments);
    exec(callback, null, "SteeringWheelListener", "sendResult", [params]);
}

SteeringWheelListener.prototype.realPathFromUri = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'SteeringWheelListener.realPathFromUri', arguments);
    exec(successCallback, errorCallback, "SteeringWheelListener", "realPathFromUri", [params]);
};

SteeringWheelListener.prototype.packageExists = function (packageName, successCallback) {
    argscheck.checkArgs('sf', 'SteeringWheelListener.packageExists', arguments);
    exec(successCallback, null, "SteeringWheelListener", "packageExists", [packageName]);
};

window.steeringWheelListener = new SteeringWheelListener();
window.plugins = window.plugins || {};
window.plugins.steeringWheelListener = window.steeringWheelListener;