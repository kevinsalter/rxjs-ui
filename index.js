const videoPlayer = document.getElementById('coffee-video')
const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')

const addVisibleClass = () => {
    playButton.classList.add('visible')
    pauseButton.classList.add('visible')
}

const removeVisibleClass = () => {
    playButton.classList.remove('visible')
    pauseButton.classList.remove('visible')
}

videoPlayer.addEventListener('mouseenter', addVisibleClass)
videoPlayer.addEventListener('mouseleave', removeVisibleClass)

playButton.addEventListener('mousemove', addVisibleClass)
pauseButton.addEventListener('mousemove', addVisibleClass)

playButton.addEventListener('click', () => videoPlayer.play())
pauseButton.addEventListener('click', () => videoPlayer.pause())
