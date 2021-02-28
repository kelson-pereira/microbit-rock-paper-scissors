function finish () {
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.OnceInBackground)
    basic.showNumber(points)
    basic.clearScreen()
    start()
}
input.onButtonPressed(Button.A, function () {
    play()
})
function play () {
    music.playTone(440, music.beat(BeatFraction.Half))
    hand = randint(1, 3)
    show()
    basic.pause(2000)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    finish()
})
input.onButtonPressed(Button.B, function () {
    points = points + 1
    if (points == 10) {
        finish()
    } else {
        music.playTone(523, music.beat(BeatFraction.Quarter))
        basic.showNumber(points)
        basic.pause(200)
        basic.clearScreen()
    }
})
function show () {
    if (hand == 1) {
        // rock
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 2) {
        // paper
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        // scissors
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
}
function start () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
    points = 0
    basic.showString("PLAY")
    basic.showIcon(IconNames.Happy)
    music.playTone(880, music.beat(BeatFraction.Quarter))
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
let hand = 0
let points = 0
start()
