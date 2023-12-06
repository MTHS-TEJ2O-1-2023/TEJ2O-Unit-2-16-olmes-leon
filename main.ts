/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Olmes
 * Created on: Dec 2023
 * This program 
*/

radio.setGroup(8)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Triangle)
  radio.sendString("Test")
  basic.showIcon(IconNames.Happy)
})

radio.onReceivedString(function (receivedString) {
  basic.clearScreen()
  basic.showString(receivedString)
  basic.showIcon(IconNames.Happy)
})