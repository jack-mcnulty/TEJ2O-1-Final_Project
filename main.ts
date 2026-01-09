/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack
 * Created on: Jan 2026
 * This program makes a game with a stepper motor and a servo
*/

//setup
basic.clearScreen()
basic.showIcon(IconNames.Tortoise)

while (true) {
// spike wheel turning
robotbit.StepperDegree(robotbit.Steppers.M1, 1000)
// character jump
input.onButtonPressed(Button.A, function() {
    servos.P1.setAngle(90)
    basic.pause(450)
    servos.P1.setAngle(0)
})
}


            