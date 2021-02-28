let hand = 0
input.onButtonPressed(Button.A, function () {
    play()
})
function play () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    music.playTone(440, music.beat(BeatFraction.Half))
}
input.onGesture(Gesture.Shake, function () {
    play()
})
