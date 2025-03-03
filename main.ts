radio.setGroup(1)
let M = 0
basic.forever(function () {
    basic.showNumber(M)
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(M + 3)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(M + 4)
    } else if (input.logoIsPressed()) {
        if (M == 0) {
            M = 2
        } else {
            M = 0
        }
    }
})
