let じゃんけん = 0
input.onGesture(Gesture.Shake, function () {
    じゃんけん = randint(1, 3)
    if (じゃんけん == 1) {
        basic.showLeds(`
            . . . . .
            # # # # .
            # # # # #
            # # # # .
            . # # # .
            `)
    } else if (じゃんけん == 2) {
        basic.showLeds(`
            . # . # .
            . # # . .
            # # # # .
            # # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # #
            # # # # .
            . # # # .
            `)
    }
})
basic.forever(function () {
	
})
