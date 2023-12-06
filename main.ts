/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Olmes
 * Created on: Dec 2023
 * This program 
*/

let distansetoObject: number = 0

radio.setGroup(8)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  while (true) {
  distansetoObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
      if distansetoObject =< 10
  }
})

radio.onReceivedString(function (receivedString) {
  basic.clearScreen()
  basic.showString(receivedString)
  basic.showIcon(IconNames.Happy)
})

basic.showIcon(IconNames.Triangle)
radio.sendString("Test")
basic.showIcon(IconNames.Happy)