input.onGesture(Gesture.LogoUp, function () {
    if (true) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (true) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    if (true) {
        basic.showString("Up")
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    if (true) {
        basic.showString("Down")
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (true) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (true) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
