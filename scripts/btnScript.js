
var video = document.getElementById("backgroundVideo");


var btn = document.getElementById("playPauseBtn");


function playPause() {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = "Pause";
  } else {
    video.pause();
    playPauseBtn.innerHTML = "Play";
  }
}
