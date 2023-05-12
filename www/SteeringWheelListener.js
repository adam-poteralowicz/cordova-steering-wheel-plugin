var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

function SteeringWheelListener() {
    const me = this;
}

SteeringWheelListener.prototype.ACTION_SEND = "android.intent.action.SEND";
SteeringWheelListener.prototype.ACTION_VIEW = "android.intent.action.VIEW";
SteeringWheelListener.prototype.ACTION_INSTALL_PACKAGE = "android.intent.action.INSTALL_PACKAGE";
SteeringWheelListener.prototype.ACTION_UNINSTALL_PACKAGE = "android.intent.action.UNINSTALL_PACKAGE";
SteeringWheelListener.prototype.EXTRA_TEXT = "android.intent.extra.TEXT";
SteeringWheelListener.prototype.EXTRA_SUBJECT = "android.intent.extra.SUBJECT";
SteeringWheelListener.prototype.EXTRA_STREAM = "android.intent.extra.STREAM";
SteeringWheelListener.prototype.EXTRA_EMAIL = "android.intent.extra.EMAIL";
SteeringWheelListener.prototype.ACTION_CALL = "android.intent.action.CALL";
SteeringWheelListener.prototype.ACTION_SENDTO = "android.intent.action.SENDTO";
//  StartActivityForResult
SteeringWheelListener.prototype.ACTION_GET_CONTENT = "android.intent.action.GET_CONTENT";
SteeringWheelListener.prototype.ACTION_PICK = "android.intent.action.PICK";
SteeringWheelListener.prototype.RESULT_CANCELED = 0; //  Activity.RESULT_CANCELED
SteeringWheelListener.prototype.RESULT_OK = -1; //  Activity.RESULT_OK

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