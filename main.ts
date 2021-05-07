input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
let punts = 0
basic.forever(function () {
    if (punts > 5) {
        basic.showIcon(IconNames.Heart)
    } else if (punts > 2) {
        basic.showIcon(IconNames.Ghost)
    } else {
    	
    }
})
