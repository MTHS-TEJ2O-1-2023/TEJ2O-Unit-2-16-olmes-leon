/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Olmes
 * Created on: Dec 2023
 * This program
*/

// variables
let distanceToObject: number = 0

// setup {with Ihor in group 7}
radio.setGroup(7)
basic.showIcon(IconNames.Duck)

// on A button presed run code
input.onButtonPressed(Button.A, function () {
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )

  // if less or equal to 10cm away from the object
  if (distanceToObject <= 10) {
    radio.sendString('too close')
  } else {
    radio.sendString('test')
  }
}
)

// receiving
radio.onReceivedString(function (receivedString) {
  basic.clearScreen()
  basic.showString(receivedString)
  basic.showIcon(IconNames.Surprised)
})
