const videoPlayer = document.getElementById('coffee-video')
const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')

videoPlayer.addEventListener('mouseenter', () => {
    playButton.classList.add('visible')
    pauseButton.classList.add('visible')
})

videoPlayer.addEventListener('mouseleave', () => {
    playButton.classList.remove('visible')
    pauseButton.classList.remove('visible')
})

playButton.addEventListener('mousemove', () => {
    playButton.classList.add('visible')
    pauseButton.classList.add('visible')
})
pauseButton.addEventListener('mousemove', () => {
    playButton.classList.add('visible')
    pauseButton.classList.add('visible')
})

playButton.addEventListener('click', () => videoPlayer.play())
pauseButton.addEventListener('click', () => videoPlayer.pause())
