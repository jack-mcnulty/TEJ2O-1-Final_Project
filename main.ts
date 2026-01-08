/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack
 * Created on: Jan 2026
 * This program makes a game with a stepper motor and a servo
*/



input.onButtonPressed(Button.A, function() {
    servos.P0.setAngle(90)
    basic.pause(1500)
    servos.P0.setAngle(0)
})
            