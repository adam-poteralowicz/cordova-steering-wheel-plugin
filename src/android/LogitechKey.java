package com.apap.cordova.steeringwheelplugin;

public enum LogitechKey {
    SQUARE(188),
    CROSS(189),
    CIRCLE(190),
    TRIANGLE(191),
    L1(192),
    L2(194),
    L3(198),
    R1(193),
    R2(195),
    R3(199),
    SHARE(196),
    OPTION(197),
    PS(200);

    final int keyCode;

    LogitechKey(int keyCode) {
        this.keyCode = keyCode;
    }
}
