/**
 * RxJS video player controls
 */
const rxVideoPlayer = document.getElementById('rx-coffee-video')
const rxPlayButton = document.getElementById('rx-play')
const rxPauseButton = document.getElementById('rx-pause')

const showRxControls = () => {
    rxPlayButton.classList.add('visible')
    rxPauseButton.classList.add('visible')
}

const hideRxControls = () => {
    rxPlayButton.classList.remove('visible')
    rxPauseButton.classList.remove('visible')
}





/**
 * JS video player controls
 */
const jsVideoPlayer = document.getElementById('js-coffee-video')
const jsPlayButton = document.getElementById('js-play')
const jsPauseButton = document.getElementById('js-pause')

let userActivity = false

const showJsControls = () => {
    jsPlayButton.classList.add('visible')
    jsPauseButton.classList.add('visible')
}

const hideJsControls = () => {
    jsPlayButton.classList.remove('visible')
    jsPauseButton.classList.remove('visible')
}

const resetDelay = () => {
    clearTimeout(inactivityTimeout)
    const inactivityTimeout = setTimeout(function() {
        userActivity = false
    }, 2000)
}

// this code from http://blog.videojs.com/Hiding-and-Showing-Video-Player-Controls/
setInterval(function() {
    if (userActivity) resetDelay()
    userActivity ? showJsControls() : hideJsControls()
}, 250)

jsPlayButton.addEventListener('click', () => jsVideoPlayer.play())
jsPauseButton.addEventListener('click', () => jsVideoPlayer.pause())
jsVideoPlayer.addEventListener('mouseout', () => userActivity = false)

const jsVideoPlayerElements = [jsVideoPlayer, jsPlayButton, jsPauseButton]
jsVideoPlayerElements.forEach((el) =>
    el.addEventListener('mousemove', () => userActivity = true)
)
