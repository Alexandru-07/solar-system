function videoSystem() {
  const video = document.getElementById("my_video");

  video.loop = true;
  video.play();
  video.playbackRate = 0.7;
}

window.onload = videoSystem;

function gotoMain() {
  const headingM = document.querySelector(".heading");
  const footerM = document.querySelector(".footer");
  const list = [headingM, footerM];

  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "none";
  }

  document.querySelector(".loading").style.display = "block";

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 3000);
}
