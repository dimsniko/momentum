import {getTimeOfDay} from './greeting.js'

const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')

const getRandomNum = (min, max) => {
    min = 1
    max = 21
    return Math.floor(Math.random() * (max-min)) + min
}

let randomNum = getRandomNum()

const setBg = () => {    
    const timeOfDay = getTimeOfDay()
    const bgNum = String(randomNum).padStart(2, '0')
    const img = new Image()
    img.src = `https://raw.githubusercontent.com/dimsniko/momentum-images/master/images/${timeOfDay}/${bgNum}.webp`
    img.addEventListener('load', () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/dimsniko/momentum-images/master/images/${timeOfDay}/${bgNum}.webp')`
    })    
}

setBg()

const getSlideNext = () => {
    if (randomNum !=20) {
        randomNum = randomNum + 1
    } else randomNum = 1
    setBg()
}

const getSlidePrev = () => {
    if (randomNum > 1) {
        randomNum = randomNum - 1
    }else if (randomNum == 1) {
        randomNum = 20
    }
    setBg()
}

slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)