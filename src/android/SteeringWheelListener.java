package com.apap.cordova.steeringwheelplugin;

import android.app.Activity;
import android.util.Log;
import android.view.KeyEvent;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaActivity;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaResourceApi;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Arrays;
import java.util.Optional;
import java.util.Log;

public class SteeringWheelListener extends CordovaPlugin {

    private static final String LOG_TAG = "SteeringWheelListener";
    private Activity activity;

    private Integer lastKeyCode = -1;

    public SteeringWheelListener() {

    }

    @Override
    public void initialize(final CordovaInterface cordova, final CordovaWebView webView) {
        super.initialize(cordova, webView);

        activity = cordova.getActivity();
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Window window = activity.getWindow();
            }
        });
    }

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException
    {
        if (action.equals("onKeyDispatched")) {
            Integer keyCode;
            try {
                JSONObject options = args.getJSONObject(0);
                keyCode = options.getInteger("keyCode");
            } catch (JSONException e) {
                callbackContext.error("Error encountered: " + e.getMessage());
                return false;
            }

            onKeyDispatched(keyCode);
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
            callbackContext.sendPluginResult(pluginResult);
            return true;
        } else if (action.equals("onDirectionalPadClicked")) {
            String direction;
            MotionEvent event;
            try {
                JSONObject options = args.getJSONObject(0);
                event = options.getJSONObject(0);
                direction = DirectionalPad.getDirectionPressed(event);
            } catch (JSONException e) {
                callbackContext.error("Error encountered: " + e.getMessage());
                return false;
            }

            switch (direction) {
                case LEFT, RIGHT, UP, DOWN -> {
                    onDirectionalPadClicked(direction.name());
                    PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
                    callbackContext.sendPluginResult(pluginResult);
                    return true;
                }
            }
        }
    }

    public LogitechKey onKeyDispatched(Integer keyCode) {
        Optional<LogitechKey> optionalKey = getLogitechKeyFor(keyCode);
        optionalKey.ifPresent(logitechKey -> Log.d(LOG_TAG, "KeyEvent.ACTION_DOWN: " + logitechKey));
        Log.d(LOG_TAG, key + " button push registered");
        return key;
    }

    private Optional<LogitechKey> getLogitechKeyFor(Integer keyCode) {
        return Arrays.stream(LogitechKey.values()).filter(key -> key.keyCode == keyCode).findFirst();
    }

    public String onDirectionalPadClicked(String direction) {
        return direction;
    }
}