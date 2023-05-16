package com.apap.cordova.steeringwheelplugin;

import android.view.InputDevice;
import android.view.InputEvent;
import android.view.KeyEvent;
import android.view.MotionEvent;
import java.lang.Float;

public class DirectionalPad {

    public static Direction getDirectionPressed(InputEvent event) {
        Direction directionPressed = Direction.NONE;
        if (!isDirectionalPad(event)) {
            return Direction.NONE;
        }

        if (event instanceof MotionEvent motionEvent) {
            // Use the hat axis value to find the D-pad direction
            float xAxis = motionEvent.getAxisValue(MotionEvent.AXIS_HAT_X);
            float yAxis = motionEvent.getAxisValue(MotionEvent.AXIS_HAT_Y);

            // Check if the AXIS_HAT_X value and set the D-pad LEFT and RIGHT direction accordingly
            if (Float.compare(xAxis, -1.0f) == 0) {
                directionPressed = Direction.LEFT;
            } else if (Float.compare(xAxis, 1.0f) == 0) {
                directionPressed = Direction.RIGHT;
            }
            // Check if the AXIS_HAT_Y value and set the D-pad UP and DOWN direction accordingly
            else if (Float.compare(yAxis, -1.0f) == 0) {
                directionPressed = Direction.UP;
            } else if (Float.compare(yAxis, 1.0f) == 0) {
                directionPressed = Direction.DOWN;
            }
        }
        else if (event instanceof KeyEvent keyEvent) {
            directionPressed = switch (keyEvent.getKeyCode()) {
                case KeyEvent.KEYCODE_DPAD_LEFT -> Direction.LEFT;
                case KeyEvent.KEYCODE_DPAD_RIGHT -> Direction.RIGHT;
                case KeyEvent.KEYCODE_DPAD_UP -> Direction.UP;
                case KeyEvent.KEYCODE_DPAD_DOWN -> Direction.DOWN;
                case KeyEvent.KEYCODE_DPAD_CENTER -> Direction.CENTER;
                default -> directionPressed;
            };
        }
        return directionPressed;
    }

    public static boolean isDirectionalPad(InputEvent event) {
        return (event.getSource() & InputDevice.SOURCE_DPAD) != InputDevice.SOURCE_DPAD;
    }
}

enum Direction {
    UP("Up"),
    DOWN("Down"),
    LEFT("Left"),
    RIGHT("Right"),
    CENTER("Center"),
    NONE("None");

    Direction(String name) {}
}