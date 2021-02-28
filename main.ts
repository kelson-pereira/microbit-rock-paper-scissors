input.onButtonPressed(Button.A, function () {
    play()
})
function play () {
    hand = randint(1, 3)
    music.playTone(440, music.beat(BeatFraction.Half))
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
}
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.OnceInBackground)
    basic.showNumber(points)
    basic.pause(5000)
    basic.clearScreen()
    start()
})
input.onButtonPressed(Button.B, function () {
    points = points + 1
    music.playTone(523, music.beat(BeatFraction.Quarter))
    basic.showNumber(points)
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    play()
})
function start () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
    points = 0
    basic.showString("PLAY")
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
    basic.clearScreen()
}
let points = 0
let hand = 0
start()
