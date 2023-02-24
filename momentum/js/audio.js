import playList from "./playList.js"

const playStop = document.querySelector('.play')
const nextPlay = document.querySelector('.play-next')
const prevPlay = document.querySelector('.play-prev')

let isPlay = false
let playNum = 0

const audio = new Audio()




const playListContainer = document.querySelector('.play-list')

function addPlayTrack() {
    let nameTrack = '';
    for (let i = 0; i < playList.length; i++) {
        const li = document.createElement('li')
        nameTrack = playList[i].title
        li.textContent = nameTrack
        li.classList.add('play-item')
        playListContainer.append(li)
        console.log(li)
    }
}
addPlayTrack()

const allLi = document.querySelectorAll('.play-item')
const playTrackNow = Array.from(allLi)

function playAudio() {
    audio.src = playList[playNum].src
    console.log(playList[playNum].title)
    audio.currentTime = 0
    audio.play()
    isPlay = true
    for (let i = 0; i <= playTrackNow.length - 1; i++) {
        if (i == playNum) {
            playTrackNow[i].classList.add('item-active')
        } else {
            playTrackNow[i].classList.remove('item-active')
        }
    }    
    console.log(playNum)
    console.log(playTrackNow.length);
}

function pauseAudio() {
    audio.pause()
    isPlay = false
}

function audioPlay() {
    if (!isPlay) {
        playAudio()
    } else {
        pauseAudio()
    }
}

function toggleBtnPlay() {
    if (isPlay) {
        playStop.classList.add('pause')
    } else {
        playStop.classList.remove('pause')
    }
}

function playNext() {
    if (playNum < (playList.length - 1)) {
        playNum++
    } else {
        playNum = 0
    }
    playAudio()
    toggleBtnPlay()
}

function playPrev() {
    if (playNum > 0) {
        playNum--
    } else {
        playNum = (playList.length - 1)

    }
    playAudio()
    toggleBtnPlay()
}





audio.addEventListener('ended', playNext)

playStop.addEventListener('click', audioPlay)
playStop.addEventListener('click', toggleBtnPlay)
nextPlay.addEventListener('click', playNext)
prevPlay.addEventListener('click', playPrev)