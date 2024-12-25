function videoSystem() {
  const video = document.getElementById("my_video");

  video.loop = true;
  video.play();
}

window.onload = videoSystem;
