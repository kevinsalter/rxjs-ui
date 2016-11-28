const videoPlayer = document.getElementById('coffee-video')
const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')

playButton.addEventListener('click', () => videoPlayer.play())
pauseButton.addEventListener('click', () => videoPlayer.pause())
