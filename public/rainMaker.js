
// adapted from https://codesandbox.io/s/celfx
import rainAnimation from '/RainAnimation.js'


const container = document.getElementById('rain-animation'),
    props = [
        './props/empanada.png',
        './props/confetti_large_yellow.svg',
        './props/confetti_large_big_yellow.svg',
        './props/confetti_small_big_yellow.svg',
        './props/confetti_large_big_red.svg',
        './props/confetti_small_big_red.svg',
        './props/confetti_small_red.svg'
    ],
    options = {
        interval: 650,      // rain
        rotate: [-40, 10],
        size: [15, 25],
        duration: [40, 20],   // rain
        amount: [30, 40],   // mousemove
        totalItems: 30 // Zero is continuous rain
    }


var elemAnim = new rainAnimation(container, props, options)


    elemAnim.reset()
    elemAnim.rain();

