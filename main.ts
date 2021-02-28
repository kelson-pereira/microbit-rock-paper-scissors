input.onButtonPressed(Button.A, function () {
    play()
})
function end () {
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.OnceInBackground)
    basic.showNumber(points)
    basic.pause(3500)
    basic.clearScreen()
    start()
}
function play () {
    hand = randint(1, 3)
    music.playTone(440, music.beat(BeatFraction.Half))
    displays()
}
input.onButtonPressed(Button.AB, function () {
    end()
})
input.onButtonPressed(Button.B, function () {
    points = points + 1
    if (points == 10) {
        end()
    } else {
        music.playTone(523, music.beat(BeatFraction.Quarter))
        basic.showNumber(points)
        basic.pause(200)
        basic.clearScreen()
    }
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
function displays () {
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
let hand = 0
let points = 0
start()
